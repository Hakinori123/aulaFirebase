import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function Cadastro({ navigation }){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return(
        <View>
            <Text>Cadastro</Text>
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <Button
                title='Cadastrar'
                onPress={()=>alert('Cadastro em construção')}
            />
            <Button
                title='Já tenho conta'
                onPress={()=>navigation.navigate('Login')}
            />
        </View>
    )
}