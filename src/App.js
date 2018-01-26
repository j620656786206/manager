import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyDGMCwF-2vxh9_jFMi-b4APKZvWF5pi_TQ",
			authDomain: "manager-7769e.firebaseapp.com",
			databaseURL: "https://manager-7769e.firebaseio.com",
			projectId: "manager-7769e",
			storageBucket: "",
			messagingSenderId: "221235630334"
		};

		firebase.initializeApp(config);
	}

  render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);      
  }
}

export default App;
