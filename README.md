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
