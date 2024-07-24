

export type localStorageUserData = {
    userId: number;
    name: string;
    email: string;
    rolId: number;
    rolDescription: string;
    token: string
}

export const getLocalSUserInfo = () : localStorageUserData => {
    const stringData = localStorage.getItem('userData')
    const objectData = stringData !== null && JSON.parse(stringData) 

    return objectData
}