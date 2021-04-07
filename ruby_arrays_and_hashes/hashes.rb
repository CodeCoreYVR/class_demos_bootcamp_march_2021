h = { "string" => 2, :symbol => 1, 4 => 3}

#newer hash syntax looks like JS:

h2 = { jane: 10, jim: 6}

# grades = {
#     "Jane Doe" => 10,
#     "Jim Doe" => 6,
#     :lisa => 12,
#     "lisa" => [500, 100, 30]
# }

# p grades
# p grades["Jane Doe"]
# use square bracket notation to select elements of a hash

#Equivalent to above

# grades = {
#     :Jane_Doe => 10,
# }
# p grades

# #Edit values of a hash
# grades[:Jane_Doe] = 20

# p grades

#iterate over hash

#.each
movies_with_directors = {
    "Forrest Gump" => "Robert Zemeckis",
    "The Matrix" => "The Watchowskis",
    "Pulp Fiction" => "Quentin Tarintino",
    "Zero Dark Thirty" => "Kathryn Bigelow"
}

movies_with_directors.each do |key, value|
    puts "#{key}'s director is #{value}"
end



