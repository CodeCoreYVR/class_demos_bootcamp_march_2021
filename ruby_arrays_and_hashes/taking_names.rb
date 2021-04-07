#Solution 1

names = []
puts "What is your name?"
while name = gets.chomp
    break if name == "exit"
    names << name
    puts "What is your name?"
end

names.each do |x|
    p x.capitalize
end

#Solution 2

names = []
name = gets.chomp

while name != 'exit'
    names << name
    name = gets.chomp
end

p names

names.each { |n| p n.capitalize! }