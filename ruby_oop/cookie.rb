# Defining a class
# You need to use keyword 'class' and the 'end'
# Then comes a class name and the conevention for writing a class name is CamelCase
class Cookie
    def bake_n_eat
        puts bake()
        puts eat()
    end
    
    def eat
        'Nom. Nom. Nom!'
    end
    private
    def bake
        'baking the cookie'
    end

end

my_cookie = Cookie.new

# puts my_cookie.class
my_cookie.bake_n_eat
puts my_cookie.eat
