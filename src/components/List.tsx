import React, { FunctionComponent } from 'react';
import { connect, useSelector } from 'react-redux';
import { Post } from '../constants/types';
import { DELETE_POST } from '../redux/actions/actions';
import { StoreState } from '../redux/store/types';
import ListCard from './ListCard';

const List: FunctionComponent<any> = (props: any) => {

	const data = useSelector((state: any) => state);

	const renderPosts = () => data.posts.map((post: Post, i: number) =>  {
		return <ListCard key={i} post={post} handleOnDelete={(id: number) => props.DELETE_POST(id)}/>;
	});

	return (
		<div>
			{data ? renderPosts() : ''}
		</div>
	);
};

const mapDispatchToProps = {
	DELETE_POST,
};

const mapStateToProps = (state: StoreState) => ({
	Loading: state.Loading,
	posts: state.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
