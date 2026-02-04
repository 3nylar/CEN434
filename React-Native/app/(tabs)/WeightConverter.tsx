import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const WeightConverter = () => {
  const [kg, setKg] = useState('');

  const parsedKg = parseFloat(kg);
  const pounds =
    !isNaN(parsedKg) && parsedKg > 0
      ? (parsedKg * 2.20462).toFixed(2)
      : null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}> Weight Converter</Text>
      <Text style={styles.subtitle}>
        Convert kilograms to pounds instantly
      </Text>

      <Text style={styles.label}>Kilograms</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 70"
        placeholderTextColor="#9ca3af"
        keyboardType="numeric"
        value={kg}
        onChangeText={setKg}
      />

      <View style={styles.resultContainer}>
        {pounds ? (
          <Text style={styles.resultText}>
            {pounds} <Text style={styles.unit}>lbs</Text>
          </Text>
        ) : (
          <Text style={styles.hintText}>
            Enter a valid weight to see results
          </Text>
        )}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.screen}>
      <WeightConverter />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0f172a', // deep slate
  },
  card: {
    padding: 24,
    marginHorizontal: 20,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#cbd5f5',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#e5e7eb',
    marginBottom: 6,
  },
  input: {
    height: 52,
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 18,
    color: '#f8fafc',
    marginBottom: 20,
  },
  resultContainer: {
    minHeight: 40,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#38bdf8',
  },
  unit: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7dd3fc',
  },
  hintText: {
    fontSize: 14,
    color: '#94a3b8',
  },
});
