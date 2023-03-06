import { useContext, useState } from "react"
import { SafeAreaView, Text} from "react-native"
import { Button } from "../../components/Button"
import { useAuth } from "../../contexts/auth"
import * as C from "./styles"
import { useNavigation } from "@react-navigation/native"

export const Dashboard = () => {
  const { userToken, setUserToken} = useAuth()
  const navigation = useNavigation()

  const handleLogout = async () => {
    setUserToken({})
    navigation.navigate("Login")
  }
  
  return ( 
   <C.Container>
    <Text>Usuário</Text>
    <Text>Código: {userToken.usuario.cd_usuario}</Text>
    <Text>Senha: {userToken.usuario.nome}</Text>
    <Text>E-mail: {userToken.usuario.cd_email}</Text>
    <Button onSubmit={handleLogout}>
      <Text>Logout</Text>
    </Button>
   </C.Container>
  )
}

