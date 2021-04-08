#methods

#methods are defined by the keyword def
def multiply (a,b)
    a * b
end

#call the method with expected number of arguments
multiply(3, 4)
# multiply 3,4   #brackets are optional

#boolean methods
#convention to have a "?" at the end if you expect a boolean return

#by_five Exercise

def by_five? num
    #returning is implicit
    num % 5 == 0
end

 by_five? (5) #=> true 
 by_five? (6) #=> false

#Return keyword

def my_method(a,b)
    return a*b
    a + b
end

# p my_method(4,5)

#Variadic methods
#use * called splat to portray a method that tales any number of arguments

#Product method
def product (first, *nums)
    result = first
    # puts "first:#{first}"
    # puts "nums: #{nums}"
    nums.each {|num| result *= num}  #remember nums is an array, so we need to iterate
    result
end

# puts product(1)

#Minimum number
def find_min(*nums)
    nums.reduce do | acc, current_value |
        if acc > current_value
            current_value
        else
            acc
        end
    end
end

# p find_min(20,40,12,17,18,35)

#Optional/default Arguments

def multiply2 (a=2,b) #in this case, if a is not given, its value defaults to 2
    a*b
end

# p multiply2(4,3)

def my_yield_method
    p "I'm a yield method"
    yield 
end

# p my_yield_method {2+2}

#this is also a block
# do
# end

#Example: Print once

def print_once
    puts "print once code"
    yield #this piece of code from BLOCK is replaced by yield
end

# print_once{puts "Block is being run"}

#yield can be used multiple times
def print_twice
    yield
    yield
end

# print_twice{puts "Block is being run"}

# def my_method
#     x=15
#     yield(x) if block_given?
#     puts "Bye"
# end

# my_method do |arg|
#  puts "I'm a block and I need #{x}"
# end

# my_method(2)

#block_given?

def do_something_with_block
    return "no block given" unless block_given?
    yield
end

p do_something_with_block #=> "no block given"
p do_something_with_block {"hello world"} #=> "hello world"


