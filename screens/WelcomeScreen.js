import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    StatusBar as NativeStatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

WelcomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default function WelcomeScreen({ navigation }) {
    const handleScreenPress = () => {
        navigation.navigate('Start');
    };

    // 💫 깜빡이는 텍스트용 opacity 애니메이션
    const opacity = useSharedValue(1);
    useEffect(() => {
        opacity.value = withRepeat(withTiming(0.8, { duration: 1300 }), -1, true);
    }, []);

    const animatedTextStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <TouchableWithoutFeedback onPress={handleScreenPress}>
            <View style={styles.container}>
                <View style={styles.topContent}>
                    <Image
                        source={require('../assets/splash.png')}
                        style={styles.bearImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.mainTitle}>AI 친구 햄식이와</Text>
                    <Text style={styles.mainTitle}>✨당신의 마음을 살펴보아요✨</Text>
                </View>

                <View style={styles.middleContent}>
                    <Text style={styles.infoTitle}>👇햄식이는 이런 걸 해줘요👇</Text>
                    <View style={styles.card}>
                        <Text style={styles.infoItem}>🗣️ 목소리로 간편하게 일기를 써요</Text>
                        <Text style={styles.infoItem}>📝 말하듯 쓴 글을 일기답게 바꿔줘요</Text>
                        <Text style={styles.infoItem}>🧠 우울함이나 불안을 살펴줘요</Text>
                        <Text style={styles.infoItem}>📊 오늘의 감정을 분석해줘요</Text>
                        <Text style={styles.infoItem}>🌿 따뜻한 말로 당신을 응원해줘요</Text>
                    </View>
                </View>

                <View style={styles.bottomContent}>
                    <Animated.Text style={[styles.continueText, animatedTextStyle]}>
                        EchoLog 시작하기
                    </Animated.Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b397e',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight + 5 : 70,
        paddingBottom: 80,
    },
    topContent: {
        alignItems: 'center',
    },
    bearImage: {
        width: 140,
        height: 140,
        marginBottom: 25,
    },
    mainTitle: {
        fontSize: 27,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 34,
        marginBottom: 3,
        letterSpacing: 1,
    },
    middleContent: {
        alignItems: 'center',
    },
    infoTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#FFF9C9',
        marginBottom: 18,
        textAlign: 'center',
        letterSpacing: 1,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // 투명도 85%
        borderRadius: 16,
        paddingVertical: 40,
        paddingHorizontal: 20,
        width: 300,
        marginTop: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
    },
    infoItem: {
        fontSize: 17,
        color: '#5D5D5D',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: 2,
    },
    bottomContent: {
        width: '100%',
        alignItems: 'center',
    },
    continueText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10,
        textShadowColor: 'rgba(255, 255, 255, 0.35)', // 밝은 흰색 Glow
        textShadowOffset: { width: 0, height: 0 },    // 중심에서 퍼지게
        textShadowRadius: 6                          // 퍼짐 정도 (Glow 강도)
      }
      
      
});
