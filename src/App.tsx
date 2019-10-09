import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Main from './pages/Main';
import configureStore from './redux/store/index';

const App: React.FC = () => {
	return (
		<Provider store={configureStore()}>
			<Main />
		</Provider>
	);
};

export default App;
