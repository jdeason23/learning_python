#practice working with dates and time
from datetime import date
from datetime import time
from datetime import datetime

def main():
	print("Today's date = ", date.today())
	print("Current time = ", datetime.now())
	print("The current year =", date.today().year)
	print("The current month =", date.today().month)

if __name__ == "__main__":
	main()