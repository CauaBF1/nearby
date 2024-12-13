import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

// constante s(style) que recebe o metodo create do StyleSheet passando style padrao para containers etc...
export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
    }
})