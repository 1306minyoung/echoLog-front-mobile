import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6F0E7',
        paddingHorizontal: 16,
        paddingTop: 60,
      },
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      },
      logo: {
        width: 70,
        height: 24,
        resizeMode: 'contain',
      },
      dateSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      },
      dateText: {
        fontSize: 20,
        fontWeight: '600',
      },
      dropdownIcon: {
        fontSize: 16,
        marginLeft: 6,
        color: '#444',
      },
      calendarContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
      },
      icon: {
        width: 24,
        height: 24,
        marginTop: 4,
      },
      selectedDay: {
        backgroundColor: '#C6E2D8',
        borderRadius: 20,
        padding: 4,
      },
      selectedDayText: {
        fontWeight: 'bold',
        color: '#000',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalBox: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        width: '80%',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
      },
      yearItem: {
        padding: 10,
      },
      yearText: {
        fontSize: 16,
      },
      monthItem: {
        padding: 10,
      },
      monthText: {
        fontSize: 16,
      },
      selected: {
        fontWeight: 'bold',
        color: 'green',
      },
      confirmBtn: {
        backgroundColor: '#76A488',
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
      },
});