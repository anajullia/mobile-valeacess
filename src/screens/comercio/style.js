import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FBFF',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  imagemcomercio: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  overlayimagemcomercio: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconvoltar: {
    position: 'absolute',
    top: 40,
    left: 10,
  },

  boxaval: {
    width:350,
    height:300,
    marginLeft:0,
    marginTop:10
  },
  nomecomercio: {
    fontSize: 24,
    color: '#1C88C9',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  avaliacoes: {
    fontSize: 24,
    color: '#1C88C9',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
  },

  icon:{
    position: 'absolute',
    marginLeft: '-50px'
  },

  categoriacomercio: {
    fontSize: 14,
    color: '#83a9c0',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
  },
  enderecocomercio: {
    fontSize: 12,
    color: '#83a9c0',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  legend: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#83a9c0',
  },
  notavaliacoes: {
    marginTop: 5,
  },
  imagemcarrossel: {
    height: 180, // Altura fixa
    width:300, // Largura ajustada automaticamente
    marginHorizontal: 10,
    borderRadius: 10,
  },
  scrollViewHorizontal: {
    marginVertical:20
  },

  imagemmain:{
    marginVertical:20,
    height: 200, // Altura fixa
    width:350, // Largura ajustada automaticamente
  },

  review:{
    width: '100%',
    padding: 20,
    borderRadius: 40,
    marginTop: -30,
    marginBottom:-20
  },

  botaoreview:{
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 400,
    position:'absolute'
  },

  botaorreview:{
    backgroundColor: '#fff',
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  textobotaoreview:{
    fontSize: 16,
    color: '#F3FBFF',
    fontFamily: 'Rubik',
  },

  reviewname:{
    fontSize: 16,
    color: 'white',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
    marginTop: 10,
    left:10
  },
  reviewtext:{
    fontSize: 14,
    color: '#83a9c0',
    fontFamily: 'Rubik',
    alignSelf: 'flex-start',
    left:10
  },

  iconereview:{
    alignSelf: 'flex-start',
    top: 40, left: -20
  },

  scrollViewreview: {
    marginVertical:20
  },

iconvoltar: {
  position: 'absolute',
  top: 40,
  left: 10,
},
paper: {
  backgroundColor: '#F3FBFF',
  width: '100%',
  padding: 20,
  borderRadius: 40,
  alignItems: 'center',
  marginTop: -50,
  height: 900 // Defina a altura mínima conforme necessário
},
nomecomercio: {
  fontSize: 24,
  color: '#1C88C9',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
  marginTop: 10,
},

avaliacoes: {
  fontSize: 24,
  color: '#1C88C9',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
},

categoriacomercio: {
  fontSize: 14,
  color: '#83a9c0',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
},
enderecocomercio: {
  fontSize: 12,
  color: '#83a9c0',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
  marginBottom: 10,
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: 10,
},
icon: {
  paddingHorizontal: 10,
  marginLeft: -300,
  marginTop: 30,
},
legend: {
  textAlign: 'center',
  fontFamily: 'Rubik',
  color: '#83a9c0',
},
notavaliacoes: {
  marginTop: 5,
},
imagemcarrossel: {
  height: 180, // Altura fixa
  width:300, // Largura ajustada automaticamente
  marginHorizontal: 10,
  borderRadius: 10,
},
scrollViewHorizontal: {
  marginVertical:20
},

imagemmain:{
  marginVertical:20,
  height: 200, // Altura fixa
  width:350, // Largura ajustada automaticamente
},

review:{
  width: '100%',
  padding: 20,
  borderRadius: 40,
  alignItems: 'center',
  marginTop: -30,
  marginBottom:-20
},

botaoreview:{
  backgroundColor: '#bf5a5c',
  width: 250,
  height: 50,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 600,
  marginLeft: 70,
  position:'absolute'
},

botaoreview2:{
  backgroundColor: '#1C88C9',
  width: 250,
  height: 50,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 580,
  marginLeft: 70,
  position: 'absolute'
},
btdenun:{
  backgroundColor: '#f76b60',
  width: 250,
  height: 50,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 640,
  marginLeft: 70,
  position: 'absolute'
},

textobotaoreview:{
  fontSize: 16,
  color: '#F3FBFF',
  fontFamily: 'Rubik',
},

reviewname:{
  fontSize: 16,
  color: '#83a9c0',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
  marginTop: -25,
  left:30
},
reviewtext:{
  fontSize: 14,
  color: '#83a9c0',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
  left:10
},
reviewfeedback:{
  fontSize: 14,
  color: '#83a9c0',
  fontFamily: 'Rubik',
  alignSelf: 'flex-start',
  fontWeight: '100',
  left:30
},


iconereview:{
  alignSelf: 'flex-start',
  top: 40, left: -20
},

scrollViewreview: {
  marginVertical:20
},



  
});