import {View, Text, TextInput, Button, Alert} from 'react-native'
import {useState} from 'react'
import { entrar } from '../services/auth'

export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    async function realizarLogin() {
        if(!email | !senha)
            alert("Preencha todos os campos")
            return
        }
    
        try{
            await entrar(email, senha)
            alert("Login realizado!")
            navigation.navigate('Home')
        }catch(error){
            alert("Email ou senha inválidos")
            console.log(error)
        }
    }
    return(
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Button
                title='Login'
                onPress={realizarLogin}
            />
            <Button
                title='Não tenho conta'
                onPress={()=>navigation.navigate('Cadastro')}
            />
        </View>
    )
}    