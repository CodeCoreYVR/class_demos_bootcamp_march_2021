#below is creating a hash with a default value of "Not submited". 
#If a value is given, it overrides the default value
my_info = Hash.new("Not Submited")

my_info = {
    :name => "My name",
    :city => "Vancouver",
    :favourite_food => ["Pasta", "Pizza","Sushi"]
}

personal_info = Hash.new("Unknown")
personal_info["name"] #=> "Unknown"

#Convert a string to a symbol
"hello".to_sym #=> :hello
"hello".intern

#Convert symbol to string
:hello.to_s #=> "hello"

p :hello.to_s #=> "hello"
