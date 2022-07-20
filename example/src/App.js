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
    // {
    //   thumbnail: 'https://via.placeholder.com/400/BB00DD/FFFFFF',
    //   url: 'video/3104_EDIT_DUO_v05-PR422_Subtitled_chs.mp4',
    //   imgAlt: 'alt img 5',
    //   qrcode: 'https://specialized.com.cn/'
    // },
    {
      thumbnail: 'https://via.placeholder.com/100/00ffDD/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/082f0246387702303544452152/AkkRbiYFUToA.mp4',
      imgAlt: 'Aethos',
      qrcode: 'https://specialized.com.cn/products/s-works-aethos-dura-ace-di2-187062?_pos=3&_sid=97a766715&_ss=r&variant=41383308067009'
    },
    {
      thumbnail: 'https://via.placeholder.com/200/FFA500/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0f63c630387702303544780734/qd6ikuq1nGEA.mp4',
      imgAlt: 'EVADE',
      qrcode: 'https://specialized.com.cn/collections/helmets/products/s-works-evade-3-220799?variant=41720299389121'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/FF00DD/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/11980bf5387702303544866806/k4lRyJxX3t0A.mp4',
      imgAlt: 'AllezSprint',
      qrcode: 'https://specialized.com.cn/products/allez-sprint-frameset-189820?_pos=6&_sid=ba1971049&_ss=r&variant=41427865108673'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/DD2200/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0ed40de4387702303544702413/YWdQYgItdNAA.mp4',
      imgAlt: 'PREVAIL',
      qrcode: 'https://specialized.com.cn/products/s-works-prevail-3-220798?_pos=10&_sid=fdb24d6a8&_ss=r'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/CC4488/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0d23789d387702303544695868/Eizohr7ws9cA.mp4',
      imgAlt: 'CSRoadHelmets Luiz',
      qrcode: 'https://specialized.com.cn/pages/prevail-3-evade-3-tt5'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/337700/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0ca2020b387702303544620538/GithJlm24WwA.mp4',
      imgAlt: 'SWorksTorch Film',
      qrcode: 'https://specialized.com.cn/search?type=product&q=torch'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/FF44FF/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0c94c810387702303544619148/m953okicpK8A.mp4',
      imgAlt: 'Specialized Roval Tubeless',
      qrcode: 'https://specialized.com.cn/search?type=product&q=roval'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/661199/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0ca4af2e387702303544625158/5alSijsToMMA.mp4',
      imgAlt: 'Specialized Roval NewtonsLaws',
      qrcode: 'https://specialized.com.cn/search?type=product&q=roval'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/3344DD/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0c932faa387702303544616442/jZovyBK5bgIA.mp4',
      imgAlt: 'Specialized Roval Aero',
      qrcode: 'https://specialized.com.cn/search?type=product&q=roval'
    },
    {
      thumbnail: 'https://via.placeholder.com/300/CCBB00/FFFFFF',
      url: 'https://1257932275.vod2.myqcloud.com/dc78c8cdvodcq1257932275/0868abd9387702303544488693/YpIGPCrzMcoA.mp4',
      imgAlt: 'Made in Racing Roval',
      qrcode: 'https://specialized.com.cn/search?type=product&q=roval'
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
