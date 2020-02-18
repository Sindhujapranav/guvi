#You are provided with the radius of a circle "A". Find the length of its circumference.


1import math
# find a circumference of a circle
A=float(input())
if(A<0):
	print("Error")
#circumference of circle is 2*pi*r
circ=(math.pi*2*A)
#rounding of the value to 2 decimal value
circums=round(circ,2)
print(circums)
    
