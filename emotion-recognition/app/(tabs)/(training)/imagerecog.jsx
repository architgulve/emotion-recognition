import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const CameraViewComponent = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const intervalRef = useRef(null); // Use ref instead of state for capturing

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  useEffect(() => {
    // Start capturing when permission is granted
    if (permission?.granted) {
      startCapturing();
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [permission]); // Only depend on permission

  const startCapturing = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        captureAndAnalyze();
      }, 3000);
    }
  };

  const captureAndAnalyze = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          base64: true,
          quality: 0.5, // Reduced quality for better performance
        });
        await analyzeEmotion(photo.base64);
      } catch (error) {
        console.error('Error capturing photo:', error);
      }
    }
  };

  const analyzeEmotion = async (base64Image) => {
    try {
      const response = await fetch('https://52ba-219-91-171-110.ngrok-free.app/detect-emotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }),
      });
      const data = await response.json();
      setEmotion(data.emotion || 'No emotion detected');
    } catch (error) {
      console.error('Error analyzing emotion:', error);
      setEmotion('Error detecting emotion');
    }
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text>No access to camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        facing="front"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Detected Emotion: {emotion || 'N/A'}</Text>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CameraViewComponent;