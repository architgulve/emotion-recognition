import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const CameraViewComponent = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

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
        console.error('Error capturing photo:', error);
        setEmotion('Error capturing photo');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const analyzeEmotion = async (base64Image) => {
    try {
      const response = await fetch('https://e93f-2409-40c2-105e-8e4a-e59f-2ce3-c5e2-6bfc.ngrok-free.app/detect-emotion', {
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
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#000", 
    }}>

    <View style={{
      flex: 1,
    }}>
      <CameraView
        style={{
          flex: 1,
        }}
        ref={cameraRef}
        facing="front"
      >
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <Text style={styles.text}>
            {isProcessing ? 'Processing...' : `Detected Emotion: ${emotion || 'N/A'}`}
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={captureAndAnalyze}
            disabled={isProcessing}
          >
            <Text style={styles.buttonText}>
              {isProcessing ? 'Processing...' : 'Detect Emotion'}
            </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
    </SafeAreaView>
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
    gap: 20,
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
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    minWidth: 150,
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CameraViewComponent;