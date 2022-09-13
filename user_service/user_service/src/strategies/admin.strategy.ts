import {AuthenticationStrategy} from '@loopback/authentication'
import {UserProfile} from '@loopback/security'
import { HttpErrors, Request } from '@loopback/rest';
import parseBearerToken from 'parse-bearer-token'

export class AdministratorStragey implements AuthenticationStrategy {
    name: string = 'admin';

    constructor() {

    }

    async authenticate(request: Request): Promise<UserProfile | undefined>{
        const token = parseBearerToken(request)
        if (!token) {
            throw new HttpErrors[401]("Empty bearer token")
        } else {
            let tokenDecode = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            console.log(tokenDecode)
            let userProfile: UserProfile = Object.assign(
                {
                    id: tokenDecode.id,
                    username: tokenDecode.name,
                    email: tokenDecode.email
                }
            )
            return userProfile;
        }
    
    }
}