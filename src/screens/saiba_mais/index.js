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

const Saiba = () => {
  const navigation= useNavigation();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <Image style={styles.svg} source={require('../../assets/svgsobre.png')} />
    </View>
  );
};

export default Saiba;
