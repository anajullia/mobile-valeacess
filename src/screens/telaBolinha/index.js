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



import { useIsFocused } from '@react-navigation/native';

export default function Comercio() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // Dados das imagens do carrossel

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
          <Text style={styles.nomecomercio}>Lanches Bolinha</Text>
          <Text style={styles.categoriacomercio}>Lanchonete - Pariquera-Açu</Text>
          <Text style={styles.enderecocomercio}>Rua Dr. Leopoldo Bevilaqua - Nº123</Text>

          {/* Avaliações */}
          <View style={styles.notavaliacoes}>
            <View style={styles.row}>
              <Ionicons style={styles.icon} name="eye" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="walk" size={30} color="#83a9c0" />
              <Ionicons style={styles.icon} name="ear" size={30} color="#83a9c0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.legend}>4,1</Text>
              <Text style={styles.legend}>3,7</Text>
              <Text style={styles.legend}>5,0</Text>
            </View>
          </View>

          <Image style={styles.imagemmain} source={require('../../assets/bolinha.jpg')} />

          <Text style={styles.avaliacoes}>Ultimas avaliações:</Text>

          <View style={styles.review}>
          <Ionicons name="person-circle" size={30} color="#1C88C9" style={styles.iconereview}/>
            <Text style={styles.reviewname}>João da Silva - Surdo</Text>
            <Text style={styles.reviewtext}>Muito bom, recomendo! Peca um pouco na acessibilidade motora, mas fui muito bem recebido sendo surdo, tendo atendimento em Libras.</Text>
          </View>
          <View style={styles.review}>
          <Ionicons name="person-circle" size={30} color="#1C88C9" style={styles.iconereview}/>
            <Text style={styles.reviewname}>Maria - Parkinson</Text>
            <Text style={styles.reviewtext}>Alguns talheres eram muito diferentes e complicados, mas as maçanetas eram de fácil uso.</Text>
          </View>

          <TouchableOpacity style={styles.botaoreview} onPress={() => navigation.navigate("Avaliar")}>
            <Text style={styles.textobotaoreview}>Faça sua review</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaorreview} onPress={() => navigation.navigate("Denunciar")}>
            <Text style={styles.textobotaoreview}>Faça sua Denuncia</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
};
