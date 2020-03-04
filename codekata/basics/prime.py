prime=[]
s=int(input("Enter the start value:"))
e=int(input("Enter the end value:"))
for i in range(s, e+1):
    if(i>1):
        for no in range(2,i):
            if(i%no==0):
               break
        else:
         prime.append(i)
print(prime)
