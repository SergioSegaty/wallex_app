//#region Estado Inicial
const initialState = {
  user: {
    login: "sergiosj",
    senha: "senha123",
    nome: "Sérgio Segaty",
    saldo: "3.759,60",
    bloqueado: "739,70",
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
    contatos: [
      {
        nome: "Will Smith",
        cpf: "846.171.103-09",
        profilePic: "",
        numeroConta: "71385",
        tipoConta: "014",
        agencia: "1514",
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
      {
        nome: "Sergio Segaty",
        cpf: "051.588.409-03",
        profilePic: "",
        numeroConta: "51325",
        tipoConta: "014",
        agencia: "7555",
        transacoes: [
          {
            data: "02/03/2020",
            desc: "Almoço U",
            valor: "-15,60",
            id: "1",
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
    case "add/foto":
      let contato = [
        ...state.user.contatos.filter((c) => c.cpf === action.item.cpf),
      ];
      contato = contato[0];
      let indexAlvo = state.user.contatos.indexOf(contato);
      let novosContatos = [...state.user.contatos];
      console.log('Velhos Contatos');
      console.log(novosContatos);
      novosContatos.splice(indexAlvo, 1, contato);
      console.log('Novos Contatos');
      console.log(novosContatos);
      return {
        ...state,
        user: {
          ...state.user,
          contatos: novosContatos,
        }
      };
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
    case "transacao/finalizar":
      let listaContatos = [...state.user.contatos];
      let contatoAlvo = listaContatos.filter((p) => p.cpf === action.item.cpf);
      if (contatoAlvo.length < 1) {
        action.item.id = "1";
        listaContatos.push(action.item);
      } else {
        let indexAlvo = listaContatos.indexOf(contatoAlvo[0]);
        action.item.transacoes[0].id = (
          contatoAlvo[0].transacoes.length + 1
        ).toString();
        contatoAlvo[0].transacoes.push(action.item.transacoes[0]);
        listaContatos.splice(indexAlvo, 1, contatoAlvo[0]);
      }
      return {
        ...state,
        user: {
          ...state.user,
          contatos: listaContatos,
        },
      };

    default:
      return state;
  }
}
