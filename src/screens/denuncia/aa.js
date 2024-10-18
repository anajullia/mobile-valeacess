import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { styles } from "./style";
import { TouchableOpacity, View, Text, Image, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import api from '../../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function Avaliar() {
  const navigation = useNavigation();
  const [avalia_visual, setAvalia_Visual] = useState(0);
  const [avalia_fisica, setAvalia_Fisica] = useState(0);
  const [avalia_auditiva, setAvalia_Auditiva] = useState(0);
  const [feedback, setFeedback] = useState("");  
  const [success, setSuccess] = useState(false);
  const [usuarioId, setUsuarioId] = useState(null); // Para armazenar o ID do usuário
  const [imagem, setImagem] = useState(null); // Para armazenar a imagem selecionada

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
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

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permissão de acesso à galeria é necessária!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImagem(result.uri); // Armazena a URI da imagem
    }
  };

  async function saveData() {            
    if (avalia_visual === 0 || avalia_fisica === 0 || avalia_auditiva === 0 || feedback === "") {
      showMessage({
        message: "Erro ao Salvar",
        description: 'Preencha os Campos Obrigatórios!',
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
        usuario_id_d: usuarioId
      };

      const res = await api.post('apivaleacess/denunciar.php', obj);

      if (res.data.sucesso === false) {
        showMessage({
          message: "Erro ao Salvar",
          description: res.data.mensagem,
          type: "warning",
          duration: 3000,
        });
        return;
      }

      setSuccess(true);
      showMessage({
        message: "Salvo com Sucesso",
        description: "Avaliado",
        type: "success",
        duration: 800,
      });
      navigation.navigate("Home");

    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSuccess(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconvoltar}
        onPress={() => navigation.pop(1)}
      >
        <Ionicons name="arrow-back" size={50} color="#1C88C9" />
      </TouchableOpacity>
      <Text style={styles.titulo}>Denúncia de restaurante</Text>

      <View style={styles.content}>
        <View style={styles.categoryWrapper}>
          <View style={styles.categoryContainer}>
            <Text style={styles.legenda}>Acessibilidade - Visual Parcial</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleAvalia_Visual(star)}
                  style={styles.starButton}
                  value={avalia_visual}
                >
                  <Image
                    source={
                      star <= avalia_visual
                        ? require("../../assets/star_filled.png")
                        : require("../../assets/star_empty.png")
                    }
                    style={styles.starImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.legenda}>Acessibilidade - Física</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleAvalia_Fisica(star)}
                  style={styles.starButton}
                  value={avalia_fisica}
                >
                  <Image 
                    source={
                      star <= avalia_fisica
                        ? require("../../assets/star_filled.png")
                        : require("../../assets/star_empty.png")
                    }
                    style={styles.starImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.legenda}>Acessibilidade - Auditiva</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleAvalia_Auditiva(star)}
                  value={avalia_auditiva}
                  style={styles.starButton}
                >
                  <Image
                    source={
                      star <= avalia_auditiva
                        ? require("../../assets/star_filled.png")
                        : require("../../assets/star_empty.png")
                    }
                    style={styles.starImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>

      <TextInput
        placeholder="Tem algum comentário a fazer? Digite aqui"
        onChangeText={(text) => setFeedback(text)}
        value={feedback}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botaoreview} onPress={saveData}>
        <Text style={styles.textobotaoreview}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
