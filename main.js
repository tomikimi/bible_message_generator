const bibleQuotes = [
  {
    name: "Bible Quotes 1",
    quotes: [
      {
        verse: "Romans 12:12",
        message:
          "Be joyful in hope, patient in affliction, faithful in prayer.",
      },
      {
        verse: "Deuteronomy 31:6",
        message:
          "Be strong and of good courage; do not fear nor be afraid of them, for the Lord your God goes with you.",
      },
      {
        verse: "Psalm 121:1-2",
        message:
          "I lift up my eyes to the hills—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
      },
    ],
  },
  {
    name: "Bible Quotes 2",
    quotes: [
      {
        verse: "1 Corinthians 16:13-14",
        message:
          "Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love.",
      },
      {
        verse: "Isaiah 26:3",
        message:
          "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      },
      {
        verse: "Psalm 34:17-18",
        message:
          "The righteous cry out, and the Lord hears them; He delivers them from all their troubles.",
      },
    ],
  },
  {
    name: "Bible Quotes 3",
    quotes: [
      {
        verse: "Matthew 5:16",
        message:
          "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
      },
      {
        verse: "Romans 15:13",
        message:
          "May the God of hope fill you with all joy and peace as you trust in Him.",
      },
      {
        verse: "Jeremiah 29:11",
        message:
          "For i Know the plans i have for you, declares the Lord, plans to prosper you and not to harm, plans to give you a hope and a future.",
      },
    ],
  },
];

// Application Variables
let fullName;

// Initiate the Readline Method to accept data from the user
const readline = require("readline");

// Create an Interface for both Input and Output
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

// Application Functions

// Function to return FullName of User
function getFullName(name) {
  return name;
}

// Function to Generate Random Message
function generateRandomMessage() {
  const index = Math.floor(Math.random() * 3);
  let messageIndex;
  const bibleQuote = bibleQuotes[index].name;

  switch (bibleQuote) {
    case "Bible Quotes 1":
      messageIndex = Math.floor(Math.random() * 3);
      return getRandomBibleQuote(bibleQuotes[index].quotes, messageIndex);
    case "Bible Quotes 2":
      messageIndex = Math.floor(Math.random() * 3);
      return getRandomBibleQuote(bibleQuotes[index].quotes, messageIndex);
    case "Bible Quotes 3":
      messageIndex = Math.floor(Math.random() * 3);
      return getRandomBibleQuote(bibleQuotes[index].quotes, messageIndex);
  }
}

// Function to format Random Message
function getRandomBibleQuote(selectedQuotes, index) {
  let quotes = selectedQuotes;
  let selectedMessage;

  for (let i in quotes) {
    if (Number(i) === Number(index)) {
      selectedMessage = `${quotes[i].verse} \n\n ${quotes[i].message}`;
      break;
    }
  }
  return selectedMessage;
}

// Get the FullName of the User of the App
rl.question(
  "\n --Bible Quote Generator-- \n\n Hi, What is your Name? ",
  (name) => {
    fullName = getFullName(name);
    if (fullName) {
      console.log(
        `\nDear ${fullName}, This is the word for you today from \n\n ${generateRandomMessage()}`
      );
    } else {
      console.log("Please provide us with your Name...");
    }

    rl.close();
  }
);
