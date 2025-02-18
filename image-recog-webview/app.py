from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from deepface import DeepFace

app = Flask(__name__)
CORS(app)

# OpenCV Face Detector
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect-emotion', methods=['POST'])
def detect_emotion():
    try:
        file = request.files['image']
        npimg = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        # Convert to grayscale for face detection
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        if len(faces) == 0:
            return jsonify({'emotion': 'No face detected'})

        # Use DeepFace to detect emotion
        result = DeepFace.analyze(img, actions=['emotion'], enforce_detection=False)
        emotion = result[0]['dominant_emotion']
        
        return jsonify({'emotion': emotion})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
