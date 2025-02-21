import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import angry from "../../../assets/images/emotions/angry.png";
import confusion from "../../../assets/images/emotions/confusion.png";
import contentment from "../../../assets/images/emotions/contentment.png";
import deep_thinking from "../../../assets/images/emotions/deep_thinking.png";
import disgust from "../../../assets/images/emotions/disgust.png";
import excitement from "../../../assets/images/emotions/excitement.png";
import fear from "../../../assets/images/emotions/fearful.png";
import happy from "../../../assets/images/emotions/happy.png";
import irritation from "../../../assets/images/emotions/irritation.png";
import jealousy from "../../../assets/images/emotions/jealousy.png";
import neutral from "../../../assets/images/emotions/neutral.png";
import playful from "../../../assets/images/emotions/playful.png";
import proud from "../../../assets/images/emotions/proud.png";
import sad from "../../../assets/images/emotions/sad.png";
import uncertain from "../../../assets/images/emotions/uncertain.png";

const Quizes = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [randomQuestions, setRandomQuestions] = React.useState([]);

  const QuizData = [
    {
      question: "Which of these shows someone is confused?",
      answer: confusion, // Store the direct image reference
      options: [happy, confusion], // Options should be stored as images
      type: "image",
    },
    {
      question: "Which of these shows someone is proud of him/herself?",
      answer: proud,
      options: [proud, angry],
      type: "image",
    },
    {
      question: "Which of these shows happiness?",
      answer: happy,
      options: [happy, confusion],
      type: "image",
    },
    {
      question: "Which of these shows someone is sad?",
      answer: sad,
      options: [happy, sad],
      type: "image",
    },
    {
      question: "Which of these shows someone is angry?",
      answer: angry,
      options: [confusion, angry],
      type: "image",
    },
    {
      question:
        "Which face represents someone who is jealous of another person?",
      answer: jealousy,
      options: [jealousy, confusion],
      type: "image",
    },
    {
      question: "Which of these shows someone is excited?",
      answer: excitement,
      options: [excitement, happy],
      type: "image",
    },
    {
      question: "Which of these shows someone is fearful?",
      answer: fear,
      options: [fear, confusion],
      type: "image",
    },
    {
      question: "Which of these shows someone is contentment?",
      answer: contentment,
      options: [contentment, sad],
      type: "image",
    },
    {
      question: "Which of these shows someone is deep thinking?",
      answer: deep_thinking,
      options: [deep_thinking, confusion],
      type: "image",
    },
    {
      question: "Which of these shows someone is disgusted?",
      answer: disgust,
      options: [disgust, happy],
      type: "image",
    },
    {
      question: "Which of these shows someone is irritated?",
      answer: irritation,
      options: [irritation, angry],
      type: "image",
    },
    {
      question:
        "When someone raises their eyebrows in surprise, what does it usually mean?",
      answer: "They are surprised or shocked.",
      options: [
        "They are surprised or shocked.",
        "They are confused.",
        "They are annoyed.",
        "They are trying to be funny.",
      ],
      type: "text",
    },
    {
      question: "If someone yawns during a conversation, what could it imply?",
      answer: "They are tired.",
      options: [
        "They are really engaged in the conversation",
        "They are tired.",
        "They are trying to be polite.",
        "They are trying to mock you.",
      ],
      type: "text",
    },
    {
      question:
        "If someone avoids eye contact while speaking to you, what might that indicate?",
      answer: "They are feeling shy or anxious.",
      options: [
        "They are feeling shy or anxious.",
        "They are trying to be polite.",
      ],
      type: "text",
    },
    {
      question:
        "If a person has their arms crossed while talking to you, what could it suggest?",
      answer: "They are feeling defensive or closed off.",
      options: [
        "They are open and friendly.",
        "They are feeling defensive or closed off.",
      ],
      type: "text",
    },
    {
      question:
        "When someone says, 'I’m feeling sick,' what’s an appropriate response?",
      answer: "I hope you feel better soon.",
      options: [
        "I hope you feel better soon.",
        "You should’ve taken better care of yourself.",
      ],
      type: "text",
    },
    {
      question:
        "Someone says, “I’m really stressed about my exams.” What would be a supportive response?",
      answer: "I hope you can manage your stress.",
      options: [
        "Everyone gets stressed, get over it",
        "I hope you can manage your stress.",
      ],
      type: "text",
    },

    {
      question:
        "When someone says, 'I’m feeling sick,' what’s an appropriate response?",
      answer: "I hope you feel better soon.",
      options: [
        "I hope you feel better soon.",
        "You should’ve taken better care of yourself.",
      ],
      type: "text",
    },
    {
      question:
        "When someone tells you they’re feeling down, what could be a kind response?",
      answer: "I understand. Let me know if you need anything.",
      options: [
        "I understand. Let me know if you need anything.",
        "Why are you always so sad?",
      ],
      type: "text",
    },
    {
      question: "If someone gives you a compliment, what’s the best response?",
      answer: "Thanks, I appreciate it!",
      options: ["Thanks, I appreciate it!", "That’s not true."],
      type: "text",
    },
    {
      question: "If a stranger smiles at you, what might it mean?",
      answer: "They’re being polite.",
      options: ["They’re being polite.", "They want something from you."],
      type: "text",
    },
    {
      question:
        "What should you say if someone tells you they are feeling nervous about a big event?",
      answer: "I get it, but you’ll do great!",
      options: ["I get it, but you’ll do great!", "Stop worrying about it."],
      type: "text",
    },
    {
      question:
        "If someone says, 'I can’t believe how hard today has been,' a good response could be:",
      answer: "I’m sorry to hear that. Want to talk about it?",
      options: [
        "I’m sorry to hear that. Want to talk about it?",
        "You should get used to it.",
      ],
      type: "text",
    },
    {
      question: "How should you respond if someone thanks you for your help?",
      answer: "No problem, happy to help!",
      options: [
        "No problem, happy to help!",
        "It’s about time you thanked me.",
      ],
      type: "text",
    },
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  React.useEffect(() => {
    const shuffledQuestions = shuffleArray(QuizData);
    setRandomQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handelAnswer = (selectedOption) => {
    const correctAnswer = randomQuestions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handelRestart = () => {
    const shuffledQuestions = shuffleArray(QuizData);
    setRandomQuestions(shuffledQuestions.slice(0, 10));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (randomQuestions.length === 0) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fffdee", flex: 1, alignItems: "center" }}
    >
      {showScore ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            You scored {score} out of 10
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={handelRestart}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Restart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ width: "90%", alignItems: "center" }}>
          <View
            style={{
              height: "10%",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 30, color: "#162B47", fontWeight: "800" }}>
              QUIZ ({currentQuestion + 1}/10)
            </Text>
          </View>

          <View
            style={{
              height: "30%",
              width: "100%",
              backgroundColor: "#9ED2B3",
              padding: 20,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              {randomQuestions[currentQuestion].question}
            </Text>
          </View>

          <View
            style={{
              width: "80%",
              flexDirection:
                randomQuestions[currentQuestion].type === "image"
                  ? "row"
                  : "column",
              marginTop: 30,
              justifyContent: "space-around",
            }}
          >
            {randomQuestions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handelAnswer(option)}
              >
                {randomQuestions[currentQuestion].type === "image" ? (
                  <View
                    style={{
                      backgroundColor: "white",
                      width: 100,
                      height: 100,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      shadowColor: "#000",
                      shadowOpacity: 0.2,
                      shadowOffset: { width: 2, height: 2 },
                    }}
                  >
                    <Image
                      source={option}
                      style={{ width: 140, height: 140 }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#FF6F61",
                      padding: 15,
                      borderRadius: 10,
                      marginVertical: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      {option}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Quizes;
