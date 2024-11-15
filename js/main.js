

// array off quote 

 quotes = [

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },

    {
        quote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
        author: "Albert Einstein"
    },

    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"   
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },


];

function generateQuote() {
    
     randomIndex = Math.floor(Math.random() * quotes.length);
     randomQuote = quotes[randomIndex];

     
    document.getElementById("quote").textContent = `${randomQuote.quote}`;
    document.getElementById("author").textContent = ` ${randomQuote.author}`;
}