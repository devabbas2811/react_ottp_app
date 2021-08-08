import './style.css';
import React from 'react'
import ReactPlayer from 'react-player/lazy'

const ChannelIcon = (props) => {

    const DEFAULT_CHANNEL_IMG = 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/TF1_%282013%29.svg/1200px-TF1_%282013%29.svg.png';
    return (
        <>
            <div id="sticky-header" className={`navbar${props.sticky.isSticky ? ' sticky' : ''}`} ref={props.headerRef}>
                <ReactPlayer
                    className='react-player'
                    width='100%' 
                    height='100%'
                    url={props.playerConfig.url}
                    playing={props.playerConfig.playing}
                    controls={props.playerConfig.controls}
                    muted={true}
                   
                    
                />
            </div>
            
            <div className="banner">
                <div className="image"></div>
                <div className="gradient"></div>
                <div className="title">Live TV</div>
                <div className="mosaic">
                    {props.channels.map((channel, index) => (
                        <button key={index} className="icon" title={channel.name} value={channel.url} onClick={(e) => props.loadUrl(e.target.value)} style={{ backgroundImage: `url( ${channel.logo === null ? DEFAULT_CHANNEL_IMG : channel.logo})` }}  ></button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ChannelIcon;