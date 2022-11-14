import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles"

export default function Card({ data, onPress }: CardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.label}>Horário: </Text>
      <Text>{data.item.horario} </Text>
      <Text style={styles.label}>Atividade: </Text>
      <Text>{data.item.atividade} </Text>
      <Text style={styles.label}>Local: </Text>
      <Text>{data.item.local} </Text>
    </TouchableOpacity>
  );
}
