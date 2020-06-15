import serial
ser = serial.Serial('/dev/ttyUSB0',115200)
while True:
	read_serial=ser.readline()
	print(read_serial)
