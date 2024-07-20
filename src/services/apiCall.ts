import { environment } from "./constants"
import Cookies from 'js-cookie';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface apiCallProps {
    url : string
    method : HttpMethod
    body? : any
    headers? : Record<string, string>
}


export const  apiCall = async ({ url , method , body , headers } : apiCallProps ) => {

    const token = Cookies.get('authToken');

    return fetch(`${environment.API_URL}${url}`,{
      method : method, 
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : '',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
    }).then( async (res) => {
      // if (!res.ok) {
      //   throw new Error( 'Ocurrio un error al hacer fetch');
      // }

      return res

    }).catch((error : any) => {return  error })

}


