import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#17a65b', '#007f3d']}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 0.8, y: 0.9 }}
          style={styles.headerGradient}
        />

        <View style={styles.profileSection}>
          <Image
            source={require('../assets/ava.png')}
            style={styles.avatarImage}
          />
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <FontAwesome5 name="bookmark" size={16} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.nameSection}>
          <Text style={styles.fullName}>Raka Alfarezi</Text>
          <Text style={styles.username}>@raka_alfrezi</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.statIconHeader}>
              <FontAwesome5 name="star" size={18} color="#000" solid />
              <Text style={styles.statValue}>4.9</Text>
            </View>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statIconHeader}>
              <MaterialCommunityIcons name="newspaper-variant" size={20} color="#000" />
              <Text style={styles.statValue}>25</Text>
            </View>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statIconHeader}>
              <FontAwesome5 name="user-alt" size={18} color="#000" />
              <Text style={styles.statValue}>12.4K</Text>
            </View>
            <Text style={styles.statLabel}>Followers</Text> 
          </View>
        </View>

        <TouchableOpacity style={styles.contactButton}>
          <View style={styles.arrowIconBackground}>
            <FontAwesome5 name="arrow-right" size={14} color="#000" />
          </View>
          <Text style={styles.contactButtonText}>Get in Touch</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  cardContainer: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 380,
    borderRadius: 24,
    padding: 15,
    paddingBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },

  headerGradient: {
    width: '100%',
    height: 110,
    borderRadius: 20,
    marginBottom: -45,
  },

  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    marginBottom: 10,
  },

  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#f5f5f5',
  },

  actionButtonsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 5,
    marginTop: 60,
  },

  followButton: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 70,
    alignItems: 'center',
  },

  followButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'sans-serif-medium',
  },
  
  saveButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  nameSection: {
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  fullName: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'sans-serif-medium',
    marginBottom: 2,
  },
  username: {
    fontSize: 13,
    color: '#888',
    fontFamily: 'sans-serif',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 5,
    marginBottom: 20,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 7,
  },
  statValue: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'sans-serif-medium',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'sans-serif',
  },

  contactButton: {
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 6,
    height: 50,
    marginHorizontal: 10,
  },
  arrowIconBackground: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 6,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'sans-serif-medium',
    textTransform: 'none',
  },
});