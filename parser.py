import json

def parse_line(line):
    cleaned_line = ' '.join(line.split())

    # Split the line by spaces, limiting the split count to 2
    id, spanish_word, english_word = cleaned_line.strip().split(' ', 2)

    return {
        'id': id,
        'spanish': spanish_word,
        'english': english_word
    }

# Read the input.txt file
with open('input.txt', 'r') as file:
    lines = file.readlines()

    output = [parse_line(line) for line in lines]

    output_data = {
        'apiData': output
    }

    # Convert the data to JSON string
    output_string = json.dumps(output_data, indent=2)

    # Write the output to the words.json file
    with open('words.json', 'w') as output_file:
        output_file.write(output_string)

    print('Parsing complete. Output saved to words.json file.')
