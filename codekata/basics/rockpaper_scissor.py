a,b=input().split()
if((a=='p')and(b=='r'))or((a=='r') and (b=='p')):
    print('P')
elif((a=='p')and(b=='s'))or((a=='s')and(b=='p')):
    print('S')
elif((a=='r') and(b=='s'))or((a=='r')and(a=='s')):
    print('R')
else:
    print('D')
    
