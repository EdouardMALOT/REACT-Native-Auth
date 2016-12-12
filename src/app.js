import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { LoggedIn: false }

  componentWillMount() {
    // Initialize Firebase
      Firebase.initializeApp({
        apiKey: 'AIzaSyCDDsCzc1JJLnwjByt8tu4phDrR2dOM5y4',
        authDomain: 'authreactnative-c6d29.firebaseapp.com',
        databaseURL: 'https://authreactnative-c6d29.firebaseio.com',
        storageBucket: 'authreactnative-c6d29.appspot.com',
        messagingSenderId: '958248288742'
      });

      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ LoggedIn: true });
        } else {
          this.setState({ LoggedIn: false });
        }
      });
  }


  renderContent() {
    if (this.state.LoggedIn) {
        return (<Button> Log out ! </Button>);
     }

    return (<LoginForm />);
  }

  render() {
      return (
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
