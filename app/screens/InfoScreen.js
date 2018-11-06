import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import LinearGradient from 'react-native-linear-gradient';

export default class InfoScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      headerTintColor: '#fff',
      headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                    style={{ padding: 10 }}
                >
                    <Icon
                        name="ios-menu"
                        color="#fff"
                        size={30}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            ),
    }
  }

  render() {
    const { container, body, text, groupButtons, button, buttonText } = styles
    return (
      <LinearGradient colors={['#F5666A', '#F23F7F']} style={container}>

        <View style={body}>
          <Image
            style={{ width: 257, height: 122, marginVertical: 10 }}
            resizeMode='contain'
            source={require('../img/logo.png')}
          />

          <Text style={text}>
          Lorem Ipsum is simply dummy text 
          of the printing and typesetting 
          industry. Lorem Ipsum has been the 
          industry's standard dummy text 
          ever since the 1500s, when an 
          unknown printer took a galley of 
          type and scrambled it to make a 
          type specimen book.
          Lorem Ipsum is simply dummy text 
          of the printing and typesetting 
          industry...
          </Text>

          <View style={ groupButtons}>

            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Home')}
            >
              <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#921EF8', '#DC1515']} style={button}>
                <Text style={buttonText}> Vizitează Website </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Home')}
            >
              <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#FBB338', '#DF5752']} style={button}>
                <Text style={buttonText}> Despre Bagaboo </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>

      </LinearGradient>
    );
  }
}


// Later on in your styles..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    width: 311,
    height: 530,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    width: 265,
    fontFamily: 'Comfortaa-Regular',
    flexWrap: 'wrap',
    fontSize: 12,
    marginVertical: 10
  },
  button: {
    width: 265,
    height: 78,
    borderRadius: 41,
    marginVertical: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Comfortaa-Regular'
  },
  groupButtons: {
    flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: 10
  }
});