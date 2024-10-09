import React, { useEffect, useState } from 'react';
import { styles } from './style';

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
    TextInput
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from "../../../services/api";




import { useIsFocused } from '@react-navigation/native';

const Comercio = FC = ({route}) => { 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [cnpj, setCNPJ] = useState("");
  const [comercio_id, setId] = useState(0);
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState(0o0);
  const [categoria, setCategoria] = useState("");
  const [imagemp, setImagemp] = useState("");


  async function totalavaliacoes() {
    try {
      const res = await api.get("apivaleacess/listar-cards-avaliacoes.php");
      setTotal(res.data);
    } catch (error) {
      console.log("Erro ao buscar total:", error);
    }
  }

  async function listarDados() {
    try {
      const res = await api.get("apivaleacess/buscar-avaliacoes.php");
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
  // Dados das imagens do carrossel

  const Cadastro = FC = ({route}) => { 
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.imagemcomercio} source={require('../../assets/comendo.jpg')} />
          <View style={styles.overlayimagemcomercio} />
          <TouchableOpacity style={styles.iconvoltar} onPress={() => navigation.pop("1")}>
            <Ionicons name="arrow-back" size={50} color="#1C88C9" />
          </TouchableOpacity>
        </View>

        <View style={styles.paper}>
          <Text style={styles.nomecomercio}>nome</Text>
          <Text style={styles.categoriacomercio}>cidade</Text>
          <Text style={styles.enderecocomercio}>rua</Text>
          <Text style={styles.enderecocomercio}>numero</Text>

          {/* Avaliações */}
          <View style={styles.notavaliacoes}>
            <View style={styles.row}>
              <Ionicons style={styles.icon} name="eye" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="walk" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="ear" size={30} color="#83a9c0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.legend}>media visual</Text>
              <Text style={styles.legend}>media fisica</Text>
              <Text style={styles.legend}>media auditiva</Text>
            </View>
          </View>

          <Image style={styles.imagemmain} source={require('../../assets/bolinha.jpg')} />

          <Text style={styles.avaliacoes}>Ultimas avaliações:</Text>

          <View style={styles.review}>
          <Ionicons name="person-circle" size={30} color="#1C88C9" style={styles.iconereview}/>
            <Text style={styles.reviewname}>nome do usuario</Text>
            <Text style={styles.reviewtext}>avaliacao</Text>
          </View>
          <TouchableOpacity style={styles.botaoreview} onPress={() => navigation.navigate("Avaliar")}>
            <Text style={styles.textobotaoreview}>Faça sua review</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaorreview} onPress={() => navigation.navigate("Denunciar")}>
            <Text style={styles.textobotaoreview}>Faça sua Denuncia</Text>
          </TouchableOpacity>

          {Array.isArray(dados) && dados.length > 0 ? (
          dados.map((item) => (
            <View style={styles.griditem} key={item.comercio_id}>
              <TouchableOpacity
                style={[styles.item, styles.item1]}
                onPress={() => navigation.navigate("telaBolinha", {id:comercio_id})}
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
        </View>

      </ScrollView>

    </View>
  );
};
}