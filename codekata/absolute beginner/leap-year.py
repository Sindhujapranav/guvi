A=int(input())
# To check Leap Year or not
if A % 4 == 0 and A % 100 != 0:
    print('Y')
elif A % 100 == 0:
    print('N')
elif A % 400 ==0:
    print('Y')
else:
    print('N')
