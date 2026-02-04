// Simple Text Editor Component in React Native

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SimpleTextEditor = () => {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');

  const saveText = () => setSavedText(text);
  const clearText = () => {
    setText('');
    setSavedText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Editor</Text>
      <Text style={styles.subtitle}>Write. Save. Stay focused.</Text>

      <TextInput
        style={styles.editor}
        multiline
        value={text}
        onChangeText={setText}
        placeholder="Start typing…"
        placeholderTextColor="#6b7280"
        textAlignVertical="top"
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.primaryButton} onPress={saveText}>
          <Text style={styles.primaryButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={clearText}>
          <Text style={styles.secondaryButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {savedText ? (
        <View style={styles.savedCard}>
          <Text style={styles.savedLabel}>Saved Text</Text>
          <Text style={styles.savedContent}>{savedText}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SimpleTextEditor;


const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 20,
    backgroundColor: '#020617',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f9fafb',
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 20,
  },
  editor: {
    minHeight: 160,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
    backgroundColor: '#020617',
    padding: 16,
    fontSize: 16,
    color: '#f9fafb',
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#f9fafb',
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#9ca3af',
    fontWeight: '600',
  },
  savedCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  savedLabel: {
    fontSize: 12,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  savedContent: {
    fontSize: 15,
    color: '#e5e7eb',
    lineHeight: 22,
  },
});
