import random
import string
from flask import Flask,url_for,    redirect,request,render_template

app = Flask(__name__)


def generate(custom_url = "",length =6):
    if custom_url == "":
        chars = string.ascii_letters+string.digits
        short_url = "".join(random.choice(chars) for i in range(length))
        return short_url
    return custom_url

        
    
app.get('/', method = ["GET","POST"])
def index():
    if request.method == "POST":
        long_url= request.form[long_url]
        try: 
            request.form[short_url]
        except:
            print("error")
            
            short_url = generate()
        
        