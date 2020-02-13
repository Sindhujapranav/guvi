
#calculator program

a = int(input(" Enter your value 1:"))
b = int(input(" Enter your value 2:"))
print(" Add-1; Sub-2; Mul-3; Div-4; Mod-5; Exp-6")
c = int(input("Enter your choice:"))
if (c==1):
    print(a+b)
elif(c==2):
    print(a-b)
elif(c==3):
    print(a*b)
elif(c==4):
    print(a/b)
elif(c==5):
    print(a%b)
elif(c==6):
    print(a**b)
