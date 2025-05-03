// 일기 피드백 상세 조회용(GET🟢 /api/diary-feedbacks/{diaryFeedbackId})
export const mockGetDiaryFeedbackById = (diaryFeedbackId) => {
  const mockFeedbacks = {
    4001: {
      diaryFeedbackId: 4001,
      content: '오늘은 하루 정말 잘 보냈네요! 잘 했어요!(피드백)',
      userReaction: 'LIKE',
    },
    4002: {
      diaryFeedbackId: 4002,
      content: '오늘 힘들었겠어요 힘내요~ (피드백)',
      userReaction: 'DISLIKE',
    },
  };
  return mockFeedbacks[diaryFeedbackId];
};
  
  //  일기 피드백 생성 요청용(POST🟡 /api/diary-feedbacks?diaryId={diaryId})
  export const mockPostDiaryFeedback = {
    diaryFeedbackId: 4002,
    content: '오늘 하루 정말 잘 보냈네요! 잘 했어요!',
    userReaction: 'LIKE'
    // 요청 시 diaryContent(원본일기내용)도 보낼 수 있지만 응답엔 포함되지 않음
  };
  
  //  일기 피드백 수정 요청용(PUT🟠 /api/diary-feedbacks/{diaryFeedbackId})
  export const mockPutDiaryFeedback = {
    diaryFeedbackId: 4001,
    content: '오늘 하루 정말 잘 보냈네요! 잘 했어요!',
    userReaction: 'DISLIKE'
  };