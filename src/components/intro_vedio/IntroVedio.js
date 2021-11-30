import './IntroVedio.css'
import React from 'react'
import ReactPlayer from 'react-player';
import introVideo from '../../video/ReactApp.mkv'

const IntroVedio = () => {
    return (
        <div className='vedio_container'>
            <ReactPlayer
            url={introVideo}
            playing
            loop
            muted
            controls
           width='100%'
           height='60vh'
            
            />
            
        </div>
    )
}

export default IntroVedio


