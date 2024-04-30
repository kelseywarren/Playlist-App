let accessToken;
let input = "saturn";
const clientId = 'b76671d1d5d84f47b7dd4a1a74ba9447';
const clientSecret = 'f07b5cf6a8c14225918b635353363a79';



   const Spotify = {

   
      getToken() {
        if (accessToken) {
          return accessToken;
        }

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
            accessToken = `${data.access_token}`; 
            console.log(accessToken)
            Spotify.search(input, accessToken)
        } 
        )));
      
    },

    search() {
      fetch(`https://api.spotify.com/v1/search?q=${input}&type=track`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => console.log(response.json()
      .then((data) => { 
          console.log(data.tracks)  
        
      } 
      )));
    },
  
   }
    
   Spotify.getToken();





//export { Spotify }













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
