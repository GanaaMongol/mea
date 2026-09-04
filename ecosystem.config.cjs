const fs = require('fs')

const envVars = {}
fs.readFileSync('/var/www/mea/shared/.env', 'utf8').split('\n').forEach((line) => {
  const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/)
  if (m) envVars[m[1]] = m[2].replace(/^["']|["']$/g, '')
})

module.exports = {
  apps: [{
    name: 'mea',
    script: 'server.js',
    cwd: '/var/www/mea/current',
    env: { ...envVars, NODE_ENV: 'production', PORT: 3000, HOSTNAME: '127.0.0.1' },
    max_memory_restart: '600M',
    node_args: '--max-old-space-size=512',
  }]
}
