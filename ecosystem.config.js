module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
      {
        name: 'website',
        script: './index.js',
        env: {
          COMMON_VARIABLE: "true"
        },
        env_production: {
          NODE_ENV: 'production'
        },
      }
    ],
    deploy: {
      production: {
        user: "root",
        host: ["120.78.212.232"],
        port: 22,
        ref: "origin/master",
        repo: "git@github.com:Hyg900928/website.git",
        path: "/root/workspace/www/website/production",
        ssh_options: "StrictHostKeyChecking=no",
        "post-deploy": 'cnpm install && npm run server --env production',
        env: {                                               
          NODE_ENV: 'production'
        }
  
      }
    }
  }
  