/*
Author - Ankit Arora
Exercise 1
Date Of Submission - 23-02-23 
*/


import React, { useState } from 'react';
import styles from "./styles"
import {
  Text,
  useColorScheme,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';




function Section({ children, title }) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

var name = '';

function HomeScreen({ route, navigation }) {
  console.log(route.params)
   name = route.params?.name ;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome {JSON.stringify(name)} to your </Text>
      <Text>Home Screen</Text>
      <Button title='Log Out' onPress={()=>navigation.navigate('Login')}></Button>
    </View>
  );
}

function logout(navigation) {
  name = '' 
  navigation.navigate('Login')
}


function ProfileScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to your</Text>
      <Text>Profile Screen</Text>

    </View>

  );

}


function SettingsScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to your</Text>
      <Text>Settings Screen</Text>
      <Button title='Go Back' onPress={() => navigation.navigate('Home')}></Button>
    </View>

  );

}



function LoginScreen({ navigation }) {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = StyleSheet.create({
    outerMost: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1
    }
  });

  const [text, setText] = useState('');

  return (



    <View style={styles.loginBackground}>

      <View style={styles.imageContainerStyle}>
        <Image style={styles.imageStyle}
          source={require('./love.png')} />
      </View>


      <View style={styles.textInputContainerStyle}>
        <Text style={styles.textInputLabelStyle}>username</Text>
        <TextInput
          style={styles.textInputStyle}
          inputMode='email'
          autoFocus={true}
          underlineColorAndroid='red'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        ></TextInput>
        <Text style={styles.textInputLabelStyle}>password</Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid='red'
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.forgotPasswordStyle}>Forgot Password?</Text>
      </View>



      <View style={styles.buttonContainerStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Drawer',{screen:'Tab',params: {screen:'Home',params:{name: text},  },})}
          style={styles.loginButtonStyle}
        >
          <Text style={styles.loginTextStyle}>
            login
          </Text>
        </TouchableOpacity>

        <View style={styles.separatorContainerStyle}>
          <Text style={styles.orTextStyle} >OR CONNECT WITH</Text>
        </View>



        <View style={styles.socialContainerStyle}>

          <TouchableOpacity
            onPress={() => Alert.alert("Facebook Pressed")}
            style={styles.socialButtonStyle}
          >

            <Text style={styles.facebookTextStyle}>
              facebook
            </Text>



          </TouchableOpacity>




          <TouchableOpacity
            onPress={() => Alert.alert("Google Pressed")}
            style={styles.socialButtonStyle}
          >

            <Text style={styles.googleTextStyle}>
              google
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View >

  );

}

const Stack = createNativeStackNavigator();

const Separator = () => <View style={styles.separator} />;
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (

<Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Tab" component={MyTab} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>

      )
}


const Tab = createBottomTabNavigator();

function MyTab() {
  return(
<Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>

  );
  
}

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;
