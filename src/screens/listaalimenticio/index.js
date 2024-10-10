import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";

import api from "../../../services/api";


import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function ListaAlimenticio() {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [dados, setDados] = useState([]);

  const checkLogin = async () => {
    const userData = await AsyncStorage.getItem("@user");

    if (!userData) {
      Alert.alert(
        "Atenção",
        "Você precisa estar logado para acessar esta tela."
      );
      navigation.navigate("Login"); // Redireciona para a tela de login se não estiver logado
    } else {
      setUser(JSON.parse(userData)); // Armazena os dados do usuário logado
    }
  };

  async function totalDadosCadastrados() {
    try {
      const res = await api.get("apivaleacess/listar-cards-alimenticios.php");
      setTotal(res.data);
    } catch (error) {
      console.log("Erro ao buscar total:", error);
    }
  }

  async function listarDados() {
    try {
      const res = await api.get("apivaleacess/buscar-alimenticios.php");
      if (Array.isArray(res.data.result)) {
        // Ensure that it's an array
        setDados(res.data.result);
      } else {
        setDados([]); // If result is not an array, default to empty array
      }
    } catch (error) {
      console.log("Erro ao Listar", error);
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
    checkLogin();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={styles.iconvoltar}
          onPress={() => navigation.pop("1")}
        >
          <Ionicons name="arrow-back" size={50} color="#1C88C9" />
        </TouchableOpacity>
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


        {Array.isArray(dados) && dados.length > 0 ? (
          dados.map((item) => (
            <View style={styles.griditem} key={item.comercio_id}>
              <TouchableOpacity
                style={[styles.item, styles.item1]}
                onPress={() => navigation.navigate("ComercioAlimenticio", {id: item.comercio_id})}
              >
                <Text style={styles.nomeitem}>{item.nome}</Text>
                <Ionicons name="star" size={17} style={styles.iconsitem} />
                <Text style={styles.categoriaitem}>{item.categoria}</Text>
                <Text style={styles.categoriaitem}>{item.cidade} - {item.rua}</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={{ color: "#585858" }}>Nenhum dado encontrado.</Text>
        )}
      </ScrollView>
    </View>
  );
}
