import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0E7',
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  backButton: {
    fontSize: 24,
    color: '#555',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A715A',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  barItem: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  barArea: {
    width: 30,
    height: 120,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 5,
  },
  bar: {
    width: '100%',
    backgroundColor: '#D4A5A5',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  barHighlight: {
    backgroundColor: '#B56C6C',
  },
  barCount: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
  barLabel: {
    fontSize: 14,
    color: '#4A715A',
    marginTop: 3,
    fontWeight: '500',
  },
  summaryText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
    color: '#333',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#4A715A',
  },
  feedbackCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  feedbackText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#333',
  },
  logoImage: {
    width: 80,       // 원본 비율 맞게 조절
    height: 20,
    resizeMode: 'contain',
  },
});
