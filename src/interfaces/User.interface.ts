export interface IAuthenticate {
    email?: string;
    password?: string;
}
export interface IUser {
    status: string,
    message: string,
    data: {
        access_token: string;
        user: {
            id: number,
            name: string,
            email: string,
            profile_photo_url: string,
            comissao: boolean
        }
    }
}

export interface IAuthState {
    access_token: string,
    user: {
        id: number,
        name: string,
        email: string,
        profile_photo_url: string,
        comissao: boolean
    }
}
export interface IAuthContextData {
    signIn(credentials: IAuthenticate): Promise<boolean>;
    signOut(): Promise<void>;
    access_token?: string;
    user?: {
        id: number,
        name: string,
        email: string,
        profile_photo_url: string,
        comissao: boolean
    }
}