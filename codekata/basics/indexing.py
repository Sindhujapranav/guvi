a=(input())
x=[int(i) for i in input().split()][:a]
least=a.index (min(x))
largest=a.index(max(x))
print(least,largest, sep=' ')
