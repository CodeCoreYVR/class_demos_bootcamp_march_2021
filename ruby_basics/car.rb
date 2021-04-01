puts "What year was your car made?"
year = gets.chomp
year = year.to_i

if year > 2020
  puts "future"
elsif year > 2017
  puts "new"
elsif year > 2010
  puts "old"
else
  puts "very old"
end