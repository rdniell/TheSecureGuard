import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
  Animated,
} from 'react-native';

// ── Warna background yang bisa di-toggle ──────────────────────────────
const BG_COLORS = [
  '#0F172A', // slate dark  (default)
  '#1A1035', // deep purple
  '#0D2137', // deep navy
  '#0F2918', // deep green
  '#2D1515', // deep crimson
  '#1C1A00', // deep amber
];

export default function App() {
  // ── STATE ─────────────────────────────────────────────────────────
  const [count,   setCount]   = useState(0);
  const [name,    setName]    = useState('');
  const [bgIndex, setBgIndex] = useState(0);

  // ── HANDLERS ──────────────────────────────────────────────────────
  const handleIncrement = () => setCount(prev => prev + 1);

  // Side Quest: validasi — tidak boleh minus
  const handleDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  // Side Quest: toggle warna background secara acak
  const handleToggleBg = () => {
    let next;
    do { next = Math.floor(Math.random() * BG_COLORS.length); }
    while (next === bgIndex);
    setBgIndex(next);
  };

  const bgColor   = BG_COLORS[bgIndex];
  const isZero    = count === 0;
  const countColor = count === 0 ? '#64748B' : count >= 10 ? '#F59E0B' : '#38BDF8';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="light-content" backgroundColor={bgColor} />

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <View style={styles.header}>
        <Text style={styles.headerLabel}>MAGIC DASHBOARD</Text>
        <Text style={styles.headerSub}>State &amp; Props · Week 4</Text>
      </View>

      {/* ── DIVIDER ──────────────────────────────────────────────── */}
      <View style={styles.divider} />

      {/* ── COUNTER SECTION ──────────────────────────────────────── */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>⚡  COUNTER SYSTEM</Text>

        <Text style={[styles.countDisplay, { color: countColor }]}>
          {count}
        </Text>

        {isZero && (
          <Text style={styles.zeroHint}>Tidak bisa minus dari 0</Text>
        )}

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[styles.counterBtn, styles.btnMinus, isZero && styles.btnDisabled]}
            onPress={handleDecrement}
            activeOpacity={isZero ? 1 : 0.75}
          >
            <Text style={styles.counterBtnText}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.counterBtn, styles.btnPlus]}
            onPress={handleIncrement}
            activeOpacity={0.75}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── GREETING SECTION ─────────────────────────────────────── */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>👤  GREETING FORM</Text>

        <TextInput
          style={styles.input}
          placeholder="Ketik namamu di sini..."
          placeholderTextColor="#475569"
          value={name}
          onChangeText={setName}
          maxLength={30}
        />

        <View style={styles.greetingBox}>
          <Text style={styles.greetingText}>
            {name.trim() === ''
              ? '✨  Siapa namamu?'
              : `👋  Halo, ${name}!`}
          </Text>
        </View>
      </View>

      {/* ── TOGGLE COLOR ─────────────────────────────────────────── */}
      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={handleToggleBg}
        activeOpacity={0.8}
      >
        <Text style={styles.toggleBtnText}>🎨  Ganti Warna Background</Text>
      </TouchableOpacity>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <Text style={styles.footer}>
        Revael Daniel Halawa · 243303621203
      </Text>
    </SafeAreaView>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  // Header
  header: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerLabel: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 4,
  },
  headerSub: {
    fontSize: 11,
    color: '#38BDF8',
    letterSpacing: 2,
    marginTop: 4,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#1E293B',
    marginBottom: 20,
  },

  // Card
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#38BDF8',
    letterSpacing: 2,
    marginBottom: 16,
  },

  // Counter
  countDisplay: {
    fontSize: 88,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 96,
  },
  zeroHint: {
    textAlign: 'center',
    fontSize: 11,
    color: '#EF4444',
    marginTop: -4,
    marginBottom: 4,
    fontWeight: '600',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 12,
  },
  counterBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMinus: {
    backgroundColor: '#1E3A5F',
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  btnPlus: {
    backgroundColor: '#38BDF8',
  },
  btnDisabled: {
    backgroundColor: '#1E293B',
    borderColor: '#334155',
    opacity: 0.4,
  },
  counterBtnText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F8FAFC',
    lineHeight: 32,
  },

  // Greeting
  input: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 12,
  },
  greetingBox: {
    backgroundColor: '#0F172A',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#38BDF8',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F8FAFC',
  },

  // Toggle Button
  toggleBtn: {
    backgroundColor: '#7C3AED',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#A78BFA',
  },
  toggleBtnText: {
    color: '#F8FAFC',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
  },

  // Footer
  footer: {
    textAlign: 'center',
    fontSize: 10,
    color: '#334155',
    paddingBottom: 8,
    letterSpacing: 1,
  },
});