import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "../src/components/Login/index";

const RootStack = StackNavigator({
  Login: {
    screen: Login
    // navigationOptions: {
    //   headerStyle: { height: 0}
    // }
  }
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

// type Props = {};

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.instructions}>
//           Welcome to the TARDIS coding exercise! Please read the README.md for more instructions what to implement.
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
