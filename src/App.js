import React from 'react'
import './App.css';
import ChannelIcon from './components/ChannelIcon/ChannelIcon';

function App() {
	var [channels, setChannels] = React.useState([]);
	const loadChannels = async () => {

		if (typeof Storage !== undefined) {

			const url = `https://iptv-org.github.io/iptv/channels.json`;

			
			fetch(url).then(response => 
					response.json().then(data => ({
						data: data,
						status: response.status
					})
				).then(res => {
					if(res.status === 200){
						setChannels(res.data);

					}else{

					alert(res.data);

					}

					//console.log(res.status, res.data);
					
				}));

		// 	const response =  fetch(url);
		// 	const responseJson =  (await response).body;
		// 	if (responseJson) {
		// 		setChannels(responseJson);
		// 		// var filteredChannels = responseJson.filter(channel => channel.logo != null);
		// 		// setChannels(filteredChannels);
				
		
		// 		// const url = 'https://localhost:5001/Cache/jscache/myHashKey/myFieldKey'

		// 		// fetch(url).then(response => 
		// 		// 	response.json().then(data => ({
		// 		// 		data: data,
		// 		// 		status: response.status
		// 		// 	})
		// 		// ).then(res => {
		// 		// 	console.log(res.status, res.data);
		// 		// }));

		// 		sessionStorage["channelStore"] = JSON.stringify(responseJson);

		// 	}

		} else {

			var channelStore = sessionStorage.getItem("channelStore");
			setChannels(channelStore);

		}



	};


	var [playing, startPlaying] = React.useState(false);
	var [url, setStreamUrl] = React.useState("");
	var [controls, showVideoControls] = React.useState(false);
	const [sticky, setSticky] = React.useState({ isSticky: false, offset: 0 });
	const headerRef = React.useRef(null);

	const loadUrl = (iptvUrl) => {

		setStreamUrl(iptvUrl);
		startPlaying(true);
		showVideoControls(true)
	};

	// handle scroll event
	const handleScroll = (elTopOffset, elHeight) => {
		if (window.pageYOffset > (elTopOffset + elHeight)) {
			setSticky({ isSticky: true, offset: elHeight });
		} else {
			setSticky({ isSticky: false, offset: 0 });
		}
	}

	// As of Chrome 66, videos must be muted in order to play automatically.
	const detectBrowser = () => {
		window.addEventListener("load", function () {
			// CHROME
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
				console.log("Google Chrome");
			}
			// FIREFOX
			else if (navigator.userAgent.indexOf("Firefox") !== -1) {
				console.log("Mozilla Firefox");
			}
			// INTERNET EXPLORER
			else if (navigator.userAgent.indexOf("MSIE") !== -1) {
				console.log("Internet Exploder");
			}
			// EDGE
			else if (navigator.userAgent.indexOf("Edge") !== -1) {
				console.log("Internet Exploder");
			}

		})


	};



	React.useEffect(() => {

		// fetch ip tv channels
		loadChannels();
		detectBrowser();

		// set sticky header
		var header = headerRef.current.getBoundingClientRect();
		const handleScrollEvent = () => {
			handleScroll(header.top, header.height)
		}

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	var playerConfig = {
		url: url,
		playing: playing,
		controls: controls

	};

	const onSelect = (category) => {
		console.log(category);
		var selectedChannelswithCatgegory = channels.filter(channel => channel.category === category);
		setChannels(selectedChannelswithCatgegory);
		//loadChannels();

	};

	return (
		<div className='movie-app' style={{ marginTop: sticky.offset }}>
			<select onChange={(e) => onSelect(e.target.value)}>
				<option>Select</option>
				<option value="Movies">Movies</option>
				<option value="XXX">Comedy</option>
			</select>
			<ChannelIcon channels={channels}

				playerConfig={playerConfig}
				sticky={sticky}
				headerRef={headerRef}
				loadUrl={loadUrl}
			/>

		</div>
	);
}

export default App;
