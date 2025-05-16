import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { styles } from './styleSheet/recap_style';
import { useNavigation } from '@react-navigation/native';

const emotionLabelMap = {
  JOY: '기뻐요',
  ANXIETY: '두려워요',
  SAD: '슬퍼요',
  ANGRY: '화나요',
  EMBARRASSED: '민망해요',
  HURT: '상처받았어요',
};

const emotionFeedbackMap = {
  JOY: `즐거운 순간이 많았네요!\n행복은 나누면 더 커지니까,\n이 기분 오래 간직해봐요 :)`,
  ANXIETY: `불안한 마음이 느껴져요.\n깊게 숨 쉬고, 천천히 생각해보는 건 어때요?\n괜찮아질 거예요.`,
  SAD: `슬픈 일이 있었군요.\n감정을 억누르지 말고\n편하게 털어놔도 괜찮아요.`,
  ANGRY: `화나는 일이 있었군요.\n감정을 인정하는 것도 중요한 일이에요.\n잠깐 거리를 두고 나를 돌봐주세요.`,
  EMBARRASSED: `민망했던 순간도 시간이 지나면 웃으며 말할 수 있어요.\n너무 자신을 탓하지 말아요 :)`,
  HURT: `상처받은 감정이 느껴지네요.\n당신은 소중한 사람이에요.\n그 사실을 잊지 마세요.`,
};

export default function RecapScreen({ route }) {
  const accessToken = route?.params?.accessToken ?? null;
  const [emotionData, setEmotionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // ✅ 더미 데이터로 대체
    const dummyData = {
      ANGRY: 14,
      ANXIETY: 5,
      EMBARRASSED: 2,
      HURT: 4,
      JOY: 7,
      SAD: 1
    };

    const formatted = Object.entries(dummyData).map(([type, count]) => ({
      type,
      label: emotionLabelMap[type],
      count,
    }));

    setEmotionData(formatted);
    setLoading(false);
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
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/echoLog_logo.png')} // 또는 png
          style={styles.logoImage}
        />
      </View>

      <View style={styles.chartContainer}>
        {emotionData.map((e, idx) => {
          const barHeight = Math.max((e.count / maxCount) * 100, 8);
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
          {emotionFeedbackMap[mostFelt.type]}
        </Text>
      </View>
    </ScrollView>
  );
}
