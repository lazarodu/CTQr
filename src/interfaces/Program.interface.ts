export interface IProgramResponse {
  status: string,
  message: string,
  data: {
    id: number
    horario: string
    atividade: string
    local: string
    publico: number
  }[]
}

export interface IProgram {
  id: number
  horario: string
  atividade: string
  local: string
  publico: number
}
