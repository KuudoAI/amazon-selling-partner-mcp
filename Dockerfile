# scripts/mcp-facades/static/Dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY src ./src
COPY tools.json ./tools.json
USER node
ENTRYPOINT ["node", "src/index.mjs"]
