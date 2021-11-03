import requests
import json
url = 'http://94.234.163.14/tstweb/hs/tid/getdata'
username = "Site"
password = '1049'

response = requests.get(url, auth=(username, password))
data = json.loads(response.text)

print(data)


# for i in data:
#     worker_UID = i['UID']
#     worker_name = i['Name']
#     worker_pass = i['Pass']
#     worker_email = i['Email']
#     print(worker_UID, worker_name, worker_pass, worker_email)