// 📁 screens/MainHome_screen.js (예시)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function TestMainHome() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/diaries?memberId=1')  // 실제 서버주소로 변경
      .then(response => {
        console.log('불러온 데이터:', response.data);
        setDiary(response.data.diaries); // 데이터 저장
      })
      .catch(error => {
        console.error('데이터 불러오기 실패:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
      <Text>일기 목롹롹</Text>
      <FlatList
        data={diary}
        keyExtractor={(item) => item.diaryId.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>📅 날짜: {item.createDate}</Text>
            <Text>📝 내용: {item.content}</Text>
            <Text>😊 감정: {item.emotionType}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}