import React from 'react';
import { Modal, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { mockGetDiaryById } from '../mockData/dummy_diary.js';
import { mockGetEmotionById } from '../mockData/dummy_emotion.js';
import { mockGetDiaryFeedbackById } from '../mockData/dummy_feedback.js';
import { mockGetDepressionById } from '../mockData/dummy_depression.js';
import { emotionImage } from '../assets/emotions.js';
import { useState } from 'react';
import { styles } from './styleSheet/writtenDiaryNFeedback_style.js';



const WrittenDiaryDetailScreen = () => {
  const [isRewriteModalVisible, setIsRewriteModalVisible] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const diary = mockGetDiaryById(1);
  const emotion = mockGetEmotionById(diary.emotionId);
  const feedback = mockGetDiaryFeedbackById(diary.diaryFeedbackId);
  const [userReaction, setUserReaction] = useState(feedback.userReaction);
  const depression = mockGetDepressionById(diary.depressionId);
  const updateUserReaction = (reaction) => {
    console.log(`(mock) 사용자 반응: ${reaction}`); //나중에 PUT연결(수정 필요)
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBox}>
        {/* 상단 nav, logo*/}
        <View style={styles.navRow}>
          <TouchableOpacity>
            {/*뒤로가기버튼-> 홈화면 연결필요*/}
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Image source={require('../assets/echoLog_logo.png')} style={styles.logo} />
        </View>

        {/* 감정이미지, 날짜, 감정태그 */}
        <View style={styles.metaInfoRow}>
          <Image source={emotionImage(emotion.emotionType)} style={styles.emotionIcon} />
          <View style={styles.metaTextGroup}>
          <Text style={styles.date}>
            {new Date(diary.writtenDate).toLocaleDateString('ko-KR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })}
          </Text>
            <Text style={styles.tag}>#{emotion.emotionType}</Text>
          </View>
          {/*원본, 수정버튼 */}
          <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.smallButton_won} onPress={() => setShowOriginal(true)}>
          <Text style={styles.buttonText}>원본</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton_su} onPress={() => setIsRewriteModalVisible(true)}>
          <Text style={styles.buttonText}>수정</Text>
        </TouchableOpacity>
          </View>
        </View>

        {/* 일기 내용 */}
        <View style={styles.diaryContentBox}>
          <Text style={styles.diaryText}>{diary.transformContent}</Text>
        </View>

        <View style={styles.divider} />

        {/* 피드백 */}
        <View style={styles.feedbackCard}>
          <Image source={require('../assets/feedback.png')} style={styles.characterImage} />
          <View style={styles.feedbackBubble}>
            <Text style={styles.feedbackText}>{feedback.content}</Text>
            {/*피드백 좋아요 별로에요*/}
            <View style={styles.reactionContainer}>
              <Text style={styles.likeit}>맘에 들었나요?</Text>
              <TouchableOpacity
                onPress={() => {
                  setUserReaction('LIKE');
                  updateUserReaction('LIKE');
                }}
              >
                <Image
                  source={
                    userReaction === 'LIKE'
                      ? require('../assets/dislike_like/Like_pushed.png')
                      : require('../assets/dislike_like/Like_first.png')
                  }
                  style={styles.reactionIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setUserReaction('DISLIKE');
                  updateUserReaction('DISLIKE');
                }}
              >
                <Image
                  source={
                    userReaction === 'DISLIKE'
                      ? require('../assets/dislike_like/Dislike_pushed.png')
                      : require('../assets/dislike_like/Dislike_first.png')
                  }
                  style={styles.reactionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>     
        </View>

        {/*우울증 전문가 추천내용*/}
        {depression.result === true && (
          <View style={[styles.depressionBox]}>
            <Text style={styles.depressionTitle}>
              최근 14일간의 일기를 분석해봤는데,{'\n'}
              요즘 너무 우울해하는 것 같아 걱정돼…🥲{'\n'}
              전문가 상담 또는 기관의 도움을 받는 걸 추천해!
            </Text>
            <Text style={styles.depressionContact}>상담번호: 000-0000-0000{'\n'}기관번호: 000-0000-0000</Text>
            <Text style={styles.depressionScore}>
              {'\n'}최근 2주 간 일기 기반 점수{'\n'}• PHQ-9: {depression.phq9Score}점{'\n'}• GAD-7: {depression.gad7Score}점
            </Text>
            <Text style={styles.depressionNote}>
              *PHQ·GAD는 우울증 증상을 측정, 진단하는 설문지로{'\n'}인지적, 정서적, 신체적 증상의 변화를 평가함
            </Text>
          </View>
        )}

          {/*원본 구어체 글 띄움 */}
        <Modal visible={showOriginal} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setShowOriginal(false)}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modalContent}>{diary.content}</Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
        {/*수정할래여?*/}
        <Modal visible={isRewriteModalVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Image source={require('../assets/rewrite.png')} style={styles.modalImage} />
              <Text style={styles.modalTitle}>수정은 2번까지만 가능해요!{'\n'}수정할래요?</Text>

              <View style={styles.modalBtnRow}>
                {/*수정 안할래요*/}
                <TouchableOpacity style={styles.modalBtnCancel} onPress={() => setIsRewriteModalVisible(false)}>
                  <Text style={styles.modalBtnText}>아니요</Text>
                </TouchableOpacity>
                {/*수정할래요*/}
                <TouchableOpacity style={styles.modalBtnConfirm} onPress={() => {setIsRewriteModalVisible(false);//수정필요
                  //여기서 수정 페이지로 이동 or 로직처리
                }}>
                  <Text style={styles.modalBtnTextWhite}>할래요</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default WrittenDiaryDetailScreen;

