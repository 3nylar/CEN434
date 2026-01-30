// Basic Calculator Component in React Native

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<string>('—');

  const calculate = (operation: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    let value: number | string;

    switch (operation) {
      case '+':
        value = a + b;
        break;
      case '-':
        value = a - b;
        break;
      case '*':
        value = a * b;
        break;
      case '/':
        value = b !== 0 ? a / b : 'Error';
        break;
      default:
        return;
    }

    setResult(String(value));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Calculator</Text>
      <Text style={styles.subtitle}>Simple. Quiet. Accurate.</Text>

      <View style={styles.inputsRow}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#6b7280"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#6b7280"
          value={num2}
          onChangeText={setNum2}
        />
      </View>

      <View style={styles.buttonGrid}>
        {['+', '-', '*', '/'].map(op => (
          <TouchableOpacity
            key={op}
            style={styles.button}
            onPress={() => calculate(op)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Result</Text>
        <Text style={styles.resultValue}>{result}</Text>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  card: {
    padding: 24,
    marginHorizontal: 20,
    backgroundColor: '#111827', // deep slate
    borderRadius: 18,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f9fafb',
  },
  subtitle: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 20,
  },
  inputsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f2933',
    backgroundColor: '#020617',
    paddingHorizontal: 14,
    fontSize: 18,
    color: '#f9fafb',
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  button: {
    flex: 1,
    height: 52,
    marginHorizontal: 4,
    borderRadius: 14,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#e5e7eb',
  },
  resultBox: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  resultLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  resultValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f9fafb',
  },
});
