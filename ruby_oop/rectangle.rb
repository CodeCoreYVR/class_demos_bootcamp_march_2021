class Rectangle
    attr_accessor :width, :height

    def initialize(width=0, height=0)
        @width=width
        @height=height
    end

    def area
        @height * @width
    end

    def is_square?
        @width == @height
    end

end

r= Rectangle.new(4,4)
puts r.area
puts r.is_square?

 r.width=5
 r.height=8

puts r.area
puts r.is_square?