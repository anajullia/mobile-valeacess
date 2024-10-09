import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3FBFF",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: 40,
      paddingTop: 120, // Adicionado espaço no topo
    },
  
    titulo: {
      fontSize: 24,
      color: '#1C88C9',
      fontFamily: 'Rubik',
      marginBottom: 20, // Ajusta o espaçamento abaixo do título
    },
  
    input: {
      backgroundColor: '#fff',
      width: 320,
      height: 50, // Ajuste na altura
      paddingLeft: 10,
      borderRadius: 15,
      marginBottom: 20, // Ajusta o espaçamento entre os inputs
      fontFamily: 'Rubik',
      borderWidth: 1,
      borderColor: '#7b7b7b',
    },
  
    botaoreview: {
      backgroundColor: '#1C88C9',
      width: 320,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30, // Ajuste no espaçamento acima do botão
    },
  
    textobotaoreview: {
      fontSize: 16,
      color: '#F3FBFF',
      fontFamily: 'Rubik',
    },
  
    iconvoltar: {
      position: "absolute",
      top: 40,
      left: 10,
      zIndex: 1,
    },
  });
  