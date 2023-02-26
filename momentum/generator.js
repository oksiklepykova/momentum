

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
 //   console.log(data) 
        

function randomQuote() {
  let random = data[Math.floor(Math.random() * data.length)];
 
  quote.textContent = `"${random.text}."`;
  author.textContent = random.author;
  

  }

randomQuote(); 

document.querySelector(".change").addEventListener('click', randomQuote);

}

getQuotes();

  




 
 
  


