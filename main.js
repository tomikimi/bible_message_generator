const bibleQuotes = [
  "Philipians 4:13 \n I can do all things through Christ who strengthens me.\n",
  "Jeremiah 29:11 \n For i Know the plans i have for you, declares the Lord, plans to prosper you and not to harm, plans to give you a hope and a future.\n",
  "Isaiah 41:10 \n Do not fear, for i am with you; do not be dismayed, for i am your God. I will strengthen you and help you.\n",
  "Romans 8:28 \n And we Know that in all things God works for the good of those who love him.\n",
  "Psalm 46:1 \n God is our refuge and strength, an ever-present help in trouble.\n",
  "Proverbs 3:5-6 \n Trust in the Lord with all your heart and lean not on your own understanding; in all your ways acknowledge Him, and He will make your paths straight.\n",
  "Joshua 1:9 \n Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\n",
  "Psalm 37:4 \n Delight yourself in the Lord, and He will give you the desires of your heart.\n",
  "2 Corinthians 5:7 \n For we live by faith, not by sight.\n",
  "Matthew 19:26 \n With man this is impossible, but with God all things are possible.\n",
  "Isaiah 40:31 \n But those who hope in the Lord will renew their strength. They will soar on wings like eagles.\n",
  "Psalm 23:1 \n The Lord is my shepherd; I shall not want.\n",
  "Romans 12:12 \n Be joyful in hope, patient in affliction, faithful in prayer.\n",
  "Deuteronomy 31:6 \n Be strong and of good courage; do not fear nor be afraid of them, for the Lord your God goes with you.\n",
  "Psalm 121:1-2 \n I lift up my eyes to the hills—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.\n",
  "1 Corinthians 16:13-14 \n Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love.\n",
  "Isaiah 26:3 \n You will keep in perfect peace those whose minds are steadfast, because they trust in you.\n",
  "Psalm 34:17-18 \n The righteous cry out, and the Lord hears them; He delivers them from all their troubles.\n",
  "Matthew 5:16 \n Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.\n",
  "Romans 15:13 \n May the God of hope fill you with all joy and peace as you trust in Him.",
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

function generateRandomIndex() {
  const index = Math.floor(Math.random() * 20);
  return index;
}

// Get the FullName of the User of the App
rl.question(
  "\n --Bible Quote Generator-- \n\n Hi, What is your Name?",
  (name) => {
    fullName = getFullName(name);
    console.log(`${fullName}`);
    rl.close();
  }
);
