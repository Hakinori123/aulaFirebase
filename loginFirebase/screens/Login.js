import {View, Text, TextInput, Button, Alert} from 'react-native'
import {useState} from 'react'

export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
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
                onPress={()=>alert('Login em construção')}
            />
            <Button
                title='Não tenho conta'
                onPress={()=>navigation.navigate('Cadastro')}
            />
        </View>
    )
}    