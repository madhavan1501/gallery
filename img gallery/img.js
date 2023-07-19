const container=document.querySelector(".container");
const img=document.querySelectorAll(".img");

img.forEach(Element=>{
    Element.addEventListener('click',clicked);
});

function clicked(){
    const div=document.createElement('div');
    const img=document.createElement('img');
    div.classList.add('div');
    img.classList.add('grow-img');
    img.src=this.src;
    document.body.append(div); 
    div.append(img);
    div.addEventListener('click',()=>{
        document.body.removeChild(div);
    });
}