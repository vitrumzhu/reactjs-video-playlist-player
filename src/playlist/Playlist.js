import React, { Fragment, useEffect } from 'react'
import screenfull from 'screenfull'
import PlaylistQueue from './PlaylistQueue'
import { QRCodeSVG } from 'qrcode.react';

const goToNextVideo = (params) => {
  if (params.playForward) {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0)
    } else {
      params.setCurrentVideo(params.currentVideo + 1)
    }
  } else {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1)
    } else {
      params.setCurrentVideo(params.currentVideo - 1)
    }
  }
}

const goToPreviousVideo = (params) => {
  if (params.playForward) {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1)
    } else {
      params.setCurrentVideo(params.currentVideo - 1)
    }
  } else {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0)
    } else {
      params.setCurrentVideo(params.currentVideo + 1)
    }
  }
}

const goFullScreen = (params) => {
  const videoContainer = document.getElementById("player")
  const videoPlayer = document.getElementById("videoplayer")
  if (screenfull.isEnabled) {
    // console.log('goFullScreen', params)
    // const video = params.vidRef.current
    screenfull.request(videoContainer);
    videoPlayer.muted = false;
  }
}

function Playlist({ playlistParams }) {
  const {
    videos,
    autoPlay,
    showQueue,
    playForward,
    defaultQueueItemPlaceholderThumbnail,
    currentVideo,
    setCurrentVideo,
    vidRef
  } = playlistParams

  useEffect(() => {
    setCurrentVideo(playForward ? 0 : videos.length - 1)
  }, [])

  useEffect(() => {
    if (videos.length > 0) {
      vidRef.current.onended = () => {
        if (autoPlay) {
          if (playForward) {
            if (currentVideo + 1 >= videos.length) {
              setCurrentVideo(0)
            } else {
              setCurrentVideo(currentVideo + 1)
            }
          } else {
            if (currentVideo - 1 < 0) {
              setCurrentVideo(videos.length - 1)
            } else {
              setCurrentVideo(currentVideo - 1)
            }
          }
        }
      }
    }
  }, [currentVideo])
  
  return (
    <Fragment>
      {videos.length > 0 && (
        <>
          <div className='video-container-styles' id='player'>
            <video
              id='videoplayer'
              className='video-styles'
              autoPlay={autoPlay}
              muted={autoPlay ? true : false}
              ref={vidRef}
              src={videos[currentVideo].url}
              controls={true}
              controlsList='nodownload nofullscreen noremoteplayback noplaybackrate foobar'
            ></video>
            <div className='video-QRCODE'>
              <QRCodeSVG 
                value={videos[currentVideo].qrcode}
                level={"H"}
                imageSettings={{
                  src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/df/a5/12/dfa5128a-8a21-c9e9-131b-b59ce1d04ecc/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
                  x: undefined,
                  y: undefined,
                  height: 32,
                  width: 32,
                  excavate: true,
                }}

              />
            </div>
          </div>
          {showQueue && (
            <PlaylistQueue
              vidRef={vidRef}
              videos={videos}
              currentVideo={currentVideo}
              changeCurrentVideo={setCurrentVideo}
              defaultQueueItemPlaceholderThumbnail={
                defaultQueueItemPlaceholderThumbnail
              }
            />
          )}
        </>
      )}
    </Fragment>
  )
}

export { Playlist, goToNextVideo, goToPreviousVideo, goFullScreen }
