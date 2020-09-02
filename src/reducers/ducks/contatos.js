const initialState = {
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
      nome: "Arthur Farias",
      cpf: "056.528.509-04",
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
};

export default function contatos(state = initialState, action) {
  switch (action.type) {
    case "add/foto":
      let contato = [
        ...state.contatos.filter((c) => c.cpf === action.item.cpf),
      ];
      contato = contato[0];
      let indexAlvo = state.contatos.indexOf(contato);
      let novosContatos = [...state.contatos];
      novosContatos.splice(indexAlvo, 1, contato);
      return {
        ...state,
        contatos: novosContatos,
      };
    case "atualizar/contatos":
      let listaContatos = [...state.contatos];
      let contatoAlvo = listaContatos.filter((p) => p.cpf === action.item.cpf);
      console.log(contatoAlvo);
      contatoAlvo = contatoAlvo[0];
      if (contatoAlvo.length < 1) {
        action.item.id = "1";
        listaContatos.push(action.item);
      } else {
        let indexAlvo = listaContatos.indexOf(contatoAlvo);
        action.item.transacoes[0].id = (
          contatoAlvo.transacoes.length + 1
        ).toString();
        contatoAlvo.transacoes.push(action.item.transacoes[0]);
        listaContatos.splice(indexAlvo, 1, contatoAlvo);
      }
      return {
        ...state,
        contatos: listaContatos,
      };
    default:
      return state;
  }
}
