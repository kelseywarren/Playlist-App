const clientId = 'b76671d1d5d84f47b7dd4a1a74ba9447';
const clientSecret = 'f07b5cf6a8c14225918b635353363a79';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const token = body.access_token;
  }
});

