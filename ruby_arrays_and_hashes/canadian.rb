canada = {
    "BC" => "Victoria",
    "Alberta" => "Edmonton",
    "Saskatchewan" => "Regina"
}

canada.each { |province, city|
    puts "#{province}'s capital city is #{city}"
}

canada.each_key do |province|
    p province
end

canada.each_value do |city|
    p city
end