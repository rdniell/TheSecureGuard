import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { nama } = route.params || { nama: 'User' };
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F7' }}>
      <View style={styles.hero}>
        <Text style={styles.name}>Halo, {nama}!</Text>
        <Text style={styles.sub}>Selamat datang di Secure Guard</Text>
        <View style={styles.badge}>
          <View style={styles.dot} />
          <Text style={styles.badgeText}>Terverifikasi</Text>
        </View>
      </View>

      <View style={styles.statRow}>
        {[['Saldo', 'Rp 0', '+0% bulan ini'], ['Transaksi', '0', 'Aktif hari ini']].map(([l, v, c]) => (
          <View key={l} style={styles.statCard}>
            <Text style={styles.statLabel}>{l}</Text>
            <Text style={styles.statVal}>{v}</Text>
            <Text style={styles.statChange}>{c}</Text>
          </View>
        ))}
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        {[
          { label: 'Tambah Dana', color: '#EEEDFE', textColor: '#7F77DD' },
          { label: 'Riwayat Aktivitas', color: '#E1F5EE', textColor: '#1D9E75' },
        ].map(item => (
          <TouchableOpacity key={item.label} style={styles.menuItem}>
            <View style={[styles.miIcon, { backgroundColor: item.color }]}>
              <Text style={{ color: item.textColor, fontWeight: '700' }}>+</Text>
            </View>
            <Text style={styles.miLabel}>{item.label}</Text>
            <Text style={{ color: '#bbb', fontSize: 18 }}>›</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.replace('Login')}>
          <View style={[styles.miIcon, { backgroundColor: '#FCEBEB' }]}>
            <Text style={{ color: '#E24B4A', fontWeight: '700' }}>→</Text>
          </View>
          <Text style={[styles.miLabel, { color: '#E24B4A' }]}>Keluar</Text>
          <Text style={{ color: '#E24B4A', fontSize: 18 }}>›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: '#0F0C29', paddingTop: 60, paddingBottom: 32, paddingHorizontal: 24 },
  avatar: { width: 52, height: 52, borderRadius: 18, backgroundColor: '#7F77DD', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  name: { color: '#fff', fontSize: 20, fontWeight: '600', marginTop: 12 },
  sub: { color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 4 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(29,158,117,0.2)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginTop: 12 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#1D9E75' },
  badgeText: { color: '#5DCAA5', fontSize: 11 },
  statRow: { flexDirection: 'row', gap: 10, padding: 16 },
  statCard: { flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: '#EBEBEF' },
  statLabel: { fontSize: 10, color: '#aaa', fontWeight: '600', letterSpacing: 0.3, textTransform: 'uppercase' },
  statVal: { fontSize: 20, fontWeight: '600', color: '#0F0C29', marginTop: 4 },
  statChange: { fontSize: 10, color: '#1D9E75', marginTop: 2 },
  menuItem: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, backgroundColor: '#fff', borderRadius: 14, marginBottom: 8, borderWidth: 1, borderColor: '#EBEBEF' },
  miIcon: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  miLabel: { flex: 1, fontSize: 14, fontWeight: '500', color: '#1a1a2e' },
});