import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store/types';

interface Props {
	posts: [];
}

interface State {
	viewport: Viewport;
}

interface Viewport {
	width: number;
	height: number;
	latitude: number;
	longitude: number;
	zoom: number;
}

class Map extends Component<Props, State> {
	public state = {
		viewport: {
			width: 400,
			height: 400,
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 8,
		},
	};

	public renderMarkers = () => {
		if (!this.props.posts) return <Marker latitude={0} longitude={0}/>;
		return this.props.posts.map(post => {
			const { lat, long, title } = post;
			return (
				<Marker latitude={Number(lat)} longitude={Number(long)} offsetLeft={-20} offsetTop={-10}>
					<div>kljahsdflkjahs</div>
				</Marker>
			);
		});
	}

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
				onViewportChange={(viewport: Viewport) => this.setState({viewport})}
			>
				{ this.renderMarkers() }
			</ReactMapGL>
		);
	}
}

const mapDispatchToProps = {

};

const mapStateToProps = (state: StoreState) => ({
	Loading: state.Loading,
	posts: state.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
