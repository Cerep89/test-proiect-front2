import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { w, h } from '../constants';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_FIRST_ITEM = 0;

const entries = [
    {
        index: 1,
        title: 'Pasul 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting', colors: ['#A778F5', '#6096F8'],
        grStart: { x: 0.5, y: 1 },
        grEnd: { x: 1, y: 0 },
        locations: [0, 1]
    },
    {
        index: 2,
        title: 'Pasul 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        colors: ['#FF5277', '#EC90E8', '#FCB5F9'],
        grStart: { x: 0, y: 1 },
        grEnd: { x: 1, y: 0 },
        locations: [0, 0.8, 1]
    },
    {
        index: 3,
        title: 'Pasul 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        colors: ['#FF9DAE', '#FEEA93'],
        grStart: { x: 1, y: 0.75 },
        grEnd: { x: 0, y: 0.1 },
        locations: [0, 1]
    }];


export default class MyCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSlide: SLIDER_FIRST_ITEM
        };
    }

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

    _renderItem({ item, index }) {
        const { body, image, title, lineStyle, description } = styles;
        return (
            <LinearGradient
                colors={item.colors}
                start={{ x: item.grStart.x, y: item.grStart.y }}
                end={{ x: item.grEnd.x, y: item.grEnd.y }}
                locations={item.locations}
                style={body}>
                <Image source={require('../img/demo.png')} style={image}
                />
                <View>
                    <Text style={title}>{item.title} </Text>
                </View>
                <View
                    style={lineStyle}
                />
                <Text style={description}>{item.description} </Text>
            </LinearGradient>

        );
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                }}

                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgb(90, 87, 87)'
                }}
                inactiveDotStyle={{
                    backgroundColor: '#fff'
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <LinearGradient colors={['#DD1670', '#C22DEB']} style={{ paddingBottom: 50 }} >
                <View style={{ height: h }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={entries}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                        firstItem={SLIDER_FIRST_ITEM}
                        removeClippedSubviews={false}

                        sliderWidth={w}
                        itemWidth={w / 1.4}

                        activeSlideAlignment={'center'}


                        contentContainerCustomStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                    />
                    {this.pagination}
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flexWrap: 'wrap',
        alignItems: 'center',
        height: h / 1.5,
        width: w / 1.5,
        borderRadius: 25
    },
    image: {
        width: w / 1.8,
        height: w / 1.8,
        borderRadius: 10,
        marginTop: (w / 1.5 - w / 1.8) / 2
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Comfortaa-Bold',
        marginVertical: 15
    },
    lineStyle: {
        backgroundColor: '#FCB8FA',
        height: 0.2,
        width: w / 2,
    },
    description: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 13,
        textAlign: 'center',
        width: w / 2,
        marginVertical: 30,
        color: '#fff',
    }
})