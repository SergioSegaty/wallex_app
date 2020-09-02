import auth from "./ducks/auth";
import transacao from "./ducks/transacao";
import perfil from './ducks/perfil';
import contatos from "./ducks/contatos";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: auth,
  transacao: transacao,
  perfil: perfil,
  contatos: contatos,
});
{
}
