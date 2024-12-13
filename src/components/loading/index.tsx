import { ActivityIndicator} from "react-native"
import { s } from "./styles"
import {colors} from "@/styles/theme"

// ActivityIndicator é um componente que mostra um indicador de carregamento(bolinha girando padrao do react-native com color definida e style definido no s.container)
export function Loading(){
    return <ActivityIndicator color={colors.green.base} style={s.container}/>
}