import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from '../screens/cadastro';
import ListaAlimenticio from '../screens/listaalimenticio';
import ListaVendas from '../screens/listavendas';
import ListaPublicos from '../screens/listapublicos';
import Login from '../screens/Login';
import Mapa from '../screens/mapa';
import ComercioAlimenticio from '../screens/telaBolinha';
import Saiba from '../screens/saiba_mais';
import Avaliar from '../screens/avaliar';
import Denunciar from '../screens/denuncia';
import Alimenticios from '../screens/alimenticios';
import Home from '../screens/Home';




const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Saiba" component={Saiba} /> 
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="ListaAlimenticio" component={ListaAlimenticio} />
            <Stack.Screen name="ListaVendas" component={ListaAlimenticio} />
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