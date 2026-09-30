from flask import jsonify, request, Flask
from flask_cors import CORS
import os
from controllers.getProducts import getCleansers, getMoisterizers, getToners, getSerums, getSun
import smtplib

app = Flask(__name__)

CORS(app)

@app.route("/contact", methods=["POST"])
def postContact():
    try:
        body = request.get_json()
        email = body["email"]
        if not email or "@" not in email or not email.endswith(".com"):
            raise NameError("Please enter a proper email")
        
        firstname = body["firstname"]
        if not firstname:
            raise NameError("Please enter first name")
        
        lastname = body["lastname"]
        if not lastname:
            raise NameError("Please enter last name")
        
        msg = body["msg"]
        if not msg:
            raise NameError("please enter message")
        
        phone = body["phone"]
        if not phone:
            raise NameError("Please enter phone number")
        
        emailBody = "SkinMatch Inquiry" + "\n" + email + "\n" + firstname + " " + lastname + "\n" + phone + "\n" + msg
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("shadman2354@gmail.com", "xdhi sneq rdpa xgpl")
        server.sendmail("shadman2354@gmail.com" ,"jennierlay@gmail.com", emailBody)
        server.quit()
        print("aaa")

        return jsonify({
            "success": True,
            "msg": "Form Submitted Sent"
        })

    except Exception as e:
        print(str(e))
        return jsonify({
            "success": False,
            "msg": str(e)
        })



@app.route("/home", methods=["GET"])
def getData():
    try:
        age = request.args.get("age")
        skinConcern1 = request.args.get("skinConcern1")
        skinConcern2 = request.args.get("skinConcern2")
        skinConcern3 = request.args.get("skinConcern3")

        skinType = request.args.get("skinType")
        skinConcern = []

        if skinConcern1:
            skinConcern.append(skinConcern1)
        
        if skinConcern2:
            skinConcern.append(skinConcern2)

        if skinConcern3:
            skinConcern.append(skinConcern3)
        
        if len(skinConcern) == 0:
            raise NameError("no concerns found")


        elif (skinType == None):
            raise NameError("skintype not found")

        elif not age or int(age) <= 8:
            raise NameError("no age found")

        cleanserCount = getCleansers(age, skinConcern, skinType)
        moisterizerCount = getMoisterizers(age, skinConcern, skinType)
        tonerCount = getToners(age, skinConcern, skinType)
        serumCount = getSerums(age, skinConcern, skinType)
        sunCount = getSun(age, skinConcern, skinType)

        return jsonify({
            "success": True,
            "data": {
                "moisterizers": moisterizerCount,
                "cleansers": cleanserCount,
                "toners": tonerCount,
                "serums": serumCount,
                "sunscreens": sunCount
            }
        })

    except Exception as e:
        print(str(e))

        return jsonify({
            "success": False,
            "msg": str(e)
        })


if __name__ == "__main__":
    print(os.getenv("PORT"))
    port = os.getenv("PORT") or 3000
    print(f"Running in port {port}")
    app.run(debug=True, port=port)