import React from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';

StartScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default function StartScreen({ navigation }) {
    const handleNavigateToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                {/* 로고 컨테이너: 단일 전체 이미지로 변경 */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/echoLog_logo.png')} // 전체 로고 이미지 경로
                        style={styles.logoImage} // Login.js와 동일한 스타일명 사용
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View style={styles.mainContentSection}>
                <Text style={styles.mainCatchphrase}>오늘 하루, 어떤 기분이었나요?</Text>
            </View>

            <View style={styles.footerSection}>
                <TouchableOpacity style={styles.signUpButton} onPress={handleNavigateToSignUp}>
                    <Text style={styles.signUpButtonText}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToLogin}>
                    <Text style={styles.loginPromptText}>
                        이미 계정이 있나요?{' '}
                        <Text style={styles.loginLinkText}>로그인</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between', // ✅ 공간 재배분
      paddingHorizontal: 40,
      paddingVertical: 60, // ✅ 상하 padding 여유있게
    },
    headerSection: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40, // ✅ 로고를 아래로 조금 내림
    },
    logoImage: {
      width: 160,
      height: 80,
    },
    mainContentSection: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20, // ✅ 좀 더 자연스럽게
    },
    mainCatchphrase: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      marginBottom: 15,
    },
    subCatchphrase: {
      fontSize: 15,
      color: '#4A4A4A',
      textAlign: 'center',
      lineHeight: 22,
    },
    footerSection: {
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    signUpButton: {
      backgroundColor: '#000',
      borderRadius: 30,
      paddingVertical: 18,
      paddingHorizontal: 20,
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    loginPromptText: {
      fontSize: 14,
      color: '#888',
    },
    loginLinkText: {
      color: '#555',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  });
  