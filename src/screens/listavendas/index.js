import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function ListaVendas() {
  const [user, setUser] = useState(null);
  const [dados, setDados] = useState([]);
  const [totalVendas, setTotalVendas] = useState(0); // Estado para o total de vendas
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [refreshing, setRefreshing] = useState(false); // Estado de atualização
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // Verifica se o usuário está logado
  const checkLogin = async () => {
    const userData = await AsyncStorage.getItem("@user");

    if (!userData) {
      Alert.alert("Atenção", "Você precisa estar logado para acessar esta tela.");
      navigation.navigate("Login"); // Redireciona para a tela de login se não estiver logado
    } else {
      setUser(JSON.parse(userData)); // Armazena os dados do usuário logado
    }
  };

  // Busca o total de vendas cadastradas
  async function totalDadosCadastrados() {
    try {
      const res = await api.get("apivaleacess/listar-cards-vendas.php");
      setTotalVendas(res.data.total_vendas); // Supondo que a API retorne o total
    } catch (error) {
      console.log("Erro ao buscar total:", error);
    }
  }

  // Lista os dados das vendas
  async function listarDados() {
    try {
      setIsLoading(true); // Inicia o carregamento
      const res = await api.get("apivaleacess/listar-cards-vendas.php");
      if (Array.isArray(res.data)) {
        // Confere se a resposta é um array
        setDados(res.data);
      } else {
        setDados([]); // Se não for, define como array vazio
      }
    } catch (error) {
      console.log("Erro ao listar dados:", error);
    } finally {
      setIsLoading(false); // Finaliza o carregamento
      setRefreshing(false); // Finaliza o refresh
    }
  }

  // Chama as funções quando a tela é focada
  useEffect(() => {
    listarDados();
    totalDadosCadastrados();
    checkLogin();
  }, [isFocused]);

  // Função de atualizar os dados
  const onRefresh = () => {
    setRefreshing(true);
    listarDados();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* Botão de voltar */}
        <TouchableOpacity
          style={styles.iconvoltar}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={50} color="#1C88C9" />
        </TouchableOpacity>

        {/* Barra de pesquisa */}
        <TextInput
          style={styles.searchbar}
          placeholderTextColor={"#B4BBB4"}
          placeholder="Procure aqui"
        />
        <Ionicons
          name="search-sharp"
          size={25}
          color="#7b7b7b"
          style={styles.iconsearch}
        />

        {/* Exibição do total de vendas */}
        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          Total de Vendas: {totalVendas}
        </Text>

        {/* Carregamento */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {dados.length > 0 ? (
              dados.map((item) => (
                <View style={styles.griditem} key={item.comercio_id}>
                  <TouchableOpacity
                    style={[styles.item, styles.item1]}
                    onPress={() =>
                      navigation.navigate("ComercioAlimenticio", {
                        id: item.comercio_id,
                      })
                    }
                  >
                    <Text style={styles.nomeitem}>{item.nome}</Text>
                    <Ionicons name="star" size={17} style={styles.iconsitem} />
                    <Text style={styles.categoriaitem}>{item.categoria}</Text>
                    <Text style={styles.categoriaitem}>
                      {item.cidade} - {item.rua}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={{ color: "#585858" }}>Nenhum dado encontrado.</Text>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
