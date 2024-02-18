const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "Marie Curie" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "Not all of us can do great things. But we can do small things with great love.", author: "Mother Teresa" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "Rosa Parks" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
  }
  
  generateQuote();
  