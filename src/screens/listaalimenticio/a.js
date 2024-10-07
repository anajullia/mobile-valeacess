import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListaAlimenticio() {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    const checkLogin = async () => {
        const userData = await AsyncStorage.getItem('@user');

        if (!userData) {
            Alert.alert("Atenção", "Você precisa estar logado para acessar esta tela.");
            navigation.navigate("Login"); // Redireciona para a tela de login se não estiver logado
        } else {
            setUser(JSON.parse(userData)); // Armazena os dados do usuário logado
        }
    };

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity style={styles.iconvoltar} onPress={() => navigation.pop("1")}>
                    <Ionicons name="arrow-back" size={50} color="#1C88C9" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchbar}
                    placeholderTextColor={'#B4BBB4'}
                    placeholder="Procure aqui"
                />
                <Ionicons name="search-sharp" size={25} color="#7b7b7b" style={styles.iconsearch} />

                <TouchableOpacity style={[styles.item, styles.item1]} onPress={() => navigation.navigate("telaBolinha")}>
                    <Image style={styles.imgitem} source={require('../../assets/bolinha.jpg')} />
                    <Text style={styles.nomeitem}>Lanchonete Bolinha</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>4,5 • Lanchonete</Text>
                </TouchableOpacity>

                <View style={[styles.item, styles.item2]}>
                    <Image style={styles.imgitem} source={require('../../assets/lina.jpg')} />
                    <Text style={styles.nomeitem}>Delícias da Lina</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>4,3 • Padaria</Text>
                </View>

                <View style={[styles.item, styles.item3]}>
                    <Image style={styles.imgitem} source={require('../../assets/gilvana.jpg')} />
                    <Text style={styles.nomeitem}>Gilvana Restaurante</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>4,2 • Restaurante</Text>
                </View>

                <View style={[styles.item, styles.item4]}>
                    <Image style={styles.imgitem} source={require('../../assets/bistro.jpg')} />
                    <Text style={styles.nomeitem}>Lime Bistrô</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>4,1 • Bistrô</Text>
                </View>

                <View style={[styles.item, styles.item5]}>
                    <Image style={styles.imgitem} source={require('../../assets/bistro2.jpg')} />
                    <Text style={styles.nomeitem}>Mercado Bom Preço</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>4,3 • Mercado</Text>
                </View>
            </ScrollView>
        </View>
    );
}
