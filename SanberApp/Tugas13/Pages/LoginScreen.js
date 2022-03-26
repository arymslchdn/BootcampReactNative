import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View>
            <Text></Text>
=======
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Login({navigation}) {
    return (
        <View>
            <Text>Login</Text>
            <Button onPress={()=>navigation.navigate("MyDrawer",
            screen : 'App', params:(
                screen : 'AboutScreen'
            )         
            )} title="Menuju Halaman HomeScreen" />
>>>>>>> f56a5d5594bb3c49af56f2ae7c42903ee25267ce
        </View>
    )
}

const styles = StyleSheet.create({})
