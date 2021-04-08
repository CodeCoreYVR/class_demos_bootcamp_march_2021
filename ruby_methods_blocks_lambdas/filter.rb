def filter(arr)
    new_array=[]
    for val in arr
        return "no block given" unless block_given?
        result = yield(val)
        if result
            new_array << val
        end
    end
    puts "Output: #{new_array}"
    new_array
end

# filter [1,2,3,4] #this is without a block

p filter([1,2,3,4]){ |x| x%2 == 0 }  #OR x.even?

