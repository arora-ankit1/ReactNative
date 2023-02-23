import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
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
  loginBackground: {
    backgroundColor: '#f3ece7',
    flex: 1,
    flexDirection: "column"
  },
  innerContainerStyle: {
    flex: 1,
    width: "auto",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40

  },
  textInputContainerStyle: {
    width: "auto",
    height: "22%",
    marginHorizontal: 40,
    columnGap: 2

  },
  textInputStyle: {
    alignSelf: "flex-start",
    width: "100%",
    fontSize: 20

  },
  textInputLabelStyle: {
    fontStyle: "normal",
    textTransform: "uppercase",
    color: "red",
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  forgotPasswordStyle: {
    fontStyle: "normal",
    color: "white",
    alignSelf: "flex-end",
    fontWeight: "bold"
  },
  imageStyle: {
    width: 60,
    height: 60
  },

  iconStyle: {
    alignSelf: "center",

    width: 35,
    height: 35
  },
  imageContainerStyle: {

    width: "auto",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 40

  },
  buttonContainerStyle: {

    width: "auto",
    height: "auto",
    marginHorizontal: 40,
    justifyContent: "flex-start"

  },
  loginButtonStyle: {
    width: "100%",
    height: 50,
  },
  loginTextStyle: {
    textTransform: "uppercase",
    color: "red",
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%",
    height: 50,
    fontWeight: "bold",
    textAlign: "center",
    padding: 14
  },
  separatorContainerStyle: {
    flexDirection: "row",
    width: "auto",
    alignContent: "center",
    justifyContent: "center"
  },
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#737373',
  },
  socialContainerStyle: {
    flexDirection: "row",
    width: "auto",
    marginTop: 10,
    alignItems: "center"
  },
  orTextStyle: {
    marginTop: 8
  },
  socialButtonStyle: {
    width: "50%",
    height: 50,
    flexDirection: "row",
    alignContent: "space-around"
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  facebookTextStyle: {
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#36609f",
    borderRadius: 50,
    width: "90%",
    height: 50,
    fontWeight: "bold",
    textAlign: "center",
    padding: 14
  },
  googleTextStyle: {
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#d9372b",
    borderRadius: 50,
    width: "90%",
    height: 50,
    fontWeight: "bold",
    textAlign: "center",
    padding: 14
  },
});
