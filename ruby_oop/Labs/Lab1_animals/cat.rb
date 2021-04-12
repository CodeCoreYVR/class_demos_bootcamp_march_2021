require_relative './animal.rb'
require_relative './animal_helpers.rb'

class Cat < Animal
  include AnimalHelpers
end

c = Cat.new('garfield', 'orange')
c.eat('lasagna')