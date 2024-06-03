## Learning Coding in JS

## Algorithms

### Sliding Window

The idea for Sliding window is quite simple. We need to look for questions which will be solved in two loops where the increment in inner loop is dependent on outer loop. Also there would be a mention of some integer `k` which will be our window size

So after the identification just follow these simple steps.

1. We will be initialising `i and j` as 0(starting indices for array)
2. Now we will have one major `while` loop condition i.e. j < array length
3. Now inside the while loop we will start adding a generic calculation which we will be doing all the
   time when loop runs.
   This calculation would be arround the arr[j] or basically the index j. The calculation will eventually yield us result once we hit the window size.
4. Then we will have 2 statement checks inside while loop,
   a. First till we reach the window size(since both i,j starts from 0).
   b. Second once we reach the window size (j-i+1)
5. On the first check our job would be to just increment `j` till we hit the window.
6. On the second check we will first get the result from point `3` and then since we will shift the
   window now, first we will remove the use of arr[i] from our calculation(in general we will be doing just the opposite of what we did in step 3)
7. Then we will increment both i and j to shift our window and we will always be in the window size.

### Variable Sliding Window

The idea for variable sliding window is very staright forward. We will be given some min, max, count etc value and will be asked the max/min size of the window for given condition.

After the identification just follow these steps :-

1. We will be initialising `i and j` as 0(starting indices for array)
2. Now we will have one major `while` loop condition i.e. j < array length
3. Now inside the while loop we will start adding a generic calculation which we will be doing all the
   time when loop runs.
4. Now we will have all the 3 conditions here unlike the fixed sliding window
   a. First till we reach the given condition increase the window size (since both i,j starts from 0)
   b. If the condition is met then in that case we store the size of the window and then we increment just the value of `j`. This is important because since the window is variable we still don't know how adding a new value will affect our solution, maybe the new `j` also becomes part of solution and we have a new window size as answer, so here we will have just `j++`
   c. The last condition would be if we out reach our condition, i.e. we now need to move our `i` as well. Now since the window is variable we are not sure to just do `i++`, so here we have a while loop inside this condition and we check till when we will come out of our main condition, till then do `i++` so that we are sure which values will be part of new array. Then after the while loop we do `j++` since we need to move the window ahead.
5. After all these checks and condition we return the solution value

> **Note** : The variable sliding window is just opposite of fixed. We just need to take care of two things, first even when we get solution we don't move both pointers just `j` since we still can get a window and second we have another condition that we can exceed the solution and in that case we move `i` via while loop

### Heaps
