import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3FBFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  titulo: {
    fontSize: 24,
    color: '#1C88C9',
    fontFamily: 'Rubik',
    alignSelf: 'center',
    position:'absolute',
    top: 100
  },
  content: {
    alignItems: "flex-start",
    marginBottom: 20,
    marginVertical:20,
    position:'absolute',
    top:130,
    left:42
  },

  input:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 320,
    height: 200,
    paddingLeft: 10,
    borderRadius: 15,
    marginBottom: 40,
    top: 440,
    paddingTop: 3,
    fontFamily: 'Rubik',
    borderWidth: 1,
    borderColor: '#7b7b7b',
    alignSelf:'center',
    position:'absolute'
  },

  botaoreview:{
    backgroundColor: '#1C88C9',
    width: 320,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top:680,
    position:'absolute'
  },

  textobotaoreview:{
    fontSize: 16,
    color: '#F3FBFF',
    fontFamily: 'Rubik',
  },

  legenda: {
    fontSize: 16,
    color: "#1C88C9",
    fontFamily: "Rubik",
    alignSelf: "flex-start",
    marginBottom: 5,
  },

  iconvoltar: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },

  starsContainer: {
    flexDirection: "row",
    marginVertical:10
  },

  starButton: {
    padding: 5,
  },

  starImage: {
    width: 40,
    height: 40,
  },

  image: {
    width: 200, // Largura padrão
    height: 150, // Altura padrão
    resizeMode: "cover", // Ajusta a imagem para cobrir a área definida
    borderRadius: 10, // Adiciona bordas arredondadas
    marginBottom: 10, // Espaço entre a imagem e outros elementos
  },
});
