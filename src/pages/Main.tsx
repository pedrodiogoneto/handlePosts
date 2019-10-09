import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { LIST_POSTS } from '../redux/actions/actions';
import { StoreState } from '../redux/store/types';

const Main: React.FC = (props: any) => {
	console.log(props);
	useEffect(() => { 
		props.LIST_POSTS();
	}, []);

	return (
		<div>
			<List />
			<h1>lkjashdfklashdf</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)