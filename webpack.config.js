/**
 * Since another environment is not created we use only dev config.
 */
const environment = 'development'

/**
 * But I'd rather to keep the logic ;)
 */
if (environment === 'development') {
  module.exports = require('./config/webpack.config.dev');
} else {
  module.exports = require('./config/webpack.config.prod');
}
