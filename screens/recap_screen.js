import React, { useEffect, useState } from 'react';
import {
    View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity
} from 'react-native';
import { styles } from './styleSheet/recap_style';
import { useNavigation } from '@react-navigation/native';

const emotionImageMap = {
    JOY: require('../assets/emotions/joy.png'),
    ANXIETY: require('../assets/emotions/anxiety.jpg'),
    SAD: require('../assets/emotions/sad.png'),
    ANGRY: require('../assets/emotions/angry.jpg'),
    EMBARRASSED: require('../assets/emotions/embarrassed.jpg'),
    HURT: require('../assets/emotions/hurt.jpg'),
};

const emotionLabelMap = {
    JOY: '기뻐요',
    ANXIETY: '두려워요',
    SAD: '슬퍼요',
    ANGRY: '화나요',
    EMBARRASSED: '민망해요',
    HURT: '상처받았어요',
};

export default function RecapScreen({ route }) {
    const accessToken = route?.params?.accessToken ?? null;
    const [emotionData, setEmotionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`http://ceprj.gachon.ac.kr:60021/api/recap/emotion`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => {
                const formatted = Object.entries(data).map(([type, count]) => ({
                    type,
                    label: emotionLabelMap[type],
                    count,
                    image: emotionImageMap[type],
                }));
                setEmotionData(formatted);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const maxCount = Math.max(...emotionData.map((e) => e.count), 1);
    const mostFelt = emotionData.reduce(
        (prev, curr) => (curr.count > prev.count ? curr : prev),
        { count: -1 }
    );

    if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
                    <Text style={styles.backButton}>{'←'}</Text>
                </TouchableOpacity>
                <Image
                    source={require('../assets/echoLog_logo.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.chartContainer}>
                {emotionData.map((e, idx) => {
                    const barHeight = Math.max((e.count / maxCount) * 100, 8); // 최소 높이 보장
                    const isMax = e.type === mostFelt.type;

                    return (
                        <View key={idx} style={styles.barItem}>
                            <View style={styles.barArea}>
                                <View
                                    style={[
                                        styles.bar,
                                        isMax && styles.barHighlight,
                                        { height: `${barHeight}%` },
                                    ]}
                                />
                            </View>
                            <Text style={styles.barCount}>{e.count}</Text>
                            <Text style={styles.barLabel}>{e.label}</Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles.summaryText}>
                최근 14일 동안 제일 많았던 감정은{'\n'}
                <Text style={styles.highlight}>‘{mostFelt.label}’</Text>였어요.
            </Text>

            <View style={styles.feedbackCard}>
                <Text style={styles.feedbackText}>
                    요즘 힘든 일이 많은 것 같아요.{'\n'}
                    때로는 쉬어가도 괜찮아요.{'\n'}
                    아무것도 하지 않아도{'\n'}
                    당신은 여전히 소중한 사람이에요.
                </Text>
                <Image
                    source={require('../assets/emotions/angry.jpg')}
                    style={styles.feedbackImage}
                />
            </View>
        </ScrollView>
    );
}
