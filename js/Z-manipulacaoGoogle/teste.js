const nome = prompt("Digite seu nome");
document.body.innerHTML += `seu nome é ${nome}<br />`;
document.body.innerHTML += `seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `a segunda letra do seu nome é "${nome[1]}"<br />`;
document.body.innerHTML += `o prieiro index do seu nome é ${nome.indexOf("i")}<br />`;
document.body.innerHTML += `o ultimo index do seu nome é ${nome.lastIndexOf("i")}<br />`;
document.body.innerHTML += `seu nome com letras maiusclas ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `seu nome com letras minusculas ${nome.toLowerCase()}<br />`;
document.body.innerHTML += `as ultimas tres letras do seu nome é ${nome.slice(-3)}<br />`;
document.body.innerHTML += `as palavras do seu nome ${nome.split(' ')}<br />`;





