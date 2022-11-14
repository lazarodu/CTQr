import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import styles from "./styles";
import { ButtonComp, LoadingComp } from "../../components";
import { useRoute } from "@react-navigation/native";
import { IProgram, IProgramResponse } from "../../interfaces/Program.interface";
import { apiPresence } from "../../services/data";
import { AxiosError } from "axios";

const QrCode = () => {
    const route = useRoute()
    const { id, atividade, horario, local } = route.params as IProgram
    const [isLoading, setIsLoading] = useState(true);

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    }, []);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const handleBarCodeScanned = async ({ type, data }: BarCodeScannerResult) => {
        setScanned(true);
        try {
            setIsLoading(true);
            await apiPresence.store(Number(data), id)
            Alert.alert("Presença Registrada!")
            setIsLoading(false);
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IProgramResponse;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
            setIsLoading(false);
        }
    };

    if (hasPermission == null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission == false) {
        return <Text>No acess to camera</Text>;
    }

    return (
        <>
            {isLoading ? (
                <LoadingComp />
            ) : (
                <>
                    <View style={styles.centraliza}>
                        <View>
                            <Text style={styles.label}>Horário: </Text>
                            <Text>{horario} </Text>
                            <Text style={styles.label}>Atividade: </Text>
                            <Text>{atividade} </Text>
                            <Text style={styles.label}>Local: </Text>
                            <Text>{local} </Text>
                        </View>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={styles.scanner}
                        />
                    </View>
                    {scanned && (
                        <ButtonComp
                            type="login"
                            title="Pressione para escanear novamente"
                            onPress={() => setScanned(false)}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default QrCode;