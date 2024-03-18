# PUGofer-SimpleFunctions

You are required to submit two files
1. Submit the answers to the following problems in one file called yourfirstname.gs
2. Example screenshot of the gofer session where you  tried out the functions with some values. Screenshot file name should be screenshot1.gs

In the following, write a function "xyz : Type1 -> Type2" means write a function like
   xyz.a = ...something here...
where the type of 'a' is Type1 and the type of the result of "something here" is Type2 as shown below for the following sample.

## Sample exercise

**Problem:**
  Write a function "square : Int -> Int" that calculates the square of its argument
**Solution:**
    square.x = x * x

1. Write a function "capitals: String -> String" that given a 2 letter code of any state in India, returns its capital. Note: This has the same structure as our functions asciival

2. Write a function "poly1: Int -> Int" that calculates the polynomial x^3 + 4*x + 33

3. Write function "cube1: Int -> Int" that calculates the cube of its argument. Write another function "mult4 : Int -> Int" that calculates 4 times its argument. Use these functions, and "+" to write another function "poly2: Int -> Int" that calculates the same polynomial as problem 2.

4. Write a function "isPyTriple: Int->Int-Int->Bool" that given three integers a,b,c, returns whether c^2 is equal to a^2 + b^2

# PUGofer-Functions on Structured Arguments
Sample exercise

Problem:
  Write a function "square : Int -> Int" that calculates the square of its argument
Solution:
  square.x = x * x
-------------------------------------------------------------------------------------------------------

1. a. Write a function "dist1: Int -> Int -> Int" that given speed and time of a car returns the distance it travels.
   b. Write a function "dist2" that does the same calculation as in part a, but takes a tuple of Ints as its single argument.

2. Write a function "secondEl: [a] -> a" that returns the second element in a list using the "head" function

3. Write a function "secondProd: (Int, (Int, Int)) -> Int" that returns the product of the components of the nested, second tuple, in the argument. Use fst and snd to do this.

4. Write a function "addFrac: (Int, Int)->(Int, Int)->(Int,Int)" that given fractions in the form of tuples (n1, d1) and (n2, d2), returns the result of adding them. Use function 'lcm:Int->Int->Int' and integer division '(/): Int -> Int -> Int' which are already in gofer to implement this.

5. Given any tuple, which is the second tuple in a list of tuples itself inside a tuple, for example
    (22, [ (3, 4), (5, 6), (7, 8) ]),
   write a function "somesum" that returns the sum of both its components, in this case, 5 + 6.
   Think about what will be type of that function. Use the functions head, tail, fst, and snd to extract the components as we showed with the "ta8" function in the class.
