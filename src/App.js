import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDGMCwF-2vxh9_jFMi-b4APKZvWF5pi_TQ',
			authDomain: 'manager-7769e.firebaseapp.com',
			databaseURL: 'https://manager-7769e.firebaseio.com',
			projectId: 'manager-7769e',
			storageBucket: '',
			messagingSenderId: '221235630334'
		};

		firebase.initializeApp(config);
	}

  render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);      
  }
}

export default App;
