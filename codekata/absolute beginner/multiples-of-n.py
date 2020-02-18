# function to print the first m multiple
N=int(input())
m=3
def multiples(m, n): 
    a = range(n, (m * n)+1, n) 
    print(*a) 
multiples(m, N) 
