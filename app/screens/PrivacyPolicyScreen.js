import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { w, h } from '../constants';


export default class PrivacyPolicyScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: true,
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <Icon
                        name="ios-close"
                        color="#fff"
                        size={25}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            ),
        }
    }

    render() {
        const { body, container, text } = styles
        return (

            <LinearGradient colors={['#8715EB', '#4A14FF']} style={body}>
                <ScrollView style={container}>
                    <View>

                        <Text style={text}>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop
                            publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop
                            publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </Text>

                    </View>
                </ScrollView>
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
    container: {
        width: w / 1.2,
        marginTop: 50
    },
    text: {
        fontSize: 18,
        color: '#fff',
        lineHeight: 25,
        marginBottom: 50
    }
})