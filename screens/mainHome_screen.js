import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
  Animated,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import { styles } from './styleSheet/mainHome_style.js';
import { emotionImage } from '../assets/emotions';
import grayCircle from '../assets/grayCircle.png';
import { mockGetDiariesByMember } from '../mockData/dummy_diary.js';

const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

export default function MainHome() {
  const [selectedDate, setSelectedDate] = useState('2025-03-01');
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [tempYear, setTempYear] = useState(2025);
  const [tempMonth, setTempMonth] = useState(3);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const base = dayjs(selectedDate);
    const start = base.startOf('month');
    const end = base.endOf('month');
    const markings = {};

    const memberId = 1001;
    const diaryData = mockGetDiariesByMember(memberId)?.diaries || [];

    const diaryMap = new Map(
      diaryData.map((d) => [d.writtenDate, emotionImage(d.emotionType)])
    );

    for (let d = start; d.isBefore(end) || d.isSame(end, 'day'); d = d.add(1, 'day')) {
      const dateStr = d.format('YYYY-MM-DD');
      const icon = diaryMap.get(dateStr);
      markings[dateStr] = {
        icon: icon || grayCircle,
      };
    }

    setMarkedDates(markings);
  }, [selectedDate]);

  const handleConfirm = () => {
    const newDate = `${tempYear}-${String(tempMonth).padStart(2, '0')}-01`;
    setSelectedDate(newDate);
    setModalVisible(false);
  };

  const displayMonth = dayjs(selectedDate).format('YYYY년 M월');

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        current={selectedDate}
        markingType="custom"
        markedDates={markedDates}
        hideArrows={true}
        renderHeader={() => null}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          const d = dayjs(day.dateString);
          setTempYear(d.year());
          setTempMonth(d.month() + 1);
        }}
        dayComponent={({ date, state }) => {
          const dateStr = date.dateString;
          const icon = markedDates[dateStr]?.icon;
          const isSelected = dateStr === dayjs(selectedDate).format('YYYY-MM-DD');

          const content = (
            <View
              style={[{ alignItems: 'center' }, isSelected && styles.selectedDay]}>
              <Text
                style={[
                  { color: state === 'disabled' ? 'gray' : 'black', fontSize: 14 },
                  isSelected && styles.selectedDayText,
                ]}
              >
                {date.day}
              </Text>
              {icon && (
                <Image source={icon} style={styles.icon} resizeMode="contain" />
              )}
            </View>
          );

          return isSelected ? (
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              {content}
            </Animated.View>
          ) : (
            content
          );
        }}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>연도 선택</Text>
            <FlatList
              horizontal
              data={years}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <Pressable onPress={() => setTempYear(item)} style={styles.yearItem}>
                  <Text style={[styles.yearText, tempYear === item && styles.selected]}>
                    {item}
                  </Text>
                </Pressable>
              )}
              contentContainerStyle={{ paddingBottom: 10 }}
            />

            <Text style={styles.modalTitle}>월 선택</Text>
            <FlatList
              horizontal
              data={months}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <Pressable onPress={() => setTempMonth(item)} style={styles.monthItem}>
                  <Text style={[styles.monthText, tempMonth === item && styles.selected]}>
                    {item}월
                  </Text>
                </Pressable>
              )}
            />

            <Pressable onPress={handleConfirm} style={styles.confirmBtn}>
              <Text style={{ color: 'white' }}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}



