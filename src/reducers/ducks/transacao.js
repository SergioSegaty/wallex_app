//#region Estado Inicial
const initialState = {
  user: {
    login: "sergiosj",
    senha: "senha123",
    nome: "Sérgio Segaty",
    saldo: 2000.7,
    bloqueado: 739.7,
    novoPagamento: {
      banco: "",
      vencimento: "",
      valor: "",
    },
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
        ehDeposito: false,
      },
      {
        title: "Burger King",
        documento: "817290237",
        valor: "-23,40",
        data: "12/08/2020",
        id: "2",
        ehDeposito: false,
      },
      {
        title: "Riachuello",
        documento: "171294123",
        valor: "-73,50",
        data: "11/08/2020",
        id: "3",
        ehDeposito: false,
      },
      {
        title: "Emporio da Saúde",
        documento: "9971761263",
        valor: "-60,40",
        data: "19/07/2020",
        id: "4",
        ehDeposito: false,
      },
    ],
  },
};
//#endregion Estado Inicial

export default function transacao(state = initialState, action) {
  let saldoNovo;
  let novoExtrato;

  switch (action.type) {
    case "deposito/sucesso":
      saldoNovo = state.user.saldo;
      saldoNovo += action.item.valorClean;
      action.item.id = (state.user.extrato.length + 1).toString();
      novoExtrato = [...state.user.extrato];
      novoExtrato.unshift(action.item);
      return {
        ...state,
        user: {
          ...state.user,
          saldo: saldoNovo,
          extrato: novoExtrato,
        },
      };
    case "pagamento/novo":
    let pagamento = action.item;
    return {
      ...state,
      user: {
        ...state.user,
        novoPagamento: pagamento
      }
    }
    case "pagamento/sucesso":
      let descontoPagamento = parseFloat(
        action.item.valor.replace(",", ".")
      ).toFixed(2);
      saldoNovo = state.user.saldo - descontoPagamento;
      novoExtrato = [...state.user.extrato];
      action.item.boleto.id = (novoExtrato.length + 1).toString();
      console.log(action.item.boleto);
      novoExtrato.unshift(action.item.boleto);
      return {
        ...state,
        user: {
          ...state.user,
          saldo: saldoNovo,
          extrato: novoExtrato,
        },
      };
    case "pagamento/falha":
      break;
    case "transacao/sucedida":
      saldoNovo = state.user.saldo;
      saldoNovo = saldoNovo + action.item.valor;
      return {
        ...state,
        user: {
          ...state.user,
          saldo: saldoNovo,
        },
      };
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
