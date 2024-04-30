let accessToken;
const clientId = 'b76671d1d5d84f47b7dd4a1a74ba9447';
const clientSecret = 'f07b5cf6a8c14225918b635353363a79';
const redirectURI = "http://localhost:8888/callback";



   const Spotify = {

    getToken() {
      // First check for the access token
      if (accessToken) {
        return accessToken;
      }

      const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
      const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
  
      // Second check for the access token
      if (tokenInURL && expiryTime) {
        // setting access token and expiry time variables
        accessToken = tokenInURL[1];
        const expiresIn = Number(expiryTime[1]);
  
        // Setting the access token to expire at the value for expiration time
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        // clearing the url after the access token expires
        window.history.pushState("Access token", null, "/");
        return accessToken;
      }
  
      // Third check for the access token if the first and second check are both false
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirect;
    },
   
    search(input) {
      const accessToken = Spotify.getToken();
      return fetch(`https://api.spotify.com/v1/search?q=${input}&type=track`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) =>  response.json())
      .then((data) => { 
          if (!data) {
            console.error("response error");
          } 
          return data.tracks.items.map((t) => ({
            id: t.id,
            name: t.name,
            artist: t.artists[0].name,
            album: t.album.name,
            uri: t.uri,
          }))
      });
    },
  
  };


  //Spotify.getToken();


  export { Spotify }














/* ---BASELINE-----
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
*/
