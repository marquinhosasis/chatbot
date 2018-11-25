const axios = require('axios')
const accessToken = process.env.DIALOGFLOW_ACCESS_TOKEN
const baseURL = 'https://api.api.ai/v1/query?v=20150910'
module.exports = {
  send (message) {
    const data = {
      query: message,
      lang: 'pt-br',
      sessionId: '6248a573-bf32-6f3f-d169-825fc37d23f0'
    }
    return axios.post(baseURL, data, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  }
}