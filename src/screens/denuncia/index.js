import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { styles } from "./style";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';

export default function Avaliar({ route }) {
  const navigation = useNavigation();
  const { comercio_id } = route.params; // Adicionando a extração do ID do comércio
  const [avalia_visual, setAvalia_Visual] = useState(0);
  const [avalia_fisica, setAvalia_Fisica] = useState(0);
  const [avalia_auditiva, setAvalia_Auditiva] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);
  const [usuarioId, setUsuarioId] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("@user"); // Ajuste conforme necessário
      if (user) {
        setUsuarioId(user);
      }
    };

    checkLogin();
  }, []);

  const handleAvalia_Visual = (rate) => {
    setAvalia_Visual(rate);
  };

  const handleAvalia_Fisica = (rate) => {
    setAvalia_Fisica(rate);
  };

  const handleAvalia_Auditiva = (rate) => {
    setAvalia_Auditiva(rate);
  };

  async function saveData() {
    if (
      avalia_visual === 0 ||
      avalia_fisica === 0 ||
      avalia_auditiva === 0 ||
      feedback === ""
    ) {
      showMessage({
        message: "Erro ao Salvar",
        description: "Preencha os Campos Obrigatórios!",
        type: "warning",
      });
      return;
    }

    try {
      const obj = {
        avalia_visual_d: avalia_visual,
        avalia_fisica_d: avalia_fisica,
        avalia_auditiva_d: avalia_auditiva,
        feedback: feedback,
        usuario_id: usuarioId,
        comercio_id: comercio_id,
      };

      console.log("Enviando dados para a API:", obj);

      const res = await api.post("apivaleacess/denunciar.php", obj); // Verifique o caminho completo da API

      console.log("Resposta da API:", res.data.result); // Log completo da resposta
      console.log("Dados recebidos da API:", res.data);

      if (res.data.success === false) {
        showMessage({
          message: "Erro ao Salvar",
          description: res.data.message || "Erro desconhecido",
          type: "warning",
        });
        return;
      }

      showMessage({
        message: "Salvo com Sucesso",
        description: "Avaliado",
        type: "success",
      });
      navigation.navigate("Home");
    } catch (error) {
      console.log(
        "Erro na chamada da API:",
        error.response ? error.response.data : error
      ); // Verifique o erro completo
      Alert.alert("Ops", "Algo deu errado, tente novamente.");
    }
  }

  async function pickImageFromGallery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function takePhoto() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function uploadImage() {
    if (!image) {
      Alert.alert(
        "Nenhuma imagem selecionada",
        "Por favor, selecione ou tire uma foto primeiro."
      );
      return;
    }

    let filename = image.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append("photo", { uri: image, name: filename, type });

    try {
      const response = await fetch("http://10.68.36.111/imagem/upload.php", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Imagem enviada com sucesso!");
      } else {
        Alert.alert("Erro", "Falha ao enviar imagem.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar enviar a imagem.");
    }
  }

  return (
    <View style={styles.container}>
    {image &&(
      <Image source={{uri: image}}></Image>
    )}

    <TouchableOpacity
      style={styles.button}
      onPress={pickImageFromGallery}    
    >
        <Text style={styles.buttonText}>Escolha da Galeria</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={takePhoto}    
    >
        <Text style={styles.buttonText}>Tirar Foto</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={uploadImage}    
    >
        <Text style={styles.buttonText}>Salvar Imagem BD</Text>
    </TouchableOpacity>

  </View>
  );
}
