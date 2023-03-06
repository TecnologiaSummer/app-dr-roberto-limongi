import styled from "styled-components"
import {Platform, StatusBar} from 'react-native'

const isAndroid = Platform.OS === 'android'
const heightBar = parseInt(StatusBar.currentHeight)

export const Container = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${heightBar}px` : '0'}
`
