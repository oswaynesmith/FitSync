import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function LogbookScreen() {
    const logEntries = [
        { id: '1', date: '2023-10-01', activity: 'Running', duration: '30 mins' },
        { id: '2', date: '2023-10-02', activity: 'Cycling', duration: '45 mins' },
        { id: '3', date: '2023-10-03', activity: 'Yoga', duration: '20 mins' },
    ];

    const renderItem = ({ item }: { item: typeof logEntries[0] }) => (
        <View style={styles.logEntry}>
            <Text style={styles.logText}>{item.date}</Text>
            <Text style={styles.logText}>{item.activity}</Text>
            <Text style={styles.logText}>{item.duration}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logbook</Text>
            <FlatList
                data={logEntries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
    logEntry: {
        backgroundColor: '#3a3f47',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    logText: {
        color: '#fff',
        fontSize: 16,
    },
});
