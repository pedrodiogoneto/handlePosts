import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import NewPostModal from '../components/NewPostModal';
import { LIST_POSTS } from '../redux/actions/actions';
import { StoreState } from '../redux/store/types';

const Main: FunctionComponent<any> = (props: any) => {
	const [showModal, setShowModal] = useState(false);

	console.log(props);

	useEffect(() => {
		props.LIST_POSTS();
	}, []);

	const handleShowModal = (parameter: boolean) => setShowModal(parameter);

	return (
		<React.Fragment>
			{showModal && <NewPostModal handleShowModal={handleShowModal} showModal={showModal}/>}
			<Navbar handleOnClickAdd={handleShowModal}/>
			<div style={{ display: 'flex' }}>
				<div style={{ width: '30%', borderRight: '2px solid black', overflow: 'scroll', height: '94vh' }}>
					<List />
				</div>
				<div id="map" style={{ overflow: 'hidden', position: 'absolute', left: '30%', maxHeight: '94vh' }}>
					<Map />
				</div>
			</div>
		</React.Fragment>
	);
};

const mapDispatchToProps = {
	LIST_POSTS,
};

const mapStateToProps = (state: StoreState) => ({
	Loading: state.Loading,
	posts: state.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
