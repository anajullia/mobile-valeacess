import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './tab.routes';

import Cadastro from '../screens/cadastro';
import ListaAlimenticio from '../screens/listaalimenticio';
import Login from '../screens/Login';
import Mapa from '../screens/mapa';
import ComercioAlimenticio from '../screens/comercio';
import Saiba from '../screens/saiba_mais';
import Avaliar from '../screens/avaliar';
import Denunciar from '../screens/denuncia';
import Alimenticios from '../screens/alimenticios';




const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="Saiba" component={Saiba} /> 
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="ListaAlimenticio" component={ListaAlimenticio} />
            <Stack.Screen name="Avaliar" component={Avaliar} />
            <Stack.Screen name="Denunciar" component={Denunciar} />
            <Stack.Screen name="Alimenticios" component={Alimenticios} />
            <Stack.Screen name="ComercioAlimenticio" component={ComercioAlimenticio} />
      
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;