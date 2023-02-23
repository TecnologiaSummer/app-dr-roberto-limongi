import { useContext } from "react";
import { SafeAreaView, Text } from "react-native";

import { AuthContext } from "../../contexts/auth";

export const Home = () => {
  const { nome } = useContext(AuthContext)

  return ( 
   <SafeAreaView>
    <Text>Página Pedidos</Text>
    <Text>Nome: {nome}</Text>
   </SafeAreaView>
  );
}

