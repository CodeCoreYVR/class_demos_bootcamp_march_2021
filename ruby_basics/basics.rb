# https://ruby-doc.org/
# https://ruby-doc.org/core-3.0.0/
# Look under classes and find String
# String documentation https://ruby-doc.org/core-3.0.0/String.html

# COMMENTS
# Ruby comments use # to start a single line comment

=begin
  I'm a multiline comment  
  this if my syntax  
=end

# CONSOLE PRINTING

# print("Hello World ")
# print("Goodbye World")

# puts("Hello World")
# puts("Goodbye World")

# p("Hello World")
# p("Goodbye World")

# methods in ruby don't require parenthesese

# In ruby we don't use backticks
# p `hello\n`

# VARIABLES
# We use snake_case for ruby

# first_name = "Sam"
# p first_name

a = 1
b = a + 5
c = a + b

a1 = 11

# 2a = no acceptable

# variables with all caps are considered constants
MAX_PASSWORD_ATTEMPTS = 5

# below is possible but not good practise
MAX_PASSWORD_ATTEMPTS = 6

# gets method allows you to prompt a user for input

# puts "Please enter your name"
# user_input = gets
# puts "your name is #{user_input}"

# puts "input a number?"
# number = gets.chomp  #without .chomp, this will look like "number\n"
# puts number.to_i

# puts "What's your first name?"
# first_name = gets.chomp
# puts "What's your last name?"
# last_name = gets
# print first_name + " " + last_name

# Everything in Ruby is an object
# 1.class # Integer (class of integer)
# 3.14.class # Float
# "I am a string".class #String

# #STRINGS
# "I'm a string"
# 'I\'m also a string'
# "I'm a string with string interpolation #{my_variable}"

name = 'Brett'
puts "Hello #{name}"
puts name

name[0] = 'F'
puts name

# Strings are mutable!