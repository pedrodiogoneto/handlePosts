import React, {FunctionComponent} from 'react';
import { Post } from '../constants/types';

interface Props {
	post: Post;
	key: number;
}

const ListCard: FunctionComponent<any> = (props: Props) => {
	const { post } = props;
	return (
		<div style={styles.wrapper}>
			<p style={styles.text}>{post.title}</p>
			<p style={styles.text}>{post.content}</p>
			<img style={styles.image} src={post.image_url}/>
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
		margin: '5%',
		padding: '10%',
		width: '100%',
	},
};
