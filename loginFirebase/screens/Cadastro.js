import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import { cadastrar  } from "../services/auth";
export default function Cadastro({ navigation }){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarCadastro() {
        if(!email | !senha){
            alert("Preencha todos os campos")
            return
        }
    

    try{
        await cadastrar(email, senha)  
        alert("Usuário cadastrado com sucesso!")
        navigation.navigate('Login')
    } catch(error){
        alert("Nâo foi possivel realizar o cadastro")
        console.log(error)
    }
}
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
                onPress={realizarCadastro}
            />
            <Button
                title='Já tenho conta'
                onPress={()=>navigation.navigate('Login')}
            />
        </View>
    )
}