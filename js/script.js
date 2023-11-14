//change the background color to #d7ddf3
var footer = document.querySelector(".contact");
footer.style.backgroundColor = "#d7ddf3";
//console.log(footer);

//change text of h2 with class of .tagline to what you like
var tagline = document.querySelector(".tagline");
tagline.innerText = "Let us help you look good.";
//console.log(tagline);

//change line height & font size of address element
var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
//console.log(address);

//emphaize the words "every day" in the contact header
var everyDay = document.querySelector("h3");
everyDay.innerHTML = "We're here for you <em> every day </em> of the week.";
console.log(everyDay);
