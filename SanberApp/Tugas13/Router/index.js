import React from "react";
import { StyleSheet, Text, View } from "react-native";
<<<<<<< HEAD
import LoginScreen from "../Pages/LoginScreen";

export default function Router() {
	return <LoginScreen />;
}

const styles = StyleSheet.create({});
=======
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from '../Pages/HomeScreen'
import AboutScreen from '../Pages/AboutScreen'
import AddScreen from '../Pages/AddScreen'
import LoginScreen from '../Pages/LoginScreen'
import ProjectScreen from '../Pages/ProjectScreen'
import Setting from '../Pages/SettingScreen'
import SkillProject from '../Pages/SkillProjectScreen'
import Login from "../Pages/LoginScreen";


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
	return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="LoginScreen" component={LoginScreen}/>
			<Stack.Screen name="HomeScreen" component={HomeScreen}/>
		</Stack.Navigator>
	</NavigationContainer>
	)
}

const MainApp =()=>(
	return{
		<Tab.Navigator>
		<Tab.Screen name="HomeScreen" component={HomeScreen}/>
		<Tab.Screen name="AddScreen" component={AddScreen}/>
		<Tab.Screen name="SkillProject" component={SkillProject}/>
		</Tab.Navigator>
	}
)

const MyDrawer =()=>(
	<Drawer.Navigator>
		<Drawer.Screen name="App" component={MainApp}/>
		<Drawer.Screen name="AboutScreen" component={AboutScreen}/>
	</Drawer.Navigator>
)
>>>>>>> f56a5d5594bb3c49af56f2ae7c42903ee25267ce
