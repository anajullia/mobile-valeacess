import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Fundo claro
  },

  contentContainer: {
    paddingVertical: 20,
  },

  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '90%', // Para se ajustar melhor em telas
    height: 50,
    paddingLeft: 40,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#7b7b7b',
    alignSelf: 'center',
    elevation: 5, // Sombreamento
  },

  iconsearch: {
    position: 'absolute', // Melhora a posição do ícone
    left: 10,
    top: 14,
  },

  iconvoltar: {
    position: 'absolute',
    top: 40,
    left: 10,
  },

  griditem: {
    flex: 1,
    alignItems: 'center', // Centraliza o item
  },

  item: {
    width: '90%', // Para melhor responsividade
    height: 130,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#fff', // Fundo branco
    shadowColor: '#000', // Sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
    padding: 15,
  },

  nomeitem: {
    color: '#1C88C9',
    fontSize: 20,
    fontFamily: 'Rubik',
    textAlign: 'left',
    marginBottom: 5, // Espaçamento abaixo do nome
  },

  categoriaitem: {
    textAlign: 'left',
    color: '#6c757d', // Cor de texto mais suave
    fontFamily: 'Rubik',
    marginBottom: 5, // Espaçamento abaixo da categoria
  },

  iconsitem: {
    color: '#1C88C9',
    marginRight: 5, // Espaçamento à direita do ícone
  },

  iconbotao: {
    alignSelf: 'center',
    top: 20,
  },

  textobotao: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#F3FBFF',
    fontFamily: 'Rubik',
  },

  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, // Espaçamento vertical entre as avaliações
  },

  reviewfeedback: {
    color: '#585858', // Cor do feedback
    fontSize: 14,
    marginLeft: 10, // Espaçamento à esquerda do feedback
  },
});
