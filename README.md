# Common Spanish Words Project

This is a web application designed to facilitate the learning process of commonly used Spanish words through interactive flashcards. This project is currently in its second stage, focusing on the implementation of interactive flashcards on the web.

## Methodology and Data Collection

To start this project, I performed an extensive search by looking up "most common Spanish words" on Google. A highly informative and comprehensive list was discovered on a reputable website, which served as the primary data source for this project.

Upon locating the desired table of words on the website, the content was extracted. The obtained data was then transferred into an empty .txt file named **input.txt**. Fortunately, the initial data formatting in the .txt file was relatively suitable, minimizing the complexity of the subsequent processing.

## Data Parsing and Transformation

For the parsing and transformation of the data, I decided to switch programming languages. Initially, I used a JavaScript script since I have an ongoing process of learning JavaScript. However, I decided to learn a bit of Python and use it as a compelling alternative due to its widespread adoption for basic scripting tasks and data manipulation.

The Python script, titled **parser.py**, was developed to read the contents of **input.txt**, effectively removing any superfluous characters between the individual elements. Subsequently, the cleaned data was converted into a structured JSON format and saved as **words.json**, ready for further use.

## Considerations for Database Integration

While **words.json** currently serves as the repository for the data, I am contemplating about leveraging MongoDB, a non-relational database, for storage. While non-relational databases may not be as ubiquitous in real-world scenarios, their application seems fitting in this context, given the relatively modest dataset size.

The pursuit of integrating MongoDB also offers an opportunity to delve into the workings of databases more comprehensively. The benefits of employing a database in this scenario, as opposed to a static .json file, may enhance the correctness and efficiency of data management.

## Executing the Script

To use the data parsing script, you should follow these steps:

1. Download this project to your local machine.
2. Optionally, delete the existing **words.json** file, or relocate it to a different directory.
3. Navigate to the directory containing **parser.py** in the terminal or command prompt.
4. Execute the script by entering the command **python parser.py** in the terminal window.
5. Once the script runs successfully, a new **words.json** file will be generated, containing appropriately formatted contents, including IDs, English words, and their corresponding Spanish translations.

Thank you for your interest in the Common Spanish Words Project. We hope this application assists you in expanding your Spanish vocabulary effectively and enjoyably!
