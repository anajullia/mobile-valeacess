import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3FBFF",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  titulo: {
    fontSize: 24,
    color: '#1C88C9',
    fontFamily: 'Rubik',
    alignSelf: 'center',
    marginTop: 100, 
  },

  content: {
    alignItems: "flex-start",
    marginBottom: 20,
    marginVertical: 20,
    width: '100%',
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 320,
    height: 200,
    paddingLeft: 10,
    borderRadius: 15,
    marginBottom: 20,
    fontFamily: 'Rubik',
    borderWidth: 1,
    borderColor: '#7b7b7b',
    alignSelf: 'center',
  },

  legenda: {
    fontSize: 16,
    color: "#1C88C9",
    fontFamily: "Rubik",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 10,

  },

  smallButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%",
    marginBottom: 20, // Para não sobrepor a imagem
  },

  smallButton: {
    backgroundColor: "#1C88C9",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },

  smallButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Rubik",
  },

  starsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 10,
  },

  starButton: {
    padding: 5,
  },

  starImage: {
    width: 40,
    height: 40,
  },

  imagePreview: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',  // Centraliza a imagem
  },

  iconvoltar: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },

  // Botão Denunciar ajustado
  denunciarButton: {
    backgroundColor: '#1C88C9',  // Altere para backgroundColor
    width: 320,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,  // Botão "Denunciar" na parte inferior,
    alignSelf: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Rubik',
  },
});
