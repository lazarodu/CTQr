import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.darkBlue,
        margin: 10
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        color: colors.darkBlue,
        textAlign: "center",
        marginBottom: 30
    }
})

export default styles