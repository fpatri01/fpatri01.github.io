#calculate the user's final bill, split between any number of people
#greet the user
print("Hello. Welcome to the tip calculator!")

#calculate the tip
bill = float(input("How much was the bill for your meal? \n $"))
tip = int(input("What percent would you like to tip? Please select 10, 15 or 20: \n"))

#calculate the total per person
total = (tip/100)*bill + bill
people = int(input("Split the bill between how many people? \n"))
total_each = round(total/people, 2)

#print total per person
print(f"The cost per person is \n ${total_each:.2f} per person")

#end
