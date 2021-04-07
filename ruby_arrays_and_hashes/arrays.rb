if false
a = [[1,2,3], true, "Hello World", :bye, 3.0]
#:bye is known as a symbol in ruby, and 3.0 is a float
#element can be selected within an arrayb through its index
p a[2] #=> "Hello World"

aa= [[1,2,3], [3,4,5], [5,6,7]]
aa[1] #=> [3,4,5]
aa[1][2] #=> [5]


#push method
arr = [1,2,3]
arr.push(4)
arr #=> [1,2,3,4]

#shovel operator <<
arr << 5
arr #=> [1,2,3,4,5]

#.include?

arr.include?(4) #=> true
arr.include?(6) #=> false

#Doc Hunt - number of elements in array
#. count

arr.count #5
arr.length #5
arr.size #5

#Doc Hunt Multi-arrays
multi_arr = [[1,2,3], [4,5,6],[7,8,9]] # [1,2,3,4,5,6,7,8,9]
multi_arr.flatten #=> [1,2,3,4,5,6,7,8,9]
end 

# d3_array = [[[1],[2],[3]], [[4],[5],[6]],[[7],[8],[9]]]
# p d3_array.flatten(2)

#Doc Hunt Remove/add elements
my_arr = [1,2,3,4,5,6,7]
#.shift
# p my_arr.shift
#returns the element that has been removed
# p my_arr
#.unshift
# p my_arr.unshift(9)
#returns the whole array with new element at the front
# p my_arr

#.pop and .push #=> add and remove at the end

#.drop #will remove the specified number of elements from the beginning of array

#Doc Hunt String to Arrays
#.split

my_string = "Hello CodeCore Students"
# p my_string.split(" ") # ["Hello", "CodeCore", "Students"]

#Doc Hunt Arrays to String
#.join

my_array = ["Hello", "CodeCore", "Students"]
# p my_array.join(" ") #"Hello CodeCore Students"

#Doc Hunt switch elements
#.rotate
# p my_array.rotate #=> ["Students", "CodeCore", "Hello"]

my_array = my_array[2], my_array[0], my_array[1]

# p my_array

#replace elements
arr = ['a', 'b', 'c', 'd']
arr[1..2] = [1,2]
p arr




