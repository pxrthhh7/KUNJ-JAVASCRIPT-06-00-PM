let box = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don't stop when you're tired. Stop when you're done.",
    "Little things make big days.",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Work hard in silence, let your success be your noise. – Frank Ocean",
    "Your limitation—it’s only your imagination.",
    "Push harder than yesterday if you want a different tomorrow.",
    "Don’t limit your challenges. Challenge your limits.",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Act as if what you do makes a difference. It does. – William James",
    "Quality is not an act, it is a habit. – Aristotle",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "A river cuts through rock not because of its power but because of its persistence.",
    "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "If you’re going through hell, keep going. – Winston Churchill"
];

function quotes() {
    let print = document.getElementById("print")

    let quotes = box[Math.floor(Math.random() * box.length)]

    print.innerText = quotes

}