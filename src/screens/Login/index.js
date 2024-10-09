import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Alert, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import { styles } from './style';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login() {      
        const obj = { email, senha };

        try {
            const res = await api.post('apivaleacess/login.php', obj); // Verifique se a URL está correta
            
            console.log('Resposta da API:', res.data); // Log da resposta

            if (res.data.sucesso === false) {
                Alert.alert('Ops!', res.data.mensagem);
            } else {
                // Verificando se o resultado tem o ID do usuário
                const userId = res.data.result[0]?.usuario_id; // Usando o operador de encadeamento opcional

                if (userId) {
                    await AsyncStorage.setItem('@user', JSON.stringify(userId));
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                    });
                } else {
                    Alert.alert('Erro', 'ID do usuário não encontrado.');
                }
            }
        } catch (error) {
            console.error('Erro no login:', error); // Log do erro
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
        }
    }

    return (
        <View style={styles.container}>

<Text style={styles.textop}>Mude o mundo.</Text>
            <Text style={styles.textost}>Começa por você.</Text>
            <Image style={styles.svgbaixo} source={require('../../assets/humanos.png')} />
            <TextInput
                style={styles.inputlogin}
                placeholderTextColor={'#B4BBB4'}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.inputcadastro}
                placeholderTextColor={'#B4BBB4'}
                placeholder="Senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity
                style={styles.loginSave}
                onPress={login} // Chama a função de login ao clicar
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.loginSave} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.text}>Cadastro</Text>
          </TouchableOpacity>
        </View>
    );
}
