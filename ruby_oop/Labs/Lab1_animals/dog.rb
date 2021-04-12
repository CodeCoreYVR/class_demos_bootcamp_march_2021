require_relative './animal.rb'
require_relative './animal_helpers.rb'
class Dog < Animal

  include AnimalHelpers
  def eat
    super
    puts "bones is yummy!"
  end
  def bark
    puts "woof!"
  end
end

a = Animal.new('brown', 'black')
puts a.eat

winston = Dog.new('winston', 'gold')
winston.eat