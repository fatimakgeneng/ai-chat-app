import React, { useState, useRef } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform
} from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  // ✅ Replace with your machine’s actual IP
  const API_URL = 'http://192.168.100.5:5000/chat';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { text: data.reply || '🤖 Sorry, I didn’t get that.', sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      console.error('[❌ ERROR]', err);
      setMessages(prev => [...prev, { text: '❌ Network error. Please try again.', sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.chatArea}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, i) => (
          <View key={i} style={msg.sender === 'user' ? styles.userBubble : styles.botBubble}>
            <Text style={styles.msgText}>{msg.text}</Text>
          </View>
        ))}
        {loading && (
          <View style={styles.botBubble}>
            <Text style={styles.msgText}>🤖 Typing...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#f5f5f5' },
  chatArea: { flex: 1, paddingHorizontal: 10 },
  inputArea: {
    flexDirection: 'row', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: '#ddd',
    paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#fff',
  },
  input: {
    flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 20,
    paddingHorizontal: 15, height: 40, backgroundColor: '#fff', color: '#000',
  },
  sendButton: {
    marginLeft: 10, backgroundColor: '#007AFF',
    paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20,
  },
  sendText: { color: '#fff', fontWeight: '600' },
  userBubble: {
    alignSelf: 'flex-end', backgroundColor: '#DCF8C6',
    marginVertical: 5, padding: 10, borderRadius: 10, maxWidth: '80%',
  },
  botBubble: {
    alignSelf: 'flex-start', backgroundColor: '#ECECEC',
    marginVertical: 5, padding: 10, borderRadius: 10, maxWidth: '80%',
  },
  msgText: { fontSize: 16, color: '#000' },
});
