TextList = []
quote = "@,"
addWquaote = "+@"
with open('pydata.txt','r') as f:
	for line in f:
		if '[' == line[0]:
			#line = line + quote
			#print (line)
			print(line, end='', flush=True)
		elif '"' == line[0]:
			#print (line+'",')
			print(line, end='', flush=True)
		else :
			#print('+"' + line+'<br>",')
			print('+"', end =' ')
			print(line, end =' ')
			print('<br>",', end =' ')

print ()
print ()

		
		
"""
capacity = len(TextList)
index = 0
while index!=capacity:
	line = TextList[index]
	for word in line.split():
		print (word[0])
		index = index+1
"""