# def one
#    1 
# end

# def two
#     2 
# end

# def three
#     3 
# end

#etc....

# puts one()
# puts two()
# puts three()
#etc...

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four"
    #etc
}

numbers.each do |number, number_name|
    #When using the define_method, the first argument
    # is the name of the method being defined
    #The body of the method is the block that is to
    #the defined method
    define_method(number_name) do
        number
    end
end

# puts one()
# puts two()
# puts three()

#Another example
define_method("hello_world") do
    puts "Hello World"
end

#Define method will generate the following method that can be called again:
#def hello_world
#   puts "Hello World"
#end

# hello_world()

#Eval
#the eval method takes a string as an argument and will attempt to evaluate it as ruby code
#THIS METHOD IS VERY DANGEROUS. AVOID USING AT WORK WHEREVER POSSIBLE!

# eval("1 + 1 * 10") #=> 11
# eval("two + two + four") #=> 8
#Note: two and four are referrring to the above methods that are executed

#Example of define_method and eval together

my_array = ["hello", "hola", "hi"]

my_array.each do |greeting|
    define_method(greeting) do |name|
        "#{greeting} #{name}"
    end
end

#hello(), holla(), hi() created with define_method

code = "
puts hi('Steph')
puts hola('Steph')
"

eval(code)




