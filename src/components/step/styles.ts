import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        gap: 16,
    },
    // details coloca flex na view que armazena veja como funciona para ir de um canto a outro
    details:{
        flex: 1,
    },

    title:{
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
    },
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 14,
    }
})