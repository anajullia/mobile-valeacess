import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/core";

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import api from "../../../services/api";

export default function ListaAlimenticio() {
  const navigation = useNavigation();
  const [dados, setDados] = useState([]);
  const isFocused = useIsFocused();

  async function listarDados() {
    try {
      const res = await api.get(
        `apivaleacess/listar-comercios-alimenticios.php`
      );
      setDados(res.data.result);
    } catch (error) {
      console.log("Erro ao Listar " + error);
    }
  }

  useEffect(() => {
    listarDados();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={styles.iconvoltar}
          onPress={() => navigation.pop("1")}
        >
          <Ionicons name="arrow-back" size={50} color="#1C88C9" />
        </TouchableOpacity>

        {dados.map((item) => (
          <View style={styles.griditem} key={item.comercio_id}>
            <Text style={styles.title}>{item.comercio_id}</Text>

            <Image
              source={{
                uri: `http://10.68.36.111/apivaleacess/imagens/${item.img}`, // Assumindo que `item.img` tem a estrutura `comercio_18.png`
              }}
              style={styles.image}
              onError={(error) => {
                console.log(
                  `Erro ao carregar imagem: ${item.img}`,
                  error.nativeEvent
                );
              }}
              onLoadStart={() => {
                console.log(
                  `Tentando carregar: http://10.68.36.111/apivaleacess/imagens/${item.img}`
                );
              }}
              onLoadEnd={() => {
                console.log(`Imagem carregada: ${item.img}`);
              }}
            />
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.subtitle}>
              {item.cidade} • {item.categoria}
            </Text>
            <Text style={styles.rating}>
              <MaterialIcons name="star" size={16} color="#FFD700" />{" "}
              {item.media_total}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
