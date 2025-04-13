import React from 'react';
import {
  View,Text,Image,StyleSheet,FlatList,TouchableOpacity,Dimensions,
} from 'react-native';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
//감정별 이미지 import
import joyIcon from '../assets/emotions/joy.png';
import sadIcon from '../assets/emotions/sad.png';
import hurtIcon from '../assets/emotions/hurt.jpg';
import embarrassedIcon from '../assets/emotions/embarrassed.jpg';
import anxietyIcon from '../assets/emotions/anxiety.jpg';
import angryIcon from '../assets/emotions/angry.jpg';

import plusIcon from '../assets/plus.png' 

const emotionToTag = {
    joy: '#기쁨',
    sad: '#슬픔',
    hurt: '#상처',
    embarrassed: '#당황',
    angry: '#화남',
    anxiety: '#불안',
  };


const rawCalendarData = [
    { date: '2025-05-01', emotion: 'joy', content: null,
        fullText: `오늘 아침에 알람을 못 들어서 지각할 뻔했다. 뛸 수 있는 데에서는 다 뛰어서 겨우 강의실에 수업 시작시간에 도착해서 다행히 출석체크는 잘 마쳤다. 오후에는 일본어 교양 수업을 들으러 갔었는데, 이번주부터 팀플을 시작한다고 하셨다. 같이 팀 된 팀원들이 너무 대충해서 혼자 독박쓰게 생겨서 너무 슬펐다. 나는 왜 이렇게 팀원 운이 없는건지 모르겠다. 아침부터 오후 내내 고생해서 저녁에는 맛있는걸 사 먹으려고 했는데 엄마가 집 와서 주는거 먹으라고 하셔서 결국 집밥을 먹었다. 여러모로 참 힘들었던 하루. `},
    { date: '2025-05-02', emotion: 'sad', content: null },
    { date: '2025-05-03', emotion: 'hurt', content: '지각 위기였던 아침, 이러저러 치여 고되었기에...' },
    { date: '2025-05-04', emotion: 'joy', content: '지각 위기였던 아침, 이러저러 치여 고되었기에...' },
    { date: '2025-05-05', emotion: 'embarrassed', content: '지각 위기였던 아침, 이러저러 치여 고되었기에...' },
    { date: '2025-05-06', emotion: 'anxiety', content: '지각 위기였던 아침, 이러저러 치여 고되었기에...' },
    { date: '2025-05-07', emotion: 'angry', content: null },
    { date: '2025-05-08', emotion: 'joy', content: '친구랑 재밌는 시간을 보냈다!' },
    { date: '2025-05-09', emotion: null, content: null },
    { date: '2025-05-10', emotion: null, content: null },
    { date: '2025-05-11', emotion: null, content: null },
    { date: '2025-05-12', emotion: null, content: null },
    { date: '2025-05-13', emotion: null, content: null },
    { date: '2025-05-14', emotion: null, content: null },
    { date: '2025-05-15', emotion: null, content: null },
    { date: '2025-05-16', emotion: null, content: null },
    { date: '2025-05-17', emotion: null, content: null },
    { date: '2025-05-18', emotion: null, content: null },
    { date: '2025-05-19', emotion: null, content: null },
    { date: '2025-05-20', emotion: null, content: null },
    { date: '2025-05-21', emotion: null, content: null },
    { date: '2025-05-22', emotion: null, content: null },
    { date: '2025-05-23', emotion: null, content: null },
    { date: '2025-05-24', emotion: null, content: null },
    { date: '2025-05-25', emotion: null, content: null },
    { date: '2025-05-26', emotion: null, content: null },
    { date: '2025-05-27', emotion: null, content: null },
    { date: '2025-05-28', emotion: null, content: null },
    { date: '2025-05-29', emotion: null, content: null },
    { date: '2025-05-30', emotion: null, content: null },
    { date: '2025-05-31', emotion: null, content: null },
    // 나머지 날짜도 생성하여 추가 가능
  ];
  const getEmotionIcon = (emotion) => {
    switch (emotion) {
      case 'joy': return joyIcon;
      case 'sad': return sadIcon;
      case 'hurt': return hurtIcon;
      case 'embarrassed': return embarrassedIcon;
      case 'anxiety': return anxietyIcon;
      case 'angry': return angryIcon;
      default: return null;
    }
  };
 

  const calendarData = rawCalendarData.map(item => {
    let preview = null;
    if (!item.content && item.fullText) {
      preview = item.fullText.length > 60 
        ? item.fullText.slice(0, 60) + '...' 
        : item.fullText;
    }
  
    return {
      ...item,
      tags: [emotionToTag[item.emotion] || '#감정없음'],
      content: item.content || preview,
    };
  });

  const today = dayjs().format('YYYY-MM-DD');
  
  export default function MainCalendarScreen() {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();
  
    const handleDatePress = (item) => {
      setSelectedDate(item);
    };
  
    const renderDateItem = ({ item }) => {
      let icon = null;
      if (item.date === today && !item.emotion) {
        icon = plusIcon;
      } else if (item.emotion) {
        switch (item.emotion) {
          case 'joy': icon = joyIcon; break;
          case 'sad': icon = sadIcon; break;
          case 'hurt': icon = hurtIcon; break;
          case 'embarrassed': icon = embarrassedIcon; break;
          case 'anxiety': icon = anxietyIcon; break;
          case 'angry': icon = angryIcon; break;
        }
      }
  
      return (
        <TouchableOpacity style={styles.dateItem} onPress={() => handleDatePress(item)}>
          {icon ? (
            <Image source={icon} style={styles.emotionImage} />
          ) : (
            <View style={styles.emptyCircle} />
          )}
          <Text style={styles.dateText}>{dayjs(item.date).date()}</Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={calendarData}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.date}
          numColumns={7}
          contentContainerStyle={styles.calendarGrid}
        />
  
        {selectedDate && (
          <View style={styles.diaryBox}>
            <Text style={styles.diaryDate}>{dayjs(selectedDate.date).format('YY.MM.DD')}</Text>
            {selectedDate.emotion ? (
              <>
                <View style={styles.tagAndImageRow}>
                    <Text style={styles.diaryEmotion}>{selectedDate.tags}</Text>
                    <Image source={getEmotionIcon(selectedDate.emotion)} style={styles.previewImage} />
                </View>
                <Text style={styles.diaryContent} numberOfLines={2}>{selectedDate.content}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>일기 보러가기</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.noDiary}>아직 일기가 작성되지 않았어요!</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>일기 쓰러가기</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    calendarGrid: {
      alignItems: 'center',
    },
    dateItem: {
      width: Dimensions.get('window').width / 7 - 10,
      alignItems: 'center',
      margin: 4,
    },
    emotionImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      margin: 4,
      resizeMode: 'cover',
      marginBottom: 2,
    },
    emptyCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#ddd',
      marginBottom: 2,
    },
    dateText: {
      fontSize: 12,
      color: '#333',
    },
    diaryBox: {
      backgroundColor: '#ffffff',
      padding: 16,
      marginTop: 10,
      borderRadius: 12,
    },
    diaryDate: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 4,
    },
    previewImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        marginVertical: 10,
      },
    diaryEmotion: {
      fontSize: 13,
      color: '#888',
      marginBottom: 4,
    },
    diaryContent: {
        fontSize: 15,
        color: '#333',
        marginVertical: 4,
        lineHeight: 18,
      },
    noDiary: {
      fontSize: 15,
      color: '#888',
      marginBottom: 8,
    },
    button: {
      marginTop: 13,
      backgroundColor: '#DB9C9C',
      paddingVertical: 15,
      borderRadius: 30,
      alignItems: 'center',
      width : 200,
      alignSelf: 'center',
    
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    },
    tagAndImageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
      },
      
      previewImage: {
        width: 32,
        height: 32,
        marginLeft: 6,
        resizeMode: 'contain',
      },
  });