import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    buttonLogin: {
      backgroundColor: colors.darkBlue,
      borderRadius: 5,
      margin: 10
    },
    buttonPadrao: {
      backgroundColor: colors.white,
      borderRadius: 5,
      margin: 10
    },
    text: {
      color: colors.white,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
      fontSize: 18
    }
  });
  
  export default styles;