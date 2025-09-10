import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import api from "./services/axios";

const HomeScreen = () => {
  const [stateLed, setStateLed] = useState({ value: false });
  const navigation = useNavigation();

  const handleCam = () => {
    navigation.navigate("Cam");
  };

  async function ledToogle() {
    try {
      const response = await api.toggleLed({ value: `${!stateLed.value}` });
      setStateLed({ value: !stateLed.value });
      console.log("Resposta: ", response.data);
    } catch (error) {
      console.log("Erro: ", error.response.data);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 20 }}>
        <Button title="Abrir Câmera" onPress={handleCam} color="black" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button
          title={stateLed.value ? "Desligar LED" : "Ligar LED"}
          onPress={ledToogle}
          color={stateLed.value ? "red" : "green"}
        />
      </View>
      <View>
        <Button
          title="Listar Eventos"
          onPress={() => navigation.navigate("Eventos")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
