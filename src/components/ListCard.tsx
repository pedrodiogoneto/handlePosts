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
			<p>{post.title}</p>
			<p>{post.content}</p>
			<img src={post.image_url}/>
		</div>
	);
};

export default ListCard;

const styles = {
	wrapper: {
		border: '1px solid black',
		margin: '5%',
		padding: '10%',
		width: '100%',
	}
}