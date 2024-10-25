import { styles } from "./style";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useIsFocused } from "@react-navigation/native";
import api from "../../../services/api";
import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { PaperProvider, Button } from "react-native-paper";
import App from "../../../App";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    <PaperProvider>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imagemcomercio}
              source={require("../../assets/humanos.png")}
            />
            <TouchableOpacity
              style={styles.iconvoltar}
              onPress={() => navigation.pop()}
            >
              <Ionicons name="arrow-back" size={50} color="#1C88C9" />
            </TouchableOpacity>
          </View>

          <View style={styles.paper}>
           
            <Text style={styles.nomecomercio}>{comercio.nome}</Text>
            <Text style={styles.categoriacomercio}>
              {comercio.cidade}, Rua {comercio.rua}, Número {comercio.numero}
            </Text>

            <Text style={styles.avaliacoes}>Últimas avaliações:</Text>
            <View style={styles.boxaval}>
              {avaliacoes && avaliacoes.length > 0 ? (
                avaliacoes
                  .slice(-2) // Limita para as duas últimas avaliações
                  .map((avaliacao, index) => (
                    <View key={index} style={styles.review}>
                      <Ionicons
                        name="person-circle"
                        size={30}
                        color="#1C88C9"
                        style={styles.icon}
                      />
                      <Text style={styles.reviewname}>
                        Média: {avaliacao.media_avaliacao}
                      </Text>
                      <Text style={styles.reviewfeedback}>
                        {avaliacao.feedback}
                      </Text>
                    </View>
                  ))
              ) : (
                <Text style={{ color: "#585858" }}>
                  Nenhuma avaliação encontrada.
                </Text>
              )}
            </View>
          </View>

          <Button
            icon={() => (
              <MaterialCommunityIcons
                name="exclamation-thick"
                size={24} // Ajuste o tamanho conforme necessário
                color="white" // Substitua por qualquer cor que você desejar
              />
            )}
            style={styles.btdenun}
            onPress={() =>
              navigation.navigate("Denunciar", { comercio_id: id })
            }
          >
            Denunciar
          </Button>

          <TouchableOpacity
            style={styles.botaoreview2}
            onPress={() => navigation.navigate("Avaliar", { comercio_id: id })} // Passa o ID do comércio
          >
            <Text style={styles.textobotaoreview}>Avaliar Comércio</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </PaperProvider>
  );
};

export default ComercioAlimenticio;
