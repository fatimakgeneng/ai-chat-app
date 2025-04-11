import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ChatScreen from './ChatScreen';

export default function App() {
  return (
    <PaperProvider>
      <ChatScreen />
    </PaperProvider>
  );
}





/*
import React, { useState, useRef } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://ai-chat-app-production.up.railway.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMsg = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
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
        {loading && <ActivityIndicator size="small" color="#555" />}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 50, backgroundColor: '#f5f5f5' },
  chatArea: { flex: 1, marginBottom: 10 },
  inputArea: { flexDirection: 'row', alignItems: 'center' },
  input: {
    flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 20,
    paddingHorizontal: 15, height: 40, backgroundColor: '#fff',
  },
  sendButton: { marginLeft: 10, backgroundColor: '#007AFF', padding: 10, borderRadius: 20 },
  sendText: { color: '#fff' },
  userBubble: {
    alignSelf: 'flex-end', backgroundColor: '#DCF8C6', margin: 5,
    padding: 10, borderRadius: 10,
  },
  botBubble: {
    alignSelf: 'flex-start', backgroundColor: '#ECECEC', margin: 5,
    padding: 10, borderRadius: 10,
  },
  msgText: { fontSize: 16 },
});
*/