import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCuci2HtOfg-zTYEuSQ2GNbVvNUX-jaXMw",
            authDomain: "manager-c381b.firebaseapp.com",
            databaseURL: "https://manager-c381b.firebaseio.com",
            projectId: "manager-c381b",
            storageBucket: "manager-c381b.appspot.com",
            messagingSenderId: "72141493831"
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
