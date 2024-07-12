

interface ConstVariables {
    readonly API_URL : string
}


export const environment : ConstVariables = {
    API_URL : import.meta.env.VITE_API_URL
} 

