import React, { useEffect, useState } from "react";
import { styles } from "./style";

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  StatusBar,
  Alert,
  ImageBackground,
  TextInput,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Load from "../../components/Load";
import { DrawerActions, useNavigation } from "@react-navigation/core";
import { PaperProvider, Button } from "react-native-paper";
import App from "../../../App";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useIsFocused } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [usu, setUsu] = useState("");

  /* async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`apiModelo/dashboard/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };
    */

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconvoltar}
          onPress={() => navigation.pop("1")}
        >
          <Ionicons name="arrow-back" size={50} color="#1C88C9" />
        </TouchableOpacity>

        <View style={styles.containergrid}>
          <View style={styles.row}>
            <Button
            icon={() => (
                <MaterialCommunityIcons name="food" size={90} color="white" style={styles.iconbotao} /> // Ajuste o tamanho aqui
              )}
            buttonColor="white"
            accessibilityHint="Tela de comércios alimentícios"
            style={styles.item}
            onPress={() => navigation.navigate("ListaAlimenticio")}
            >
              <Text style={styles.textobotao}>Alimentícios</Text>
            </Button>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("ListaVendas")}
            >
              <Ionicons
                name="basket-sharp"
                size={80}
                color="#F3FBFF"
                style={styles.iconbotao}
              />
              <Text style={styles.textobotao}>Vendas Variadas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("ListaPublico")}
            >
              <Ionicons
                name="business-sharp"
                size={80}
                color="#F3FBFF"
                style={styles.iconbotao}
              />
              <Text style={styles.textobotao}>Prédios Públicos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Mapa")}
            >
              <Ionicons
                name="location-sharp"
                size={80}
                color="#F3FBFF"
                style={styles.iconbotao}
              />
              <Text style={styles.textobotao}>Mapa & Rotas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}
