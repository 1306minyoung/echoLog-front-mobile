import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import dayjs from 'dayjs';
import { styles } from './styleSheet/mainHome_style';

import {
  mockGetDiaryById,
  mockGetDiariesByMember,
} from '../mockData/dummy_diary';
import { emotionImage, emotionTypeToKorean } from '../assets/emotions';

import logoutIcon from '../assets/nav/logout_logo.png';
import recapIcon from '../assets/nav/recap_logo.png';
import settingsIcon from '../assets/nav/setting_logo.png';

export default function MainHome() {
  const [currentDate, setCurrentDate] = useState(dayjs('2025-04-01'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    const data = mockGetDiariesByMember(1001);
    setDiaryData(data.diaries);
  }, []);

  const changeMonth = (offset) => {
    setCurrentDate(currentDate.add(offset, 'month'));
    setSelectedDate(null);
  };

  const getDiaryByDate = (dateStr) =>
    diaryData.find((d) => d.writtenDate === dateStr);

  const startOfMonth = currentDate.startOf('month');
  const daysInMonth = currentDate.daysInMonth();
  const startDayOfWeek = startOfMonth.day();

  const calendarDays = [];
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(currentDate.date(i));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedDate(null);
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.screen}>
          {/* 로고 */}
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }} />
            <Image
              source={require('../assets/echoLog_logo.png')}
              style={styles.logo}
            />
          </View>

          {/* 달력 상단 */}
          <View style={styles.headerRow}>
            <Text style={styles.dropdownIcon} onPress={() => changeMonth(-1)}>
              {'<'}
            </Text>
            <Text style={styles.dateText}>
              {currentDate.format('YYYY년 M월')}
            </Text>
            <Text style={styles.dropdownIcon} onPress={() => changeMonth(1)}>
              {'>'}
            </Text>
          </View>

          {/* 달력 */}
          <View style={styles.calendarContainer} pointerEvents="box-none">
            <View style={styles.weekRow}>
              {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
                <Text key={d} style={styles.weekDay}>
                  {d}
                </Text>
              ))}
            </View>

            <View style={styles.daysContainer}>
              {calendarDays.map((date, idx) => {
                if (date === null) {
                  return <View key={idx} style={styles.dayWrapper} />;
                }

                const dateStr = date.format('YYYY-MM-DD');
                const isSelected = selectedDate === dateStr;
                const diary = getDiaryByDate(dateStr);
                const icon = diary
                  ? emotionImage(diary.emotionType)
                  : require('../assets/grayCircle.png');

                return (
                  <TouchableOpacity
                    key={idx}
                    style={styles.dayWrapper}
                    onPress={() => setSelectedDate(dateStr)}
                    activeOpacity={1}
                  >
                    <View /*style={isSelected ? styles.selectedDay : null}*/>
                      <Text style={styles.dayText}>{date.date()}</Text>
                    </View>
                    <View
                      style={[
                        styles.iconCircle,
                        // isSelected && styles.iconSelectedCircle,
                      ]}
                    >
                      <Image
                        source={icon}
                        style={styles.dayIcon}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* 일기 카드 */}
          {selectedDate && (
            <View style={styles.diaryCard}>
              {getDiaryByDate(selectedDate) ? (
                <>
                  <View style={styles.cardHeader}>
                    <Image
                      source={emotionImage(
                        getDiaryByDate(selectedDate)?.emotionType
                      )}
                      style={styles.emotionIcon}
                    />
                    <View style={{ marginLeft: 12 }}>
                      <Text style={styles.diaryDate}>
                        {dayjs(selectedDate).format('YY.MM.DD')}
                      </Text>
                      <Text style={styles.emotionTag}>
                        {emotionTypeToKorean(
                          getDiaryByDate(selectedDate)?.emotionType
                        )}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.diaryContent}>
                    {(() => {
                      const diary = getDiaryByDate(selectedDate);
                      const fullDiary = diary
                        ? mockGetDiaryById(diary.diaryId)
                        : null;
                      const content = fullDiary?.transformContent ?? '';
                      return content.length > 60
                        ? content.slice(0, 60) + '...'
                        : content;
                    })()}
                  </Text>

                  <TouchableOpacity style={styles.diaryButton}>
                    <Text style={styles.diaryButtonText}>일기 보러가기</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.noDiaryText}>
                    이 날엔 아직 일기가 없어요!
                  </Text>
                  <TouchableOpacity style={styles.diaryButton}>
                    <Text style={styles.diaryButtonText}>일기 쓰러 가쉴?</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}

          {/* ✅ 하단 바 */}
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.bottomItem}>
              <Image source={logoutIcon} style={styles.bottomIcon} />
              <Text style={styles.bottomLabel}>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomItem}>
              <Image source={recapIcon} style={styles.bottomIcon} />
              <Text style={styles.bottomLabel}>감정통계</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomItem}>
              <Image source={settingsIcon} style={styles.bottomIcon} />
              <Text style={styles.bottomLabel}>설정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}