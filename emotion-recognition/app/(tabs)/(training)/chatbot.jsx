import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GiftedChat ,GiftedAvatar} from "react-native-gifted-chat";

const ChatBot = () => {
  const [messages, setMessages] = React.useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          // avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fffdee",
      }}
    >
      <View
        style={{
          backgroundColor: "#fffdee",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "10%",
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "#BDD9E0",
            borderRadius: 20,
            alignItems: "center",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>CHATBOT</Text>
        </View>
          <View
            style={{
              height: "90%",
              marginTop: 20,
              alignContent: "center",
              width: "90%",
              backgroundColor: "#BDD9E0",
              borderRadius: 20,
            }}
          >
            <GiftedChat
              style={{

              }}
              showAvatarForEveryMessage={true}
              showUserAvatar={true}
              alwaysShowSend={true}
              messages={messages}
              onSend={(messages) => onSend(messages)}
              user={{
                _id: 1,
              }}
            />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatBot;
 