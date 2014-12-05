var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    user: 'root',
    password: 'root',
    host: '127.0.0.1',
    database: 'express_development',
    app: {
      name: 'expressapp'
    },
    port: 3000, 
    db: 'mysql://root:root@127.0.0.1/express_development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: 3000,
    db: 'mysql://localhost/expressapp-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: 3000,
    db: 'mysql://localhost/expressapp-production'
    
  }
};

module.exports = config[env];
