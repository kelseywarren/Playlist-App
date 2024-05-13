let accessToken;
const clientId = 'b76671d1d5d84f47b7dd4a1a74ba9447';
const clientSecret = 'f07b5cf6a8c14225918b635353363a79';
const redirectURI = "http://localhost:3000";



fetch("https://accounts.spotify.com/api/token", {
  body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})

.then((response) => console.log(response.json()
.then((data) => { 
    console.log(data) 
    accessToken = data.access_token; 
    console.log(accessToken)
} 
)));


http://localhost:3000/

http://localhost:3000/
http://localhost:3000/
http://localhost:3000/http://localhost:3000/http://localhost:3000/#access_token=BQDOYsoav4RbTOi5Mgub7bx5S7Ll3XoDTaKovQFOeiy8e_kdADqpuOHq1orStfg2mNuZfoK3xkg7tNGKArKsS5hpP2hsoPogJAyyfPfXGq3uq4Tm2cZttNyD6dL6-3BeTbHzJLbnwUuEL2C4U6laISWMNvfeYIl1I9lXQZdo3RN0NxwelkZYAjhqLhbepKY2F0sE6qR5HEFzOsmZ38TsIaE_O9FqZi4&token_type=Bearer&expires_in=3600