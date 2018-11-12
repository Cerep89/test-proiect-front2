import React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { w, h } from '../constants';

import lang from '../localization/lang';


export default class MenuScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ padding: 10 }}
                >
                    <Icon
                        name="ios-close"
                        color="#fff"
                        size={36}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            ),
        }
    }

    render() {
        const { body, imageContainer, buttonsContainer, text, button } = styles
        return (

            <LinearGradient colors={['#8715EB', '#4A14FF']} style={body}>

                <View style={imageContainer}>
                    <Image style={{
                        width: 257
                    }}
                        resizeMode='contain'
                        source={require('../img/logo.png')}
                    />
                </View>

                <View style={buttonsContainer}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Gang')}
                    >
                        <Text style={text}> {lang.menu.gang} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HowItWorks')}
                    >
                        <Text style={text}> {lang.menu.howItWorks} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
                    >
                        <Text style={text}> {lang.menu.about} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
                    >
                        <Text style={text}> {lang.menu.contact} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
                    >
                        <Text style={text}>{lang.menu.privacyPolicy} </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Camera')}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#F53A69', '#DB52DF']}
                        style={button}>
                        <Text
                            style={{ color: '#ffffff', fontFamily: 'Comfortaa-Regular', fontSize: 20 }}> {lang.home.button.scan} </Text>
                    </LinearGradient>
                </TouchableOpacity>


            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    imageContainer: {
        marginTop: 20,
        width: w,
        height: h / 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonsContainer: {
        flex: 2,
        width: w,
        height: h / 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        alignItems: 'center',
        fontSize: 16,
        fontFamily: 'Comfortaa-Regular',
        color: '#fff',
        marginVertical: 10
    },
    button: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 78,
        borderRadius: 30,
        marginBottom: 30
    }

})