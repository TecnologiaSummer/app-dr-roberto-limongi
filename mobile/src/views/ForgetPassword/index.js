import { Text, SafeAreaView} from "react-native";
import { useEffect, useState } from 'react'
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import * as C from "./styles"

export const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("enzo.costa@summercomunicacao.com.br")
  const [users, setUsers] = useState([])

  const handleResetPassword = async () => {
    if(email) {
      try {        
        const adm = users.filter((user) => {
          return user.cd_email == email
        })

        if(adm) {
          const response = await api.post('/forgot_password', {
            headers: {
              'Content-Type': 'application/json'
            },
            cd_email: email
          })
          navigation.navigate('ResetPassword', { token: response })
        } else {
          console.warn('E-mail não existe no nosso sistema')
        }

      } catch(e) {
        console.log('Error: ' + e)
      } finally {
        setEmail("")
      }
    }
  }

  const getUsers = async() => {
    try {
      const users = await api.get('/administrador')
      setUsers(users.data)
    } catch(e) {
      console.log('Error: ' + e)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return ( 
    <C.Container>
       <C.TextEmail>Informe o seu email para enviarmos o código de confirmação</C.TextEmail>
       <C.TextInput 
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
       />
       <Button onSubmit={handleResetPassword}>
          <C.TextEmail>Enviar</C.TextEmail>
      </Button>
    </C.Container>
  );
}

