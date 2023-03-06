/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

type Fruits = {
  name: String,
  price: String,
  date: String,
  image: NodeRequire,
  quantity: Int32
};

const ITEM_ADDED = 'ITEM_ADDED';
const ITEM_REMOVED = 'ITEM_REMOVED';
const QUANT_INCREASED = 'QUANT_INCREASED';
const QUANT_DECREASED = 'QUANT_DECREASED';

const APPLE_INCREASED = 'APPLE_INCREASED';
const APPLE_DECREASED = 'APPLE_DECREASED';

const initialAppleState = {
  numOfApple: 10
}

const appleReducer = (state = initialAppleState, action) => {
  switch (action.type) {
    case APPLE_DECREASED:
      return {
        ...state,
        numOfCakes: state.numOfApple - 1
      }
    case APPLE_INCREASED:
      return {
        ...state,
        numOfCakes: state.numOfApple + 1
      }
    default:
      return state
  }
}
const Card = (props: Fruits) => {
  const [quantity, setQuantity] = useState(initialAppleState.numOfApple);

  return (

    <View style={styles.card}>
      <Image source={props.image} style={styles.image} />



      <View style={styles.cardContentContainer}>
        <View>
          <Text style={styles.fruitName}>{props.name}</Text>
          <Text>{props.price}</Text>
        </View>
        <Text style={styles.fruitDate}>{props.date}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.addSubButon}>

          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Image style={styles.addSubIcon} source={require('./images/add.png')} />
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
            <Image style={styles.addSubIcon} source={require('./images/subtract.png')} />
          </TouchableOpacity>

        </View>
        <TouchableOpacity>
          <Image source={require('./images/trash.png')} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>

    </View>

  );
};



function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card name={'Apple'} price={'$2.50/Kg'} date={'Tuesday, 12 Jan'} image={require('./images/apple.png')} quantity={5} />
        <Card name={'Orange'} price={'$2.50/Kg'} date={'Tuesday, 12 Jan'} image={require('./images/orange.png')} quantity={5} />
        <Card name={'Strawberry'} price={'$2.50/Kg'} date={'Tuesday, 12 Jan'} image={require('./images/strawberry.png')} quantity={5} />
        <Card name={'Banana'} price={'$2.50/Kg'} date={'Tuesday, 12 Jan'} image={require('./images/banana.png')} quantity={5} />

      </ScrollView>

      <View style={styles.card}>
        <View>
          <Text>Delivery Charges</Text>
          <Text> 18.0$</Text>
        </View>

        <View>
          <Text>Subtotal</Text>
          <Text> 200.0$</Text>
        </View>

        <View>
          <Text>Total</Text>
          <Text> 218.0$</Text>
        </View>




      </View>
    </SafeAreaView>


  );
}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  card: {
    borderRadius: 10,
    elevation: 6,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  cardsContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
    flex: 1,
    backgroundColor: 'blue'
  },
  cardContentContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  fruitName: {
    fontWeight: "bold"
  },
  fruitDate: {
    justifyContent: 'space-around',
  },
  addSubButon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  deleteIcon: {
    width: 20,
    height: 20,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginEnd: 15
  },
  addSubIcon: {
    width: 20,
    height: 20
  },
  quantity: {
    fontSize: 16
  }
});

export default App;
