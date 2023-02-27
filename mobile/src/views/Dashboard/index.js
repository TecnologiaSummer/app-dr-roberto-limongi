import { useContext, useState } from "react";
import { SafeAreaView, Text} from "react-native";
import { useAuth } from "../../contexts/auth";

export const Dashboard = () => {
  const { userToken } = useAuth()

  return ( 
   <SafeAreaView>
    <Text>Página Pedidos</Text>
    <Text>userToken: {userToken}</Text>
   </SafeAreaView>
  );
}

