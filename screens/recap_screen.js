import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image
} from 'react-native';
import { styles } from './styleSheet/recap_style';
import { useNavigation } from '@react-navigation/native';
import recapImage from '../assets/recap.png';

import { emotionLabelMap, emotionFeedbackMap } from '../assets/emotions';

function getTopEmotion(emotionList) {
  const priority = ['SAD', 'HURT', 'ANXIETY', 'ANGRY', 'EMBARRASSED', 'JOY'];
  for (const emotion of priority) {
    if (emotionList.some(e => e.type === emotion)) {
      return emotion;
    }
  }
  return null;
}

export default function RecapScreen({ route }) {
  const accessToken = route?.params?.accessToken ?? null;
  const [emotionData, setEmotionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const dummyData = {
      ANGRY: 3,
      ANXIETY: 2,
      EMBARRASSED: 1,
      HURT: 4,
      JOY: 4,
      SAD: 0,
    };

    const formatted = Object.entries(dummyData).map(([type, count]) => ({
      type,
      label: emotionLabelMap[type],
      count,
    }));

    setEmotionData(formatted);
    setLoading(false);
  }, []);

  const maxCount = Math.max(...emotionData.map(e => e.count), 1);
  const mostFeltEmotions = emotionData.filter(e => e.count === maxCount && maxCount > 0);
  const topEmotionType = getTopEmotion(mostFeltEmotions);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBox}>
        {/* 👇 헤더를 카드 안으로 이동 */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/echoLog_logo.png')}
            style={styles.logoImage}
          />
        </View>

        <View style={styles.chartContainer}>
          <View style={styles.barLine} />
          {emotionData.map((e, idx) => {
            const barHeight = Math.max((e.count / maxCount) * 100, 8);
            const isMax = mostFeltEmotions.some(m => m.type === e.type);

            return (
              <View key={idx} style={styles.barItem}>
                <View style={styles.barArea}>
                  <Text style={[
                    styles.barCountInBar,
                    { bottom: `${barHeight}%` }
                  ]}>
                    {e.count}
                  </Text>
                  <View
                    style={[
                      styles.bar,
                      isMax && styles.barHighlight,
                      { height: `${barHeight}%` },
                    ]}
                  />
                </View>
                <Text style={styles.barLabel}>{e.label}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.summaryText}>
          최근 14일 동안 제일 많았던 감정은{'\n'}
          <Text style={styles.highlight}>
            {mostFeltEmotions.map(e => `‘${e.label}’`).join(', ')}
          </Text>
          이었어요.
        </Text>

        <View style={[styles.feedbackCard, { flexDirection: 'row', alignItems: 'center' }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.feedbackText}>
              {emotionFeedbackMap[topEmotionType]}
            </Text>
          </View>
          <Image source={recapImage} style={styles.feedbackImage} />
        </View>
      </View>
    </ScrollView>
  );
}
