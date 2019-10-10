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
		<div style={styles.wrapper}>
			<img style={styles.image} src={post.image_url}/>
			<p style={styles.text}>{post.title}</p>
			{/* <p style={styles.text}>{post.content}</p> */}
			<div>
				<button style={{ width: '50%', border: '1px solid black' }} onClick={() => handleOnDelete(post.id)}>delete</button>
				<button style={{ width: '50%', border: '1px solid black' }} onClick={() => handleOnUpdate(post.id)}>update</button>
			</div>
		</div>
	);
};

export default ListCard;

const styles = {
	image: {
		width: '100%',
	},
	text: {
		fontSize: '12pt',
	},
	wrapper: {
		border: '1px solid black',
		margin: '2%',
		//padding: '5%',
		boxShadow: '0px 10px 7px -9px rgba(0,0,0,0.75)',

	},
};
