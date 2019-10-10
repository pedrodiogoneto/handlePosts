import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Map from '../components/Map'
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
		<div>
			{showModal && <NewPostModal handleShowModal={handleShowModal} showModal={showModal}/>}
			<Navbar handleOnClickAdd={handleShowModal}/>
			<div style={{ width: '30%' }}>
				<List />
			</div>
			<div id="map">
				<Map />
			</div>
		</div>
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
