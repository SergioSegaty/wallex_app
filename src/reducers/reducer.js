import auth from "./ducks/auth";
import transacaoReducer from "./ducks/transacao";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: auth,
  transacao: transacaoReducer,
});
{
}
