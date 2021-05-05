require('./oreo');

class CookieJar
    def initialize(capacity=10)
        @capacity=capacity
        @cookies=[]
    end
    def add_cookie(cookie)
        unless cookie.is_a? Cookie
            raise ArgumentError.new('Must be a cookie')
        end
        if @cookies.length >= @capacity
            puts "You have way too many cookies in here already"
        else
            @cookies.push(cookie)
        end
        self # 👈🏻 WE use self for chaining, it will point to its own instance
    end
    def take_cookie
        @cookies.pop
    end

    def details
        puts "This jar has #{@cookies.length} cookies in it."
        puts @cookies.map{ |cookie| "Cookie w/ #{cookie.flour} cups flour and #{cookie.sugar} cups sugar"}.join(', ')
    end
end

cj = CookieJar.new(5)

cj.add_cookie(Cookie.new(10,20))
.add_cookie(Cookie.new(1,10))
.add_cookie(Cookie.new(9,12))
.add_cookie(Cookie.new(5,6))
.add_cookie(Cookie.new(7,16))
.add_cookie(Cookie.new(7,16))
cj.details
c= cj.take_cookie
puts c.details
cj.take_cookie

cj.details