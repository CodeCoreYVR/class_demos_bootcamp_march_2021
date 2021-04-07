arr = ["hello", "greetings", "hola", "hi"]

h ={}

arr.each do |element|
    h[element] = element.length
end

p h