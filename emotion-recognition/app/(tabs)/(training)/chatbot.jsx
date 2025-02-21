import React, { useState, useCallback, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const API_KEY = '';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const STORAGE_KEY = 'chatHistory';
const MESSAGE_LIMIT = 50; // Limit stored messages to prevent excessive storage use

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  // Load chat history on component mount
  useEffect(() => {
    loadMessages();
  }, []);

  // Save messages whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages]);

  const loadMessages = async () => {
    try {
      const savedMessages = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
        // Update conversation history for API context
        setConversationHistory(
          parsedMessages.map(msg => ({
            role: msg.user._id === 1 ? 'user' : 'assistant',
            content: msg.text,
          })).reverse()
        );
      } else {
        // Set initial welcome message
        const welcomeMessage = {
          _id: 1,
          text: 'Hello! How can I help you today?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'AI Assistant',
            avatar: 'https://placehold.co/100x100',
          },
        };
        setMessages([welcomeMessage]);
        saveMessages([welcomeMessage]);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const saveMessages = async (messagesToSave) => {
    try {
      // Keep only the latest MESSAGE_LIMIT messages
      const limitedMessages = messagesToSave.slice(-MESSAGE_LIMIT);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(limitedMessages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setMessages([]);
      setConversationHistory([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  const onSend = useCallback(async (newMessages = []) => {
    setIsLoading(true);
    const userMessage = newMessages[0];

    // Update messages immediately for UI
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );

    // Update conversation history
    const updatedHistory = [
      ...conversationHistory,
      { role: 'user', content: userMessage.text }
    ].slice(-10); // Keep last 10 messages for context
    setConversationHistory(updatedHistory);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': 'https://your-app.com',
          'X-Title': 'React Native Chat App',
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-small-24b-instruct-2501:free',
          messages: updatedHistory, // Send conversation history for context
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const aiMessage = {
          _id: Math.random().toString(),
          text: data.choices[0].message.content,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'AI Assistant',
            avatar: 'https://placehold.co/100x100',
          },
        };

        // Update messages and conversation history
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, [aiMessage]),
        );
        setConversationHistory([
          ...updatedHistory,
          { role: 'assistant', content: aiMessage.text }
        ]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        _id: Math.random().toString(),
        text: `Error: ${error.message}. Please try again.`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'AI Assistant',
          avatar: 'https://placehold.co/100x100',
        },
      };

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [errorMessage]),
      );
    } finally {
      setIsLoading(false);
    }
  }, [conversationHistory]);

  const renderLoading = () => {
    if (isLoading) {
      return (
        <View style={{ padding: 10 }}>
          <ActivityIndicator size="small" color="#0084ff" />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fffdee',
      }}
    >
    <View style={{ 
      height: '100%',
      backgroundColor: '#fffdee', 
      }}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderLoading={renderLoading}
        isLoadingEarlier={isLoading}
      />
    </View>
    </SafeAreaView>
  );
};

export default ChatbotScreen;