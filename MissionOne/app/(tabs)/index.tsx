import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.mission}>
          Mission 1: First Blood & Personal Touch
        </Text>

        <Text style={styles.name}>Revael Daniel Halawa</Text>

        <Text style={styles.nim}>NIM: 243303621203</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🎓 SISTEM INFORMASI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050D1A",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    backgroundColor: "#0A1628",
    padding: 30,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3B82F6",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 20,
  },

  mission: {
    color: "#5B8DD9",
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },

  name: {
    color: "#60A5FA",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 1,
    textShadowColor: "#3B82F6",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },

  nim: {
    color: "#00E5FF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 24,
    letterSpacing: 2,
    textShadowColor: "#00E5FF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  button: {
    backgroundColor: "#0D2144",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#60A5FA",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },

  buttonText: {
    color: "#60A5FA",
    fontWeight: "800",
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});
