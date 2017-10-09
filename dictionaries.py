def main():
	d = {'one':1,'two':2,'three':3,'four':4} #1 way to make a dictionary
	print(d)
	print(type(d)) #class dict

	d2 = dict(
		one = 1, two = 2, three = 3, four = 4, five = 'five'
	) # a second way to create a dictionary

	for key in d:
		print(key,d[key])

	for key in sorted(d.keys()): #sorts alphabetically using the keys() method
		print(key,d[key])

	for key in d2:
		print(key,d2[key])

	for key in sorted(d2.keys()): #sorts alphabetically using the keys() method
		print(key,d2[key])

if __name__ == '__main__':
	main()