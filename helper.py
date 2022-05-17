#!/usr/bin/python -tt

# MIT License

# Copyright (c) 2022 Emmadi Sumith Kumar

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import json

while 1==1:
	handleName = input("Enter handle name: ")
	with open("src/handles.json") as file:
		file_data = json.load(file)
	if handleName in file_data["_"]:
		print("A handle already added")
		break
		exit()
	tpap = input("Enter TPAP: ")
	pspbank = input("Enter psp Bank: ")
	link = input("Enter link: ")

	x = {
		handleName:{
			"id":handleName,
			"TPAP":tpap,
			"PSPbank":pspbank,
			"link":link
		}
	}

	file_data['_'].append(handleName)
	file_data['handle'].update(x)
	data = json.dumps(file_data, sort_keys=True, indent=2)
	print(data)
	y = input("Are you sure: ")
	if y == "y":
		with open('src/handles.json', 'w') as f:
			f.write(data)
		print("Saved")
	else :
		break

