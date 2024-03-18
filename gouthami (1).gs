dist1: Int -> Int -> Int
dist1.v.t = v*t
-- where v is the speed and t is the time. dist1 is a function which takes speed and time and gives distance travelled.Since Distance(s) = Speed (v) * Time (t)

dist2: (Int, Int) -> Int
dist2. ( v, t) = v*t
-- "dist2" gives te same result as "dist1" but it takes a tuple of Ints as its single argument.


secondEl: [a] -> a
secondEl.(x::xs) = head.xs


secondProd:(Int, (Int,Int)) -> Int
secondProd.(x,(y))= fst.(y)*snd.(y)
-- Here (y) itself is a tuple.


addFrac:(Int, Int) -> (Int, Int) -> (Int, Int)
addFrac.(n1, d1).(n2, d2) = ( (n1*((lcm.d1.d2)/d1) + (n2*((lcm.d1.d2)/d2)), lcm.d1.d2)

somesum.x = fst.(head.(tail.(snd.x))) + snd.(head.(tail.(snd.x)))