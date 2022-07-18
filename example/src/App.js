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
  // eslint-disable-next-line
  const [list, setList] = useState([
    {
      thumbnail: 'https://via.placeholder.com/400/BB00DD/FFFFFF',
      url: '/video/3104_EDIT_DUO_v05-PR422_Subtitled_chs.mp4',
      imgAlt: 'alt img 5',
      qrcode: 'https://specialized.com.cn/'
    },
    {
      thumbnail: 'https://via.placeholder.com/100/00ffDD/FFFFFF',
      url: '/video/Aethos Simply for the pure love of riding.mp4',
      imgAlt: 'Aethos',
      qrcode: 'https://specialized.com.cn/products/s-works-aethos-dura-ace-di2-187062?_pos=3&_sid=97a766715&_ss=r&variant=41383308067009'
    },
    {
      thumbnail: 'https://via.placeholder.com/200/FFA500/FFFFFF',
      url: '/video/3104_EDIT_EVADE_v09-PR422_Subtitled_chs.mp4',
      imgAlt: 'EVADE',
      qrcode: 'https://specialized.com.cn/collections/helmets/products/s-works-evade-3-220799?variant=41720299389121'
    },
    // {
    //   thumbnail: 'https://via.placeholder.com/300/FF00DD/FFFFFF',
    //   url: '/video/AllezSprint_teaser2_16x9_final.mp4',
    //   imgAlt: 'AllezSprint',
    //   qrcode: 'https://specialized.com.cn/products/allez-sprint-frameset-189820?_pos=6&_sid=ba1971049&_ss=r&variant=41427865108673'
    // },
    {
      thumbnail: 'https://via.placeholder.com/300/CCBB00/FFFFFF',
      url: '/video/3104_EDIT_PREVAIL_v09-PR422_Subtitled_chs2.mp4',
      imgAlt: 'PREVAIL',
      qrcode: 'https://specialized.com.cn/products/s-works-prevail-3-220798?_pos=10&_sid=fdb24d6a8&_ss=r'
    },
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
