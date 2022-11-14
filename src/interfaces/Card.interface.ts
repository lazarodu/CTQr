
export interface CardProps {
  data: {
    item: {
      id: number
      horario: string
      atividade: string
      local: string
      publico: number
    }
  }
  onPress: () => void
}