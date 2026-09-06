#!/usr/bin/env node
// scripts/mcp-facades/static/src/index.mjs
// Catalog-only MCP stub. Lists the real tool catalog of a Kuudo MCP server and
// refuses every call, because execution happens in your own Kuudo deployment.
// It also serves that catalog as one resource and offers one prompt with the
// connect guidance. No network access, no credentials. See README.md.
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = process.env.KUUDO_FACADE_TOOLS || path.join(here, "..", "tools.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));

const CATALOG_URI = "kuudo://catalog/tools.json";
const CONNECT_PROMPT = "connect";

const guidance = (subject) => [
  `${subject} runs in your Kuudo deployment, not in this repository.`,
  `Connect your client to your deployment at ${catalog.connectUrl} with your Kuudo API key.`,
  `Setup and the full tool surface: ${catalog.featureUrl}`,
].join(" ");

const server = new Server(
  { name: catalog.registryName, version: catalog.version },
  { capabilities: { tools: {}, resources: {}, prompts: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: catalog.tools.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => ({
  isError: true,
  content: [{ type: "text", text: guidance(`${request.params.name} is a catalog entry. It`) }],
}));

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{
    uri: CATALOG_URI,
    name: "Tool catalog",
    description: `The ${catalog.toolCount}-tool catalog this stub serves, as JSON.`,
    mimeType: "application/json",
  }],
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  if (request.params.uri !== CATALOG_URI) throw new McpError(ErrorCode.InvalidParams, `Unknown resource: ${request.params.uri}`);
  return { contents: [{ uri: CATALOG_URI, mimeType: "application/json", text: JSON.stringify(catalog, null, 2) }] };
});

server.setRequestHandler(ListPromptsRequestSchema, async () => ({
  prompts: [{
    name: CONNECT_PROMPT,
    description: "How to connect a client to your Kuudo deployment of this server.",
    arguments: [],
  }],
}));

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name !== CONNECT_PROMPT) throw new McpError(ErrorCode.InvalidParams, `Unknown prompt: ${request.params.name}`);
  return {
    description: "Connect guidance for this catalog-only stub.",
    messages: [{ role: "user", content: { type: "text", text: guidance("The live server described by this catalog") } }],
  };
});

await server.connect(new StdioServerTransport());
