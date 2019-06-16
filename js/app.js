//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

document.getElementById("disclaimer").innerHTML = finePrint

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
document.getElementById('brand1').innerHTML='Nabisco'
//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
document.getElementById('item1').innerHTML = 'Cheeseburger Oreos'

//4. Target the div element with the id of 'price1' and update the content to $8.99.
document.getElementById('price1').innerHTML= '$8.99'
//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
document.getElementById('discount1').innerHTML = 'Free fries with purchase!'
//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
var hng= document.querySelector('#brand2')
var newDiv= document.createElement('div')
newDiv.setAttribute('id',"item2")
newDiv.innerHTML = "Hendrick's Gin"
    hng.appendChild(newDiv)
//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var p2 = document.createElement('div');p2.setAttribute('id','price2');
var i2= document.getElementById('item2')
p2.innerHTML = '$34.99'
i2.appendChild(p2)

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
var butt = document.createElement('button'); butt.setAttribute('id','discount3');
butt.innerHTML = '50% OFF Axe body soap';
var b3 = document.querySelector('.block3');
b3.appendChild(butt)

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
document.querySelector('.item').innerHTML = 'Orange Chicken'

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var dis = document.createElement('button');dis.setAttribute('class','discount');
dis.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
var pri = document.getElementsByClassName('price');
pri[0].appendChild(dis);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

var bran = document.getElementsByClassName('brand');
bran[1].innerHTML = 'Uniqlo'

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
var pri = document.getElementsByClassName('price')
pri[1].innerHTML = '$10,000'

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
var get = document.getElementsByClassName('block3')
var bran2 = document.createElement('div'); bran2.setAttribute('class','brand');
bran2.innerHTML = 'Hifiman Shangri-La'
get[1].appendChild(bran2)
//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

var ite = document.createElement('div'); ite.setAttribute('class','brand');
ite.innerHTML = 'Electronstatic Headphones'
get[1].appendChild(ite)

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

var pri3 = document.createElement('div'); pri3.setAttribute('class','price');
pri3.innerHTML = '$18';
get[1].appendChild(pri3)

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var disc = document.createElement('button'); disc.setAttribute('class','discount');
disc.innerHTML = 'Free Barry Manilow CD with purchase!';
get[1].appendChild(disc);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
var item = document.getElementsByClassName('item')
var discount = document.getElementsByClassName('discount')

bran[4].innerHTML = 'H&M'
pri[3].innerHTML= '$21.99'
item[2].innerHTML = 'Unicor-Head Slippers'
discount[3].innerHTML = 'Free knee-high tub socks with purchase'


//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
discount[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.'
item[3].innerHTML = "Poppin' Jalapeno Doritos"
bran[5].innerHTML = 'Frito Lay'
pri[4].innerHTML = "$7.77"

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

item[4].innerHTML = "Baby Puggy"
bran[6].innerHTML = "Any Dog Breeder"
discount[5].innerHTML= "No Discounts. This cutie is worth every penny!"
pri[5].innerHTML = "Priceless"
//Final Boss 
//Create your own product for the last three sections.
var pic = document.getElementsByTagName('img')
pic[10].src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_46XFxOYM8l_r-w165rPIxMsMaFiHXEvfSRpyvK74fH-fhUZEQ"
pic[10].onclick = function(){
    window.location.href = "https://tickets.meowwolf.com/#/event-details/admission-tickets"
}
pic[10].style.height = '250px'
pic[10].style.width = '250px'
item[5].innerHTML = "Interactive Art Mueseum Tickets"
bran[7].innerHTML = "Meow Wolf"
pri[6].innerHTML = "$29 For Adults, $21 For Children"
discount[6].innerHTML = "Discounts only avalible to local residents."
console.log(pic)