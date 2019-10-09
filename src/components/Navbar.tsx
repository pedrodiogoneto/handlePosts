import React, { FunctionComponent } from 'react';

interface NavbarProps {
    handleOnClickAdd: (arg: boolean) => void;
}

const Navbar: FunctionComponent<any> = (props: NavbarProps) => {
	return (
		<div style={styles.wrapper}>
			<h3>POSTS</h3>
			<button onClick={() => props.handleOnClickAdd(true)}>Add</button>
		</div>
	);
};

export default Navbar;

const styles = {
	wrapper: {
		borderBottom: '1px solid black',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '0 2%',
	},
};
