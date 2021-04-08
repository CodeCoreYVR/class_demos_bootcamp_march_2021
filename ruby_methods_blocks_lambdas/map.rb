def map(arr)
    output = []
    for val in arr
        output << yield(val)
    end
    output
end

# p map([1,2,3,4]) {|x| x * 2}

map(["Hi", "Hello", "Hola"]) do |x|
    puts x + ", Steph!"
end