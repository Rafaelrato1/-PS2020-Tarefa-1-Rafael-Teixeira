<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Exercício 01</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
  </head>
  <body>
    var ana = {
      nome: 'Ana',
      idade: 17,
      isGarcom: false,
      uni: universidade,
      rep: {},
      irmao: pedro
    }

    var pedro = {
      nome: 'Pedro',
      idade: 20,
      isGarcom: false,
      uni: universidade,
      rep: undefined,
      irmao: ana
    }

    var paulo = {
      nome: 'Paulo',
      idade: 23,
      isGarcom: false,
      uni: undefined,
      rep: republica,
      irmao: undefined
    }

    var armando = {
      nome: 'Armando',
      idade: 17,
      isGarcom: false,
      uni: undefined,
      rep: republica,
      irmao: undefined
    }

    var andre = {
      nome: 'André',
      idade: undefined,
      isGarcom: true,
      uni: undefined,
      rep: undefined,
      irmao: undefined
    }

    var universidade = {
      nome: 'Universidade Federal de Ouro Preto',
      curso: 'Engenharia da Computação',
      cargaHoraria: 3630
    }

    var republica = {
      nome: 'República Orfanato',
      idade: 10,
      qtdMoradores: 5
    }

    function checarIDs (garcom, cliente){
      if( garcom.isGarcom && cliente.idade >= 18 ){
        return cliente.nome + ' pode tomar cerveja'
      }else{
        return cliente.nome + ' vai tomar Coca-Cola'
      }

    }

    console.log(checarIDs(andre,pedro));
    console.log(checarIDs(andre, armando));  
  </body>
</html>
