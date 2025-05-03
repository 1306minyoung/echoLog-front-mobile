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