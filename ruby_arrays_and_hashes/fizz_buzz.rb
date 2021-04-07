#fizz_buzz

num1 = 3
num2 = 5
arr = []

for i in 1..100
    str = []
    str.push 'fizz' if i % 3 == 0
    str.push 'buzz' if i % 5 == 0
    str.push i if str.length == 0
    arr << str.join('')
end

p arr



