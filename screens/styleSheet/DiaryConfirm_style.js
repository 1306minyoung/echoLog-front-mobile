import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6F0E7',
    },
    whiteBox: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      marginTop: 70,
      paddingHorizontal: 20,
      paddingBottom: 40,
      minHeight: '100%',
    },
    navRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    backButton: {
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 12,
    },
    date: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    diaryContentBox: {
      marginTop: 24,
      padding: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 20,
      borderWidth: 0.7,
      borderColor: '#C6C6C6',
    },
    diaryText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 32,
    },
    cancelButton: {
      backgroundColor: '#EDEDED',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 14,
    },
    cancelText: {
      fontSize: 14,
      color: '#444',
    },
    confirmButton: {
      backgroundColor: '#DBA5A5',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 14,
    },
    confirmText: {
      fontSize: 14,
      color: '#FFF',
    },
  });