// 우울증 평가 조회용 (GET🟢 /api/depressions/{depressionId})
export const mockGetDepressionById=(depressionId) => {
  const mockDepression = {
    5001: {depressionId: 5001, 
      result: true,
      content: "우울증이 심각하니 전문가와 상담을 받는 것이 좋습니다.",
      emotionScore: 7.8, depressionWordScore: 6.3, phq9Score: 15.2}
  };
  return mockDepression[depressionId];
};
  
  // 우울증 분석 요청용 (POST🟡 /api/depressions?diaryId={diaryId})
  export const mockPostDepression = {
    request: {
      diaryId: 1,
    },
    response: {
      depressionId: 5001,
      result: true,
      content: "우울증이 심각하니 전문가와 상담을 받는 것이 좋습니다.",
      emotionScore: 7.8,
      depressionWordScore: 6.3,
      phq9Score: 15.2,
    },
  };
  
  // 우울증 평가 수정용 (PUT🟠 /api/depressions/{depressionId})
  export const mockPutDepression = {
    request: {
      result: true,
      content: "우울증이 심각하니 전문가와 상담을 받는 것이 좋습니다.",
      emotionScore: 7.8,
      depressionWordScore: 6.3,
      phq9Score: 15.2,
    },
    response: {
      depressionId: 5001,
      result: true,
      content: "우울증이 심각하니 전문가와 상담을 받는 것이 좋습니다.",
      emotionScore: 7.8,
      depressionWordScore: 6.3,
      phq9Score: 15.2,
    },
  };