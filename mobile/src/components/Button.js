import { Text, SafeAreaView } from "react-native";
import styled from 'styled-components/native'

const ButtonStyles = styled.TouchableOpacity`
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100px;
  background-color: #D9D9D9;
`

export const Button = ( { children, onSubmit}) => {

  return ( 
    <ButtonStyles onPress={onSubmit}>
        { children }
    </ButtonStyles>
  );
}

