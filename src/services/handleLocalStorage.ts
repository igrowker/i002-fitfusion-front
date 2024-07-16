


export const getLocalSUserInfo = () => {
    const stringData = localStorage.getItem('userData')
    const objectData = stringData !== null && JSON.parse(stringData) 

    return objectData
}