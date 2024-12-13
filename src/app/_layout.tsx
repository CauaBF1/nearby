// configurações da navegação exp: primeira pagina ao entrar no app etc..
import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import { Loading } from "@/components/loading";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function Layout() {
  // const array passa primeiro um booleano se fonte carregou e depois um array com as fontes
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })

  // caso minha fonte nao tenha carregado return componente Loading(bolinha de carregamento)
  if (!fontsLoaded) {
    return <Loading/>
  }
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    ></Stack>
  );
}
