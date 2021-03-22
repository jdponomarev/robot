# robot accessible squares size

Running:
node index.js

Execution time:
50ms
Space complexity: O(n)
Time complexity: O(n)

As far as the biggest number that has 2 subsequent mines is 698, we can limit our matrix size with 698/698.

We'll build a matrix of one quater of the area that a robot can access.

First we check each cell if it's numbers sum up to 23 or less and put "1" in matrix.

Then we start with 0:0 and traverse the matrix, push new cells into a stack and increment the counter.
Tried recursion at first, but for large numbers it can result with a call stack overflow.

Then we take the quater's size, remove the 0 row, multiply it by 4, add 1 (0:0) node and get the answer: 575021
Probably the last part can be done more effectivly, but I prefer the clear solution here.
