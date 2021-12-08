import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { 
    Container,
    Title
} from './styles'

export function ButtonEntrar({...rest}: TouchableOpacityProps ){
    return(
        <Container {...rest}>
            <Title>
                ENTRAR
            </Title>
        </Container>
    )
}