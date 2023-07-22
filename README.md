# Common Spanish Words Project

A web application where flashcards with English and Spanish words are implemented to help users learn some of the most commonly used Spanish words. I am at the second stage of the project where I am learning how to make interactive flashcards on the web.

## What I did

I googled "list of most common Spanish words", and I found an impressive list on a website. They claimed that their table of words contained some of the most frequently used Spanish vocabulary. 

I copied the list that was formmated into a table, and I pasted put into an empty .txt file and named it **input.txt**. Luckily for me, it was already formatted in a fairly good manner when I did this. I thought that writing the script to separate the spaces and special characters between the number, English word, and Spanish word wouldn't be too bad. At first, I wrote the script in JavaScript, since I was learning JavaScript. But then I thought about how a lot people used Python for basic scripting tasks like this, so I thought that I should try the same thing. 

So I wrote a Python script called **parser.py** that read the contents of the .txt file, removed any fluffs between the items, and dumped it into a .json file called **words.json**. 

## What I am doing

However, I am considering dumping the contents of **words.json** into a MongoDB database. Although non-relational databases are not as popular in the real world, I thought that it might make sense in my context since I was working with a relatively small amount of data. And by doing so, I could learn a bit more about databases in general as well. Perhaps storing the contents in a databse is "even more correct" than it is with a .json file. 

## How to run the script

If you want to try the script for yourself, then first you should download this project. You can delete the words.json file or simply put it in different directory. Then you go back to the directory where parsey.py is and type **python parser.py** into the terminal window. After that you should see a new **words.json** file and it should contain the correctly formatted contents, which includes: the IDs, the English words, and the Spanish words.
