import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store/types';

interface Props {
	posts: [];
}

interface State {
	viewport: Viewport;
	posts: [];
}

interface Viewport {
	width: number | void;
	height: number | void;
	latitude: number;
	longitude: number;
	zoom: number;
}

const initialWidthViewport = () => window.innerWidth * 0.7;
const initialHeightViewport = () => window.innerHeight * 0.94;

class Map extends Component<Props, State> {
	public state = {
		viewport: {
			width: initialWidthViewport(),
			height: initialHeightViewport(),
			latitude: 40.41678,
			longitude: -3.70379,
			zoom: 4,
		},
		posts: this.props.posts,
	};

	componentDidUpdate(prevProps: Props, prevState: State) {
		if(prevProps.posts !== this.props.posts) {
			this.setState({
				posts: this.props.posts
			})
		}
	}

	public renderMarkers = () => {
		if (!this.state.posts) return <Marker latitude={0} longitude={0}/>;
		return this.state.posts.map((post) => {
			const { lat, long, title, id } = post;
			return (
				<Marker latitude={Number(lat)} longitude={Number(long)} offsetLeft={-20} offsetTop={-10}>
					<a>
						<i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
					</a>
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
