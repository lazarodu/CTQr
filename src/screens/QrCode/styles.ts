import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centraliza: {
        flex: 1,
        justifyContent: "center",
        margin: 10
    },
    scanner: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
    },
    label: {
        fontWeight: 'bold'
    }
})

export default styles