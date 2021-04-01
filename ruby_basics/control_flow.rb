# if true
#     puts "happens when true"
# end

# JS below
# if (true){
#     "something happens"
# };

# x=1

# if x > 0
#     puts "x is greater than zero"
# end

# # inline conditionals
# temp = 10
# puts "It's cold" if temp < 15

# # unless
# puts "It's cold" unless temp > 15

# # equivalent to above
# unless temp > 15
#     puts "It's cold"
# end

# # else statement
# if false
#     puts "condition is false"
# else
#     puts "condition is true"
# end

# elsif

puts "What year model is your car?"
year = gets.chomp.to_i

if year <= 2
    puts "car is future"
elsif year > 2 && year < 5
    puts "car is new"
else
    puts "car is old"
end