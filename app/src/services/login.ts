import { AUTH_BASE_URL, AUTH_LOGIN } from "../constants/auth-contants";

export async function login(credentials: any) {
    try {
      const response = await fetch(`${AUTH_BASE_URL}${AUTH_LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
     });

     const data = await response.json()

     return data

    } catch(error) {
        console.error(error)
    }

}