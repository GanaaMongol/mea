module.exports = {
  apps: [{
    name: 'mea',
    script: 'server.js',
    cwd: '/var/www/mea/current',
    env_file: '/var/www/mea/shared/.env',
    env: { NODE_ENV: 'production', PORT: 3000, HOSTNAME: '127.0.0.1' },
    max_memory_restart: '600M',
    node_args: '--max-old-space-size=512',
  }]
}
