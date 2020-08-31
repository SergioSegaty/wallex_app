const initialState = {
  user: {
    login: "sergiosj",
    senha: "senha123",
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "auth/login":
      break;
    case "auth/success":
      break;
    case "auth/failed":
      break;
    default:
      return state;
  }
}
