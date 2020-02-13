a1=[]
oddnum=[]
evennum=[]
sumeven=[]
sumodd=[]
p=int(input("Enter your length:"))
for i in range(0,p):
    a=int(input("enter your values:"))
    a1.append(a)
    if((a%2)==0):
        evennum.append(a)
        sumeven=sumeven+a
    else:
        oddnum.append(a)
        sumodd=sumodd+a
print("the numbers in your list are:", q)
print("Even numbers are:", evennum)
print("Odd numbers are:",  oddnum)
print("Sum of even numbers:", sumeven)
print("Sum of odd numbers:", sumodd)

