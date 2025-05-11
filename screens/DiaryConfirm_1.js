import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { styles } from './styleSheet/DiaryConfirm_style';

export default function DiaryConfirmScreen() {
  const navigation = useNavigation();

  const diary = {
    writtenDate: '2025-03-07',
    transformContent:
      `오늘 학교가 끝나고 집에 가는데 날씨가 진짜 미쳤었다. 바람이 완전 세게 불어서 머리가 다 헝클어지고 날라가 나서 머리 상태가 개판이었을 것 같다.
집 가는 길에 빵집에 들려서 소시지 빵을 샀다. 먹으면서 걸어가다가 비둘기랑 눈이 마주쳤다. 괜히 무서워서 빵을 감췄다.
집에 와서 씻고 침대에 누웠는데, 그냥 기분이 되게 편안했다. 아무 일도 없었지만 나름 괜찮은 하루였던 것 같다. 내일은 더 재미있는 일이 있었으면 좋겠다.`
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBox}>
        {/* 상단 네비 */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Image source={require('../assets/echoLog_logo.png')} style={styles.logo} />
        </View>

        {/* 날짜 + 아래 구분선 */}
        <View style={styles.metaInfoRow}>
          <View style={styles.metaTextGroup}>
            <Text style={styles.date}>
              {dayjs(diary.writtenDate).format('YY.MM.DD')}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />  {/* ✅ 날짜 아래 선 */}

        {/* 일기 내용 (❌ diaryContentBox 제거) */}
        <Text style={[styles.diaryText, { marginBottom: 30 }]}>
          {diary.transformContent}
        </Text>

        <View style={styles.divider} /> {/* ✅ 버튼 위 선 */}

        {/* 버튼 그룹 - 가운데 정렬 */}
        <View style={styles.centeredButtonGroup}>
          <TouchableOpacity
            style={styles.smallButton_su}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>수정할래요</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallButton_yee}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>이걸로 쓸래요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
