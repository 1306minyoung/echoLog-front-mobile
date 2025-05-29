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

// 실제 이미지 경로로 교체해주세요. 예: ../assets/winking_bear.png
const bearImage = require('../assets/splash.png');

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
                    {/* 
                      이미지 파일을 assets 폴더에 넣고 아래 경로를 수정해주세요.
                      예: source={require('../assets/winking_bear.png')} 
                    */}
                    <Image
                        source={require('../assets/splash.png')} // 임시 플레이스홀더, 실제 이미지로 교체하세요.
                        style={styles.bearImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.mainTitle}>든든한 친구</Text>
                    <Text style={styles.mainTitle}>AI 햄식이와 함께</Text>
                    <Text style={styles.mainTitle}>당신의 마음을</Text>
                    <Text style={styles.mainTitle}>
                        살펴보아요<Text style={styles.heartIcon}>💚</Text>
                    </Text>
                </View>

                <View style={styles.middleContent}>
                    <Text style={styles.infoTitle}>햄식이는 이런 걸 할 수 있어요!</Text>
                    <Text style={styles.infoItem}>목소리만으로 편리한 일기 작성을 도와줘요</Text>
                    <Text style={styles.infoItem}>톡톡 털어놓은 말을 일기답게 변신시켜 줘요</Text>
                    <Text style={styles.infoItem}>우울하거나 불안한 건 아닌지 지켜봐줘요</Text>
                    <Text style={styles.infoItem}>일기를 읽고 오늘의 감정은 무엇이었는지 알려줘요</Text>
                    <Text style={styles.infoItem}>
                        <Text style={styles.leafIcon}>🌿</Text>당신의 마음에 공감하며 따뜻한 한마디를 해줘요
                    </Text>
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
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around', // 콘텐츠를 균등하게 배분
        alignItems: 'center',
        paddingHorizontal: 20,
        // 안드로이드와 iOS의 상태 표시줄 및 노치 디자인을 고려한 상단 패딩
        paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight + 20 : 60,
        paddingBottom: 40, // 하단 여백
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
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3CAF50', // 이미지상의 초록색 계열 (정확한 값으로 조절)
        textAlign: 'center',
        lineHeight: 34, // 줄 간격 조절
        marginBottom: 3,
    },
    heartIcon: {
        color: '#3CAF50', // 메인 타이틀과 동일한 초록색
    },
    middleContent: {
        alignItems: 'center',
        paddingHorizontal: 10, // 긴 텍스트가 화면 가장자리에 닿지 않도록
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#404040', // 약간 어두운 회색
        marginBottom: 18,
        textAlign: 'center',
    },
    infoItem: {
        fontSize: 13.5, // 기본 텍스트보다 약간 작게
        color: '#505050', // 중간 회색
        textAlign: 'center',
        lineHeight: 21, // 줄 간격
        marginBottom: 8,
    },
    leafIcon: {
        color: '#3CAF50', // 초록색 잎 아이콘
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