export const emotionImage = (emotionType) => {
  const emotions = {
    ANXIETY: require('./emotions/anxiety.jpg'),
    SAD: require('./emotions/sad.png'),
    HURT: require('./emotions/hurt.jpg'),
    JOY: require('./emotions/joy.png'),
    ANGRY: require('./emotions/angry.jpg'),
    EMBARRASSED: require('./emotions/embarrassed.jpg'),
  };
  return emotions[emotionType];
};

export const emotionTypeToKorean = (type) => {
  const map = {
    JOY: '#기쁨',
    SAD: '#슬픔',
    HURT: '#상처',
    EMBARRASSED: '#당황',
    ANXIETY: '#불안',
    ANGRY: '#화남',
  };
  return map[type] || '#감정없음';
};