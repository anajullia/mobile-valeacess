import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { styles } from "./style";
import { TouchableOpacity, View, Text, Image, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import api from '../../../services/api';

export default function NovoUsuario() {
  const navigation = useNavigation();
  const [cpf, setCPF] = useState("");  
    const [nome, setNome] = useState("");  
    const [deficiencia, setDeficiencia] = useState("");  
    const [email, setEmail] = useState("");  
    const [senha, setSenha] = useState("");
  const [feedback, setFeedback] = useState("");  
  const [success, setSuccess] = useState(false);

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
    if ( cpf === "" ||nome ===  "" || email === "" || senha === "") {
      showMessage({
          message: "Erro ao Salvar",
          description: 'Preencha os Campos Obrigatórios!',
          type: "warning",
      });
      return;
    }

    try {
      const obj = {
                cpf: cpf,
                nome: nome,    
                deficiencia: deficiencia,          
                email: email,
                senha: senha
      }

      const res = await api.post('apivaleacess/salvar-usuario.php', obj);

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
      navigation.navigate("Home")

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
      <Text style={styles.titulo}>Se cadastre</Text>

      <TextInput
            placeholder="Insira seu CPF (EX: 123.456.789-00)"
            onChangeText={(text) => setCPF(text)}
            value={cpf}
            style={styles.input}
          />
      
          <TextInput
            placeholder="Insira seu nome completo"
            onChangeText={(text) => setNome(text)}
            value={nome}
            style={styles.input}
          />
      
          <TextInput
            placeholder="Insira seu melhor email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.input}
          />
      
          <TextInput
            placeholder="Insira sua senha"
            onChangeText={(text) => setSenha(text)}
            value={senha}
            style={styles.input}
            secureTextEntry // Adiciona segurança para senha
          />
      
          <TextInput
            placeholder="Tem alguma deficiência? Especifique aqui, caso queira!"
            onChangeText={(text) => setDeficiencia(text)}
            value={deficiencia}
            style={styles.input}
          />
       


      <TouchableOpacity style={styles.botaoreview} onPress={saveData}>
        <Text style={styles.textobotaoreview}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
