import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Alert
} from 'react-native';

export default function LoginScreen({ navigation }) {
    const handleLogin = async () => {
        try {
            const res = await fetch('http://ceprj.gachon.ac.kr:60021/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: 'hong@example.com',
                    password: 'securePassword123',
                }),
            });

            if (!res.ok) throw new Error(`Login failed: ${res.status}`);

            const data = await res.json();
            Alert.alert('로그인 성공');
            navigation.replace('MainHome', { accessToken: data.accessToken }); // ✅ 토큰 전달
        } catch (err) {
            Alert.alert('에러', err.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인 화면</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    button: {
        backgroundColor: '#76A488',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
