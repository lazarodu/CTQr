import api from "../../api";
class PresenceData {
  store(user_id: number, programacao_id: number) {
    return api.post('/presence', { user_id, programacao_id })
  }
}
export default new PresenceData();
