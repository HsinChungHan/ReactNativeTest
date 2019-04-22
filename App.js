import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  changeCount(step) {
    this.setState(prevState => ({
      count: prevState.count + step
    }));
  }

  increase = () => {
    this.changeCount(1);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Count:
          {this.state.count}
        </Text>
        <Button title="increase" onPress={this.increase} />
      </View>
    );
  }
}
