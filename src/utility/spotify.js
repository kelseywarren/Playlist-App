let accessToken;
const clientId = 'aa1d6b70abf242929c237736c279a762';
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
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${input}&limit=50`, {
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
            img: t.album.images[0].url,
            preview_url: t.preview_url

           /*tracks.items comes from api data in json --- name: artist: img: etc, come from props from the Track component*/
            
          }));
      });
    },
    
    savePlaylist(name, trackUris) {
      if (!name || !trackUris) return;
      const accessToken = Spotify.getToken();
      const header = { Authorization: `Bearer ${accessToken}` };
      let userId;
      return fetch(`https://api.spotify.com/v1/me`, { headers: header })
        .then((response) => response.json())
        .then((data) => {
          userId = data.id;
          let playlistId;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: header,
            method: "post",
            body: JSON.stringify({ name: name }),
          })
            .then((response) => response.json())
            .then((data) => {
              playlistId = data.id;
              return fetch(
                `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                  headers: header,
                  method: "post",
                  body: JSON.stringify({ uris: trackUris }),
                }
              );
            });
        }); 
    },
    
    userProfile() {
      const accessToken = Spotify.getToken();
      const header = { Authorization: `Bearer ${accessToken}` };
      return fetch(
        "https://api.spotify.com/v1/me",  {
          headers: header,
          method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
          //console.log(data)
          //console.log(data.display_name)
          //console.log(data.images)
          //console.log(data.external_urls.spotify)
          return data;
          
  
        });
    },
    /*
    userPlaylists() {
      const accessToken = Spotify.getToken();
      const header = { Authorization: `Bearer ${accessToken}` };
      return fetch("https://api.spotify.com/v1/me/playlists?offset=0", {
        headers: header,
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          return data.items.map((p) => ({
            playlistName: p.name,
            trackCount: p.tracks.total,
            image: p.images[0].url,//next to fix null property
          }));
        });
          
    },
    */
  };


  export { Spotify };





