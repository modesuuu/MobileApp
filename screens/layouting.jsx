import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layouting() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>

          {/* Header Profile */}
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <Image source={require('../assets/ava.png')} style={styles.avatar} />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.nameRow}>
                  <Text style={styles.username}>Raka Alfarezi</Text>
                  <Text style={styles.heartBadge}></Text>
                </View>
                <Text style={styles.timeCategory}>4112755201250007 ・ Informatika</Text>
              </View>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeText}>material</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreButton}>
                <Text style={styles.moreIcon}>⋮</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Heading */}
          <Text style={styles.title}>
            Pengertian layouting dalam react native
          </Text>

          {/* Deskripsi Teks */}
          <Text style={styles.description}>
            Sistem layouting di React Native berpusat pada Flexbox dengan arah bawaan vertikal (flexDirection: 'column'), di mana tata letak disusun dengan membagi elemen menjadi kontainer luar dan item di dalamnya, serta diatur posisinya menggunakan justifyContent untuk meratakan elemen searah sumbu utama, alignItems untuk meratakan elemen secara menyilang (seperti menyejajarkan teks dan ikon secara vertikal), serta memanfaatkan kombinasi width, height, borderRadius bernilai setengahnya,
          </Text>

          {/* Gambar */}
          <Image
            source={require('../assets/flexbox.png')}
            style={styles.articleImage}
            resizeMode="cover"
          />

          {/*  */}
          <TouchableOpacity style={styles.readMoreContainer}>
            <Text style={styles.readMoreText}>React native</Text>
          </TouchableOpacity>

          {/* Reaksi / Likes / Badges */}
          {/* <View style={styles.reactionsContainer}>
            <View style={[styles.reactionBadge, styles.likeBadge]}>
              <Text style={styles.reactionEmoji}>🩷</Text>
              <Text style={styles.likeText}>1328</Text>
            </View>

            <View style={styles.reactionBadge}>
              <Text style={styles.reactionEmoji}>✌️</Text>
              <Text style={styles.reactionText}>458</Text>
            </View>

            <View style={styles.reactionBadge}>
              <Text style={styles.reactionEmoji}>🥺</Text>
              <Text style={styles.reactionText}>23</Text>
            </View>

            <TouchableOpacity style={styles.addReactionButton}>
              <Text style={styles.plusIcon}>+</Text>
            </TouchableOpacity>
          </View> */}

        </View>

        <View style={styles.card}>
          {/* Header Profile */}
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <Image source={require('../assets/ava.png')} style={styles.avatar} />
              </View>
              <View style={styles.userTextContainer}>
                <View style={styles.nameRow}>
                  <Text style={styles.username}>Raka Alfarezi</Text>
                  <Text style={styles.heartBadge}></Text>
                </View>
                <Text style={styles.timeCategory}>4112755201250007 ・ Informatika</Text>
              </View>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeText}>material</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreButton}>
                <Text style={styles.moreIcon}>⋮</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Heading */}
          <Text style={styles.title}>
            Konsep Dasar Styling di React Native
          </Text>

          {/* Deskripsi Teks */}
          <Text style={styles.description}>
            Berbeda dengan pengembangan web yang menggunakan file CSS terpisah, React Native menggunakan JavaScript Objects untuk mengatur gaya (styling) komponen.

            Meskipun nama-nama propertinya sangat mirip dengan CSS web (seperti backgroundColor, fontSize, padding), React Native menerapkan aturan camelCase dan tidak menggunakan satuan unit seperti px, em, atau rem. Semua angka ukuran di React Native secara bawaan dihitung berdasarkan Density-independent Pixels (dp).
          </Text>

          {/* Gambar */}
          <Image
            source={require('../assets/styling.png')}
            style={styles.articleImage}
            resizeMode="cover"
          />

          {/*  */}
          <TouchableOpacity style={styles.readMoreContainer}>
            <Text style={styles.readMoreText}>React native</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#FFE6E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userTextContainer: {
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: '700',
    fontSize: 15,
    color: '#1A1A1A',
  },
  heartBadge: {
    fontSize: 12,
    marginLeft: 4,
  },
  timeCategory: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribeButton: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  subscribeText: {
    fontSize: 12,
    color: '#FF4D8D',
    fontWeight: '500',
  },
  moreButton: {
    padding: 4,
  },
  moreIcon: {
    fontSize: 20,
    color: '#8E8E93',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
    lineHeight: 26,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4a4a4a',
    textAlign: 'left',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  articleImage: {
    width: '100%',
    height: 230,
    borderRadius: 16,
    marginBottom: 14,
  },
  readMoreContainer: {
    marginBottom: 16,
  },
  readMoreText: {
    color: '#FF4D8D',
    fontSize: 14,
    fontWeight: '500',
  }
})