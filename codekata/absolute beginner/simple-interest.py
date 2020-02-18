#getting the input as principle, interest rate, time in a single line using split function
p,t,r=input().split()
#declaring the splitted string as integer input
p,t,r=[float(p),float(t),float(r)]
#calculating the simple interest
si=((p*t*r)/100)
simpleinterest=round(si,2)
print(simpleinterest)
