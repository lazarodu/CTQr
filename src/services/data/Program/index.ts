import api from "../../api";
import { IProgramResponse } from "../../../interfaces/Program.interface"
class ProgramData {
  index() {
    return api.get<IProgramResponse>('/program')
  }
}
export default new ProgramData();
