import React from "react"
import { StyleSheet, Image, SafeAreaView, View, Text } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 50,width:"10%" }}
            />
            <Text style={{color:"white", fontSize:30, paddingTop:8,fontWeight:"bold",paddingLeft:200}}>
                ABC Medo
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor:"black",
        padding: 0
    }
})

export default Header;