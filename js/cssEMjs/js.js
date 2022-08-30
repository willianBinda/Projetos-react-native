const cont = document.querySelector('.cont');
const ps = cont.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundcolorBody = estilosBody.backgroundColor;


for ( p of ps){
    p.style.backgroundColor = backgroundcolorBody;  //utiliza-se camelCase em js no lugar de "-"
    p.style.color = "red";
    p.style.fontSize = "20px";
}