import React, { FunctionComponent } from 'react';
import { Post } from '../constants/types';

interface Props {
	post: Post;
	key: number;
	handleOnDelete: (id: number) => void;
	handleOnUpdate: (id: number) => void;
}

const ListCard: FunctionComponent<any> = (props: Props) => {
	const { post, handleOnDelete, handleOnUpdate } = props;
	return (
		<div className="listCard__wrapper">
			<img className="listCard__image" src={post.image_url}/>
			<p className="listCard__text">{post.title}</p>
			{/* <p className="listCard__text">{post.content}</p> */}
			<div>
				<button className="listCard__button" onClick={() => handleOnDelete(post.id)}>delete</button>
				<button className="listCard__button"
					onClick={() => alert('FEATURE UNDER DEVELOPMENT')/* handleOnUpdate(post.id) */}>update</button>
			</div>
		</div>
	);
};

export default ListCard;
