import { View, Text } from "react-native";
import { IconProps } from "@tabler/icons-react-native";
import {colors} from "@/styles/theme";
import { s } from "./styles";

// parametrizar o componente por meio de props
type Props = {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;// tipo de componente(icone é um componente nn uma string etc) que recebe um IconProps
}
export function Step(props:Props){
    return(
        // caso icon exista ele renderiza o icone
        <View style={s.container}>
            {props.icon && <props.icon size={32} color={colors.red.base} />} 
            <View style={s.details}>
                <Text style= {s.title}>{props.title}</Text>
                <Text style={s.description}>{props.description}</Text>
            </View>
        </View>
    )
}