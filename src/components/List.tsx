import React from 'react';
import { useSelector } from 'react-redux';

const List: React.FC = () => {

	const data = useSelector((state: any) => state);

	const renderPosts = () => data.posts.map((post: any, i: number) => <div key={i}>{post.title}</div>);

	return (
		<div>
			<h1>{data ? renderPosts() : ''}</h1>
		</div>
	);
};

export default List;
