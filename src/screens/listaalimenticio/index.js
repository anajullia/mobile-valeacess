import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../../services/api';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export default function ListaAlimenticio() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);  // Ensure this starts as an array
    const [total, setTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    async function totalDadosCadastrados() {
        try {
            const res = await api.get('apivaleacess/listar-cards-alimenticios.php');
            setTotal(res.data);
        } catch (error) {
            console.log('Erro ao buscar total:', error);
        }
    }

    async function listarDados() {
        try {
            const res = await api.get('apivaleacess/buscar-alimenticios.php');
            if (Array.isArray(res.data.result)) {  // Ensure that it's an array
                setDados(res.data.result);
            } else {
                setDados([]);  // If result is not an array, default to empty array
            }
        } catch (error) {
            console.log('Erro ao Listar', error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
        totalDadosCadastrados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>
                        <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
                    </View>
                </View>

                {isLoading ? (
                    <Load />
                ) : (
                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        <View style={styles.containerBox}>
                            <Text style={styles.title}>APLICATIVO BOLA BOLA Sua Central de Futebol</Text>
                            <Ionicons name="football" size={50} color="black" style={{ marginLeft: 140 }} />
                        </View>

                        <Text style={styles.subtitulo}>Seus cadastros de torcedor:</Text>

                        {Array.isArray(dados) && dados.length > 0 ? (
                            dados.map((item) => (
                                <View style={styles.griditem} key={item.comercio_id}>
                                    <Text style={{ color: '#585858' }}>{item.comercio_id} - {item.nome} - {item.cidade} - {item.categoria}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={{ color: '#585858' }}>Nenhum dado encontrado.</Text>
                        )}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}
