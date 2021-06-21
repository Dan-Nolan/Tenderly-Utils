const { accountId, projectSlug, forkId, apiKey } = require('./config');
const axios = require('axios');
const apiUrl = "https://api.tenderly.co/api/v1";

module.exports = axios.create({
  baseURL: apiUrl,
  headers: { 'X-Access-Key': apiKey }
});
