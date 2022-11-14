import api from "../../api";
import { IAuthenticate, IUser } from "../../../interfaces/User.interface"
class UserData {
  login(data: IAuthenticate) {
    return api.post<IUser>('/login', data);
  }
  logout() {
    return api.get('/logout')
  }

}
export default new UserData();