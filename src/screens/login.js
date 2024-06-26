import { Image, ImageBackground, Platform, StyleSheet } from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import Input from "../components/input";
import PassInput from "../components/passinput";
import { useState } from "react";
import Boton from "../components/boton";
import { loginApi } from "../apis/login";

export default Login = ({ navigation }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (dni, password) => {
    const Data = await loginApi(dni, password);
    console.log(Data);
    navigation.navigate("tabs");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bgprincipal.jpg")}
          resizeMode="cover"
          style={{ flex: 1, opacity: 1 }}
        >
          <View
            style={{
              flex: 0.6,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/logo.jpg")}
              style={{
                width: 250,
                height: 250,
                borderRadius: 125,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 40,
                alignSelf: "center",
                fontWeight: "bold",
              }}
            >
              Hola!
            </Text>
          </View>
          <View style={{ flex: 0.3, padding: 10 }}>
            <Input
              label="nombre de usuario"
              icon="account"
              value={user}
              onChange={setUser}
            />
            <PassInput
              label="ingrese su contraseña"
              value={password}
              onChange={setPassword}
            />
            <Boton
              texto="ingresar"
              onClick={() => handleLogin(user, password)}
            />
          </View>
          <View style={{ backgroundColor: "orange", flex: 0.1 }}></View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && 0,

    flex: 1,
  },
});
