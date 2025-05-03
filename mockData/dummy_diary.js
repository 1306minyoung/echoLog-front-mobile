//일기 단건 조회용 (🟢 GET /api/diaries/{diaryId})
// - diaryId에 해당하는 하나의 일기 상세 정보를 조회할 때 사용
export const mockGetDiaryById = (diaryId) => {
  const mockDiary = {
    1: {diaryId: 1, memberId: 1001, content: "와... 오늘 진짜 힘들었어...(변환 안됨)", 
        writtenDate: "2025-04-21",
        transformDiaryId: 2001, transformContent: "오늘은 정말 힘든 하루였다.(변환된 일기임)",
        emotionId: 3001,diaryFeedbackId: 4001, depressionId: 5001}
  };
  return mockDiary[diaryId];
};

// 회원 일기 목록 조회용(🟢 GET /api/diaries?memberId={memberId})
//특정 회원이 작성한 일기 목록과 감정 요약을 가져올 때 사용
export const mockGetDiariesByMember = (memberId) => {
  const mockData = {
    1001: {
      memberId: 1001,
      diaries: [
        { diaryId: 1, writtenDate: "2025-04-21", emotionType: "HURT" },
        { diaryId: 2, writtenDate: "2025-04-22",emotionType: "JOY" },
        { diaryId: 3, writtenDate: "2025-04-22",emotionType: "SAD" },
      ],
    },
    
    1002: {
      memberId: 1002,
      diaries: [
        { diaryId: 4, writtenDate: "2025-04-21", emotionType: "SAD" },
        { diaryId: 5, writtenDate: "2025-04-22", emotionType: "ANGRY" },
      ],
    },
  };

  return mockData[memberId] || { memberId, diaries: [] };
};

//일기 작성 요청용 (🟡 POST /api/diaries?temp=false) 
//새로운 일기를 생성할 때 요청에 사용되는 데이터 구조
export const mockPostDiaryRequest = {
  writtenDate: "2025-04-21",
  content: "오늘은 정말 힘든 하루였다...(변환된 일기임)",
  temp: false,
};

//일기 작성 응답 예시 (🟡 POST 응답 예시)
//일기 작성 후 백엔드에서 응답으로 보내주는 데이터 구조
export const mockPostDiaryResponse = {
  diaryId: 1,
  memberId: 1001,
  content: "오늘은 정말 힘든 하루였다...(변환된 일기임)",
  writtenDate: "2025-04-21",
  transformDiaryId: 2001,
  emotionId: 3001,
  diaryFeedbackId: 4001,
  depressionId: 5001,
};

//일기 수정 요청용 (PUT🟠 /api/diaries/{diaryId})
//기존 일기 내용을 수정할 때 요청에 사용하는 데이터 구조
export const mockPutDiaryRequest = {
  content: "오늘은 정말 힘든 하루였다...(변환된 일기임)",
};

//일기 수정 응답 예시 (PUT🟠 /api/diaries/{diaryId})
//수정이 완료된 후 백에서 응답해주는 일기 데이터 구조
export const mockPutDiaryResponse = {
  diaryId: 1,
  memberId: 1001,
  content: "오늘은 정말 힘든 하루였다...(변환된 일기임)",
  writtenDate: "2025-04-21",
  transformDiaryId: 2001,
  emotionId: 3001,
  diaryFeedbackId: 4001,
  depressionId: 5001,
};