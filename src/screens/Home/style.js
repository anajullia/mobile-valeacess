import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },

    searchbar: {
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
        alignSelf: 'center'
    },

    iconsearch: {
        left: 45,
        top: 7
    },

    containergrid: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        alignSelf: 'center',
        width: 'auto',
        height:'auto',
        paddingTop:100
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center', // centraliza os itens horizontalmente na linha
        marginBottom: 170, // espaço entre as linhas
    },

    item: {
        backgroundColor: '#1C88C9',
        width: 160, // largura dos quadrados
        height: 160, // altura dos quadrados
        margin: 10, // espaço entre os quadrados
        borderRadius: 20,
        top: 320,
    },

    iconvoltar: {
        position: 'absolute',
        top: 40,
        left: 10,
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

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    logo: {
        width: 395,
        height: 150,
        alignSelf: "center",
        marginTop: 0,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    image: {
        width: 70,
        height: 100,
        borderRadius: 30
    },


    textop: {
        color: '#1C88C9',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 120,
        textAlign: 'center',
        paddingLeft: 15,
        width: 367,
        height: 140,
        position: 'absolute',
        top: 90
    },


})