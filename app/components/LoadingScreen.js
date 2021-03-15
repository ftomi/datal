import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
    return <View style={styles.animationContainer}>
        <LottieView
            style={{
                width: 200,
                height: 200,
                backgroundColor: '#7B034D',
            }}
            source={require('../../assets/loading.json')}
            autoPlay
            loop
        />
    </View>
}
const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#7B034D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
export default LoadingScreen;