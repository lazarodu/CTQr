import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { LoadingComp, CardComp } from "../../components";
import styles from "./styles";
import { QrCodeTypes } from "../../types/Screen.types";
import { apiProgram } from "../../services/data";
import { IProgram } from "../../interfaces/Program.interface";

export default function Program({ navigation }: QrCodeTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [program, setProgram] = useState<IProgram[]>([]);

  function handleQrCode(item: IProgram) {
    navigation.navigate("QrCode", { ...item });
  }

  useEffect(() => {
    async function loadProgram() {
      const response = await apiProgram.index();
      setProgram(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadProgram());
  }, []);

  const renderItem = (item) => (<CardComp data={item} onPress={() => handleQrCode(item.item)} />);
  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <SafeAreaView style={styles.container}>
          {program.length > 0 && (
            <FlatList
              data={program}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.container}
            />
          )}
        </SafeAreaView>
      )}
    </>
  );
}
