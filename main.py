import requests
import random
import string
from flask import Flask, jsonify,url_for,redirect,request,render_template



web_app_url = """
https://script.google.com/macros/s/AKfycbz9t33xKI0mWZYnyreixOe16xHWRbIInladAEZaCF5faJ9qv-DbhCdakW01Y5C5MboeGQ/exec
""".strip()
urls =  {}

app = Flask(__name__)


def generate(custom_url = "",length =6):
    if custom_url == "":
        chars = string.ascii_letters+string.digits
        short_url = "".join(random.choice(chars) for i in range(length))
        return short_url
    return custom_url

@app.route('/', methods=["GET"])
def index():
    return render_template('index.html')

@app.route('/generate', methods=["POST"])
def generate_short_url():
    long_url= request.form['longurl']
    try: 
        short_url = request.form['customurl']
    except:
        print("error")
        short_url = generate()
    url = request.url_root + short_url

    # Send POST request to Google Apps Script Web App
    requests.post(web_app_url, json={'short_url': short_url, 'long_url': long_url})

    return jsonify({'short_url': url})

@app.route("/<short_url>")
def redirect_to_long_url(short_url):
    # Append short_url to Google Apps Script Web App URL
    url = f"{web_app_url}?short_url={short_url}"
    
    # Send GET request to Google Apps Script Web App
    response = requests.get(url)
    long_url = response.text
    if long_url != "URL not found":
        return redirect(long_url)
    else:
        return "The short URL you're trying to access doesn't exist. Please make sure you have the correct URL."
    
if __name__ == "__main__":
    app.run(debug=True)