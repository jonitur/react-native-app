import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Text style={styles.nameLabel}>Name: </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Name'
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.buttonRow}>
          <View style={styles.saveButtonContainer}>
              <Button
                color='#fff'
                onPress={() => {Alert.alert('Saved')}}
                title='Save'
                />
          </View>
          <View style={styles.cancelButtonContainer}>
            <Button
              color='#fff'
              onPress={() => {Alert.alert('Canceled')}}
              title='Cancel'
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 400
  },
  cancelButtonContainer: {
    paddingTop: 7,
    paddingBottom: 7,
    width: 163,
    backgroundColor: '#BDBDBD',
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
    backgroundColor: '#2196F3',
    width: 163,
    borderRadius: 5
  }
});
