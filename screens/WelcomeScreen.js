import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    StatusBar as NativeStatusBar // StatusBar from react-native for height
} from 'react-native';
import PropTypes from 'prop-types';

WelcomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default function WelcomeScreen({ navigation }) {
    const handleScreenPress = () => {
        navigation.navigate('Start'); // StartScreen으로 이동
    };

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

                {/* "터치하여 계속" 버튼은 시각적으로만 존재, 전체 화면 터치로 네비게이션 */}
                <View style={styles.bottomContent}>
                    <TouchableOpacity style={styles.continueButton} onPress={handleScreenPress} activeOpacity={0.8}>
                        <Text style={styles.continueButtonText}>터치하여 계속</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b397e',
        justifyContent: 'space-around', // 콘텐츠를 균등하게 배분
        alignItems: 'center',
        paddingHorizontal: 20,
        // 안드로이드와 iOS의 상태 표시줄 및 노치 디자인을 고려한 상단 패딩
        paddingTop: 70,
        paddingBottom: 80, // 하단 여백
    },
    topContent: {
        alignItems: 'center',
    },
    bearImage: {
        width: 140, // 이미지 크기는 실제 비율에 맞게 조절하세요
        height: 140,
        marginBottom: 25,
    },
    mainTitle: {
        fontSize: 27,
        fontWeight: 350,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 34, // 줄 간격 조절
        marginBottom: 3,
        letterSpacing: '1',
    },
    card: {
        backgroundColor: 'white',
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

    middleContent: { //햄식이는 이런걸~
        alignItems: 'center',
    },

    infoTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF9C9',
        marginBottom: 18,
        textAlign: 'center',
        letterSpacing: '1.2',
    },
    infoItem: {
        fontSize: 17, //카드 내부 텍스트
        color: '#000', 
        textAlign: 'center',
        lineHeight: 30, // 줄 간격
        marginBottom: 2,
    },

    bottomContent: {
        width: '100%',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#000000',
        borderRadius: 30, // 모서리 둥글게
        paddingVertical: 16,
        paddingHorizontal: 20, // 버튼 내부 여백
        width: '85%', // 버튼 너비
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});