import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styleSheet/writtenDiaryNFeedback_style';

export default function DiaryConfirmScreen({ navigation }) {
  const diaryDate = '25.03.07';
  const diaryContent = `오늘 학교가 끝나고 집에 가는데 날씨가 진짜 미쳤었다. 
바람이 완전 세게 불어서 머리가 다 엉켰었고 날려가 나서 
머리 상태가 개판이었을 것 같다. 
집 가는 길에 붕장에 들러서 소시지 빵을 샀다. 
의외로 맛있어서 만족스러웠다.`;

  const handleConfirm = () => {
    // '이걸로 쓸래요' 버튼 로직
    // navigation.navigate('MainHome'); 또는 API 등록
    console.log('이걸로 쓸래요');
  };

  const handleEdit = () => {
    // '수정할래요' 버튼 로직
    console.log('수정하러 가기');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBox}>
        {/* 상단 nav */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
        </View>

        {/* 날짜 */}
        <Text style={[styles.date, { marginTop: 24 }]}>{diaryDate}</Text>

        {/* 내용 */}
        <View style={styles.diaryContentBox}>
          <Text style={styles.diaryText}>{diaryContent}</Text>
        </View>

        {/* 버튼 두 개 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
          <TouchableOpacity style={styles.modalBtnCancel} onPress={handleEdit}>
            <Text style={styles.modalBtnText}>수정할래요</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalBtnConfirm} onPress={handleConfirm}>
            <Text style={styles.modalBtnTextWhite}>이걸로 쓸래요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
