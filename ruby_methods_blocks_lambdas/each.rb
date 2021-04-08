def each(arr)
    for val in arr
        return p "no block given" unless block_given?
        result = yield(val)
        puts result
    end
end

each([1,2,3,4]){|x| x*5}



