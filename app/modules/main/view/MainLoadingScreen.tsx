import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../src/mainConstants';

const MainLoadingScreen = () => (
    <View style={styles.modalContainer}>
        <LottieView
            style={styles.lottie}
            source={require('../lotties/loader.json')}
            autoPlay={true}
            loop={true}
            hardwareAccelerationAndroid={true}
        />
    </View>
);

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',

    },
    lottie: {
        height: 100,
        width: 100,
    },
});

export default MainLoadingScreen;
