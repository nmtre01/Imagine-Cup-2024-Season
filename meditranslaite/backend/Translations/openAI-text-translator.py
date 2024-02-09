import os
import openai

from openai import OpenAI
 
openai.api_key = os.environ["OPENAI_API_KEY"]

# Open the file in read mode
with open('./Files/Text/medical.txt', 'r') as file:
    # Read the entire content of the file into a string
    file_content = file.read()


input_language = "English"
output_language = "Spanish"


client = OpenAI()

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content":f"Translate the following text from {input_language} to {output_language}: {file_content}"},
  ]
)
print(response['choices'][0]['message']['content'])


