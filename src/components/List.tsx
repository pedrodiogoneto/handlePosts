import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../constants/types';
import ListCard from './ListCard';

const List: React.FC = () => {

	const data = useSelector((state: any) => state);

	const renderPosts = () => data.posts.map((post: Post, i: number) =>  <ListCard key={i} post={post} />);

	return ( 
		<div>
			<h1>{data ? renderPosts() : ''}</h1>
		</div>
	);
};

export default List;
