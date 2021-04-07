sentence = gets.chomp

new_sentence = sentence.split(" ").map.with_index do |word, i|
    if i % 2 == 0
        word.upcase!
    else
        word.downcase!
    end
end

p new_sentence.join(" ")