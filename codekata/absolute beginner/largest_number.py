#You are given three numbers A, B & C. Print the largest amongst these three numbers.
A=int(input())
B=int(input())
C=int(input())
if((A>=B)and(A>=C)):
    print(A)
elif((B>=A)and(B>=C)):
    print(B)
elif((C>=A)and(C>=B)):
    print(C)

