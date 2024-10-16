import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import api from '../../../services/api';

const ComercioAlimenticio = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { id } = route.params;
  const [comercio, setComercio] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarComercio = async () => {
    try {
      const res = await api.get(`apivaleacess/buscar-comercio.php?id=${id}`);
      if (res.data.success) {
        setComercio(res.data.result);
      } else {
        console.log("Nenhum dado encontrado.");
      }
    } catch (error) {
      console.log("Erro ao buscar comércio", error);
    } finally {
      setLoading(false); // Atualiza o estado de loading após a requisição
    }
  };

  const buscarAvaliacoes = async () => {
    try {
      const res = await api.get(`apivaleacess/buscar-avaliacoes.php?id=${id}`);
      if (res.data.success) {
        setAvaliacoes(res.data.result);
      } else {
        console.log("Nenhuma avaliação encontrada.");
      }
    } catch (error) {
      console.log("Erro ao buscar avaliações", error);
    } finally {
      setLoading(false); // Atualiza o estado de loading após a requisição
    }
  };

  useEffect(() => {
    if (isFocused) {
      setLoading(true); // Inicia o carregamento
      buscarComercio();
      buscarAvaliacoes();
    }
  }, [isFocused]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1C88C9" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (!comercio) {
    return <Text>Nenhum comércio encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.imagemcomercio} source={require('../../assets/humanos.png')} />
          <TouchableOpacity style={styles.iconvoltar} onPress={() => navigation.pop()}>
            <Ionicons name="arrow-back" size={50} color="#1C88C9" />
          </TouchableOpacity>
        </View>

        <View style={styles.paper}>
          <Text style={styles.nomecomercio}>{comercio.nome}</Text>
          <Text style={styles.categoriacomercio}>{comercio.cidade}, Rua {comercio.rua}, Número {comercio.numero}</Text>

          <Text style={styles.avaliacoes}>Últimas avaliações:</Text>
          {avaliacoes && avaliacoes.length > 0 ? (
            avaliacoes.map((avaliacao, index) => (
              <View key={index} style={styles.review}>
                <Ionicons name="person-circle" size={30} color="#1C88C9" />
                <Text style={styles.reviewname}>
                  Média: {((avaliacao.avalia_visual + avaliacao.avalia_fisica + avaliacao.avalia_auditiva) / 3).toFixed(2)}
                </Text>
                <Text style={styles.reviewfeedback}>{avaliacao.feedback}</Text>
              </View>
            ))
          ) : (
            <Text style={{ color: "#585858" }}>Nenhuma avaliação encontrada.</Text>
          )}
        </View>

        <TouchableOpacity style={styles.botaoreview} onPress={() => navigation.navigate("Denunciar")}>
            <Text style={styles.textobotaoreview}>Faça sua denúncia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoreview2} onPress={() => navigation.navigate("Avaliar")}>
            <Text style={styles.textobotaoreview}>Faça sua review</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ComercioAlimenticio;
