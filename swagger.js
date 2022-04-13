// eslint-disable-next-line import/no-commonjs
module.exports = {
  // remoteUrl: 'https://docs.test.gifshow.com/merlot/v2/api-docs?group=is-docs&testUser=houmingjie',
  remoteUrl: 'http://127.0.0.1:7001/api/swagger-json',
  // remoteUrl: './api-docs.json',
  url: '/swagger.json',
  type: 'swagger',
  swaggerParser: {
    '-o': 'src/services2'
  },
  guardConfig: {
    mode: 'strict'
  }
}
