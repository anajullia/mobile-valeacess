import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

export default function Comercio() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        const fetchAvaliacoes = async () => {
            const response = await fetch('apivaleacess/avaliagilvana.php'); // Substitua pela URL da sua API
            const data = await response.json();
            if (data.success) {
                setAvaliacoes(data.result);
            }
        };

        if (isFocused) {
            fetchAvaliacoes();
        }
    }, [isFocused]); // Chama quando o componente está em foco

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.imagemcomercio} source={require('../../assets/gilvana.jpg')} />
                    <View style={styles.overlayimagemcomercio} />
                    <TouchableOpacity style={styles.iconvoltar} onPress={() => navigation.pop("1")}>
                        <Ionicons name="arrow-back" size={50} color="#1C88C9" />
                    </TouchableOpacity>
                </View>

                <View style={styles.paper}>
                    <Text style={styles.nomecomercio}>Restaurante Gilvana</Text>
                    <Text style={styles.categoriacomercio}>Restaurante - Registro</Text>
                    <Text style={styles.enderecocomercio}>Vila Tupi, Nº500</Text>

                    {/* Avaliações */}
                    <View style={styles.notavaliacoes}>
                        <View style={styles.row}>
                            <Ionicons style={styles.icon} name="eye" size={30} color="#83a9c0" />
                            <Ionicons style={styles.icon} name="walk" size={30} color="#83a9c0" />
                            <Ionicons style={styles.icon} name="ear" size={30} color="#83a9c0" />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.legend}>4,1</Text>
                            <Text style={styles.legend}>3,7</Text>
                            <Text style={styles.legend}>5,0</Text>
                        </View>
                    </View>

                    <Image style={styles.imagemmain} source={require('../../assets/bolinha.jpg')} />

                    <Text style={styles.avaliacoes}>Últimas avaliações:</Text>
                    {avaliacoes.length > 0 ? (
                        avaliacoes.map((avaliacao, index) => (
                            <View key={index} style={styles.review}>
                                <Text style={styles.reviewname}>
                                    {avaliacao.nome} {avaliacao.deficiencia && `- ${avaliacao.deficiencia}`}
                                </Text>
                                <Text style={styles.reviewtext}>{avaliacao.feedback}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noReviews}>Nenhuma avaliação disponível.</Text>
                    )}

                    <TouchableOpacity style={styles.botaoreview} onPress={() => navigation.navigate("Avaliar")}>
                        <Text style={styles.textobotaoreview}>Faça sua review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoreview} onPress={() => navigation.navigate("Denunciar")}>
                        <Text style={styles.textobotaoreview}>Faça sua denúncia</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
