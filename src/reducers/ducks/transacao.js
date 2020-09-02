//#region Estado Inicial
const initialState = {
  user: {
    login: "sergiosj",
    senha: "senha123",
    nome: "Sérgio Segaty",
    saldo: 2000.70,
    bloqueado: 739.70,
    novaTransacao: {
      nome: "",
      cpf: "",
      agencia: "",
      tipoConta: "",
      numeroConta: "",
      valor: "",
      valorString: "",
      desc: "",
    },
    extrato: [
      {
        title: "Mc Donalds",
        documento: "717213913",
        valor: "-15,60",
        data: "22/08/2020",
        id: "1",
      },
      {
        title: "Burger King",
        documento: "817290237",
        valor: "-23,40",
        data: "12/08/2020",
        id: "2",
      },
      {
        title: "Riachuello",
        documento: "171294123",
        valor: "-73,50",
        data: "11/08/2020",
        id: "3",
      },
      {
        title: "Emporio da Saúde",
        documento: "9971761263",
        valor: "-60,40",
        data: "19/07/2020",
        id: "4",
      },
    ],
    
  },
};
//#endregion Estado Inicial

export default function transacao(state = initialState, action) {
  switch (action.type) {
    case "pagamento/sucedida":
      break;
    case "pagamento/falha":
      break;
    case "transacao/sucedida":
    let saldoNovo = state.user.saldo;
    console.log(action.item.valor);
    saldoNovo += parseFloat(action.item.valor).toFixed(2);
    // return {
    //   ...state,
    //   user: {
    //     ...state.user,
    //     saldo: saldoNovo
    //   }
    // }
    return state;
    break;
    case "transacao/failed":
      break;
    
    case "transacao/novaTransacao/favorecido":
      return {
        ...state,
        novaTransacao: {
          ...state.novaTransacao,
          cpf: action.item.cpf,
          nome: action.item.nome,
          numeroConta: action.item.numeroConta,
          agencia: action.item.agencia,
          tipoConta: action.item.tipoConta,
        },
      };
    case "transacao/novaTransacao/valores":
      return {
        ...state,
        novaTransacao: {
          ...state.novaTransacao,
          valor: action.item.valor,
          valorString: action.item.valorString,
          desc: action.item.desc,
          data: action.item.data,
          hora: action.item.hora,
        },
      };
    
    default:
      return state;
  }
}
