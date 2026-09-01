import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Seja bem-vindo(a)!</Text>
            <Text>Usuário:</Text>
            <Button
                title="Sair"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}