
console.log ("conectado")



import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframes = document.querySelector('#vimeo-player');
const plays = new Player(iframes)
console.log(plays);

const Play = ({seconds})=>{
    localStorage.setItem('videoplayer-current-time', seconds);
}
if(localStorage.getItem('videoplayer-current-time')){
    plays.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}
plays.on('timeupdate',throttle(Play, 1000));

/* <script>
      
      const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
  
      player.on('play', function() {
          console.log('played the video!');
      });
  
      player.getVideoTitle().then(function(title) {
          console.log('title:', title);
      });
  
    </script> */
    /* var throttle = require('lodash.throttle');
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    
    player.on('play', function() {
        console.log('played the video!');
        player.getCurrentTime().then(function(seconds) {
            console.log('SEGUNDOS:', seconds);
            
            localStorage.setItem('videoplayer-current-time', seconds)
        });
    });
    if(localStorage.getItem('videoplayer-current-time')){
        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    }
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.getCurrentTime().then(function(seconds) {
        console.log('SEGUNDOS:', seconds);
    });
    /* localStorage.setItem('videoplayer-current-time', seconds) */

   /* player.on('timeupdate',throttle(seconds, 1000)) */
 
  

  
    /* player.currentTime('time', function() {
        console.log('played the video!');
    });
    let videoplayeTime =player.currentTime
console.log(videoplayeTime)
 */

/*  const videoplayer= currentTime
    console.log(videoplayer) */