// Personal Budget App Component in React Native

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Expense {
  id: number;
  desc: string;
  amount: number;
}

const PersonalBudgetApp = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    const parsedIncome = parseFloat(income) || 0;
    setBalance(parsedIncome - totalExpenses);
  }, [income, expenses]);

  const addExpense = () => {
    const parsedAmount = parseFloat(amount);
    if (!description || isNaN(parsedAmount)) return;

    setExpenses(prev => [
      ...prev,
      { id: Date.now(), desc: description, amount: parsedAmount },
    ]);

    setDescription('');
    setAmount('');
  };

  const fetchBankTransactions = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      const mockExpenses = data.slice(0, 3).map((_: any, i: number) => ({
        id: Date.now() + i,
        desc: `Bank transaction ${i + 1}`,
        amount: Math.random() * 100,
      }));

      setExpenses(prev => [...prev, ...mockExpenses]);
    } catch (err) {
      console.error(err);
    }
  };

  const renderExpense = ({ item }: { item: Expense }) => (
    <View style={styles.expenseCard}>
      <Text style={styles.expenseDesc}>{item.desc}</Text>
      <Text style={styles.expenseAmount}>₦{item.amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Overview</Text>
      <Text style={styles.subtitle}>Track income and spending</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceValue}>₦{balance.toFixed(2)}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Monthly income"
        placeholderTextColor="#6b7280"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />

      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="Expense description"
        placeholderTextColor="#6b7280"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense amount"
        placeholderTextColor="#6b7280"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={addExpense}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={fetchBankTransactions}
        >
          <Text style={styles.secondaryButtonText}>Sync Bank</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={item => item.id.toString()}
        renderItem={renderExpense}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16 }}
      />
    </View>
  );
};

export default PersonalBudgetApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    backgroundColor: '#020617',
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
  balanceCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f9fafb',
    marginTop: 4,
  },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
    backgroundColor: '#020617',
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#f9fafb',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#1f2937',
    marginVertical: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    flex: 1,
    height: 48,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
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
  expenseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
    marginBottom: 10,
  },
  expenseDesc: {
    fontSize: 15,
    color: '#e5e7eb',
  },
  expenseAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#f9fafb',
  },
});
