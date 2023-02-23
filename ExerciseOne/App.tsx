/*
Author - Ankit Arora
Exercise 1
Date Of Submission - 23-02-23 
*/


import React from 'react';
import type { PropsWithChildren } from 'react';
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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
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

const Separator = () => <View style={styles.separator} />;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = StyleSheet.create({
    outerMost: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1
    }
  });

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
          onPress={() => Alert.alert("Login Pressed")}
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


export default App;
