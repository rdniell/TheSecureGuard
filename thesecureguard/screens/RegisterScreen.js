import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ nama: '', email: '', phone: '', pass: '', conf: '' });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const validate = () => {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;
    if (!form.nama || form.nama.trim().length < 2) e.nama = 'Nama minimal 2 karakter';
    if (!form.email) e.email = 'Email wajib diisi';
    else if (!emailRegex.test(form.email)) e.email = 'Format email tidak valid';
    if (!form.phone) e.phone = 'Nomor HP wajib diisi';
    else if (!/^\d+$/.test(form.phone)) e.phone = 'Hanya boleh angka';
    else if (!phoneRegex.test(form.phone)) e.phone = 'Minimal 10 digit';
    if (!form.pass || form.pass.length < 6) e.pass = 'Password minimal 6 karakter';
    if (!form.conf) e.conf = 'Konfirmasi password wajib diisi';
    else if (form.pass !== form.conf) e.conf = 'Password tidak cocok';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = () => {
    if (!validate()) return;
    navigation.replace('Home', { nama: form.nama });
  };

  const F = ({ label, fkey, placeholder, keyboardType, secureTextEntry, toggle }) => (
    <View style={{ marginBottom: 14 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pwWrap}>
        <TextInput
          style={[styles.input, errors[fkey] && styles.inputErr, form[fkey] && !errors[fkey] && styles.inputOk,
            secureTextEntry !== undefined && { paddingRight: 44 }]}
          placeholder={placeholder}
          placeholderTextColor="#bbb"
          keyboardType={keyboardType || 'default'}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          value={form[fkey]}
          onChangeText={v => set(fkey, v)}
        />
        {toggle && (
          <TouchableOpacity style={styles.eyeBtn} onPress={toggle}>
            <Text style={styles.eyeIcon}>{showPass ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {errors[fkey] && <Text style={styles.errMsg}>{errors[fkey]}</Text>}
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.hero}>
          <View style={styles.logoMark}><Text style={styles.logoText}>SG</Text></View>
          <Text style={styles.heroTitle}>Buat akun baru</Text>
          <Text style={styles.heroSub}>Bergabung dan mulai pengalaman terbaik</Text>
        </View>
        <View style={styles.body}>
          <F label="NAMA LENGKAP" fkey="nama" placeholder="Nama lengkap kamu" />
          <F label="EMAIL" fkey="email" placeholder="nama@email.com" keyboardType="email-address" />
          <F label="NO. TELEPON" fkey="phone" placeholder="08xxxxxxxxxx" keyboardType="phone-pad" />
          <F label="PASSWORD" fkey="pass" placeholder="Min. 6 karakter"
            secureTextEntry={!showPass} toggle={() => setShowPass(!showPass)} />
          <F label="KONFIRMASI PASSWORD" fkey="conf" placeholder="Ulangi password" secureTextEntry={true} />

          <TouchableOpacity style={styles.btnMain} onPress={handleRegister}>
            <Text style={styles.btnMainText}>Buat Akun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGhost} onPress={() => navigation.goBack()}>
            <Text style={styles.btnGhostText}>Sudah punya akun? Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, backgroundColor: '#F5F5F7' },
  hero: { backgroundColor: '#0F0C29', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 24 },
  logoMark: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#7F77DD', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  logoText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  heroTitle: { color: '#fff', fontSize: 22, fontWeight: '600' },
  heroSub: { color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 6 },
  body: { padding: 24 },
  label: { fontSize: 11, color: '#888', fontWeight: '600', letterSpacing: 0.5, marginBottom: 6 },
  pwWrap: { position: 'relative' },
  input: { width: '100%', backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E8E8EC', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: '#1a1a2e' },
  inputErr: { borderColor: '#E24B4A', backgroundColor: '#fff8f8' },
  inputOk: { borderColor: '#1D9E75', backgroundColor: '#f8fffc' },
  errMsg: { fontSize: 11, color: '#E24B4A', marginTop: 4 },
  eyeBtn: { position: 'absolute', right: 12, top: 12 },
  eyeIcon: { fontSize: 16 },
  btnMain: { backgroundColor: '#0F0C29', borderRadius: 14, paddingVertical: 15, alignItems: 'center', marginTop: 8 },
  btnMainText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  btnGhost: { borderWidth: 1.5, borderColor: '#E8E8EC', borderRadius: 14, paddingVertical: 13, alignItems: 'center', marginTop: 10 },
  btnGhostText: { color: '#7F77DD', fontSize: 14, fontWeight: '500' },
});