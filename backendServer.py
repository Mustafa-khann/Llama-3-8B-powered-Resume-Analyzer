from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader
import io
from openai import OpenAI
from flask_cors import CORS, cross_origin

app = Flask(__name__)

client = OpenAI(base_url="http://localhost:1000/v1", api_key="lm-studio")

ALLOWED_EXTENSIONS = {'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
@cross_origin()
def home():
    return 'wat up bitch'


@app.route('/resumeanalyse', methods=['POST'])
@cross_origin()
def resumeanalyse():
    if 'resume' not in request.files:
        return jsonify({'error': 'No resume part'}), 400

    file = request.files['resume']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        # Read the file into memory
        pdf_data = file.read()
        pdf_reader = PdfReader(io.BytesIO(pdf_data))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()

        completion = client.chat.completions.create(
           model="microsoft/Phi-3-mini-4k-instruct-gguf",
           messages=[
             {"role": "system", "content": "You are a resume analyser. Analyse the given resume and provide pros and cons in bullet point one liners. Also provide suggestions in the form of bullet points."},
             {"role": "user", "content":text}
           ],
           temperature=0.7,
         )

        return jsonify({'modelresponse': completion.choices[0].message.content}), 200

    else:
        return jsonify({'error': 'File type not allowed'}), 400

if __name__ == '__main__':
    app.run(host='192.168.19.106', port=4000, debug=True) 
