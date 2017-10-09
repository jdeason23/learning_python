#https://www.lynda.com/Python-tutorials/Fetching-Internet-data/122467/142574-4.html

# import urllib2 ...from Python 2
import urllib.request

URL = "https://4cqxh57pk1.execute-api.us-east-1.amazonaws.com/prod/LambdaTest?TableName=LambdaTestDB" #enter the AWS API url here when ready
URL2 = "http://www.espn.com"

def main():
	#get the data
	response = urllib.request.urlopen(URL2)
	#with urllib.request.urlopen(URL2) as response:

	#print the response
	print("the response is = ", response.read()) #str(webUrl.getcode()))


if __name__ == "__main__":
	main()
