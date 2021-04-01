# 2 different numbers : integer and float
1
10
100
100_000_000 # same as 100000000. ruby ignores _ as spaces. Modern JS also allows this
# hello_world # sees this as hello world

# Integers
5/2 = 2

# Float => must declare float by putting in decimal
5.0/2.0 = 2.5

"50".to_i # => 50 string to integer
"50".to_f # => 50 string to float

# To the power of
a = 5
b = 3 ** a

# Operations
1 + 1
1 - 1
1 * 1
1 / 1
1 % 1  #this is integer, so need float if accurate by decimals
1 ** 1

puts "Give me number a"
num1 = gets.chomp
puts "Give me number b"
num2 = gets.chomp
puts num1.to_i * num2.to_i

# logical OR ||
# returns true if either the left or right side expression are true

1 > 4 || 8 > 4 # => true
false || false # => false

# logical AND &&
# returns true only if both side expressions are true

false && true # => false
true && true # => true
1 > 4 && 8 > 4 # => false

# equality operator
100 == 100 # => true
100 == '100' # => false
10.eql?(10.0) # => false because it will compare type