#!/usr/bin/env node

const http = require('http');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/api/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok', message: 'fast-mock-proxy is running' }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    message: `Mock response for [${req.method}] ${req.url}`,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`🚀 fast-mock-proxy running on http://localhost:${PORT}`);
});
