import { useState } from "react";
import { Button } from "../../components/Button"
import * as C from './styles'

export const ResetPassword = ( { route, navigation } ) => {
    const [code, setCode] = useState();

    const handleResetPassword = () => {
        const token = route.params.token.data.resetToken

        if(token == code) {
            navigation.navigate('Login')            
        } else {
            console.warn('O código está incorreto')
        }
    }

    return ( 
        <C.Container>
            <C.Title>Informe o código que foi enviado para o seu e-mail</C.Title>
            <C.TextInput
                value={code}
                placeholder="Código"
                onChangeText={text => setCode(text.toString())}
            />
            <C.Title>{code}</C.Title>
            <Button onSubmit={handleResetPassword}>
                <Title>Enviar</Title>
            </Button>
        </C.Container>
      );
}

