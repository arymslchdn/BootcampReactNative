import React from 'react'
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
        </View>
    )
}

const styles = StyleSheet.create({})
