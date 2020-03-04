n=int(input())
ze=[int(x) for x in input().split()][:n]
zen=[]
for i in range(0,n):
    ze[0],ze[1]=ze[1],ze[0]
    zen.append(i)
print(zen)
    
