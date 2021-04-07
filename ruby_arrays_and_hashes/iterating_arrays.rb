a = ['a','b','c','d']

#for
# for element in c do
#     puts element
# end

#.each
#it expects a block with an argument
#block starts with a "do" statement and argumemnts are written inside of the pipes | |

#Build, Loop, print
# a = Array(1..5) #this equal to a = [1,2,3,4,5]

# a.each do |x|
#     p x**2
# end

#.map
# arr = ['a','b','c','d', 'e']

# mapped_arr = arr.map do |element|
#     element * 2
# end

# p mapped_arr

#.with_index used with .map
# arr2 = ['a','b','c','d', 'e']

# mapped_arr2 = arr2.map.with_index do |element, i|
#     p i
#     element * i 
# end

# p mapped_arr2

#Printing Multiple Dimensions
a = [[1,7,3], [4,4,6], [7,2,9]]

a.each do |sub_arr|
    sub_arr.each do |val|
        p val ** 2
    end
end




