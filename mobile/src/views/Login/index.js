import {
   KeyboardAvoidingView,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { useAuth } from '../../contexts/auth'
import * as C from "./styles"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { fetchToken, userToken } = useAuth()
  const navigation = useNavigation();

  const handleLogin = async () => {
    if(email && password) {
      const validateUser = await fetchToken(email, password)
      validateUser ? navigation.navigate("Dashboard") : console.warn('Usuário incorreto')
    } else {
      console.warn('Dados não preenchidos')
    }
  }

  return ( 
      <C.Container>
        <KeyboardAvoidingView behavior="position" enabled> 
          <C.Title>Dr. Roberto Limongi</C.Title>
          <C.TextInput 
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <C.TextInput 
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Link to={{ screen: 'ForgetPassword'}}>
            Esqueceu a senha ?
          </Link>
          <C.ButtonContainer>
            <Button onSubmit={handleLogin}>
              <C.ButtonText>Logar</C.ButtonText>
            </Button>
          </C.ButtonContainer>
        </KeyboardAvoidingView>
      </C.Container>
  )
}

