import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get("window");
export const HEADER_HEIGHT = height * 2 / 3;


export const COLOR_BROWN = '#64493D';
export const COLOR_BLUE = '#0A2C47';
export const COLOR_EGGSHELL = '#E6DAC7';
export const COLOR_GRAY = '#231F20';
export const COLOR_WHITE = '#EAEAEA';
export const COLOR_GOLD = '#AD974F';

export const COLOR_HEADER = COLOR_WHITE;
export const COLOR_TEXT_HEADER = COLOR_GRAY;
export const COLOR_FOOTER = COLOR_GRAY;
export const COLOR_TEXT_FOOTER = COLOR_WHITE;

export default function IntroScreen() {
  return (
    <><View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.verticalTextContainer}>
          <Text style={styles.title}>Arie</Text>
          <Text style={styles.pronouns}>(he/him)</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./asset/assets/arie.png')} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: COLOR_HEADER }} />
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            I am an graduated high school in Social Science at SMAN 9 Cirebon. My hobby is
            running and take e-course for self development!
          </Text>
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.BackBtn}>
        <Text style={styles.BackText}>Back</Text>
      </TouchableOpacity></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_FOOTER,
  },
  header: {
    flex: 2,
    backgroundColor: COLOR_HEADER,
    borderBottomRightRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalTextContainer: {
    position: 'absolute',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    transform: [
      {translateY: HEADER_HEIGHT / 2 - 250},
      {translateX: width / 2 - 50},
      {rotate: '-90deg'}
    ],
    flexDirection: 'row',
  },
  title: {
    fontSize: 75,
    lineHeight: 80,
    fontWeight: 'bold',
    color: COLOR_TEXT_HEADER,
    textAlign: 'center',
  },
  pronouns: {
    fontSize: 30,
    lineHeight: 80,
    color: COLOR_TEXT_HEADER,
    textAlign: 'center',
    paddingLeft: 10,
    transform: [
      {translateY: 7},
    ],
  },
  footer: {
    flex: 1,
  },
  imageContainer: {
    width: '75%',
    height: '75%',
    borderRadius: 20,
    overflow: 'hidden',
    transform: [
      {translateX: -width / 2 + 175}
    ],
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    backgroundColor: COLOR_FOOTER,
    borderTopLeftRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 55,
  },
  description: {
    color: COLOR_TEXT_FOOTER,
    fontSize: 18,
    textAlign: 'justify',
  },
  BackBtn:{
    width:"100%",
    backgroundColor:"#1434A4",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  BackText:{
    color:"black"
},
});