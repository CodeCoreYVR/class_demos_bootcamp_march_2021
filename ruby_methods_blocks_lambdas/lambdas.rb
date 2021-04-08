#Creating lambdas
#Ruby's name for anonymous functions

#Lambdas

say_something = lambda{ puts "this is a lambda"}

#OR

say_something_again = -> { puts "this is also a lambda"}

add_five = lambda { |n| p n + 5 }
power_2 = -> (n) { p n**2 }

#Calling a lambda
# say_something.call
# say_something_again.call
# add_five.call(5)
# power_2.call(3)

#Create a proc
my_proc = Proc.new { |x| puts x}

#If you pass the wrong number of arguments to a lambda, it will raise an exception,
# just like a regular method

#Passing an Argument to Lambda
times_two = -> (x){p x*2}

# puts times_two.call(10)

#Using a Lambda as a callback
def my_method(code)
    puts "---#{code.class}---"
    puts "Hey you"
    puts code.call(2)
    puts "hello"
end

# my_method(times_two)

# my_method(my_proc)

#Using it as a block
#You can pass a lambda as a method argument
#prefix with "&" to call it as a block (i.e. using yield)
#this does not work with regular methods in ruby, only procs and lambdas
#in JS you can use it in regular functions but not in ruby

def map(arr)
    output = []
    for val in arr
        output << yield(val)
    end
    output
end

# map([1,2,3,4,5], &times_two)

#Procs
#There is not dedicated Lambda. A lambda is just a special kind of proc

#Differences between Procs and Lambdas

a = Proc.new { |x,y| puts "I don't care about arguments" }
# a.call(4) #will not raise error if wrong number of arguments given but a lambda would

def test_procs_and_lambdas
    yield
    puts "hello"
end

l = lambda do
    puts "lambda"
    return
end

p = Proc.new do
    puts "Proc"
    return
end

# test_procs_and_lambdas(&l)
test_procs_and_lambdas(&p)

#With a proc, if it encounters its own return, it will stop right there and
#will not continue with the method's return

#1. Difference in how to create them
#2. Proc doesn't care about arguments
#3. Proc returns from its own return and does not care about the rest of the method's code



