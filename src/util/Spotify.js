var accessToken;
const clientID="8ca14bc80f9a4aa3ae49cb965b6b4687";
const redirectURI="https://localhost:3000/"

function Spotify(){
  function getAccessToken(){
    if (accessToken) {
      return accessToken
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const expirationTime = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && expirationTime){
      accessToken = urlAccessToken[1];
      const expiresIn = Number(expirationTime[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirect;
    }
  };

  // function search(term){
  //   const accessToken = getAccessToken();
  //   return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then((jsonResponse) => {
  //     if (!jsonResponse.tracks){
  //       return [];
  //     }
  //     return jsonResponse.tracks.items.map(tracks => ({
  //       id: tracks.id,
  //       name: tracks.name,
  //       artist: tracks.artists[0].name,
  //       album: tracks.album
  //     }))
  //   })
  // }
}

export default Spotify;
