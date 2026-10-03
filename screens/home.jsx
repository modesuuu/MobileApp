import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = ({navigation}) => {
    const today = new Date();
    const dateKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const [selectedDate, setSelectedDate] = useState(dateKey(today));
    const [joined, setJoined] = useState(false);
    const [notifOn, setNotifOn] = useState(true);
    const [toast, setToast] = useState(null);
    const toastTimer = useRef(null);

    const showToast = (msg) => {
        setToast(msg);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(null), 1600);
    };

    const days = Array.from({ length: 8 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + (i - 3));
        return {
            key: dateKey(d),
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            date: String(d.getDate()).padStart(2, '0'),
            label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            star: [0, 2, 4].includes(d.getDate()),
        };
    })

    const hours = today.getHours();
    const greetingWord = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';

    const toggleJoin = () => {
        setJoined((prev) => {
            showToast(prev ? 'Kamu keluar dari Daily Challenge' : 'Kamu ikut Daily Challenge!');
            return !prev;
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f9fe" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Pressable
                        onPress={() => navigation.navigate('Profile')}
                        style={({ pressed }) => [styles.userInfo, pressed && styles.pressed]}
                    >
                        <Image source={require('../assets/ava.png')} style={styles.avatar} />
                        <View style={styles.userText}>
                            <Text style={styles.greeting}>{greetingWord}, Raka</Text>
                            <Text style={styles.subGreeting}>Today {today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => showToast('Cari kelas / pelatih')}
                        style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
                    >
                        <Ionicons name="search-outline" size={22} color="#000" />
                    </Pressable>
                </View>

                {/* Challenge card */}
                <Pressable
                    onPress={toggleJoin}
                    style={({ pressed }) => [styles.challengeCard, pressed && styles.pressed]}
                >
                    <View style={styles.challengeContent}>
                        <Text style={styles.challengeTitle}>Daily{'\n'}Challenge</Text>
                        <Text style={styles.challengeSubtitle}>
                            Do your plan before 08:00 AM
                        </Text>

                        <Pressable
                            onPress={() => showToast('7 teman ikut challenge ini')}
                            style={({ pressed }) => [styles.avatarStack, pressed && styles.pressed]}
                        >
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100' }}
                                style={[styles.smallAvatar, { zIndex: 3 }]}
                            />
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100' }}
                                style={[styles.smallAvatar, { marginLeft: -10, zIndex: 2 }]}
                            />
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' }}
                                style={[styles.smallAvatar, { marginLeft: -10, zIndex: 1 }]}
                            />
                            <View style={[styles.badgeMore, { marginLeft: -10, zIndex: 0 }]}>
                                <Text style={styles.badgeText}>+4</Text>
                            </View>
                        </Pressable>

                        {joined && (
                            <View style={styles.joinedBadge}>
                                <Text style={styles.joinedBadgeText}>✓ Joined</Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.flowerDecor}>✳</Text>
                </Pressable>

                {/* Calendar */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.calendarContainer}
                >
                    {days.map((item) => {
                        const isSelected = item.key === selectedDate;
                        return (
                            <Pressable
                                key={item.key}
                                onPress={() => {
                                    setSelectedDate(item.key);
                                    showToast(`Rencana untuk ${item.label}, ${item.date} Apr`);
                                }}
                                style={({ pressed }) => [
                                    styles.dayCard,
                                    isSelected && styles.dayCardSelected,
                                    pressed && styles.pressed,
                                ]}
                            >
                                {item.star && (
                                    <Ionicons
                                        name="star"
                                        size={10}
                                        color={isSelected ? '#fff' : '#000'}
                                        style={{ marginBottom: 2 }}
                                    />
                                )}
                                <Text style={[styles.dayName, isSelected && styles.textSelected]}>
                                    {item.day}
                                </Text>
                                <Text style={[styles.dayDate, isSelected && styles.textSelected]}>
                                    {item.date}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>

                {/* Section header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Plan</Text>
                    <Pressable
                        onPress={() => showToast('Lihat semua rencana')}
                        style={({ pressed }) => [pressed && styles.pressed]}
                    >
                        <Text style={styles.seeAllText}>See all</Text>
                    </Pressable>
                </View>

                {/* Plans */}
                <View style={styles.planGrid}>
                    <Pressable
                        onPress={() => showToast('Detail: Yoga Group • Medium')}
                        style={({ pressed }) => [styles.planCard, styles.orangeCard, pressed && styles.pressed]}
                    >
                        <View>
                            <Text style={styles.intensityText}>Medium</Text>
                            <Text style={styles.planTitle}>Yoga Group</Text>

                            <View style={styles.planDetail}>
                                <Text style={styles.planText}>23 Nov.</Text>
                                <Text style={styles.planText}>14:00 _ 15:00</Text>
                                <Text style={styles.planText}>A5 Room</Text>
                            </View>
                        </View>

                        <Pressable
                            onPress={() => {
                                setNotifOn((prev) => !prev);
                                showToast(notifOn ? 'Notifikasi Yoga Group dimatikan' : 'Notifikasi Yoga Group dinyalakan');
                            }}
                            style={({ pressed }) => [styles.bellWrapper, pressed && styles.pressed]}
                        >
                            <Ionicons
                                name={notifOn ? 'notifications' : 'notifications-off'}
                                size={48}
                                color="#9293ff"
                            />
                            {notifOn && (
                                <View style={styles.bellBadge}>
                                    <Text style={styles.bellBadgeText}>1</Text>
                                </View>
                            )}
                        </Pressable>

                        <Pressable
                            onPress={() => showToast('Profil pelatih: Brook Way')}
                            style={({ pressed }) => [styles.trainerRow, pressed && styles.pressed]}
                        >
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100' }}
                                style={styles.trainerAvatar}
                            />
                            <View>
                                <Text style={styles.trainerLabel}>trainer</Text>
                                <Text style={styles.trainerName}>Brook Way</Text>
                            </View>
                        </Pressable>
                    </Pressable>

                    <View style={styles.rightColumn}>
                        <Pressable
                            onPress={() => showToast('Detail: Balance • Light')}
                            style={({ pressed }) => [styles.planCard, styles.blueCard, pressed && styles.pressed]}
                        >
                            <View>
                                <Text style={styles.intensityText}>Light</Text>
                                <Text style={styles.planTitle}>Balance</Text>

                                <View style={styles.planDetail}>
                                    <Text style={styles.planText}>01 Apr</Text>
                                    <Text style={styles.planText}>14:00 _ 15:00</Text>
                                    <Text style={styles.planText}>A3 Room</Text>
                                </View>
                            </View>
                        </Pressable>

                        <View style={styles.pinkCard}>
                            <Pressable
                                onPress={() => showToast('4 program lainnya')}
                                style={({ pressed }) => [styles.pinkBadge, pressed && styles.pressed]}
                            >
                                <Text style={styles.pinkBadgeText}>+4</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => showToast('Lihat semua program')}
                                style={({ pressed }) => [styles.pinkIconBtn, pressed && styles.pressed]}
                            >
                                <Ionicons name="book-outline" size={16} color="#000" />
                            </Pressable>
                            <Pressable
                                onPress={() => showToast('Filter / pengaturan program')}
                                style={({ pressed }) => [styles.pinkIconBtn, pressed && styles.pressed]}
                            >
                                <Ionicons name="options-outline" size={16} color="#000" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Toast */}
            {toast && (
                <View style={styles.toast}>
                    <Text style={styles.toastText}>{toast}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fe',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    pressed: {
        opacity: 0.75,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    userText: {
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    subGreeting: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    iconButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    challengeCard: {
        backgroundColor: '#c4b5fd',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 20,
    },
    challengeContent: {
        flex: 1,
    },
    challengeTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#000',
        lineHeight: 24,
    },
    challengeSubtitle: {
        fontSize: 11,
        color: '#333',
        marginVertical: 10,
        fontWeight: '500',
    },
    avatarStack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        alignSelf: 'flex-start',
    },
    smallAvatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: '#c4b5fd',
    },
    badgeMore: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#3b385e',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#c4b5fd',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    joinedBadge: {
        marginTop: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#3b385e',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    joinedBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    flowerDecor: {
        fontSize: 90,
        color: '#ffb84d',
        position: 'absolute',
        right: -10,
        top: -10,
    },
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dayCard: {
        width: 48,
        height: 64,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    dayCardSelected: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    dayName: {
        fontSize: 11,
        color: '#888',
        marginBottom: 2,
    },
    dayDate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    textSelected: {
        color: '#fff',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    seeAllText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
    },
    planGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    planCard: {
        borderRadius: 24,
        padding: 16,
    },
    orangeCard: {
        backgroundColor: '#ffc46b',
        width: '48%',
        height: 240,
        justifyContent: 'space-between',
    },
    rightColumn: {
        width: '48%',
        justifyContent: 'space-between',
    },
    blueCard: {
        backgroundColor: '#a5b4fc',
        height: 175,
    },
    pinkCard: {
        backgroundColor: '#ff80bf',
        height: 55,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    intensityText: {
        fontSize: 11,
        color: '#444',
        fontWeight: '500',
    },
    planTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 2,
        marginBottom: 10,
    },
    planDetail: {
        gap: 2,
    },
    planText: {
        fontSize: 11,
        color: '#222',
    },
    bellWrapper: {
        position: 'absolute',
        right: 12,
        bottom: 60,
        alignItems: 'center',
    },
    bellBadge: {
        position: 'absolute',
        top: 5,
        right: 8,
        backgroundColor: '#ff6584',
        borderRadius: 8,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellBadgeText: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold',
    },
    trainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 12,
    },
    trainerAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    trainerLabel: {
        fontSize: 9,
        color: '#555',
    },
    trainerName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    pinkBadge: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    pinkBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    pinkIconBtn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toast: {
        position: 'absolute',
        bottom: 24,
        alignSelf: 'center',
        backgroundColor: '#111827',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },
    toastText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
});
