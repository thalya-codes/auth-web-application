export default function getAccessToken() {
    try {
        const accessToken = localStorage.getItem('access_token')
        if(accessToken) return accessToken
        
        console.error('Nenhum access token foi encontrado :/')
    }
    catch(error) {
        console.error(error)
    }
}