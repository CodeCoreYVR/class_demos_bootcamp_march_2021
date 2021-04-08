def add(first: 0, second: 1)
    #the first arg has defaukt value of 0
    #the second arg has defaukt value of 1
    p first + second
end

# add
# add(0,2)
#=> ArgumentError: wrong number of arguments (given 2, expected 0)

#To use named arguments you must refer to it by name
add(first:10) #=> 11
add(first:10, second: 10) #=> 20
add(second:3) #=> 3



