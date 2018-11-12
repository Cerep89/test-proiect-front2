import React from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";

import { w, h } from '../constants';


export default class CameraScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
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

        const { container, preview, infoButton } = styles

        return (
            <View style={container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={preview}
                    type={RNCamera.Constants.Type.back}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    
                >

                    <TouchableOpacity
                        style={infoButton}
                        onPress={() => this.props.navigation.navigate('Info')}>
                        <IconAnt
                            name="info"
                            color="#fff"
                            size={30}
                        />
                    </TouchableOpacity>

                </RNCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    infoButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
    }
});
