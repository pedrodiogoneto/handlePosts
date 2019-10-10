import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class Map extends Component {

  public state = {
	viewport: {
		width: 400,
		height: 400,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
	},
  };

  public render() {

		const { viewport } = this.state;
		const MAPBOX_TOKEN = 'pk.eyJ1IjoicGVkcm9kaW9nb25ldG8iLCJhIjoiY2p3ZGJwbTh5MDFjbDRhbzQ1cHl1b3U5NCJ9.BGK2mlWw6nKd_Iind0kmJg';

	 return (
		<ReactMapGL
			width={viewport.width}
			height={viewport.height}
			latitude={viewport.latitude}
			longitude={viewport.longitude}
			zoom={viewport.zoom}
			mapboxApiAccessToken={MAPBOX_TOKEN}
			onViewportChange={(viewport) => this.setState({viewport})}
		>
			<Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
				<div>You are here</div>
			</Marker>
		</ReactMapGL>
	);
  }
}

export default Map;
