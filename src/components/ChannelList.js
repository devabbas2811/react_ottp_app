import React from 'react';

const ChannelList = (props) => {
	return (
		<>
			{props.channels.map((channel, index) => (

<div className='image-container d-flex justify-content-start m-3'>
					<img src={channel.logo} height='200' width='200' className='img-thumbnail' alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default ChannelList;