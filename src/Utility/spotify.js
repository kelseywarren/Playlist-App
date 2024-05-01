let accessToken;
const clientId = 'b76671d1d5d84f47b7dd4a1a74ba9447';
const clientSecret = 'f07b5cf6a8c14225918b635353363a79';
const redirectURI = "http://localhost:3000";



   const Spotify = {

    getToken() {
      if(accessToken) {
        return accessToken;
      }

      const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
      const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
  
      
      if (tokenInURL && expiryTime) {
        accessToken = tokenInURL[1];
        const expiresIn = Number(expiryTime[1]);
  
     
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
       
        window.history.pushState("Access token", null, "/");
        return accessToken;
      }
  
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirect;
    },
   
    search(input) {
      accessToken = Spotify.getToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${input}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })
      .then((response) => response.json())
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
          }));
      });
    },


   };

  Spotify.getToken();


  export { Spotify };














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
