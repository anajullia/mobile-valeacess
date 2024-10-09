import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Image, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";
 
import * as ImagePicker from 'expo-image-picker';
 
// import api from '../../services/api';
 
/* ParamList = {
    Detail: {
       id_reg: string,        
    }
};
*/
 
 
const NovoUsuario = () => {
    const navigation = any = useNavigation();
    const[image, setImage] = useState(null);
 

       
    const [cpf, setCPF] = useState("");  
    const [nome, setNome] = useState("");  
    const [deficiencia, setDeficiencia] = useState("");  
    const [email, setEmail] = useState("");  
    const [senha, setSenha] = useState("");
 
       
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
   
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
                id: id_reg,
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
 
            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Registro Salvo",
                type: "success",
                duration: 800,
            });
            navigation.navigate("Home")
 
        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }
 
    /* async function pickImageFromGallery() {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1
        });
     
        if (!result.canceled)
        {
          setImage(result.assets[0].uri);
        }
      }
 
      async function takePhoto() {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4,3],
          quality: 1
        });
     
        if (!result.canceled)
        {
          setImage(result.assets[0].uri);
        }
      }
 
      async function uploadImage() {
        if (!image) {
          Alert.alert("Nenhuma imagem selecionada", "Por favor, selecione ou tire uma foto primeiro.");
          return;
        }
               
        let filename = image.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
     
        let formData = new FormData();
        formData.append('photo', { uri: image, name: filename, type });
     
        try {
          const response = await fetch("http://10.68.36.108/apivaleacess/usuarios/upload.php", {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
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
 
      */
   
      
     
       

 
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.iconvoltar}
            onPress={() => navigation.pop(1)}
          >
            <Ionicons name="arrow-back" size={50} color="#1C88C9" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Avaliação de restaurante</Text>
      
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
 
export default NovoUsuario;
 