//변환 일기 단건 조회용 (GET🟢 /api/transform-diaries/{transformDiaryId})
//transformDiaryId에 해당하는 변환된 일기 내용을 조회할 때 사용
export const mockGetTransformDiaryById = (transformDiaryId) => {
    const mockTransformDiary = {
      2001: {transformDiaryId: 2001,
    content: "오늘은 정말 힘든 하루였다.(변환된 일기임)"}
  };
  return mockTransformDiary[transformDiaryId];
};
  
//변환 일기 생성 요청 및 응답 예시 (POST🟡 /api/transform-diaries?diaryId={diaryId})
//기존 일기(diaryId 기준)를 AI가 분석해 변환된 일기를 생성할 때 사용
export const mockPostTransformDiary = {
    transformDiaryId: 2001,
    content: "오늘은 정말 힘든 하루였다.(변환된 일기임)",
  };
    
//변환 일기 수정 요청 및 응답 예시 (PUT🟠 /api/transform-diaries/{transformDiaryId})
//기존의 변환된 일기 내용을 수정하고 다시 받아올 때 사용
export const mockPutTransformDiary = {
transformDiaryId: 2001,
content: "오늘은 정말 힘든 하루였다.(변환된 일기임)",
  };