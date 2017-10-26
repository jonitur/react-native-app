import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>App Template</Text>
        <Text style={styles.baseText}></Text>
        <Text style={styles.baseText}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 40,
    color: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
