# Prompts

1. What are the different loops JavaScript provides us with?
    `for` statement
    `do...while` statement
    `while` statement
    `for...in` statement
    `for...of` statement

    `label` statement
    `break` statement
    `continue` statement


2. What is the syntax of one of the loops in your above answer? How and when should you use this loop? Give an example.
    The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property. 

    ```
    for (variable of object)
        statement
    ```

    The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:

    ```
    const arr = [3, 5, 7];
    arr.foo = 'hello';

    for (const i in arr) {
        console.log(i); // logs "0", "1", "2", "foo"
    }

    for (const i of arr) {
        console.log(i); // logs 3, 5, 7
    }
    ```

    when should you use this loop?
    Only use this loop, when you intend to get the values of specific properties in an Object.


3. What is the syntax of another one of the loops in your above answer? How and when should you use this loop? Give an example.
    ```
    while (condition)
    statement
    ```

    A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows: 

    ```
    let n = 0;
    let x = 0;
    while (n < 3) {
        n++;
        x += n;
    }
    ```

4. What is the syntax of another one of the loops in your above answer? How and when should you use this loop? Give an example.
    ```
    label:
        statement
    ```

    the label statement lets you refer to 

    A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and   then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

    Not exactly a loop, but can be used as a way to create one. You can use this to go back to an earlier portion of code. This particular loop would be considered bad practice as functions should be used in its place. 

5. What is your favorite thing you learned this week?
    Favorite thing I learned is the versatility of loops and the number of them that exist.

Instructions

As developers, research is a constant part of our job. A common saying is that 90% of software development is Googling, and while that is an exaggeration, Google is a highly used tool in the role. This Research assignment is meant to go beyond the course curriculum and increase your understanding of relevant topics while exposing you to online resources you'll frequently use on the job. Please write a paragraph for two (2) of the above prompts and include URLs from where you found the information to cite your sources. Do not copy and paste text from the internet or any other source; use the information you find in your research, summarize, in your own words, the concepts. Plagiarism will result in a zero for the assignment as well as disciplinary actions.


This assignment is graded based on participation.

Reminder:  Create a .pdf file with your research findings (.pdf is the only accepted file type).

- To save as a .pdf, go to Save As or Export, then choose the file type .pdf. This will save a new version of your document as a .pdf.

- If you have a Mac and use Pages, please make sure to export the final version of the document to a .pdf before submitting.