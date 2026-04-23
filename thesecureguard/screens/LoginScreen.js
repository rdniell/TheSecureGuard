import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) e.email = 'danielrevael21@gmail.com';
    else if (!emailRegex.test(email)) e.email = 'Format email tidak valid';
    if (!password) e.password = '123456';
    else if (password.length < 6) e.password = 'Password minimal 6 karakter';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    navigation.replace('Home', { nama: email.split('@')[0] });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.hero}>
          <View style={styles.logoMark}>
            <Text style={styles.logoText}></Text>
          </View>
          <Text style={styles.heroTitle}>Selamat datang!</Text>
          <Text style={styles.heroSub}>Masuk untuk melanjutkan aktivitas kamu</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputErr, email && !errors.email && styles.inputOk]}
            placeholder="nama@email.com"
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errMsg}>{errors.email}</Text>}

          <Text style={[styles.label, { marginTop: 14 }]}>PASSWORD</Text>
          <View style={styles.pwWrap}>
            <TextInput
              style={[styles.input, { paddingRight: 44 }, errors.password && styles.inputErr]}
              placeholder="Masukkan password"
              placeholderTextColor="#bbb"
              secureTextEntry={!showPass}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPass(!showPass)}>
              <Text style={styles.eyeIcon}>{showPass ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errMsg}>{errors.password}</Text>}

          <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 4 }}>
            <Text style={styles.forgotText}>Lupa password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnMain} onPress={handleLogin}>
            <Text style={styles.btnMainText}>Masuk Sekarang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnGhost} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnGhostText}>Belum punya akun? Daftar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, backgroundColor: '#F5F5F7' },
  hero: {
    backgroundColor: '#0F0C29', paddingTop: 60, paddingBottom: 40,
    paddingHorizontal: 24,
  },
  logoMark: {
    width: 44, height: 44, borderRadius: 14,
    backgroundColor: '#7F77DD',
    alignItems: 'center', justifyContent: 'center', marginBottom: 18,
  },
  logoText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  heroTitle: { color: '#fff', fontSize: 22, fontWeight: '600', lineHeight: 30 },
  heroSub: { color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 6 },
  body: { padding: 24, flex: 1 },
  label: { fontSize: 11, color: '#888', fontWeight: '600', letterSpacing: 0.5, marginBottom: 6 },
  input: {
    width: '100%', backgroundColor: '#fff',
    borderWidth: 1.5, borderColor: '#E8E8EC',
    borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 14, color: '#1a1a2e',
  },
  inputErr: { borderColor: '#E24B4A', backgroundColor: '#fff8f8' },
  inputOk: { borderColor: '#1D9E75', backgroundColor: '#f8fffc' },
  errMsg: { fontSize: 11, color: '#E24B4A', marginTop: 4 },
  pwWrap: { position: 'relative' },
  eyeBtn: { position: 'absolute', right: 12, top: 12 },
  eyeIcon: { fontSize: 16 },
  forgotText: { fontSize: 12, color: '#7F77DD', marginTop: 4 },
  btnMain: {
    backgroundColor: '#0F0C29', borderRadius: 14,
    paddingVertical: 15, alignItems: 'center', marginTop: 20,
  },
  btnMainText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  btnGhost: {
    borderWidth: 1.5, borderColor: '#E8E8EC', borderRadius: 14,
    paddingVertical: 13, alignItems: 'center', marginTop: 10,
  },
  btnGhostText: { color: '#7F77DD', fontSize: 14, fontWeight: '500' },
});