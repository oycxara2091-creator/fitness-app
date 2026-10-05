import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const MOTIVATIONS = [
  { id: 1, emoji: '💪', label: 'Набрать форму' },
  { id: 2, emoji: '✨', label: 'Улучшить внешний вид' },
  { id: 3, emoji: '😼', label: 'Чувствовать себя уверенно' },
  { id: 4, emoji: '🏃', label: 'Лучшая спортивная способность' },
  { id: 5, emoji: '😊', label: 'Снять стресс' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '14%' }]} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Что мотивирует вас{'\n'}больше всего?
        </Text>
        {MOTIVATIONS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.option, selected === item.id && styles.optionSelected]}
            onPress={() => setSelected(item.id)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.optionText}>{item.label}</Text>
            <View style={[styles.radio, selected === item.id && styles.radioSelected]}>
              {selected === item.id && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.nextButton, !selected && styles.nextButtonDisabled]}
        disabled={!selected}
        onPress={() => alert('Идём дальше!')}
      >
        <Text style={styles.nextButtonText}>Следующее</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E8E8E8',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 2,
  },
  progressFill: {
    height: 4,
    backgroundColor: '#22C55E',
    borderRadius: 2,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
    lineHeight: 36,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },
  optionSelected: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  emoji: {
    fontSize: 24,
    marginRight: 14,
  },
  optionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4D4D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#22C55E',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
  },
  nextButton: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
