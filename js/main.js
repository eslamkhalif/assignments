



 quotes = [

    {
        quote: "Be yourself; everyone else is already taken.",
        owner: "Oscar Wilde"
    },

    {
        quote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
        owner: "Albert Einstein"
    },

    {
        quote: "Be the change that you wish to see in the world.",
        owner: "Mahatma Gandhi"   
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        owner: "Mark Twain"
    },


];

function generateQuote() {
    
     x = Math.trunc(Math.random() * quotes.length);
     e = quotes[x];

     
    document.getElementById("quote").textContent = `${e.quote}`;
    document.getElementById("owner").textContent = ` ${e.owner}`;
}   