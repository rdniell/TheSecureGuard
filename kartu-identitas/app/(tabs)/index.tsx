import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

// 1. Define PHOTO at the module level (Keep this)
const PHOTO = require('../../assets/images/fotoProfil.jpeg');

export default function KartuIdentitas() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <View style={styles.header}>
          <Text style={styles.headerText}>KARTU IDENTITAS MAHASISWA</Text>
          <Text style={styles.headerSub}>Sistem Informasi · 4 Pagi A</Text>
        </View>

        <Image source={PHOTO} style={styles.avatar} resizeMode="cover" />

        <Text style={styles.nama}>Revael Daniel Halawa</Text>
        <Text style={styles.nim}>NIM: 243303621203</Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>JURUSAN</Text>
            <Text style={styles.infoValue}>Sistem Informasi</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            "Siap untuk apapun yang terjadi."
          </Text>
          <Text style={styles.quoteAuthor}>— In omnia paratus</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    width: '100%',
    maxWidth: 380,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    backgroundColor: '#3d3d3d',
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  headerSub: {
    color: '#BBBBBB',
    fontSize: 11,
    marginTop: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#3d3d3d',
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
    marginTop: 28,
  },
  nama: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 16,
    marginHorizontal: 24,
  },
  nim: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFFFFF',
    backgroundColor: '#3d3d3d',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 8,
    fontWeight: '600',
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginHorizontal: 24,
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#999999',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2A2A2A',
    textAlign: 'center',
  },
  quoteBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#3d3d3d',
  },
  quoteText: {
    fontSize: 13,
    color: '#444444',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    fontSize: 11,
    color: '#888888',
    marginTop: 8,
    fontWeight: '600',
    textAlign: 'right',
  },
});