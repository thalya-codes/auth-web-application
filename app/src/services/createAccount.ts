import { AUTH_BASE_URL, AUTH_REGISTER } from "../constants/auth-contants";

export async function createAccount(data: any) {
    try {
      await fetch(`${AUTH_BASE_URL}${AUTH_REGISTER}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
     });

     alert('Success')

    } catch(error) {
        console.error(error)
    }

}