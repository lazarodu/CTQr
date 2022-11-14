import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.inteface";
import styles from "./styles";

export default function Button({ onPress, type, title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        type == "login"
          ? styles.buttonLogin
          : styles.buttonPadrao
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}