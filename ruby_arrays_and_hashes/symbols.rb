#symbol is a immutable string.  You can create them using a colon ":"
:hello #symbol hello
#symbols themselves are a value
:hello.class #=> Symbol

#symbols cannot have spaces, but can use underscores for snake_case

:camelCase #valid symbol but prefer snake_case
:i_am_a_symbol #valid symbol
#:i-stuff-p => invalid
#:i stuff => invalid
:"this is my symbol" #valid symbol

#symbols are immutable and only one in memory, but can point to different values
a = {
    :hello => "world"
}

b = {
    :hello =>"bye"
}

p a[:hello] #=> "world"
p b[:hello] #+>"bye"

