import os
import json

currentDir = os.path.dirname(__file__)

def getCleansers(age, skinConcern, skinType):
    try:
        path = os.path.join(currentDir, "./data/cleanserList.json")
        with open (path, "r") as file:
            data = json.load(file)
        
        age = int(age)

        if (age < 20):
            age = "16"
        elif (age >= 20 and age < 30):
            age = "20s"
        elif (age >= 30 and age < 40):
            age = "30s"
        elif (age >= 40 and age < 50):
            age = "40s"
        else:
            age = "50s"

        final = []


        maxarr = len(skinConcern)
        eachCon = 0.5/maxarr


        for i, each in enumerate(data):
        # age
            if ("age" in each):
                if (age in each["age"]):
                    if("match" in each):
                        each["match"] += 1
                    else:
                        each["match"] = 1
            if("concern" in each):
                for concern in skinConcern:
                    if(concern in each["concern"]):
                        if("match" in each):
                            each["match"] += eachCon
                        else:
                            each["match"] = eachCon

            if("skinType" in each):
                if(skinType in each["skinType"]):
                    if("match" in each):
                       each["match"] += 1
                    else:
                       each["match"] = 1
                       
            if "match" in each:
                final.append(each)

        final.sort(key= lambda x: x["match"], reverse=True)

        return final

    except Exception as e:
        print(str(e))
        return []
    
def getMoisterizers(age, skinConcern, skinType):
    try:
        path = os.path.join(currentDir, "./data/moisturizerList.json")
        with open (path, "r") as file:
            data = json.load(file)
   
        age = int(age)

        print("1")
        if (age < 20):
            age = "16"
        elif (age >= 20 and age < 30):
            age = "20s"
        elif (age >= 30 and age < 40):
            age = "30s"
        elif (age >= 40 and age < 50):
            age = "40s"
        else:
            age = "50s"

        final = []
        maxarr = len(skinConcern)
        eachCon = 0.5/maxarr

        for i, each in enumerate(data):
        # age

            if ("age" in each):
                if (age in each["age"]):
                    if("match" in each):
                        each["match"] += 1
                    else:
                        each["match"] = 1

            if("concern" in each):
                for concern in skinConcern:
                    if(concern in each["concern"]):
                        if("match" in each):
                            each["match"] += eachCon
                        else:
                            each["match"] = eachCon

            if("skinType" in each):
                if(skinType in each["skinType"]):
                    if("match" in each):
                       each["match"] += 1
                    else:
                       each["match"] = 1
                       
            if "match" in each:
                final.append(each)

        final.sort(key= lambda x: x["match"], reverse=True)

        return final



    except Exception as e:
        print(str(e))
        return []
    
def getToners(age, skinConcern, skinType):
    try:
        path = os.path.join(currentDir, "./data/tonerList.json")
        with open (path, "r") as file:
            data = json.load(file)
        
        age = int(age)

        if (age < 20):
            age = "16"
        elif (age >= 20 and age < 30):
            age = "20s"
        elif (age >= 30 and age < 40):
            age = "30s"
        elif (age >= 40 and age < 50):
            age = "40s"
        else:
            age = "50s"

        final = []


        maxarr = len(skinConcern)
        eachCon = 0.5/maxarr


        for i, each in enumerate(data):
        # age
            if ("age" in each):
                if (age in each["age"]):
                    if("match" in each):
                        each["match"] += 1
                    else:
                        each["match"] = 1
            if("concern" in each):
                for concern in skinConcern:
                    if(concern in each["concern"]):
                        if("match" in each):
                            each["match"] += eachCon
                        else:
                            each["match"] = eachCon

            if("skinType" in each):
                if(skinType in each["skinType"]):
                    if("match" in each):
                       each["match"] += 1
                    else:
                       each["match"] = 1
                       
            if "match" in each:
                final.append(each)

        final.sort(key= lambda x: x["match"], reverse=True)

        return final

    except Exception as e:
        print(str(e))
        return []
    

def getSerums(age, skinConcern, skinType):
    try:
        path = os.path.join(currentDir, "./data/serumList.json")
        with open (path, "r") as file:
            data = json.load(file)
        
        age = int(age)

        if (age < 20):
            age = "16"
        elif (age >= 20 and age < 30):
            age = "20s"
        elif (age >= 30 and age < 40):
            age = "30s"
        elif (age >= 40 and age < 50):
            age = "40s"
        else:
            age = "50s"

        final = []


        maxarr = len(skinConcern)
        eachCon = 0.5/maxarr


        for i, each in enumerate(data):
        # age
            if ("age" in each):
                if (age in each["age"]):
                    if("match" in each):
                        each["match"] += 1
                    else:
                        each["match"] = 1
            if("concern" in each):
                for concern in skinConcern:
                    if(concern in each["concern"]):
                        if("match" in each):
                            each["match"] += eachCon
                        else:
                            each["match"] = eachCon

            if("skinType" in each):
                if(skinType in each["skinType"]):
                    if("match" in each):
                       each["match"] += 1
                    else:
                       each["match"] = 1
                       
            if "match" in each:
                final.append(each)

        final.sort(key= lambda x: x["match"], reverse=True)

        return final

    except Exception as e:
        print(str(e))
        return []
    
def getSun(age, skinConcern, skinType):
    try:
        path = os.path.join(currentDir, "./data/sunscreenList.json")
        with open (path, "r") as file:
            data = json.load(file)
        
        age = int(age)

        if (age < 20):
            age = "16"
        elif (age >= 20 and age < 30):
            age = "20s"
        elif (age >= 30 and age < 40):
            age = "30s"
        elif (age >= 40 and age < 50):
            age = "40s"
        else:
            age = "50s"

        final = []


        maxarr = len(skinConcern)
        eachCon = 0.5/maxarr


        for i, each in enumerate(data):
        # age
            if ("age" in each):
                if (age in each["age"]):
                    if("match" in each):
                        each["match"] += 1
                    else:
                        each["match"] = 1
            if("concern" in each):
                for concern in skinConcern:
                    if(concern in each["concern"]):
                        if("match" in each):
                            each["match"] += eachCon
                        else:
                            each["match"] = eachCon

            if("skinType" in each):
                if(skinType in each["skinType"]):
                    if("match" in each):
                       each["match"] += 1
                    else:
                       each["match"] = 1
                       
            if "match" in each:
                final.append(each)

        final.sort(key= lambda x: x["match"], reverse=True)

        return final

    except Exception as e:
        print(str(e))
        return []