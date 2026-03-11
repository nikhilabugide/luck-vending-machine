const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows our orange box to talk to this code

// Our "Database" of notes for now
const luckyNotes = [
    "A long-awaited wish is about to come true. Keep your patience.",
    "A fresh start will put you on your way",
    "Your hard work is about to pay off.",
    "Today is a lucky day for new beginnings!",
    "An unexpected event will soon bring you fortune.",
    "The days ahead are filled with opportunities. seize them!",
    "Your kindness will be rewarded in unexpected ways.",
    "The universe is aligning in your favor.",
    "Trust your instincts; they will lead you to success.",
    "Have faith in your journey; the best is yet to come.",
    " A surprise encounter will bring joy to your life.",
    "Your positive attitude will attract good things.",
    "A new friendship will blossom soon.",
    "Your creativity will lead to a breakthrough.",
    "An exciting adventure is on the horizon.",
    "love and happiness are coming your way.",
    "Your efforts will be recognized and rewarded.",
    "A financial opportunity is coming your way.",
    "Your dreams are within reach; keep pushing forward.",
    "A moment of clarity will guide you to success.",
    "someone is remembering you fondly and will reach out soon.",
    "Love of your life is on the way.",
    "Loved ones will bring you joy and support in the coming days.",
    "Forget about the suking society and do what makes you happy.",
    "just do what makes you happy and the rest will follow.",
    "Everything will work out in the end, so don't worry too much.",
    "Your ticket to happiness has been confirmed. No cancellation possible!!!",
    "Current Status:100% chance of grateness ahead.",
    "you have the power to overcome any obstacle with your bright smile."

];

// This is the "Route" - the path the coin follows
app.get('/get-lucky-note', (req, res) => {
    const randomIndex = Math.floor(Math.random() * luckyNotes.length);
    const selectedNote = luckyNotes[randomIndex];
    
    // Send the note back to the Frontend
    res.json({ message: selectedNote });
});

// Start the server on Port 5000
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});