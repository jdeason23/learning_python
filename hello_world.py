#practice code
def main():
	print("Hello World to you", names[x])
	#print(names[x])

#__name__ is set to __main__ when the script is run from the commandline
#https://stackoverflow.com/questions/419163/what-does-if-name-main-do
print("__name__ = ",__name__)

names = []
names.append("Jeffrey")
names.append("Tom")
names.append("Siraj")
names.append("Tristen")

for x in range(0,3):
	main()

for name in names:
	print(name)