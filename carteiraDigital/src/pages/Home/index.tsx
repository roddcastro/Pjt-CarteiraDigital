import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Illustration from '../../../assets/illustration.png'
import { ButtonEntrar } from '../../components/ButtonEntrar'
import { 
    Container,
    Content,
    Imagem,
    Title
} from './styles'

export function Home(){
    const navigation = useNavigation()

    function handleHome(){
        navigation.navigate('Profile')
    } 

    return(
        <Container>
            <Imagem source={Illustration} />
            <Content>
                <Title>CARTEIRA DE TRABALHO DIGITAL</Title>
            </Content>

            <Content>
                <ButtonEntrar onPress={handleHome} />
            </Content>
        </Container>
    )
}