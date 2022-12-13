const date = new Date();

let diaAtualDoMes = date.getDate();
let month = 'Janeiro';
let year = date.getFullYear();

function setarMes() {
  switch (date.getMonth()) {
    case 0:
      month = 'Janeiro';
    case 1:
      month = 'Fevereiro';
    case 2:
      month = 'Março';
    case 3:
      month = 'Abril';
    case 4:
      month = 'Maio';
    case 5:
      month = 'Junho';
    case 6:
      month = 'Julho';
    case 7:
      month = 'Agosto';
    case 8:
      month = 'Setembro';
    case 9:
      month = 'Outubro';
    case 10:
      month = 'Novembro';
    case 11:
      month = 'Dezembro';
  }
}

function obterDiasDoMesAtual() {
  days = [];
  console.log(date.getMonth());
  date.setDate(1);

  const mesAtual = date.getMonth();

  while (date.getMonth() == mesAtual) {
    console.log(date.getDate(), date.getDay())
    days.push(criarObjetoDiaDoMes(date.getDate(), date.getDay()));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

function criarObjetoDiaDoMes(diaMes, diaSemana) {

  let diaPorExtenso = "";

  switch(diaSemana) {
    case 0:
      diaPorExtenso = "Domingo"
      break;
    case 1:
      diaPorExtenso = "Segunda"
      break;
    case 2:
      diaPorExtenso = "Terça"
      break;
    case 3:
      diaPorExtenso = "Quarta"
      break;
    case 4:
      diaPorExtenso = "Quinta"
      break;
    case 5:
      diaPorExtenso = "Sexta"
      break;
    case 6:
      diaPorExtenso = "Sábado"
      break;
    default:
      diaPorExtenso = "Domingo"
  }

  return {
    diaMes,
    diaPorExtenso,
  };
}

function voltarMes() {
  date.setMonth(date.getMonth() - 1);
}

function proximoMes() {
  if(date.getMonth() == 12) {
    date.setFullYear(date.getFullYear() + 1);
  }
  date.setMonth(date.getMonth() + 1);
}

setarMes();
proximoMes()
console.log(obterDiasDoMesAtual())
