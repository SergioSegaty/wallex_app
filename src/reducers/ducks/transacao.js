//#region Estado Inicial
const initialState = {
  user: {
    login: "sergiosj",
    senha: "senha123",
    nome: "Sérgio Segaty",
    saldo: "3.759,60",
    bloqueado: "739,70",
    novaTransacao: {
      favorecido: {
        nome: '',
        cpf: '',
        agencia: '',
        tipoConta: '',
        numeroConta: '',
        valor: '',
        desc: '',
      }
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
    contatos: [
      {
        nome: "Will Smith",
        cpf: "846.171.103-09",
        profilePic: "",
        transacoes: [
          {
            data: "08/09/2020",
            desc: "Almoço",
            valor: "-15,60",
            id: "1",
          },
          {
            data: "05/03/2020",
            desc: "Emprestado",
            valor: "-17,50",
            id: "2",
          },
          {
            data: "02/03/2020",
            desc: "Almoço",
            valor: "-15,60",
            id: "3",
          },
          {
            data: "02/03/2020",
            desc: "Almoço",
            valor: "-15,60",
            id: "4",
          },
          {
            data: "02/03/2020",
            desc: "Almoço",
            valor: "-15,60",
            id: "5",
          },
          {
            data: "02/03/2020",
            desc: "Almoço",
            valor: "-15,60",
            id: "6",
          },
          {
            data: "02/03/2020",
            desc: "Almoço U",
            valor: "-15,60",
            id: "7",
          },
        ],
      },
    ],
  },
};

//#endregion Estado Inicial
export default function transacaoReducer(state = initialState, action) {
  switch (action.type) {
    case "pagamento/successful":
      break;
    case "pagamento/failed":
      break;
    case "transacao/successful":
      break;
    case "transacao/failed":
      break;
    case "transacao/novaTransacao":
    return {
        ...state,
        novaTransacao: action.item
    }

    default:
      return state;
  }
}
