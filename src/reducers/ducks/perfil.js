const initialState = {
  perfil: {
    nome: "",
    cpf: "",
    profilePic: "",
    agencia: '',
    tipoConta: '',
    numeroConta: '',
    transacoes: [],
  },
};

export default function perfil(state = initialState, action){
    switch (action.type) {
        case 'perfil/selecao':
            return {
                ...state,
                selecao: action.item,
            }
        default:
            return state;
    }
}