#template - reading content from the web
#open the URL
#read in the response
#decode the response (utf-8)
#load the response into a json object (if the response of the service is JSON)
#parse the JSON

import urllib.request
import json
#import textwrap

#sample AWS API gateway endpoint
URL = "https://snmrk5094k.execute-api.us-east-1.amazonaws.com/prod" #enter the AWS API url here when ready

def main():
	pass


if __name__ == "__main__":
	main()

#def main():
	#get the data
	#with ...as statement (benefit - automatically closes when done)
	#with the URL open as the response variable
#	with urllib.request.urlopen(URL) as response:
#		text = response.read()
#		print(text) #has additional characters, so we need to decode it
#		decodedtext = text.decode('utf-8')
#		print(decodedtext) #a big string
#		print("*** decodedtext is of type ", type(decodedtext), "***")
#
#	print()
#
#	obj = json.loads(decodedtext) #load the json text into a dictionary
#	print("*** obj is of type ", type(obj), "***")
#	body = obj['Items']
#	print("there are %d items in the database" % len(body))
#	#print(type(body))
#	for item in range(0,len(body)):
#		print(body[item]) #print each of the entries in the database
