import React from "react";
import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { Styles } from "./styles";

import { ButtonIcon } from "../../components/buttonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background/Index";

export function SignIn() {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate("Home");
  }
  return (
    <Background>
    <View style={Styles.container}>
      <Image
        source={IllustrationImg}
        style={Styles.image}
        resizeMode="stretch"
      />

      <View style={Styles.content}>
        <Text style={Styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas {"\n"}
        </Text>
        <Text style={Styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos{"\n"}
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
      </Background>
  );
}
