import React, { createRef, useState } from 'react'
import videoPlaceHolder from './images/video-placeholder.jpg'
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo,
  goFullScreen,
} from 'reactjs-video-playlist-player'
import './css/globals.css'
import './css/playlist.css'
import Buttons from './buttons/Buttons'

function App() {
  const [list, setList] = useState([
    {
      thumbnail: 'https://via.placeholder.com/200/FFA500/FFFFFF',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      imgAlt: 'alt img 1'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/FF0000/FFFFFF',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      imgAlt: 'alt img 2'
    },
    {
      thumbnail: 'https://via.placeholder.com/400/BB00DD/FFFFFF',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      imgAlt: 'alt img 5'
    }
  ])

  const [currentVideo, setCurrentVideo] = useState(0)
  const vidRef = createRef(null)

  const params = {
    videos: list,
    autoPlay: true,
    fullScreen: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
  }

  return (
    <div className='App'>
      <h3 id='title'>
        <span>map</span> Video Player 🎥
      </h3>
      <div>
        <Playlist playlistParams={params} />
        <Buttons
          goToNextVideo={goToNextVideo}
          goToPreviousVideo={goToPreviousVideo}
          goFullScreen={goFullScreen}
          params={params}
        />
      </div>
    </div>
  )
}

export default App
