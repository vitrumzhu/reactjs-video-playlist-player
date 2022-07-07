import React, { Fragment, useEffect } from 'react'
import screenfull from 'screenfull'
import PlaylistQueue from './PlaylistQueue'

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
  if (screenfull.isEnabled) {
    // console.log('goFullScreen', params)
    // const video = params.vidRef.current
    screenfull.request(videoContainer);
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
              className='video-styles'
              autoPlay={autoPlay}
              muted={autoPlay ? true : false}
              ref={vidRef}
              src={videos[currentVideo].url}
              controls={true}
              controlsList='nodownload'
            ></video>
            <div className='video-QRCODE'>{videos[currentVideo].qrcode}</div>
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
