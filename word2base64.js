<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word to Binary and Base64 Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input, button {
            margin: 5px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Word to Binary and Base64 Converter</h1>
    
    <h2>Convert Word to Binary</h2>
    <input type="text" id="wordInput" placeholder="Enter a word" />
    <button onclick="convertWordToBinary()">Convert to Binary</button>
    <p id="binaryOutput"></p>

    <h2>Convert Binary to Text</h2>
    <input type="text" id="binaryInput" placeholder="Enter binary (space-separated)" />
    <button onclick="convertBinaryToWord()">Convert to Text</button>
    <p id="textOutput"></p>

    <h2>Convert Word to Base64</h2>
    <input type="text" id="base64Input" placeholder="Enter a word" />
    <button onclick="convertWordToBase64()">Convert to Base64</button>
    <p id="base64Output"></p>

    <h2>Convert Base64 to Text</h2>
    <input type="text" id="base64DecodeInput" placeholder="Enter Base64" />
    <button onclick="convertBase64ToWord()">Convert to Text</button>
    <p id="base64TextOutput"></p>

    <script>
        // Function to convert a word to binary
        function wordToBinary(word) {
            let binaryArray = [];
            for (let i = 0; i < word.length; i++) {
                let binary = word.charCodeAt(i).toString(2);
                binary = binary.padStart(8, '0');
                binaryArray.push(binary);
            }
            return binaryArray.join(' ');
        }

        // Function to convert binary back to text
        function binaryToWord(binary) {
            let binaryArray = binary.split(' ');
            let text = '';
            for (let i = 0; i < binaryArray.length; i++) {
                let charCode = parseInt(binaryArray[i], 2);
                text += String.fromCharCode(charCode);
            }
            return text;
        }

        // Function to handle the conversion from word to binary
        function convertWordToBinary() {
            const wordInput = document.getElementById('wordInput').value;
            const binaryOutput = wordToBinary(wordInput);
            document.getElementById('binaryOutput').innerText = `Binary: ${binaryOutput}`;
        }

        // Function to handle the conversion from binary to text
        function convertBinaryToWord() {
            const binaryInput = document.getElementById('binaryInput').value;
            const textOutput = binaryToWord(binaryInput);
            document.getElementById('textOutput').innerText = `Text: ${textOutput}`;
        }

        // Function to convert a word to Base64
        function convertWordToBase64() {
            const base64Input = document.getElementById('base64Input').value;
            const base64Output = btoa(base64Input);
            document.getElementById('base64Output').innerText = `Base64: ${base64Output}`;
        }

        // Function to convert Base64 back to text
        function convertBase64ToWord() {
            const base64DecodeInput = document.getElementById('base64DecodeInput').value;
            const textOutput = atob(base64DecodeInput);
            document.getElementById('base64TextOutput').innerText = `Text: ${textOutput}`;
        }
    </script>
</body>
</html>
