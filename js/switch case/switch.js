const data = new Date();
const diaSemana = data.getDay();
let caso;

switch(diaSemana){
    case 0 :
        caso = "domingo";
        break;
    case 1:
        caso = "segunda";
        break;
    case 2:
        caso = "terça";
        break;
    case 3:
        caso = "quarta";
        break;
    case 4:
        caso = "quinta";
        break;
    case 5:
        caso = "sexta";
        break;
    case 6:
        caso = "sabado";
        break;
    default:
        " ";
}



console.log(diaSemana,caso);