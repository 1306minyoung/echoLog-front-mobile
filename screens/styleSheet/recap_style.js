import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F9F6',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        marginRight: 10,
    },
    logo: {
        width: 120,
        height: 30,
        resizeMode: 'contain',
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 30,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        minHeight: 220,
    },
    barItem: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 50,
    },
    barArea: {
        height: 100, // ✅ 막대그래프 높이 기준 고정!
        justifyContent: 'flex-end',
    },
    bar: {
        width: 16,
        backgroundColor: '#F2B3B5',
        borderRadius: 8,
        minHeight: 8,
    },
    barHighlight: {
        backgroundColor: '#E06565',
    },
    barCount: {
        fontSize: 14,
        marginTop: 6,
        color: '#333',
    },
    barLabel: {
        fontSize: 13,
        marginTop: 4,
        color: '#444',
        textAlign: 'center',
    },
    summaryText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#E06565',
    },
    feedbackCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    feedbackText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    feedbackImage: {
        width: 60,
        height: 60,
        marginLeft: 12,
    },
});
