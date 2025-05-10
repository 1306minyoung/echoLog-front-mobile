import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import dayjs from 'dayjs';
import { styles } from './styleSheet/mainHome_style';

import { emotionImage, emotionTypeToKorean } from '../assets/emotions';
import logoutIcon from '../assets/nav/logout_logo.png';
import recapIcon from '../assets/nav/recap_logo.png';
import settingsIcon from '../assets/nav/setting_logo.png';

export default function MainHome({ route }) {
  const { accessToken } = route.params; // ✅ 전달받은 토큰

  const [currentDate, setCurrentDate] = useState(dayjs('2025-04-01'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [diaryData, setDiaryData] = useState([]);
  const [diaryDetailMap, setDiaryDetailMap] = useState({});

  const fetchDiaryList = async () => {
    try {
      const res = await fetch(
          `http://ceprj.gachon.ac.kr:60021/api/diaries?year=${currentDate.year()}&month=${currentDate.month() + 1}`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
      );
      if (!res.ok) throw new Error('일기 목록 가져오기 실패');
      const data = await res.json();
      setDiaryData(data.diaries || []);
    } catch (err) {
      console.error('❌ diary list error:', err.message);
    }
  };

  const fetchDiaryDetail = async (diaryId) => {
    if (diaryDetailMap[diaryId]) return;

    try {
      const res = await fetch(
          `http://ceprj.gachon.ac.kr:60021/api/diaries/${diaryId}`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
      );
      if (!res.ok) throw new Error('일기 상세 실패');
      const data = await res.json();
      setDiaryDetailMap((prev) => ({ ...prev, [diaryId]: data }));
    } catch (err) {
      console.error('❌ diary detail error:', err.message);
    }
  };

  useEffect(() => {
    fetchDiaryList();
  }, [currentDate]);

  const changeMonth = (offset) => {
    setCurrentDate(currentDate.add(offset, 'month'));
    setSelectedDate(null);
    setDiaryData([]);
    setDiaryDetailMap({});
  };

  const getDiaryByDate = (dateStr) =>
      diaryData.find((d) => d.writtenDate === dateStr);

  const startOfMonth = currentDate.startOf('month');
  const daysInMonth = currentDate.daysInMonth();
  const startDayOfWeek = startOfMonth.day();

  const calendarDays = Array.from({ length: startDayOfWeek }, () => null)
      .concat(Array.from({ length: daysInMonth }, (_, i) => currentDate.date(i + 1)));

  return (
      <TouchableWithoutFeedback onPress={() => { setSelectedDate(null); Keyboard.dismiss(); }}>
        <View style={{ flex: 1 }}>
          <View style={styles.screen}>
            <View style={styles.headerRow}>
              <View style={{ flex: 1 }} />
              <Image source={require('../assets/echoLog_logo.png')} style={styles.logo} />
            </View>

            <View style={styles.headerRow}>
              <Text style={styles.dropdownIcon} onPress={() => changeMonth(-1)}>{'<'}</Text>
              <Text style={styles.dateText}>{currentDate.format('YYYY년 M월')}</Text>
              <Text style={styles.dropdownIcon} onPress={() => changeMonth(1)}>{'>'}</Text>
            </View>

            <View style={styles.calendarContainer} pointerEvents="box-none">
              <View style={styles.weekRow}>
                {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
                    <Text key={d} style={styles.weekDay}>{d}</Text>
                ))}
              </View>

              <View style={styles.daysContainer}>
                {calendarDays.map((date, idx) => {
                  if (!date) return <View key={idx} style={styles.dayWrapper} />;

                  const dateStr = date.format('YYYY-MM-DD');
                  const diary = getDiaryByDate(dateStr);
                  const icon = diary
                      ? emotionImage(diary.emotionType)
                      : require('../assets/grayCircle.png');

                  return (
                      <TouchableOpacity
                          key={idx}
                          style={styles.dayWrapper}
                          onPress={() => {
                            setSelectedDate(dateStr);
                            if (diary) fetchDiaryDetail(diary.diaryId);
                          }}
                          activeOpacity={1}
                      >
                        <Text style={styles.dayText}>{date.date()}</Text>
                        <View style={styles.iconCircle}>
                          <Image source={icon} style={styles.dayIcon} resizeMode="cover" />
                        </View>
                      </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {selectedDate && (
                <View style={styles.diaryCard}>
                  <View style={
                    getDiaryByDate(selectedDate)
                        ? styles.cardHeaderLeft
                        : styles.cardHeaderRight
                  }>
                    {getDiaryByDate(selectedDate) ? (
                        <>
                          <Image
                              source={emotionImage(getDiaryByDate(selectedDate)?.emotionType)}
                              style={styles.emotionIcon}
                          />
                          <View style={{ marginLeft: 12 }}>
                            <Text style={styles.diaryDate}>
                              {dayjs(selectedDate).format('YY.MM.DD')}
                            </Text>
                            <Text style={styles.emotionTag}>
                              {emotionTypeToKorean(getDiaryByDate(selectedDate)?.emotionType)}
                            </Text>
                          </View>
                        </>
                    ) : (
                        <>
                          <View>
                            <Text style={styles.diaryDate}>{dayjs(selectedDate).format('YY.MM.DD')}</Text>
                            <Text style={styles.emotionTag}>작성되지 않음</Text>
                          </View>
                          <Image
                              source={require('../assets/notyet.png')}
                              style={styles.notyetIcon}
                          />
                        </>
                    )}
                  </View>

                  {getDiaryByDate(selectedDate) ? (
                      <>
                        <Text style={styles.diaryContent}>
                          {(() => {
                            const diary = getDiaryByDate(selectedDate);
                            const full = diaryDetailMap[diary.diaryId];
                            const content = full?.transformContent ?? '';
                            return content.length > 60 ? content.slice(0, 60) + '...' : content;
                          })()}
                        </Text>
                        <TouchableOpacity style={styles.diaryButton}>
                          <Text style={styles.diaryButtonText}>일기 보러가기</Text>
                        </TouchableOpacity>
                      </>
                  ) : (
                      <>
                        <Text style={styles.noDiaryText}>아직 일기가 작성되지 않았어요!</Text>
                        <TouchableOpacity style={styles.diaryButton}>
                          <Text style={styles.diaryButtonText}>일기 쓰러가기</Text>
                        </TouchableOpacity>
                      </>
                  )}
                </View>
            )}

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
