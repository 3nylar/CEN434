// News Aggregator Component in React Native

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface NewsItem {
  title?: string;
  description?: string;
  url: string;
  publishedAt?: string;
  source?: {
    name?: string;
  };
}

const NewsAggregator = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'
        );
        const data = await response.json();

        if (data?.status === 'ok') {
          setNews(data.articles || []);
        }
      } catch (err) {
        console.error('Failed to fetch news', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }: { item: NewsItem }) => {
    const date = item.publishedAt
      ? new Date(item.publishedAt).toLocaleDateString()
      : '';

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(item.url)}
      >
        <Text style={styles.headline} numberOfLines={2}>
          {item.title || 'Untitled article'}
        </Text>

        {item.description ? (
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        ) : null}

        <Text style={styles.meta}>
          {item.source?.name || 'Unknown source'}
          {date ? ` · ${date}` : ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Headlines</Text>
      <Text style={styles.subtitle}>Stay informed. No noise.</Text>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9ca3af" />
        </View>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => item.url ?? index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default NewsAggregator;

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
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#111827',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  headline: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f9fafb',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 10,
    lineHeight: 20,
  },
  meta: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
