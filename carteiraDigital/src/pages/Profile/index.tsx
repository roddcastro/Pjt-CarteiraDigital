import React from 'react'
import { ButtonContinuar } from '../../components/ButtonContinuar'
import { 
    Container,
    Content,
    Title,
    Grettings,
    Rodape,
    Input
} from './styles'

export function Profile(){
    return(
        <Container>
            <Content>
                <Title>Identifique-se no gov.br com: {'\n'}</Title>
                <Grettings>
                    Número do CPF {'\n'}{'\n'}
                    Digite seu CPF para criar ou acessar sua conta gov.br {'\n'}
                </Grettings>
                    <Title>CPF</Title>
                    <Input 
                    placeholder= 'Digite seu CPF'
                    blurOnSubmit
                />
                <ButtonContinuar />
                <Title>Outras opções de identificação: {'\n'}</Title>
                <Grettings>
                    Seu banco {'\n'}{'\n'}
                    Seu certificado digital em nuvem
                </Grettings>
                <Rodape>Entenda a conta gov.br</Rodape>
            </Content>
        </Container>
    )
}