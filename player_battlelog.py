
import urllib.request
import json
import sys
 
with open('CRAPIv1/my_key.txt',  encoding= 'utf-8' ) as f:
    my_key = f.read().rstrip('\n')
   
    base_url = "https://api.clashroyale.com/v1"
    
    endpoint = "/players/%23PLYGYV8P/battlelog"
    
    request = urllib.request.Request(
        base_url+endpoint,
        None,
        {
        "Authorization": "Bearer %s" % my_key
        }
        )
    
    response = urllib.request.urlopen(request).read()
    
    data = json.loads(response)
#print(data)
        
sys.stdout = open('CRAPIv1/player_battlelog.js','w')
jsonobj = json.dumps(data)

print("var json_battle_log = '{}' ".format(jsonobj) )




