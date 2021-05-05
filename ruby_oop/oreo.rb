


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


class Oreo < Cookie
    attr_accessor :filling_type
    def initialize(sugar,flour, filling_type='pure white sugar')
        super(sugar,flour)
        @filling_type=filling_type
    end
    def eat # Overloading my eat method
        puts 'Split in half'
        puts 'Dunk in milk and then eat'
        super # When super in child method like this is call first it will process child method and the will goto the parent class method
    end
end

# o=Oreo.new(50,60, 'Chocolate and cream')
# puts o.class
# puts o.details
# puts o.filling_type

# o.filling_type='Chocolate'
# puts o.filling_type
# puts o.sugar
# puts o.flour
# puts o.eat
