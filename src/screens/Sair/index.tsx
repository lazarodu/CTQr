import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { LoadingComp } from "../../components";
import { useAuth } from "../../hook/auth";
import { IUser } from "../../interfaces/User.interface";

export default function Sair() {
  const { signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function logout() {
      try {
        await signOut();
      } catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
          for (const [key, value] of Object.entries(data.data)) {
            message = `${message} ${value}`;
          }
        }
        Alert.alert(`${data.message} ${message}`);
      }
    }
    logout();
  }, []);

  return <>{isLoading ? <LoadingComp /> : <View />}</>;
}
