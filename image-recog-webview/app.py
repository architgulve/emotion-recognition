from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from deepface import DeepFace
import base64
import traceback

app = Flask(__name__)
CORS(app)

# Load OpenCV's pre-trained face detector
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

def process_image(base64_image):
    # Decode base64 image
    image_bytes = base64.b64decode(base64_image)
    np_arr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_GRAYSCALE)  # Read directly as grayscale
    
    if img is None:
        raise ValueError("Failed to decode image")
    
    return img

@app.route('/detect-emotion', methods=['POST'])
def detect_emotion():
    try:
        # Get image data
        data = request.get_json()
        if 'image' not in data:
            return jsonify({'emotion': 'No image provided'}), 400

        # Process image
        try:
            gray_img = process_image(data['image'])
        except Exception as e:
            print(f"Image processing error: {str(e)}")
            return jsonify({'emotion': 'Invalid image format'}), 400

        # Detect faces using OpenCV
        faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        if len(faces) == 0:
            return jsonify({'emotion': 'No face detected'}), 200

        try:
            # Convert back to 3-channel grayscale for DeepFace
            gray_3channel = cv2.cvtColor(gray_img, cv2.COLOR_GRAY2BGR)
            
            # Analyze emotion using DeepFace
            result = DeepFace.analyze(
                gray_3channel, 
                actions=['emotion'],
                enforce_detection=False,
                detector_backend='opencv'
            )

            # Handle both list and dictionary response formats
            if isinstance(result, list):
                emotion = result[0]['dominant_emotion']
            else:
                emotion = result['dominant_emotion']

            return jsonify({'emotion': emotion}), 200

        except Exception as e:
            print(f"DeepFace analysis error: {str(e)}")
            print(traceback.format_exc())
            return jsonify({'emotion': 'Error analyzing face'}), 200

    except Exception as e:
        print(f"Server error: {str(e)}")
        print(traceback.format_exc())
        return jsonify({'emotion': 'Server error'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)