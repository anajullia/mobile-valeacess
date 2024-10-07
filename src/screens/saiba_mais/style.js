import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3FBFF',
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
        top: 80,
        fontFamily: 'Rubik',
        borderWidth: 1,
        borderColor: '#7b7b7b',
        alignSelf:'center'
      },

      svg:{
        width: 500,
        height:650,
        top:400,
        left:-40,
        opacity: 0.5
      }

})