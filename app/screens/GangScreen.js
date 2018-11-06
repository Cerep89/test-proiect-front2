import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { w, h } from '../constants';


export default class GangScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: true,
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ padding: 10 }}
                >
                    <Icon
                        name="ios-close"
                        color="#fff"
                        size={30}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            ),
        }
    }

    render() {
        const { body, imageContainer, container, item, characterContainer, characterName, characterImage } = styles
        return (

            <LinearGradient colors={['#530AD4', '#34005B']} style={body}>

                <View style={imageContainer}>
                    <Image style={{
                        flex: 1,
                        aspectRatio: 2.5,
                        resizeMode: 'contain'
                    }}
                        source={require('../img/logo.png')}
                    />
                </View>

                <View style={container}>

                    <View style={item}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.7 }}
                            colors={['#E80D3D', '#C22EEE']}
                            style={characterContainer}>
                            <Text style={characterName}> NUME PERSONAJ </Text>
                        </LinearGradient>

                        <View style={[characterImage, { backgroundColor: '#C32DEA' }]}>
                            <Image style={{ width: 50 }}
                                source={require('../img/character1.png')}
                                resizeMode='contain'
                            />
                        </View>
                    </View>

                    <View style={item}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.7 }}
                            colors={['#E6280D', '#F8BF22']}
                            style={characterContainer}>
                            <Text style={characterName}> NUME PERSONAJ </Text>
                        </LinearGradient>

                        <View style={[characterImage, { backgroundColor: '#F9D800' }]}>
                            <Image style={{ width: 50 }}
                                source={require('../img/character2.png')}
                                resizeMode='contain'
                            />
                        </View>

                    </View>

                    <View style={item}>

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.7 }}
                            colors={['#4B14FE', '#830CEC']}
                            style={characterContainer}>
                            <Text style={characterName}> NUME PERSONAJ </Text>
                        </LinearGradient>

                        <View style={[characterImage, { backgroundColor: '#8715EB' }]}>
                            <Image style={{ width: 50 }}
                                source={require('../img/character3.png')}
                                resizeMode='contain'
                            />
                        </View>

                    </View>

                    <View style={item}>

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0.7 }}
                            colors={['#343434', '#343434']}
                            style={characterContainer}>
                            <Text style={characterName}> NUME PERSONAJ </Text>
                            <Icon
                                name="md-lock"
                                color="#fff"
                                size={30}
                                style={{ marginRight: 15 }}
                            />
                        </LinearGradient>

                        <View style={[characterImage, { backgroundColor: '#343434' }]}>
                            <Image style={{ width: 50 }}
                                source={require('../img/character4.png')}
                                resizeMode='contain'
                            />
                        </View>

                    </View>

                </View >

            </LinearGradient >
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
        height: h / 5 * 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    container: {
        flex: 2,
        width: w,
        height: h / 5 * 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 331,
        height: 73,
        marginVertical: 8
    },
    characterName: {
        color: '#fff',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 14,
        marginLeft: 20
    },
    characterContainer: {
        height: 73,
        width: 251,
        borderRadius: 36,
        marginRight: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    characterImage: {
        height: 73,
        width: 73,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
    }

})