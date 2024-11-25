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
      fontSize: 18,
      fontFamily: 'Rubik',
      textAlign:'left',
      paddingLeft:10,
      left:200,
      top:0,
      position: 'absolute',
       //backgroundColor: '#f0f',
      width:250,
      height:38 
    },

    conteudoitem:{

    },
    categoriaitem:{
      textAlign:'left',
      color:'#1C88C9',
      fontFamily:'Rubik',
      position:'absolute',
      left: 200,
      top:30,
      paddingLeft:10,
      // backgroundColor: '#0f0',
      width: 250
    },

    mediatotal:{
      textAlign:'left',
      color:'#1C88C9',
      fontFamily:'Rubik',
      position:'absolute',
      left: 410,
      top:2,
      paddingLeft:10,
       //backgroundColor: '#afa',
      width: 40,
      zIndex:3,
      fontSize:15
    },

    iconsitem:{
      color:'#1C88C9',
      left:388,
      top:2,
      //backgroundColor: '#c89c',
      width:18,
      position:'absolute'
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
    },

    itemlista: {
      width:200,
      marginTop:50
  }
});
