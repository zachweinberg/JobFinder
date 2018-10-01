import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: "Welcome to JobFinder!",
    color: "#03A9F4"
  },
  { text: "Use this app to find a job.",
    color: "#009688"
  },
  { text: "Set your location, then swipe away.",
    color: "#03A9F4"
  }
];

export default class WelcomeScreen extends Component {

  state = {
    token: null
  }

  async componentWillMount(){
    let token = await AsyncStorage.getItem('fb_token');

    if (token){
      this.props.navigation.navigate('Map');
      this.setState({ token: false });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("Auth");
  }

  render(){
    if (_.isNull(this.state.token)){
      return <AppLoading />;
    }

    return (
      <Slides
        onComplete={this.onSlidesComplete}
        data={ SLIDE_DATA }
      />
    )
  }
}
