var header = document.createElement('header')
var nav = document.createElement('nav')
var link = document.createElement('a')
var link1 = document.createElement('a')
var link3 = document.createElement('a')
var h1 = document.createElement('h1')

var logo = document.createTextNode('logo')
var hometext = document.createTextNode('Home')
var about = document.createTextNode('About')
var contact = document.createTextNode('contact')

h1.appendChild(logo)
link.appendChild(hometext)
link1.appendChild(about)
link3.appendChild(contact)

nav.appendChild(link)
nav.appendChild(link1)
nav.appendChild(link3)
header.appendChild(h1)
header.appendChild(nav)
document.body.appendChild(header) 

link.setAttribute('href','index.html')
link1.setAttribute('href','about.html')
link3.setAttribute('href','contact.html')

header.style.display = 'flex'
header.style.justifyContent = 'space-between'
header.style.alignItems ='center'
header.style.background = 'grey'
header.style.padding = '10px'
header.style.position = 'sticky'
header.style.margin = '0'


nav.style.display ='flex'
nav.style.justifyContent = 'flex-end'
nav.style.alignItems = 'right'
nav.style.width = '50%'
nav.style.gap = '15px'


link.style.color = 'black'
link1.style.color = 'black'
link.style.padding = '0 5px'
link1.style.padding = '0 5px'
link3.style.padding = '0 5px'
link3.style.color = 'black'


var main = document.createElement('main')
var div = document.createElement('div')
var img = document.createElement('img')
 
div.appendChild(img)

img.setAttribute('src','fantasy.jpg')

main.appendChild(div)
document.body.appendChild(main)

img.style.width = '100%'
img.style.height = '50vh'
img.style.margin = '0'



var main = document.createElement('main')

for (var i=0;i <4;i++)
{
var div = document.createElement('div')
var h2 = document.createElement('h2')
var p = document.createElement('p')
var img = document.createElement('img')
 
var maintext = document.createTextNode('ahmed elsayed zizo')
var maintext2 = document.createTextNode('Ahmed Mostafa Mohamed Sayed (Arabic: أحمد مصطفى محمد سيد; born 10 January 1996) commonly known as Zizo (Arabic: زيزو), is an Egyptian professional footballer who plays as a winger for Egyptian Premier League club Al Ahly and the Egypt national team.')

h2.appendChild(maintext)
p.appendChild(maintext2)

div.appendChild(img)
div.appendChild(h2)
div.appendChild(p)

document.body.appendChild(main)
img.setAttribute('src','zizo.jpg')

main.appendChild(div)


img.style.width = '200px'

div.style.textAlign = 'center'
div.style.backgroundColor = 'lightblue'
div.style.width = '25%'
div.style.margin = '0px'

main.style.display = 'flex'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'
main.style.flexWrap = 'nowrap' 
}




