import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentContainer: {
      paddingVertical: 20
    },

    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchbar:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      width: 320,
      height: 50,
      paddingLeft: 40,
      borderRadius: 15,
      marginBottom: 40,
      top: 85,
      fontFamily: 'Rubik',
      borderWidth: 1,
      borderColor: '#7b7b7b',
      alignSelf:'center'
    },

    iconsearch:{
      left: 45,
      top:7
    },

    iconvoltar: {
      position: 'absolute',
      top: 40,
      left: 10,
    },

    item: {
        width: 360,
        height: 130,
        margin: 10,
        borderRadius: 20,
        alignSelf:'center',
        top:50,
        paddingLeft:30,
    },
    imgitem:{
      width:80,
      height:80,
      top:35,
      transform:[{scale:1.3}],
      borderRadius:5   
    },
    nomeitem:{
      color:'#1C88C9',
      fontSize: 20,
      fontFamily: 'Rubik',
      textAlign:'left',
      left:105,
      top:-60
    },

    conteudoitem:{

    },
    categoriaitem:{
      textAlign:'left',
      color:'#1C88C9',
      fontFamily:'Rubik',
      top:-71,
      left:125
    },

    iconsitem:{
      color:'#1C88C9',
      alignSelf:'left',
      left:105,
      top:-55
    },

    item1:{

    },
    item2:{

    },
    item3:{

    },
    item4:{

    },
    item5:{
      marginBottom:50
    },
    iconbotao: {
        alignSelf: 'center',
        top: 20,
    },
    textobotao: {
        alignSelf: 'center',
        fontSize: 16,
        top: 27,
        color: '#F3FBFF',
        fontFamily: 'Rubik'
    }
});
