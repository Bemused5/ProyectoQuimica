from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = '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'

@app.route('/get_gpt_response', methods=['POST'])
def get_gpt_response():
    user_message = request.json.get('message')

    # Llamada a la API de OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "Simula que eres un profesor de quimica de universidad, y a su vez estas enseñando a jovenes que no comprenden mucho acerca de la quimica,"
            },
            {
                "role": "user",
                "content": user_message
            }
        ],
        temperature=0.5,
        max_tokens=2000
    )

    return jsonify({"message": response['choices'][0]['message']['content']})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
CORS(app)