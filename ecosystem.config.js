module.exports = {
  /**
   * @author Abhishar Jangir
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: 'REACTOR',
      script: 'index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        PORT: 9000
      }
    }
  ]
};
