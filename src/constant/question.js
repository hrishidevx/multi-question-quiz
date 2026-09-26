export const questions = [
  {
    id: 1,
    Question: "Full Form of HTML",
    type: "Computer",
    category: "HTML",
    option: [
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "Hyperlink Text Markup Language",
      "HighText Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
    explanation:
      "HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages. It provides the structure and semantic meaning to web content.",
  },
  {
    id: 2,
    Question: "Which HTML tag is used to create a hyperlink?",
    type: "Computer",
    category: "HTML",
    option: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
    explanation:
      "The <a> tag is used to create hyperlinks in HTML. The href attribute specifies the URL of the page the link goes to. Example: <a href='url'>Link text</a>",
  },
  {
    id: 3,
    Question: "Which CSS property is used to change the text color?",
    type: "Computer",
    category: "CSS",
    option: ["font-color", "text-color", "color", "foreground-color"],
    correctAnswer: "color",
    explanation:
      "The 'color' property in CSS is used to set the text color of an element. For example: color: red; or color: #FF0000; or color: rgb(255, 0, 0);",
  },
  {
    id: 4,
    Question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    type: "Computer",
    category: "JavaScript",
    option: ["var", "let", "const", "static"],
    correctAnswer: "const",
    explanation:
      "The 'const' keyword is used to declare variables that cannot be reassigned after initialization. This helps prevent accidental changes to important values. Note: const objects can still have their properties modified.",
  },
  {
    id: 5,
    Question: "What does === check in JavaScript?",
    type: "Computer",
    category: "JavaScript",
    option: [
      "Only value",
      "Only data type",
      "Value and data type",
      "Variable name",
    ],
    correctAnswer: "Value and data type",
    explanation:
      "The === operator (strict equality) checks both the value AND the data type. For example: 5 === '5' returns false because one is a number and one is a string. This is different from == which only checks the value.",
  },
  {
    id: 6,
    Question: "Which CSS property is used to make an element a flex container?",
    type: "Computer",
    category: "CSS",
    option: [
      "position: flex",
      "display: flex",
      "flex: display",
      "display: box",
    ],
    correctAnswer: "display: flex",
    explanation:
      "The 'display: flex' property converts an element into a flex container, allowing you to use flexbox layout. This makes it easy to align and distribute items within the container.",
  },
  {
    id: 1,
    Question: "What is the time complexity of Binary Search in a sorted array?",
    type: "math",
    category: "Algorithm",
    option: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correctAnswer: "O(log n)",
    explanation:
      "The worst-case and average-case time complexity of a Binary Search in a sorted array is (O(log n)), where (n) represents the total number of elements in the array",
  },
  {
    id: 2,
    Question: "What is 15²?",
    type: "math",
    category: "Square",
    option: ["225", "235", "30", "125"],
    correctAnswer: "225",
    explanation: "15²= 15x15 = 225",
  },
  {
    id: 3,
    Question: "Which data structure follows the FIFO principle?",
    type: "math",
    category: "Algorithm",
    option: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
    explanation:
      "A queue is the data structure that follows the FIFO (First-In, First-Out) principle",
  },
  {
    id: 4,
    Question: "If x + 15 = 30, what is x?",
    type: "math",
    category: "Algorithm",
    option: ["15", "-15", "45", "-45"],
    correctAnswer: "15",
    explanation: "x+15 = 30 ;  x= 30-15;  x = 15",
  },
  {
    id: 5,
    Question: "What is 25 + 37?",
    type: "math",
    category: "Addition",
    option: ["62", "64", "61", "58"],
    correctAnswer: "62",
    explanation: "25+37= 62",
  },
  {
    id: 6,
    Question: "What is (12 x 8)x2 ?",
    type: "math",
    category: "Multiplication",
    option: ["98", "182", "192", "none of the above"],
    correctAnswer: "192",
    explanation: "(12x8)x2 = 96x2= 192",
  },
];
