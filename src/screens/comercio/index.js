import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator, // Indicador de carregamento
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import api from "../../../services/api";

const ComercioAlimenticio = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { id } = route.params; // Pegando o comercio_id da navegação
  const [comercio, setComercio] = useState(null); // Armazenar os dados do comércio
  const [loading, setLoading] = useState(true); // Controle de carregamento

  // Função para buscar os dados do comércio específico
  async function buscarComercio() {
    try {
        setLoading(true);
        const res = await api.get(`apivaleacess/buscar-comercio.php?id=${id}`);
        console.log("Resposta da API:", res.data); // Log da resposta
        if (res.data.success) {
            setComercio(res.data.result);
            console.log("Dados do comércio:", res.data.result); // Log dos dados
        } else {
            console.log("Nenhum dado encontrado.");
        }
    } catch (error) {
        console.log("Erro ao buscar comércio", error);
    } finally {
        setLoading(false);
    }
}


  useEffect(() => {
    if (isFocused) {
      console.log(id); // Verifique se o ID está sendo passado corretamente
      buscarComercio(); // Buscar os dados ao carregar a tela
    }
  }, [isFocused]);

  // Se os dados ainda estão sendo carregados, exibe um indicador de carregamento
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1C88C9" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  // Se os dados não forem encontrados
  if (!comercio) {
    return <Text>Nenhum comércio encontrado.</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.imagemcomercio} source={require('../../assets/humanos.png')} />
          <View style={styles.overlayimagemcomercio} />
          <TouchableOpacity style={styles.iconvoltar} onPress={() => navigation.pop()}>
            <Ionicons name="arrow-back" size={50} color="#1C88C9" />
          </TouchableOpacity>
        </View>

        <View style={styles.paper}>
          {/* Exibindo os dados do comércio */}
          <Text style={styles.nomecomercio}>{comercio.nome}</Text>
          <Text style={styles.categoriacomercio}>{comercio.cidade}</Text>
          <Text style={styles.enderecocomercio}>{comercio.rua}</Text>
          <Text style={styles.enderecocomercio}>{comercio.numero}</Text>

          {/* Exibir as avaliações */}
          <View style={styles.notavaliacoes}>
            <View style={styles.row}>
              <Ionicons style={styles.icon} name="eye" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="walk" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="ear" size={30} color="#83a9c0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.legend}>Média Visual: {comercio.avalia_visual}</Text>
              <Text style={styles.legend}>Média Física: {comercio.avalia_fisica}</Text>
              <Text style={styles.legend}>Média Auditiva: {comercio.avalia_auditiva}</Text>
            </View>
          </View>

          <Text style={styles.avaliacoes}>Últimas avaliações:</Text>

          {/* Exibindo as avaliações */}
          {comercio.avaliacoes && comercio.avaliacoes.length > 0 ? (
            comercio.avaliacoes.map((avaliacao, index) => (
              <View key={index} style={styles.review}>
                <Ionicons name="person-circle" size={30} color="#1C88C9" style={styles.iconereview}/>
                <Text style={styles.reviewname}>{avaliacao.usuario}</Text>
                <Text style={styles.reviewtext}>{avaliacao.feedback}</Text>
              </View>
            ))
          ) : (
            <Text style={{ color: "#585858" }}>Nenhuma avaliação encontrada.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ComercioAlimenticio;
