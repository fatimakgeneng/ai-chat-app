import React, { useState, useRef } from 'react';
import {
  View, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import {
  TextInput, Button, ActivityIndicator, Text, Card, useTheme
} from 'react-native-paper';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();
  const theme = useTheme();

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
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={{ padding: 10, flex: 1 }}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, i) => (
          <Card
            key={i}
            style={{
              marginVertical: 4,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#D0F0C0' : '#EEE'
            }}
          >
            <Card.Content>
              <Text>{msg.text}</Text>
            </Card.Content>
          </Card>
        ))}
        {loading && <ActivityIndicator animating={true} />}
      </ScrollView>

      <View style={{ flexDirection: 'row', padding: 10 }}>
        <TextInput
          mode="outlined"
          placeholder="Type your message"
          value={input}
          onChangeText={setInput}
          style={{ flex: 1, marginRight: 8 }}
        />
        <Button
          mode="contained"
          onPress={sendMessage}
          disabled={loading}
        >
          Send
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
