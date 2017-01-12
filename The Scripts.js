/*
Opens all companies from LinkedIn sales manager in a new window
Works only on Firefox
*/
var com = document.querySelectorAll('h4.name a')
for(i=0; i < com.length; i++){
	window.open(com[i].href);
}

/*
Shows in Console company name, number of employees and website
You can copy this info in excel
*/
var name = document.querySelector('h1.acct-name').innerText
var cnt = document.querySelector('span.empl-cnt').innerText
var web = document.querySelector('#account-introduction > section.about-account > ul > li:nth-child(3) > p > a').href
console.log(name + "\t" + cnt + "\t" + web)
