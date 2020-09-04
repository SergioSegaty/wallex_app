const initialState = {
  user: {
    login: "user012",
    senha: "12345",
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
