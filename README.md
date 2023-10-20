[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12494169&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Answers
I belive that the average time complexity of my program is $\Theta$ $(n! + n)$. I found this by first looking at how many permutations are created which for a list of size $n$ which is $n!$. We also have to add the time complexity of looping through and checking if the list is sorted so thats is $n$. When we combine them we get $\Theta$ $(n! + n)$.

The best case input would be that the first list is the sorted list so we would have a time complexity of $n!$ as the $n$ would just go away. The worst case time complexity is that is would take more than one run so the time complexity would be $\Theta$ $(n! + n)$.

If you randomly generated the permutations instead of systematically like we did this the exercise you would have a $1/n!$ chance of randomly generating the sorted list. We also have to generate each list so that would be of time complexity $n$. So in total your time complexity would be $\Theta$ $(n! * n)$ and the $n$'s are multiplied becuase for each generated list you have a certain chance of it being the correct list along with it aswell.