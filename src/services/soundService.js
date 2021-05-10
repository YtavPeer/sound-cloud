import { storageService } from './storageService.js';
const axios = require('axios');

const client_id = 'ggX0UomnLs0VmW7qZnCzw';
const KEY = 'HISTORY';
var songHistory = storageService.load(KEY) || [];

export const soundService = {
      loadSongs,
      getSongById,
      getStreamSongById,
      setTile,
      getOptions
}

//load song 
async function loadSongs(songName) {
      try {
            const response = await axios.get(`https://api.soundcloud.com/tracks?client_id=${client_id}&limit=50&q=${songName}&access=playable`);
            await _saveToStorage(songName)
            return response.data;
      } catch (error) {
            console.error('sound service: error while try to fetch song');
      }
}

//get song by id
async function getSongById(songId) {
      try {
            const response = await axios.get(`https://api.soundcloud.com/tracks/${songId}?client_id=${client_id}&limit=6&access=playable`);
            return response.data;
      } catch (error) {
            console.error('sound service: error while try to fetch song');
      }
}

//get stream src 
async function getStreamSongById(songId) {
      try {
            const response = await axios.get(`https://api.soundcloud.com/tracks/${songId}/streams?client_id=${client_id}&limit=6&access=playable`);
            return response.data;
      } catch (error) {
            console.error('sound service: error while try to fetch song');
      }
}

function setTile(isTiles) {
      storageService.store('DISPLAY', isTiles);
}

function getOptions(){
      return storageService.load('DISPLAY')
}

function _saveToStorage(songName) {
      songHistory.unshift(songName)
      storageService.store(KEY, songHistory)
}





