#!/usr/bin/env node
// scripts/mcp-facades/static/src/index.mjs
// Catalog-only MCP stub. Lists the real tool catalog of a Kuudo MCP server and
// refuses every call, because execution happens in your own Kuudo deployment.
// No network access, no credentials. See README.md in this repository.
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = process.env.KUUDO_FACADE_TOOLS || path.join(here, "..", "tools.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));

const server = new Server(
  { name: catalog.registryName, version: catalog.version },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: catalog.tools.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => ({
  isError: true,
  content: [{
    type: "text",
    text: [
      `${request.params.name} is a catalog entry. It runs in your Kuudo deployment, not in this repository.`,
      `Connect your client to your deployment at ${catalog.connectUrl} with your Kuudo API key.`,
      `Setup and the full tool surface: ${catalog.featureUrl}`,
    ].join(" "),
  }],
}));

await server.connect(new StdioServerTransport());
