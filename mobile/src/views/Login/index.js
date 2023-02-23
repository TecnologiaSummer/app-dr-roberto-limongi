import {
   KeyboardAvoidingView,
} from 'react-native';
import { Link } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import * as C from "./styles"

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState();
  const navigation = useNavigation();

  const fetchToken = async () => {
    try {
      const response = await api.post('/autenticador', {
        cd_email: email,
        password: password
      })
      setToken(response.data)
      navigation.navigate("Home")
    } catch(e) {
      console.warn('Error: ' + e)
    }
  }

  const handleLogin = () => {
    if(email && password) {
      fetchToken()
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
  );
}
