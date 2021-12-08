import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { 
    Container,
    Title
} from './styles'

export function ButtonContinuar({...rest}: TouchableOpacityProps ){
    return(
        <Container {...rest}>
            <Title>
                Continuar
            </Title>
        </Container>
    )
}