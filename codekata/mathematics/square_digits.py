n=int(input())
s=0
while n!=0:
    r=n%10
    s=s+(r**2)
    n=n//10
print(s)
