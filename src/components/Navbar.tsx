import React, { FunctionComponent } from 'react';

interface NavbarProps {
	handleOnClickAdd: (arg: boolean) => void;
}

const Navbar: FunctionComponent<any> = (props: NavbarProps) => {
	return (
		<div className="navbar__wrapper">
			<h3>POSTS</h3>
			<button className="navbar__button" onClick={() => props.handleOnClickAdd(true)}>Add</button>
		</div>
	);
};

export default Navbar;
