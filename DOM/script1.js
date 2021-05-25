console.dir(document);

//--get properties
console.log(document.URL);
console.log(document.charset);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);//show all code within the head tag
console.log(document.body);//show all code within the bidy tag

console.log(document.forms); //show forms

//-change values
document.title ="Document object model";
console.log(document.title);

//--select elements using Id
console.log(document.getElementById('frmt'));

//--textContent,innerText and innerHTML
var formTitle = document.getElementById('frmt');
formTitle.textContent = 'Add Shopping Items';
formTitle.innerText = 'Shopping Items';
formTitle.innerHTML='<i> Hello</i> Add Items';

console.log(formTitle.textContent); //not printing captitals in console
console.log(formTitle.innerText);//printing capitals in both places
console.log(formTitle.innerHTML);

//--styling
var navigation = document.getElementById('navbar');
navigation.style.backgroundColor= '#0999';

//--select element using class name
var items = document.getElementsByClassName('items');
console.log(items);
console.log(items[1]);

items[0].textContent = 'Office wear';
items[1].textContent = 'Hand Bag';
items[2].textContent = 'Shoes';
items[3].textContent = 'Party wear';
items[4].textContent = 'Accessories';

for(var i of items){
    i.style.backgroundColor = '#8B0000';
    i.style.color = '#FFD700';
}
console.log(items[1]);

//--select items using tag name
var li = document.getElementsByTagName('li');
console.log(li);

li[2].textContent = 'Cosmetic';

var payment = document.getElementsByClassName('pays');
for ( var i =0; i<payment.length; i++){
    payment[i].style.fontFamily = 'serif';
    payment[i].style.backgroundColor = '#228B22';
}

//--- select element using query selectors
