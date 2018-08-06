var playlist = {
  nirvana: "Come As You Are"
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[key]: song});
}

function 