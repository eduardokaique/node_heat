import axios from "axios";
import https from "https";

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com.br/login/oauth/access_token"

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept":"application/json"
            },
            httpsAgent: new https.Agent({  
                rejectUnauthorized: false
              })
        });

        return response.data;
    }
}

export { AuthenticateUserService }