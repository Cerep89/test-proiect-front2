import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class LanguageScreen extends React.Component {

  render() {

    const { languages, buttonsContainer, button, languageText } = styles

    return (
      <LinearGradient colors={['#F59052', '#F3339B']} style={languages}>
        <View style={buttonsContainer}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', { lang: 'ro' })}
          >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.8 }} colors={['#E80D3D', '#C22EEE']} style={button}>
              <Text style={languageText}> Română  </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', { lang: 'en' })}
          >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.8 }} colors={['#E6280D', '#F8BF22']} style={button}>
              <Text style={languageText}> English </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', { lang: 'ru' })}
          >
            <LinearGradient start={{ x: 0, y: 0.2 }} end={{ x: 1, y: 0.75 }} colors={['#4B14FE', '#830CEC']} style={button}>
              <Text style={languageText}> Русский </Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    );
  }
}


// Later on in your styles..
const styles = StyleSheet.create({
  languages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonsContainer: {
    width: 311,
    height: 430,
    backgroundColor: 'white',
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 72,
    borderRadius: 41,
    marginVertical: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Comfortaa-Regular'
  }
});