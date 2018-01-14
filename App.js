import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, Button, Alert, WebView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <WebView
          source={{uri: 'https://www.google.fi'}}
          // Injecting javasript to WebView
          // injectedJavaScript={'alert("Testing!");'}

          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
    );
  }
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  video: {
    marginTop: 30,
    height: deviceHeight,
    width: deviceWidth,
    flex: 1
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 400
  },
  cancelButtonContainer: {
    paddingTop: 7,
    paddingBottom: 7,
    width: 163,
    backgroundColor: '#bdbdbd',
    borderRadius: 5
  },
  container: {
   flex: 1,
   justifyContent: 'center'
  },
  containerView: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  forgeContainer: {
    backgroundColor: '#aaf',
    height: 300,
    width: 200,
    flex: 1
  },
  nameInput: {
    fontSize: 24
  },
  nameLabel: {
    fontSize: 24
  },
  saveButtonContainer: {
    margin: 0,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#2196f3',
    width: 163,
    borderRadius: 5
  }
});
