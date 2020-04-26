module.exports = {
  apps : [{
    name: 'ng-ssr',
    script: './dist/ng-ssr/server/main.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'local'
    },
    env_dev: {
      NODE_ENV: 'dev'
    },
    env_local: {
      NODE_ENV: 'local'
    },
    env_production: {
      NODE_ENV: 'prod'
    },
    env_qa: {
      NODE_ENV: 'qa'
    }
  }]
};
