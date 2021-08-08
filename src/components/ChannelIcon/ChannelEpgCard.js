import React from 'react';
import './style.css';

const ChannelEpgcard = (props) => {
    return (
        <>

<h1>Channel EPG card</h1>

<div className="channel-card">
  <div className="name">TF1</div>
  <div className="channel-count">1/156</div>
  <div className="program-image"></div>
  <div className="progress-bar">
    <div className="progress"></div>
  </div>
  <div className="progress-insight">Started 45 minutes ago, 15 minutes left...</div>
  <div className="title">Les Feux de l'Amour (S54/E45)</div>
  <div className="notation">
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star star-disabled"></div>
    <div className="star star-disabled"></div>
    <div className="watching-insight">
      54,325 are watching
    </div>
  </div>
  <div className="resume">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptatibus! Temporibus, accusamus repellendus, error commodi asperiores corporis architecto, ad dicta ducimus officia suscipit ipsam tempora laudantium quibusdam consectetur distinctio necessitatibus.</div>
  <div className="next">Followed by <span>Le journal de 20h</span> at 8pm</div>
</div>






        </>
    );
};

export default ChannelEpgcard;