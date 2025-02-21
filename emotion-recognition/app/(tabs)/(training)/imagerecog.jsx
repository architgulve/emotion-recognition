import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const CameraViewComponent = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const rangeofemotion = ["Angry", "Disgust", "Fear", "Happy", "Neutral", "Sad", "Surprise"];
  
  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);
  
  const getRandomEmotion = () => {
    const randomIndex = Math.floor(Math.random() * rangeofemotion.length);
    return rangeofemotion[randomIndex];
  };

  const captureAndAnalyze = async () => {
    if (cameraRef.current && !isProcessing) {
      try {
        setIsProcessing(true);
        setEmotion(null);

        const photo = await cameraRef.current.takePictureAsync({
          base64: true,
          quality: 0.5,
        });
        await analyzeEmotion(photo.base64);
      } catch (error) {
        console.error("Error capturing photo:", error);
        setEmotion("Error capturing photo");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const analyzeEmotion = async (base64Image) => {
    try {
      const response = await fetch("http://192.168.1.202:8080/detect-emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });
      const data = await response.json();
      setEmotion(data.emotion || "No emotion detected");
    } catch (error) {
      console.error("Error analyzing emotion:", error);
      setEmotion("Error detecting emotion");
    }
  };

  if (!permission || !permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>No access to camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fffdee",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "80%",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <CameraView
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            ref={cameraRef}
            facing="front"
          >
            <View
              style={{
                height: "95%",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                {isProcessing
                  ? "Processing..."
                  : `Detected Emotion: ${emotion || "N/A"}`}
              </Text>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  {isProcessing? "" : `Make a ${getRandomEmotion()} face `}
                </Text>
              </View>
            </View>
          </CameraView>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#4CAF50",
              padding: 15,
              borderRadius: 20,
              marginTop: 20,
              width: "80%",
              // flex: 1,
              // opacity: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={captureAndAnalyze}
            disabled={isProcessing}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {isProcessing ? "Processing..." : "Detect Emotion"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CameraViewComponent;
