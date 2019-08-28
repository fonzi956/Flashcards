var questions = [

    ["***Reusing Code",
        "Code reuse is a very important part of programming in any language. Increasing code size makes it harder to maintain. "
        + "<br> For a large programming project to be successful, it is essential to abide by the Don't Repeat Yourself, or DRY, principle. We've already looked at one way of doing this: by using loops and FUNCTIONS"
        + "<br> Bad, repetitive code is said to abide by the WET principle, which stands for Write Everything Twice, or We Enjoy Typing",
        "Reusing-Code"],

    ["***Functions and pre-defined functions",
        "is a block of code which only runs when it is called. Can pass data, known as parameters, into function and can return data as result. Any statement that consists of a word followed by information in parentheses is a function call. and the comma-separated values inside the parentheses are function arguments. <br>"
        + "create your own functions by using the def statement. The code block within every function starts with a colon (:) and is indented. You must define functions before they are called"
        + "<br> <br> def my_func():"
        + "<br>  &nbsp; print(\"spam\")"
        + "<br>  &nbsp; print(\"spam\")"
        + "<br>  &nbsp; print(\"spam\")"
        + "<br> my_func()"
        + "<br> <br> spam <br> spam <br> spam <br> spam",
        "Functions"],

    ["***Assertions and Can assert take a second argument",
        "An assertion is a sanity-check that you can turn on or turn off when you have finished testing the program. An expression is tested, and if the result comes up false, an exception is raised. "
        + "Assertions are carried out through use of the assert statement. Programmers often place assertions at the start of a function to check for valid input, and after a function call to check for valid output."
        + "<br> <br> print(1)"
        + "<br> assert 2 + 2 == 4"
        + "<br> print(2)"
        + "<br> assert 1 + 1 == 3"
        + "<br> print(3)"
        + "<br> <br> 1<br> 2<br> AssertionError"
        + "<br> <br> The assert can take a second argument that is passed to the AssertionError raised if the assertion fails. AssertionError exceptions can be caught and handled like any other exception using the try-except statement, but if not handled, this type of exception will terminate the program."
        + "<br> <br> temp = -10"
        + "<br> assert (temp >= 0), \"Colder than absolute zero!\""
        + "<br> <br> AssertionError: Colder than absolute zero!",
        "Can-assert-take-a-second-argument",
        "Assertions"],


    ["***Dictionaries",
        "Dictionaries are data structures used to map arbitrary keys to values. Lists can be thought of as dictionaries with integer keys within a certain range. Dictionaries can be indexed in the same way as lists, using square brackets containing keys."
        + "<br> <br> ages = {\"Dave\": 24, \"Mary\": 42, \"John\": 58}"
        + "<br> print(ages[\"Dave\"]) # Each element in a dictionary is represented by a key:value pair."
        + "<br> print(ages[\"Mary\"]) <br> <br> 24 <br> 42",
        "Dictionaries"],

    ["***When to use a dictionary:",
        "- When you need a logical association between a key:value pair."
        + "<br> - When you need fast lookup for your data, based on a custom key."
        + "<br> - When your data is being constantly modified. Remember, dictionaries are mutable.",
        "When-to-use-a-dictionary"],

    ["***dictionary keys",
        "Just like lists, dictionary keys can be assigned to different values. However, unlike lists, a new dictionary key can also be assigned a value, not just ones that already exist."
        + "<br> <br> squares = {1: 1, 2: 4, 3: \"error\", 4: 16,}"
        + "<br> squares[8] = 64"
        + "<br> squares[3] = 9"
        + "<br> print(squares) <br> <br> {8: 64, 1: 1, 2: 4, 3: 9, 4: 16}",
        "dictionary-keys"],

    ["***Tuples",
        "Tuples are very similar to lists, except that they are immutable (they cannot be changed). Also, they are created using parentheses, rather than square brackets. Trying to reassign a value in a tuple causes a TypeError. tuples can be nested within each other. Tuples can be created without the parentheses, by just separating the values with commas. An empty tuple is created using an empty parenthesis pair. Tuples are faster than lists, but they cannot be changed. ",
        "Tuples"],

    ["***List Comprehensions",
        "List comprehensions are a useful way of quickly creating lists whose contents obey a simple rule. List comprehensions are inspired by set-builder notation in mathematics."
        + "<br> <br> # a list comprehension"
        + "<br> cubes = [i**3 for i in range(5)]"
        + "<br> "
        + "<br> print(cubes)"
        + "<br> <br> [0, 1, 8, 27, 64]",
        "List-Comprehensions"],

    ["***Functional programming",
        "Functional programming is a style of programming that (as the name suggests) is based around functions. A key part of functional programming is higher-order functions. Higher-order functions take other functions as arguments, or return them as results."
        + "<br> <br> def apply_twice(func, arg):"
        + "<br> &nbsp; return func(func(arg))"
        + "<br> "
        + "<br> def add_five(x):"
        + "<br> &nbsp; return x + 5"
        + "<br> "
        + "<br> print(apply_twice(add_five, 10))"
        + "<br> <br> 20 <br> <br> he function apply_twice takes another function as its argument, and calls it twice inside its body.",
        "Functional-programming"],

    ["***Pure Functions",
        "Functional programming seeks to use pure functions. Pure functions have no side effects, and return a value that depends only on their arguments. This is how functions in math work: for example, The cos(x) will, for the same value of x, always return the same result."
        + "<br> <br> #Pure function: "
        + "<br> def pure_function(x, y):"
        + "<br> &nbsp; temp = x + 2*y"
        + "<br> &nbsp; return temp / (2*x + y) "
        + "<br> <br> #Impure function:"
        + "<br> some_list = []"
        + "<br> "
        + "<br> def impure(arg):"
        + "<br> &nbsp; some_list.append(arg)"
        + "<br> <br> The function above is not pure, because it changed the state of some_list.",
        "Pure-Functions"],

    ["***advantages and disadvantages of using pure functions",
        "<br> - easier to reason about and test."
        + "<br> - more efficient. Once the function has been evaluated for an input, the result can be stored and referred to the next time the function of that input is needed, reducing the number of times the function is called. This is called memoization."
        + "<br> - easier to run in parallel."
        + "<br> <br> The main disadvantage of using only pure functions is that they majorly complicate the otherwise simple task of I/O, since this appears to inherently require side effects. "
        + "They can also be more difficult to write in some situations.",
        "advantages-and-disadvantages-of-using-pure-functions"],

    ["***Generators",
        "Generators are a type of iterable, like lists or tuples. Unlike lists, they don't allow indexing with arbitrary indices, but they can still be iterated through with for loops. They can be created using functions and the yield statement."
        + "<br> <br> def countdown():"
        + "<br> i=5"
        + "<br> while i > 0:"
        + "<br> &nbsp; yield i"
        + "<br> &nbsp; i -= 1"
        + "<br> "
        + "<br> for i in countdown():"
        + "<br> &nbsp; print(i)"
        + "<br> <br> 5<br> 4<br> 3<br> 2<br> 1<br> <br> The yield statement is used to define a generator, replacing the return of a function to provide a result to its caller without destroying local variables.",
        "Generators"],

    ["***Decorators",
        "Decorators provide a way to modify functions using other functions. This is ideal when you need to extend the functionality of functions that you don't want to modify."
        + "<br> <br> def decor(func):"
        + "<br> &nbsp; def wrap():"
        + "<br> &nbsp; &nbsp; print(\"============\")"
        + "<br> &nbsp; &nbsp; func()"
        + "<br> &nbsp; &nbsp; print(\"============\")"
        + "<br> &nbsp; return wrap"
        + ""
        + "<br> def print_text():"
        + "<br> &nbsp; print(\"Hello world!\")"
        + ""
        + "<br> decorated = decor(print_text)"
        + "<br> decorated()"
        + "<br> <br> We defined a function named decor that has a single parameter func. Inside decor, we defined a nested function named wrap. The wrap function will print a string, then call func(), and print another string. The decor function returns the wrap function as its result. We could say that the variable decorated is a decorated version of print_text - it's print_text plus something. In fact, if we wrote a useful decorator we might want to replace print_text with the decorated version altogether so we always got our \"plus something\" version of print_text. This is done by re-assigning the variable that contains our function:"
        + "<br> <br> print_text = decor(print_text) <br> print_text() # Now print_text corresponds to our decorated version.",
        "Decorators"],


    ["***Classes",
        "Another very popular paradigm is object-oriented programming (OOP). Objects are created using classes, which are actually the focal point of OOP. The class describes what the object will be, but is separate from the object itself. In other words, a class can be described as an object's blueprint, description, or definition. You can use the same class as a blueprint for creating multiple different objects. Classes are created using the keyword class and an indented block, which contains class methods (which are functions). "
        + "<br> <br> class Cat:"
        + "<br> &nbsp; def __init__(self, color, legs):"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> &nbsp; &nbsp; self.legs = legs"
        + "<br> "
        + "<br> felix = Cat(\"ginger\", 4)"
        + "<br> rover = Cat(\"dog-colored\", 4)"
        + "<br> stumpy = Cat(\"brown\", 3)"
        + "This code defines a class named Cat, which has two attributes: color and legs. Then the class is used to create 3 separate objects of that class.",
        "Classes"],

    ["***__init__",
        "The __init__ method is the most important method in a class. This is called when an instance (object) of the class is created, using the class name as a function. All methods must have self as their first parameter, although it isn't explicitly passed, Python adds the self argument to the list for you; you do not need to include it when you call the methods. Within a method definition, self refers to the instance calling the method."
        + "<br> Instances of a class have attributes, which are pieces of data associated with them. In this example, Cat instances have attributes color and legs. These can be accessed by putting a dot, and the attribute name after an instance. In an __init__ method, self.attribute can therefore be used to set the initial value of an instance's attributes."
        + "<br> <br> class Cat:"
        + "<br> &nbsp; def __init__(self, color, legs):"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> &nbsp; &nbsp; self.legs = legs"
        + "<br> "
        + "<br> felix = Cat(\"ginger\", 4)"
        + "<br> print(felix.color)"
        + "<br> <br> ginger <br> <br> #In the example above, the __init__ method takes two arguments and assigns them to the object's attributes. The __init__ method is called the class constructor",
        "__init__"],

    ["***Methods",
        "Classes can have other methods defined to add functionality to them. Remember, that all methods must have self as their first parameter. These methods are accessed using the same dot syntax as attributes. "
        + "<br> <br> class Dog:"
        + "<br> &nbsp; def __init__(self, name, color):"
        + "<br> &nbsp; &nbsp; self.name = name"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> "
        + "<br> &nbsp; def bark(self):"
        + "<br> &nbsp; &nbsp; print(\"Woof!\")"
        + "<br> "
        + "<br> fido = Dog(\"Fido\", \"brown\")"
        + "<br> print(fido.name)"
        + "<br> fido.bark()"
        + "<br> <br> Fido <br> Woof!",
        "Methods"],

    ["***class attributes",
        "Classes can also have class attributes, created by assigning variables within the body of the class. These can be accessed either from instances of the class, or the class itself."
        + "<br> <br> class Dog:"
        + "<br> &nbsp; legs = 4"
        + "<br> &nbsp; def __init__(self, name, color):"
        + "<br> &nbsp; &nbsp; self.name = name"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> "
        + "<br> fido = Dog(\"Fido\", \"brown\")"
        + "<br> print(fido.legs)"
        + "<br> print(Dog.legs)"
        + "<br> <br> 4 <br> 4 <br> #Class attributes are shared by all instances of the class. Trying to access an attribute of an instance that isn't defined causes an AttributeError. This also applies when you call an undefined method.",
        "class-attributes"],

    ["***function super",
        "The function super is a useful inheritance-related function that refers to the parent class. It can be used to find the method with a certain name in an object's superclass."
        + "<br> <br> class A:"
        + "<br> &nbsp; def spam(self):"
        + "<br> &nbsp; &nbsp; print(1)"
        + "<br> "
        + "<br> class B(A):"
        + "<br> &nbsp; def spam(self):"
        + "<br> &nbsp; &nbsp; print(2)"
        + "<br> &nbsp; &nbsp; super().spam()"
        + "<br> "
        + "<br> B().spam()"
        + "<br> <br> 2 <br> 1 <br> <br> super().spam() calls the spam method of the superclass.",
        "function-super"],

    ["***Magic methods",
        "Magic methods are special methods which have double underscores at the beginning and end of their names. They are also known as dunders. So far, the only one we have encountered is __init__, but there are several others. They are used to create functionality that can't be represented as a normal method. <br> One common use of them is operator overloading. This means defining operators for custom classes that allow operators such as + and * to be used on them. An example magic method is __add__ for +."
        + "<br> <br> class Vector2D:"
        + "<br> &nbsp; def __init__(self, x, y):"
        + "<br> &nbsp; &nbsp; self.x = x"
        + "<br> &nbsp; &nbsp; self.y = y"
        + "<br> &nbsp; def __add__(self, other):"
        + "<br> &nbsp; &nbsp; return Vector2D(self.x + other.x, self.y + other.y)"
        + "<br> "
        + "<br> first = Vector2D(5, 7)"
        + "<br> second = Vector2D(3, 9)"
        + "<br> result = first + second"
        + "<br> print(result.x)"
        + "<br> print(result.y)"
        + "<br><br> 8<br> 16<br> <br><br> The __add__ method allows for the definition of a custom behavior for the + operator in our class. As you can see, it adds the corresponding attributes of the objects and returns a new object, containing the result. Once it's defined, we can add two objects of the class together.",
        "Magic-methods"],

    ["***Object Lifecycle",
        "The lifecycle of an object is made up of its creation, manipulation, and destruction. <br> The first stage of the life-cycle of an object is the definition of the class to which it belongs. The next stage is the instantiation of an instance, when __init__ is called. Memory is allocated to store the instance. Just before this occurs, the __new__ method of the class is called. This is usually overridden only in special cases. After this has happened, the object is ready to be used. <br> Other code can then interact with the object, by calling functions on it and accessing its attributes. Eventually, it will finish being used, and can be destroyed.",
        "Object-Lifecycle"],

    ["***Object Lifecycle When an object is destroyed",
        "When an object is destroyed, the memory allocated to it is freed up, and can be used for other purposes. "
        + "<br> Destruction of an object occurs when its reference count reaches zero. Reference count is the number of variables and other elements that refer to an object."
        + "<br> If nothing is referring to it (it has a reference count of zero) nothing can interact with it, so it can be safely deleted. <br>"
        + "<br> In some situations, two (or more) objects can be referred to by each other only, and therefore can be deleted as well. "
        + "<br> The del statement reduces the reference count of an object by one, and this often leads to its deletion."
        + "<br> The magic method for the del statement is __del__. "
        + "<br> The process of deleting objects when they are no longer needed is called garbage collection."
        + "<br> In summary, an object's reference count increases when it is assigned a new name or placed in a container (list, tuple, or dictionary). The object's reference count decreases when it's deleted with del, its reference is reassigned, or its reference goes out of scope. When an object's reference count reaches zero, Python automatically deletes it."
        + "<br> <br> a = 42  # Create object <42>"
        + "<br> b = a  # Increase ref. count  of <42> "
        + "<br> c = [a]  # Increase ref. count  of <42> "
        + "<br> "
        + "<br> del a  # Decrease ref. count  of <42>"
        + "<br> b = 100  # Decrease ref. count  of <42> "
        + "<br> c[0] = -1  # Decrease ref. count  of <42>",
        "Object-Lifecycle-When-an-object-is-destroyed"],

    ["***Data Hiding",
        "A key part of object-oriented programming is encapsulation, which involves packaging of related variables and functions into a single easy-to-use object - an instance of a class. "
        + "<br> A related concept is data hiding, which states that implementation details of a class should be hidden, and a clean standard interface be presented for those who want to use the class. "
        + "<br> In other programming languages, this is usually done with private methods and attributes, which block external access to certain methods and attributes in a class. "
        + "<br> "
        + "<br> The Python philosophy is slightly different. It is often stated as \"we are all consenting adults here\", meaning that you shouldn't put arbitrary restrictions on accessing parts of a class. Hence there are no ways of enforcing a method or attribute be strictly private. "
        + "<br> However, there are ways to discourage people from accessing parts of a class, such as by denoting that it is an implementation detail, and should be used at their own risk.",
        "Data-Hiding"],

    ["***Class Methods",
        "Methods of objects are called by an instance of a class, which is then passed to the self parameter of the method. Class methods are different - they are called by a class, which is passed to the cls parameter of the method. A common use of these are factory methods, which instantiate an instance of a class, using different parameters than those usually passed to the class constructor. Class methods are marked with a classmethod decorator."
        + "<br> <br> class Rectangle:"
        + "<br> &nbsp; def __init__(self, width, height):"
        + "<br> &nbsp; &nbsp; self.width = width"
        + "<br> &nbsp; &nbsp; self.height = height"
        + "<br> "
        + "<br> &nbsp; def calculate_area(self):"
        + "<br> &nbsp; &nbsp; return self.width * self.height"
        + "<br> "
        + "<br> &nbsp; @classmethod"
        + "<br> &nbsp; def new_square(cls, side_length):"
        + "<br> &nbsp; &nbsp; return cls(side_length, side_length)"
        + "<br> "
        + "<br> square = Rectangle.new_square(5)"
        + "<br> print(square.calculate_area())"
        + "<br> <br> 25 <br> <br> "
        + "new_square is a class method and is called on the class, rather than on an instance of the class. It returns a new object of the class cls. "
        + "<br> Technically, the parameters self and cls are just conventions; they could be changed to anything else. However, they are universally followed, so it is wise to stick to using them.",
        "Class-Methods"],

    ["***Static Methods",
        "Static methods are similar to class methods, except they don't receive any additional arguments; they are identical to normal functions that belong to a class. They are marked with the staticmethod decorator."
        + "<br> <br> class Pizza:"
        + "<br> &nbsp; def __init__(self, toppings):"
        + "<br> &nbsp; &nbsp; self.toppings = toppings"
        + "<br> "
        + "<br> &nbsp; @staticmethod"
        + "<br> &nbsp; def validate_topping(topping):"
        + "<br> &nbsp; &nbsp; if topping == \"pineapple\":"
        + "<br> &nbsp; &nbsp; &nbsp; raise ValueError(\"No pineapples!\")"
        + "<br> &nbsp; &nbsp; else:"
        + "<br> &nbsp; &nbsp; &nbsp; return True"
        + "<br> "
        + "<br> ingredients = [\"cheese\", \"onions\", \"spam\"]"
        + "<br> if all(Pizza.validate_topping(i) for i in ingredients):"
        + "<br> pizza = Pizza(ingredients) "
        + "<br> <br> Static methods behave like plain functions, except for the fact that you can call them from an instance of the class.",
        "Static-Methods"],


    ["***Properties",
        "Properties provide a way of customizing access to instance attributes. They are created by putting the property decorator above a method, which means when the instance attribute with the same name as the method is accessed, the method will be called instead. One common use of a property is to make an attribute read-only."
        + "<br> <br> class Pizza:"
        + "<br> &nbsp; def __init__(self, toppings):"
        + "<br> &nbsp; &nbsp; self.toppings = toppings"
        + "<br> "
        + "<br> &nbsp; @property"
        + "<br> &nbsp; def pineapple_allowed(self):"
        + "<br> &nbsp; &nbsp; return False"
        + "<br> "
        + "<br> pizza = Pizza([\"cheese\", \"tomato\"])"
        + "<br> print(pizza.pineapple_allowed)"
        + "<br> pizza.pineapple_allowed = True"
        + "<br> <br> False <br> attributeError: can't set attribute",
        "Properties"],


    ["***Properties setter/getter",
        "Properties can also be set by defining setter/getter functions. The setter function sets the corresponding property's value. The getter gets the value. To define a setter, you need to use a decorator of the same name as the property, followed by a dot and the setter keyword. The same applies to defining getter functions."
        + "<br> <br> class Pizza:"
        + "<br> &nbsp; def __init__(self, toppings):"
        + "<br> &nbsp; &nbsp; self.toppings = toppings"
        + "<br> &nbsp; &nbsp; self._pineapple_allowed = False"
        + "<br> "
        + "<br> &nbsp; @property"
        + "<br> &nbsp; def pineapple_allowed(self):"
        + "<br> &nbsp; &nbsp; return self._pineapple_allowed"
        + "<br> "
        + "<br> &nbsp; @pineapple_allowed.setter"
        + "<br> &nbsp; def pineapple_allowed(self, value):"
        + "<br> &nbsp; &nbsp; if value:"
        + "<br> &nbsp; &nbsp; &nbsp; password = input(\"Enter the password: \")"
        + "<br> &nbsp; &nbsp; &nbsp; if password == \"Sw0rdf1sh!\":"
        + "<br> &nbsp; &nbsp; &nbsp; &nbsp; self._pineapple_allowed = value"
        + "<br> &nbsp; &nbsp; &nbsp; else:"
        + "<br> &nbsp; &nbsp; &nbsp; &nbsp; raise ValueError(\"Alert! Intruder!\")"
        + "<br> "
        + "<br> pizza = Pizza([\"cheese\", \"tomato\"])"
        + "<br> print(pizza.pineapple_allowed)"
        + "<br> pizza.pineapple_allowed = True"
        + "<br> print(pizza.pineapple_allowed)"
        + "<br> <br> False <br> Enter the password: Sw0rdf1sh! <br> True",
        "Properties-setter-getter"],

    ["Finite generators",
        "Finite generators can be converted into lists by passing them as arguments to the list function. Using generators results in improved performance, which is the result of the lazy (on demand) generation of values, which translates to lower memory usage. Furthermore, we do not need to wait until all the elements have been generated before we start to use them."
        + "<br> <br> def numbers(x):"
        + "<br> &nbsp; for i in range(x):"
        + "<br> &nbsp; &nbsp; if i % 2 == 0:"
        + "<br> &nbsp; &nbsp; &nbsp; yield i"
        + "<br> "
        + "<br> print(list(numbers(11)))"
        + "<br> <br> [0, 2, 4, 6, 8, 10]",
        "Finitegenerators"],


    ["***Lambdas and why use Lambdas and can Lambdas be assigned to variable",
        "Creating a function normally (using def) assigns it to a variable automatically. This is different from the creation of other objects; same is possible with functions, provided that they are created using lambda syntax. Functions created this way are known as anonymous. This approach is most commonly used when passing a simple function as an argument to another function."
        + "<br> <br> def my_func(f, arg):"
        + "<br> &nbsp; return f(arg)"
        + "<br> "
        + "<br> my_func(lambda x: 2*x*x, 5)"
        + "<br> <br> Lambdas functions aren't as powerful as named functions. "
        + "They can only do things that require a single expression - usually equivalent to a single line of code."
        + "yes and use like normal functions. However, there is rarely a good reason to do this - it is usually better to define a function with def instead."
        + "<br> <br> double = lambda x: x * 2"
        + "<br> print(double(7)) <br> <br> 14 ",
        "Lambdas"],

    ["***map",
        "The built-in functions map and filter are very useful higher-order functions that operate on lists (or similar objects called iterables). The function map takes a function and an iterable as arguments, and returns a new iterable with the function applied to each argument. "
        + "<br> <br> def add_five(x):"
        + "<br> &nbsp; return x + 5"
        + "<br> "
        + "<br> nums = [11, 22, 33, 44, 55]"
        + "<br> result = list(map(add_five, nums))"
        + "<br> print(result)"
        + "<br> <br> [16, 27, 38, 49, 60] <br> <br> We could have achieved the same result more easily by using lambda syntax"
        + "<br> <br> nums = [11, 22, 33, 44, 55]"
        + "<br> "
        + "<br> result = list(map(lambda x: x+5, nums))"
        + "<br> print(result)<br> <br> To convert the result into a list, we used list explicitly.",
        "map"],

    ["***filter",
        "The function filter filters an iterable by removing items that don't match a predicate (a function that returns a Boolean). "
        + "<br> <br> nums = [11, 22, 33, 44, 55]"
        + "<br> res = list(filter(lambda x: x%2==0, nums))"
        + "<br> print(res)"
        + "<br> <br> [22,44]<br> <br> Like map, the result has to be explicitly converted to a list if you want to print it.",
        "filter"],

    ["# Fibonacci Generator",
        "<br> def fib(num):"
        + "<br> &nbsp; a,b = 0,1"
        + "<br> &nbsp; for i in xrange(0, num):"
        + "<br> &nbsp; &nbsp; yield \"{}: {}\".format(i+1, a)"
        + "<br> &nbsp; &nbsp; a, b = b, a + b"
        + "<br> for item in fib(10):"
        + "<br> &nbsp; print item"
        + "<br> <br>1: 0 <br>2: 1 <br>3: 1 <br>4: 2 <br>5: 3 <br>6: 5 <br>7: 8 <br>8: 13 <br>10: 34 "],

    ["Do generators have memory restrictions",
        "no, Due to the fact that they yield one item at a time, generators don't have the memory restrictions of lists. In fact, they can be infinite!"
        + "<br> <br> def infinite_sevens():"
        + "<br> &nbsp; while True:"
        + "<br> &nbsp; &nbsp; yield 7"
        + "<br> "
        + "<br> for i in infinite_sevens():"
        + "<br> &nbsp; print(i)"
        + "<br> <br> 7<br> 7<br> 7<br> 7<br> ...<br> <br> In short, generators allow you to declare a function that behaves like an iterator, i.e. it can be used in a for loop."],


    ["Which statement can be used to achieve the same behavior as my_func = my_dec(my_func)?",
        "@my_dec"],

    ["***Recursion",
        "Recursion is a very important concept in functional programming. The fundamental part of recursion is self-reference - functions calling themselves. It is used to solve problems that can be broken up into easier sub-problems of the same type. Once it reaches the end known as the base case, as it can be calculated without performing any more factorials. The base case acts as the exit condition of the recursion."
        + "<br> <br> def factorial(x):"
        + "<br> &nbsp;if x == 1:"
        + "<br> &nbsp; &nbsp;return 1"
        + "<br> &nbsp;else: "
        + "<br> &nbsp; &nbsp;return x * factorial(x-1)"
        + "<br> "
        + "<br> print(factorial(5))<br> <br> 120",
        "Recursion"],

    ["can recursion be indirect",
        "One function can call a second, which calls the first, which calls the second, and so on. This can occur with any number of functions. added note Recursive functions can be infinite, just like infinite while loops"
        + "<br><br>def is_even(x):"
        + "<br> if x == 0:"
        + "<br> return True"
        + "<br> else:"
        + "<br> return is_odd(x-1)"
        + "<br>"
        + "<br> def is_odd(x):"
        + "<br> return not is_even(x)"
        + "<br>"
        + "<br>"
        + "<br> print(is_odd(17))"
        + "<br> print(is_even(23))"
        + "<br><br> True <br>False"],

    ["Sets and When to use sets",
        "Sets are data structures, similar to lists or dictionaries. They are created using curly braces, or the set function. They share some functionality with lists, such as the use of in to check whether they contain a particular item."
        + "<br> <br> num_set = {1, 2, 3, 4, 5}"
        + "<br> word_set = set([\"spam\", \"eggs\", \"sausage\"])"
        + "<br> "
        + "<br> print(3 in num_set)"
        + "<br> print(\"spam\" not in word_set)"
        + "<br> <br> True <br> False <br> <br> To create an empty set, you must use set(), as {} creates an empty dictionary."
        + "<br> <br> - Use a set if you need uniqueness for the elements. "],

    ["***Sets differ from lists in several ways",
        "but share several list operations such as len. They are unordered, which means that they can't be indexed. They cannot contain duplicate elements. Due to the way they're stored, it's faster to check whether an item is part of a set, rather than part of a list. Instead of using append to add to a set, use add. The method remove removes a specific element from a set; pop removes an arbitrary element."
        + "<br> <br> nums = {1, 2, 1, 3, 1, 4, 5, 6}"
        + "<br> print(nums)"
        + "<br> nums.add(-7)"
        + "<br> nums.remove(3)"
        + "<br> print(nums)"
        + "<br> <br> {1, 2, 3, 4, 5, 6} <br>  {1, 2, 4, 5, 6, -7}"
        + "<br> <br> Basic uses of sets include membership testing and the elimination of duplicate entries.",
        "Sets-differ-from-lists-in-several-ways"],

    ["***Can sets be combined",
        "Sets can be combined using mathematical operations. "
        + "<br> The union operator | combines two sets to form a new one containing items in either."
        + "<br> The intersection operator & gets items only in both. "
        + "<br> The difference operator - gets items in the first set but not in the second. "
        + "<br> The symmetric difference operator ^ gets items in either set, but not both."
        + "<br> <br> first = {1, 2, 3, 4, 5, 6}"
        + "<br> second = {4, 5, 6, 7, 8, 9}"
        + "<br> "
        + "<br> print(first | second)"
        + "<br> print(first & second)"
        + "<br> print(first - second)"
        + "<br> print(second - first)"
        + "<br> print(first ^ second)"
        + "<br> <br> {1, 2, 3, 4, 5, 6, 7, 8, 9}"
        + "<br> {4, 5, 6}"
        + "<br> {1, 2, 3}"
        + "<br> {8, 9, 7}"
        + "<br> {1, 2, 3, 7, 8, 9}",
        "Can-sets-be-combined"],

    ["Data structures",
        "lists, dictionaries, tuples, sets"],

    ["***itertools",
        "The module itertools is a standard library that contains several functions that are useful in functional programming. One type of function it produces is infinite iterators. The function count counts up infinitely from a value. The function cycle infinitely iterates through an iterable (for instance a list or string). The function repeat repeats an object, either infinitely or a specific number of times."
        + "from itertools import count"
        + "<br>"
        + "<br>for i in count(3):"
        + "<br>  &nbsp; print(i)"
        + "<br>  &nbsp; if i >=11:"
        + "<br>   &nbsp;  &nbsp; break"
        + "<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br> 10<br> 11 ",
        "itertools"],


    ["Inheritance",
        "Inheritance provides a way to share functionality between classes. To inherit a class from another class, put the superclass name in parentheses after the class name."
        + "<br> <br> class Animal: "
        + "<br> &nbsp; def __init__(self, name, color):"
        + "<br> &nbsp; &nbsp; self.name = name"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> "
        + "<br> class Cat(Animal):"
        + "<br> &nbsp; def purr(self):"
        + "<br> &nbsp; &nbsp; print(\"Purr...\")"
        + "<br> "
        + "<br> class Dog(Animal):"
        + "<br> &nbsp; def bark(self):"
        + "<br> &nbsp; &nbsp; print(\"Woof!\")"
        + "<br> "
        + "<br> fido = Dog(\"Fido\", \"brown\")"
        + "<br> print(fido.color)"
        + "<br> fido.bark()"
        + "<br> <br> brown <br> Woof!"],

    ["superclass and subclass",
        "A class that inherits from another class is called a subclass. A class that is inherited from is called a superclass. If a class inherits from another with the same attributes or methods, it overrides them."
        + "<br> <br> class Wolf: "
        + "<br> &nbsp; def __init__(self, name, color):"
        + "<br> &nbsp; &nbsp; self.name = name"
        + "<br> &nbsp; &nbsp; self.color = color"
        + "<br> "
        + "<br> &nbsp; def bark(self):"
        + "<br> &nbsp; &nbsp; print(\"Grr...\")"
        + "<br> "
        + "<br> class Dog(Wolf):"
        + "<br> &nbsp; def bark(self):"
        + "<br> &nbsp; &nbsp; print(\"Woof\")"
        + "<br> "
        + "<br> husky = Dog(\"Max\", \"grey\")"
        + "<br> husky.bark()"
        + "<br> <br> Woof <br> <br> In the example, Wolf is the superclass, Dog is the subclass"],

    ["can Inheritance be indirect.",
        "yes One class can inherit from another, and that class can inherit from a third class. "
        + "<br> <br> class A:"
        + "<br> &nbsp; def method(self):"
        + "<br> &nbsp; &nbsp; print(\"A method\")"
        + "<br> "
        + "<br> class B(A):"
        + "<br> &nbsp; def another_method(self):"
        + "<br> &nbsp; &nbsp; print(\"B method\")"
        + "<br> "
        + "<br> class C(B):"
        + "<br> &nbsp; def third_method(self):"
        + "<br> &nbsp; &nbsp; print(\"C method\")"
        + "<br> "
        + "<br> c = C()"
        + "<br> c.method()"
        + "<br> c.another_method()"
        + "<br> c.third_method()"
        + "<br> <br> A method <br> B method <br> C method <br> <br> However, circular inheritance is not possible."],


    ["Weakly private methods and attributes",
        "Weakly private methods and attributes have a single underscore at the beginning. This signals that they are private, and shouldn't be used by external code. However, it is mostly only a convention, and does not stop external code from accessing them. Its only actual effect is that from module_name import * won't import variables that start with a single underscore."
        + "<br> <br> class Queue:"
        + "<br> &nbsp; def __init__(self, contents):"
        + "<br> &nbsp; &nbsp; self._hiddenlist = list(contents)"
        + "<br> "
        + "<br> &nbsp; def push(self, value):"
        + "<br> &nbsp; &nbsp; self._hiddenlist.insert(0, value)"
        + "<br> "
        + "<br> &nbsp; def pop(self):"
        + "<br> &nbsp; &nbsp; return self._hiddenlist.pop(-1)"
        + "<br> "
        + "<br> &nbsp; def __repr__(self):"
        + "<br> &nbsp; &nbsp; return \"Queue({})\".format(self._hiddenlist)"
        + "<br> "
        + "<br> queue = Queue([1, 2, 3])"
        + "<br> print(queue)"
        + "<br> queue.push(0)"
        + "<br> print(queue)"
        + "<br> queue.pop()"
        + "<br> print(queue)"
        + "<br> <br> print(queue._hiddenlist)"
        + "<br> <br> Queue([1, 2, 3])"
        + "<br> Queue([0, 1, 2, 3])"
        + "<br> Queue([0, 1, 2])"
        + "<br> [0, 1, 2]"
        + "<br> <br> In the code above, the attribute _hiddenlist is marked as private, but it can still be accessed in the outside code. The __repr__ magic method is used for string representation of the instance."],

    ["***Strongly private methods and attributes",
        "Strongly private methods and attributes have a double underscore at the beginning of their names. This causes their names to be mangled, which means that they can't be accessed from outside the class. "
        + "<br> The purpose of this isn't to ensure that they are kept private, but to avoid bugs if there are subclasses that have methods or attributes with the same names."
        + "<br> Name mangled methods can still be accessed externally, but by a different name. The method __privatemethod of class Spam could be accessed externally with _Spam__privatemethod."
        + "<br> <br> class Spam:"
        + "<br> &nbsp; __egg = 7"
        + "<br> &nbsp; def print_egg(self):"
        + "<br> &nbsp; &nbsp; print(self.__egg)"
        + "<br> "
        + "<br> s = Spam()"
        + "<br> s.print_egg()"
        + "<br> print(s._Spam__egg)"
        + "<br> print(s.__egg)"
        + "<br> <br> 7<br> 7<br> attributeError: 'Spam' object has no attribute '_egg'"
        + "<br> <br> Basically, Python protects those members by internally changing the name to include the class name.",
        "Strongly-private-methods-and-attributes"],

    ["List slices",
        "List slices provide a more advanced way of retrieving values from a list. Basic list slicing involves indexing a list with two colon-separated integers. This returns a new list containing all the values in the old list between the indices. Like the arguments to range, the first index provided in a slice is included in the result, but the second isn't."
        + "<br> <br> squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
        + "<br> print(squares[2:6])"
        + "<br> print(squares[3:8])"
        + "<br> print(squares[0:1])"
        + "<br> <br> [4, 9, 16, 25] <br> [9, 16, 25, 36, 49] <br> [0]"],

    ["Does List slices have a third number",
        "yes representing the step, to include only alternate values in the slice."
        + "<br> <br> squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
        + "<br> print(squares[::2])"
        + "<br> print(squares[2:8:3])"
        + "<br> <br> [0, 4, 16, 36, 64] <br> [4, 25]"],

    ["None and None object",
        "The None object is used to represent the absence of a value. It is similar to null in other programming languages.  Like other \"empty\" values, such as 0, [] and the empty string, it is False when converted to a Boolean variable.  When entered at the Python console, it is displayed as the empty string."
        + "<br> is returned by any function that doesn't explicitly return anything else."
        + "<br> <br> def some_func():"
        + "<br> &nbsp; print(\"Hi!\")"
        + "<br> "
        + "<br> var = some_func()"
        + "<br> print(var) <br> <br> Hi! <br> None"],

    ["for i in range(1, 11):"
        + "<br> &nbsp; print i",
        "<br> <br> 1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10"],

    ["i = 1 "
        + "<br> while i <= 10: <br> &nbsp; print i <br> &nbsp; i += 1",
        "<br> <br> 1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10"],

    ["a = 10 <br> b = 20 <br> if a < b: <br> &nbsp; print \"{} is less than {}\".format(a, b)"
        + "<br> elif a == 20: <br> &nbsp; print \"{} is equal to {}\".format(a, b)"
        + "<br> else: <br> &nbsp; print \"{} is greater than {}\".format(a, b)",
        "<br> <br> 10 is less than 20"],

    ["# Fizz Buzz"
        + "<br> for num in xrange(1,16):"
        + "<br> &nbsp; if num % 5 == 0 and num % 3 == 0:"
        + "<br> &nbsp; &nbsp; print \"FizzBuzz\""
        + "<br> &nbsp; elif num % 3 == 0:"
        + "<br> &nbsp; &nbsp; print \"Fizz\""
        + "<br> &nbsp; elif num % 5 == 0:"
        + "<br> &nbsp; &nbsp; print \"Buzz\""
        + "<br> &nbsp; else:"
        + "<br> &nbsp; &nbsp; print num",
        "<br> 1 <br> 2 <br> Fizz <br> 4 <br> Buzz <br> Fizz <br>  7 <br> 8 <br> Fizz <br> Buzz <br> 11 <br> Fizz <br> 13 <br> 14 <br> FizzBuzz"],

    ["# Fibonacci Suquence"
        + "<br> a, b = 0, 1"
        + "<br> for i in xrange(0, 10):"
        + "<br> &nbsp; print a"
        + "<br> &nbsp; a, b = b, a + b",
        "<br> 0 <br> 1 <br> 1 <br> 2 <br> 3 <br> 5 <br> 8 <br> 13 <br> 21"],

];
