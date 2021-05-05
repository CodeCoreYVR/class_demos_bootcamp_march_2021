# Defining a class
# You need to use keyword 'class' and the 'end'
# Then comes a class name and the conevention for writing a class name is CamelCase
$greeting= "Hello" # 👈🏻 Creating a global variable 
class Cookie
    @@color= 'Brown'
    # @@ sign denotes that this is a class variable
    # 
    # 👇🏻 Class Method
    def self.info
        # To create a class method we use keyword 'self.',which means current object / class. if we use "self." inside a method refers to the current instance of the object
        "Cookies are essential to a balanced diet"
    end
    def initialize(sugar,flour)
        # initialize method is called autmatically when a instance of a class is created
        #puts 'this object is initalized and you are allset to go.'
        @sugar=sugar
        @flour=flour
    end
    # def sugar  # Getter - return values of instance variable sugar
    #     @sugar
    # end
    # attr_reader :sugar, :flour
    # def sugar=(sugar) #Setter -  set values of instance variable sugar
    #     @sugar=sugar
    # end
    # attr_writer :sugar, :flour

    
    # def flour# return values of instance variable flour
    #     @flour
    # end
    # def flour=(flour)# set values of instance variable flour
    #     @flour=flour
    # end
    attr_accessor :flour, :sugar
    def bake_n_eat
        puts bake()
        puts eat()
    end
    def color
        @@color
    end
    
    def eat
        'Nom. Nom. Nom!'
    end
    def details
        "sugar: #{@sugar} / flour: #{@flour}"
    end
    private
    def bake
        'baking the cookie'
    end

end



# 20.times{ print '_'}
# puts
my_cookie = Cookie.new(9,15) # Creating object / instance of a cookie class
#  👆🏻 This will call initialize method automatically
# 20.times{ print '_'}
# puts
puts "The values of instance variable Sugar at the time of creating object: #{my_cookie.sugar}"
puts "The values of instance variable Flour at the time of creating object: #{my_cookie.flour}"

my_cookie.sugar=5
my_cookie.flour=12

puts "New values set for sugar:#{my_cookie.sugar}"
puts "New Values set for flour: #{my_cookie.flour}"

# puts my_cookie.class
# my_cookie.bake_n_eat
# puts my_cookie.eat

# puts Cookie.info # 👈🏻 for class method we don't need a instance / object of a class we can access them directly with a class name 

# puts my_cookie.info 

# puts my_cookie.details
# puts my_cookie.color

healthy_cookie=Cookie.new(1,10)
regular_cookie=Cookie.new(10,15)

# puts healthy_cookie.details
# puts healthy_cookie.color
# puts regular_cookie.details
# puts regular_cookie.color

#puts $greeting # This is accessing global variable