import React from 'react';
import { StatusBar, Text, View,StyleSheet} from 'react-native';



//snippet = comando padrao igual '!' no css criar no vsCode
// import X,{Comp2,Comp3} from './src/Components/Multi'
/*   se nao for default a funcao o nome é importante declarar com o nome da funcao  */
// import Primeiro from './src/Components/Primeiro';
// import MinMax from './src/Components/MinMax';
// import Aleatorio from './src/Components/Aleatorio';
// import Frag from './src/Components/Frag';
// import Botao from './src/Components/Botao';
// import Contador from './src/Components/Contador'
// import Pai from './src/Components/indireta/Pai';
// import Contadorv2 from './src/Components/contador/contadorV2'
// import ParImpar from './src/Components/ParImpar/'
// import Familia from './src/Components/Familia/Familia'
// import Membro from './src/Components/Familia/Membro'
// import UsuarioLogado from './src/Components/usuarioLogado'
// import ListaProdutos from './src/Components/ListaProdutos/ListaProdutos'
// import ListaProdutosV2 from './src/Components/ListaProdutos/ListaProdutosV2'
// import Digite from './src/Components/Digite'
// import EstiloFlex from './src/Components/Estilos/EstiloFlex'
import Mega from './src/Components/Mega/classes'

export default function App(){
  //dentro de chaves vira um codigo js
  // const a = <Text>{Number(5) + Number(10)}</Text>
  return (
    <View style = {styles.app}>
      {/* <Text>{a}</Text> */}
      {/* codigo javascript */}
      {/* <Primeiro></Primeiro> */}
      {/* <X></X> */}
      {/* <Comp2/> */}
      {/* <Comp3/> */}
      {/* <MinMax Max='20' Min='2'/> */}
      {/* <Aleatorio Min="1" Max="100"/> */}
      {/*<Frag primeiro='Título'
      segundo='SubTítulo'
      />*/}
      {/* <Botao></Botao> */}
      {/* <Contador /> */}
      {/* <Pai/> */}
      {/* <Contadorv2/> */}
      {/* <ParImpar num = {3}/> */}
      {/* <Familia>
        <Membro nome = 'jao' sobrenome='vinicin'/>
        <Membro nome = 'will' sobrenome='bilidin'/>
      </Familia>
      <Familia>
        <Membro nome = 'jao' sobrenome='vinicin'/>
        <Membro nome = 'jao' sobrenome='vinicin'/>
      </Familia> */}
      {/* <UsuarioLogado usuario={{nome:'willian', email:'will@hotmail.com'}}/>
      <UsuarioLogado usuario={{nome:'monique', email:''}}/>
      <UsuarioLogado usuario={{nome:'willian', email:'will@hotmail.com'}}/> */}
      {/* <ListaProdutos/> */}
      {/* <ListaProdutosV2/> */}
      {/* <Digite/> */}
      {/* <EstiloFlex/> */}
      <Mega qtdeNum={0}/>
    </View>
  )

}

const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent:'center',//eixo y
    alignItems:'center',//eixo x
    padding:50,
  }
})