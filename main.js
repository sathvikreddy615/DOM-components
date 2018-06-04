const name = "Sathvik Reddy";

// 1.

let firstHeader = document.querySelector(".article__header");

firstHeader.textContent = `Welcome to ${name}'s blog`;

// 2. 

const allHeader = document.querySelectorAll(".article__header");

for (let i = 0; i < allHeader.length; i++) {
    allHeader[i].setAttribute("classList", "article__header important");    
}