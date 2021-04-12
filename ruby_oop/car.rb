class Car
    # def drive
    #     puts 'Vroom Vroom'
    # end
    # def stop
    #     puts "Screech"
    # end
    # def park
    #     puts "ZZZZzzzzz"
    # end
    def initialize(model, type, capacity)
        @model = model 
        @type = type 
        @capacity = capacity
          puts "Creating a beautifull car"
      end
      def capacity
        @capacity
    end
    # def capacity= (capacity)
    #     @capacity = capacity
    # end
    attr_accessor :model, :type, :capacity
    def self.max_speed
        'max speed of the cars produced by this factory is 200'
    end

    def drive
        ignite_engine()
        puts 'driving car'
      end
      def stop
        puts 'stopping car'
      end
      def park
        puts 'parking car'
      end
      def details
        puts "model is #{@model} - type is #{@type} - capacity is #{@capacity}"
      end
      private
    #   def pump_gas
    #     puts 'glug glug⛽️'
    #   end
    #   def ignite_engine
    #     puts "🚗 💥 🔥🔥🔥"
    #   end
    private
    def pump_gas
        puts "pumping gas"
    end
    def ignite_engine
        puts "igniting engine"
    end
  
end
my_car = Car.new('Mazda','Sedan', 4)
my_car.capacity=5
puts my_car.capacity
my_car.drive
my_car.stop
my_car.park
my_car.details

blue_car = Car.new('Mazda','Sedan', 4)
red_car = Car.new('Mazda','Sedan', 4)
blue_car.details
red_car.details
blue_car.drive
red_car.drive
blue_car.stop
red_car.stop
blue_car.park
red_car.park

puts Car.max_speed
