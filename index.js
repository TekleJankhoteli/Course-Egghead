let container=document.getElementById("container")
let info=document.createElement('div')
let welcome=document.createElement('h2')
let header=document.createElement("h1")
let paragraph=document.createElement('p')
let buttonContainer=document.createElement('div')
let buttonOne=document.createElement('button')
let buttonTwo=document.createElement('button')
let boxContainer=document.createElement('div')
let box=document.createElement('div')
let footer=document.createElement('div')
let footerAdvice=document.createElement('p')
let footerMainText=document.createElement('h2')
let footerParagraph=document.createElement('p')
let form=document.createElement('form')
let input=document.createElement('input')
let formButton=document.createElement('button')



// info
info.style.width="100%";
info.style.display="flex";
info.style.flexDirection="column";
info.style.alignItems="center";
info.style.alignContent="center";
info.style.justifyContent="spaceBetween";
info.style.backgroundColor="#252B42";


// welcome
welcome.innerHTML="Welcome";
welcome.style.color="#23A6F0";
welcome.style.fontSize="16px";
welcome.style.fontWeight="700";
welcome.style.marginTop="100px";


// header
header.innerHTML="Selling on the internet like a pro";
header.style.color="#ffffff";
header.style.fontSize="50px";
header.style.fontWeight="700";
header.style.paddingLeft="550px";
header.style.paddingRight="550px";
header.style.textAlign="center";



// paragraph
paragraph.innerHTML="We know how large objects will act, but things on a small scale just do not act that way.";
paragraph.style.color="#FFFFF9";
paragraph.style.fontSize="20px";
paragraph.style.fontWeight="400";
paragraph.style.paddingLeft="560px";
paragraph.style.paddingRight="560px";
paragraph.style.textAlign="center";


// buttonContainer
buttonContainer.style.display="flex";
buttonContainer.style.gap="10px";
buttonContainer.style.marginTop="40px"


// buttonOne
buttonOne.innerHTML="Get Quote Now";
buttonOne.style.backgroundColor="#23A6F0";
buttonOne.style.color="#FFFFFF";
buttonOne.style.border="none";
buttonOne.style.height="52px";
buttonOne.style.width="193px";
buttonOne.style.fontSize="14px";
buttonOne.style.fontWeight="700";
buttonOne.style.borderRadius="5px";


// buttonTwo
buttonTwo.innerHTML="Get Quote Now";
buttonTwo.style.backgroundColor="#252B42";
buttonTwo.style.color="#FFFFFF";
buttonTwo.style.borderColor="#23A6F0";
buttonTwo.style.height="52px";
buttonTwo.style.width="193px";
buttonTwo.style.fontSize="14px";
buttonTwo.style.fontWeight="700";
buttonTwo.style.borderRadius="5px";


// boxContainer
boxContainer.style.display="flex";
boxContainer.style.gap="20px";
boxContainer.style.marginTop="60px";
boxContainer.style.marginBottom="60px";


// function for box
function createBox(img, textContent, BGcolor){
    let box=document.createElement('div');
    let image=document.createElement('img')
    let boxName=document.createElement('h3')
    let boxParagraph=document.createElement('p')

    box.style.backgroundColor = "#FFFFFF";
    box.style.width = "328px";
    box.style.height = "250px";
    box.style.marginTop = "20px";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "start";
    box.style.paddingLeft="40px";
    box.style.paddingRight="40px";
    box.style.paddingTop="30px";
    box.style.backgroundColor=BGcolor;
   
    image.src=img;
    boxName.innerHTML=textContent;


    boxParagraph.innerHTML="The gradual accumulation of  information about atomic and small-scale behaviour...";

    boxContainer.appendChild(box)
    box.appendChild(image)
    box.appendChild(boxName)
    box.appendChild(boxParagraph)

    return box
}

createBox('assets/smile.png', 'training Courses','#FFFFFF')
createBox('assets/done.png', 'training Courses','#FFFFFF')
createBox('assets/wallet.png', 'training Courses','#23A6F0')


// footer

footer.style.height="500px";
footer.style.display="flex";
footer.style.flexDirection="column";
footer.style.alignItems="center";
footer.style.alignContent="center";
footer.style.justifyContent="spaceBetween";

footerAdvice.innerHTML="Practice Advice";
footerAdvice.style.color="#23A6F0";
footerAdvice.style.fontSize="14px";
footerAdvice.style.fontWeight="700";
footerAdvice.style.marginTop="50px"

footerMainText.innerHTML="Featured Products";
footerMainText.style.color="#252B42";
footerMainText.style.fontSize="40px";
footerMainText.style.fontWeight="700";

footerParagraph.innerHTML="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ";
footerParagraph.style.color="#737373";
footerParagraph.style.fontSize="16px";
footerParagraph.style.fontWeight="400";

// Form

form.style.marginTop="60px"

input.placeholder="Your Email";
input.style.width="550px";
input.style.height="60px";
input.style.border="2px solid";
input.style.borderColor="#E6E6E6";
input.style.backgroundColor="#F9F9F9";

formButton.innerHTML="Subscribe";
formButton.style.width="120px";
formButton.style.height="65px";
formButton.style.border="none";
formButton.style.borderColor="#FFFFFF";
formButton.style.backgroundColor="#23A6F0";



// appendChilds
container.appendChild(info)
container.appendChild(footer)

info.appendChild(welcome)
info.appendChild(header)
info.appendChild(paragraph)
info.appendChild(buttonContainer)
info.appendChild(boxContainer)

buttonContainer.appendChild(buttonOne)
buttonContainer.appendChild(buttonTwo)

footer.appendChild(footerAdvice)
footer.appendChild(footerMainText)
footer.appendChild(footerParagraph)
footer.appendChild(form)

form.appendChild(input)
form.appendChild(formButton)




