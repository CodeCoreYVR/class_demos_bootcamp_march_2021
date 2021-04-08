#Case

puts "hello there! please enter language"

language = gets.chomp

case language
when "English"
    puts "Hello"
when "Spanish"
    puts "Hola"
when "Afrikaans"
    puts "Hi"
when "French"
    puts "Bonjour"
else
    "What was that?"
end

#Ternary Operator
a = true
puts a ? "A is true" : "A is not true"

#Or equals  ||=
#kind of like a default value for if a is not given or is nil
a ||= 5
#a will be 5 if a is nil or not defined
