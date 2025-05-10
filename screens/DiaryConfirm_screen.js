import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styleSheet/DiaryConfirm_style';
import axios from 'axios';
import dayjs from 'dayjs';

export default function DiaryConfirmScreen({ route, navigation }) {
  const { diaryId } = route.params;
  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const res = await axios.get(`https://your-api-url.com/api/diaries/${diaryId}`);
        setDiary(res.data);
      } catch (error) {
        console.error('Failed to fetch diary:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDiary();
  }, [diaryId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {dayjs(diary.writtenDate).format('YY.MM.DD')}
      </Text>
      <Text style={styles.contentText}>
        {diary.transformContent || '변환된 일기 내용이 없습니다.'}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.grayButton]}
          onPress={() => {
            // 예: 수정화면으로 이동
            navigation.navigate('DiaryEditScreen', { diaryId });
          }}
        >
          <Text style={styles.buttonText}>수정할래요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={() => {
            // 예: 이전 화면으로 이동 또는 선택 완료 처리
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>이걸로 쓸래요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
