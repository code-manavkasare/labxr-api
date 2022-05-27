module.exports = {
  apps: [
    {
      script: "./src/index.ts",
      watch: ".",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        MYSQL_USERNAME: "root",
        MYSQL_PASS: "test@123",
        JWT_SECRET: "labxr",
      },
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
