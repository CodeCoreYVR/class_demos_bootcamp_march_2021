module HelperMethods
    def greeting(name)
        
        "Hello #{name}"
    end
end

class Class1
    include HelperMethods
end
class Class2
    extend HelperMethods
end

c=Class1.new
puts c.greeting('John')


puts Class2.greeting('Tam')
