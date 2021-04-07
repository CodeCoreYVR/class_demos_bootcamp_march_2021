#hashes can store arrays as key value pairs like this:
my_hash = { "abc" => [1,2,3], "b" => false, "xyz" => [4,5]}

#arrays can have hashes stored like this:

my_array = [ "abc", {"a" => 1, "b" => 2}, false]

my_provinces = { "BC" => ["Richmond", "Vancouver"], "AB" => ["Edmonton", "Calgary"]}

my_provinces.each{ |key,values|
    puts "#{key}:#{values.join(', ')}"
}