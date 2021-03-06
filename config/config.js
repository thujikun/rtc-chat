var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'hackathon'
    },
    port: 3000,
    db: 'mongodb://localhost/hackathon-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'hackathon'
    },
    port: 3000,
    db: 'mongodb://localhost/hackathon-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'hackathon'
    },
    port: 3000,
    db: 'mongodb://localhost/hackathon-production'
  }
};

module.exports = config[env];
