import { StackNavigationProp } from "@react-navigation/stack";
import { IProgram } from "../interfaces/Program.interface";

// Login Stack
export type LoginStackParamList = {
    Login: undefined;
    Tab: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}

// QrCode Stack
export type QrCodeStackParamList = {
    Program: undefined
    QrCode: IProgram
}
type QrCodeScreenNavigationProp = StackNavigationProp<QrCodeStackParamList, 'Program'>
export type QrCodeTypes = {
    navigation: QrCodeScreenNavigationProp
}
