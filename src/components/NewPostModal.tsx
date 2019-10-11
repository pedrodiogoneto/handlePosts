import React, { FunctionComponent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PostData } from '../constants/types';
import { ADD_POST } from '../redux/actions/actions';
import { StoreState } from '../redux/store/types';

interface Props {
	handleShowModal: (arg: boolean) => void;
	showModal: boolean;
	ADD_POST: (data: PostData) => void;
}

const NewPostModal: FunctionComponent<Props> = ({ showModal, handleShowModal, ADD_POST }: Props) => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [lat, setLat] = useState('');
	const [long, setLong] = useState('');

	const renderInputField = (value: string, func: (value: string) => void, placeholder: string) => {
		return (
			<React.Fragment>
				<p className="modal__label">{placeholder}</p>
				<input
					value={value}
					onChange={(e) => func(e.target.value)}
					placeholder={placeholder}
					className="modal__input"
				/>
			</React.Fragment>
		);
	};

	const handleOnSubmit = () => {
		const data = { content, image_url: imageUrl, lat, long, title };
		ADD_POST(data);
		handleShowModal(false);
	};

	return (
		<Modal show={showModal}>
			<Modal.Header>
				<Modal.Title>Submit a new Post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{renderInputField(title, setTitle, 'Title' )}
				{renderInputField(content, setContent, 'Content' )}
				{renderInputField(lat, setLat, 'Latitude' )}
				{renderInputField(long, setLong, 'Longitude' )}
				{renderInputField(imageUrl, setImageUrl, 'Image URL' )}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={() => handleOnSubmit()}>Submit</button>
				<button onClick={() => handleShowModal(false)}>Close</button>
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
