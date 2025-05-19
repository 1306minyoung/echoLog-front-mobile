import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  whiteBox: {
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop:70,
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 20,
    minHeight: screenHeight, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 }, 
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8, 
  },
  
  container: {
    flex: 1,
    backgroundColor: '#E6F0E7',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    fontSize: 24,
    color: '#555',
    fontWeight: 600,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    borderWidth: 0.8,
    borderColor: '#C6C6C6',
  },
  barItem: {
    alignItems: 'center',
    width: 40,
  },
  barArea: {
    width: 30,
    height: 120,
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginBottom: 5,
    position: 'relative',
    marginTop: 20,
  },
  barLine: {
    position: 'absolute',
    bottom: 48,
    left: 20,
    right: 20,
    height: 1,
    backgroundColor: '#C6C6C6',
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
  barLabel: {
    fontSize: 14,
    color: '#4A715A',
    marginTop: 3,
    fontWeight: '500',
  },
  barCountInBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 12,
    color: '#739774',
    fontWeight:'600',
    textAlign: 'center',
    marginBottom: 2, 
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
    borderWidth: 0.8,
    borderColor: '#C6C6C6',
  },
  feedbackText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#333',
  },
  logoImage: {
    width: 60,  
    height: 40,
    resizeMode: 'contain',
  },
  feedbackImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
