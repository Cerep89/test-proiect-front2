import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Share, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { w, h } from '../constants';

import lang from '../localization/lang';

export default class HomeScreen extends React.Component {

    onClick() {
        Share.share({
            ...Platform.select({
                ios: {
                    message: 'Have a look on : ',
                    url: 'link spre app'//this.props.url,
                },
                android: {
                    message: 'Have a look on : \n' + 'youtube.com'//this.props.url
                }
            }),
            title: 'Wow, did you see that?'
        }, {
                ...Platform.select({
                    ios: {
                        // iOS only:
                        excludedActivityTypes: [
                            'com.apple.UIKit.activity.PostToTwitter'
                        ]
                    },
                    android: {
                        // Android only:
                        dialogTitle: 'Distribuie aplicatia Bagaboo'//this.props.title
                    }
                })
            });
    }

    //header
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Language')}
                >
                    <Icon
                        name="md-globe"
                        color="#fff"
                        size={25}
                        style={{ marginLeft: 10 }}
                    />
                </TouchableOpacity>
            ),
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

        const { navigation } = this.props;
        const lng = navigation.getParam('lang');

        if (lng !== undefined) {
            lang.setLanguage(lng);
        }

        const { body, imageContainer, buttonsContainer, button, textButton } = styles

        return (

            <LinearGradient colors={['#5994CB', '#6427A5']} style={body}>

                <View style={imageContainer}>
                    <Image source={require('../img/gasca.png')}
                    />
                </View>

                <View style={buttonsContainer}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Camera')}
                    >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5DF188', '#0DAE68']} style={button}>
                            <Text style={textButton}> {lang.home.button.scan} </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Gang')}
                    >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F53A69', '#DB52DF']} style={button}>
                            <Text style={textButton}> {lang.home.button.gang} </Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => { this.onClick(); }}
                    >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#B030DE', '#6B34DE', '#5A47DC']} style={button}>
                            <Text style={textButton}> {lang.home.button.share} </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
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
        width: w,
        height: h / 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonsContainer: {
        flex: 2,
        width: w, height: h / 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    button: {
        margin: 5,
        alignItems: 'center',
        padding: 20,
        width: 275,
        borderRadius: 30
    },
    textButton: {
        color: '#ffffff',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 20
    }

})