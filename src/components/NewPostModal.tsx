import React, { FunctionComponent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store/types';
import { ADD_POST } from '../redux/actions/actions';
import { PostData } from '../constants/types';

interface Props {
	handleShowModal: (arg: boolean) => void,
	showModal: boolean,
	ADD_POST: (data: PostData) => void,
}

const NewPostModal: FunctionComponent<Props> = ({ showModal, handleShowModal, ADD_POST }: Props) => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [lat, setLat] = useState('');
	const [long, setLong] = useState('');

	const renderInputField = (value: string, func: (value: string) => void, placeholder: string) => {
		return <input value={value} onChange={(e) => func(e.target.value)} placeholder={placeholder}/>
	}

	const handleOnSubmit = () => {
		const data = {
			content,
			image_url: imageUrl,
			lat,
			long,
			title,
		}

		ADD_POST(data)
		handleShowModal(false)
	}

	return (
		<Modal show={showModal}>
			<Modal.Header>
			<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{renderInputField(title, setTitle, 'title' )}
				{renderInputField(content, setContent, 'content' )}
				{renderInputField(lat, setLat, 'lat' )}
				{renderInputField(long, setLong, 'long' )}
				{renderInputField(imageUrl, setImageUrl, 'imageUrl' )}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={() => handleOnSubmit()}>
					Submit
				</button>
				<button onClick={() => handleShowModal(false)}>
					Close
				</button>
			</Modal.Footer>
		</Modal>
	);
};

const mapDispatchToProps = {
	ADD_POST,
};

const mapStateToProps = (state: StoreState) => ({
	Loading: state.Loading,
	posts: state.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPostModal);


