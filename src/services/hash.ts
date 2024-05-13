import bcrypt from 'bcrypt'
import type { IHash } from './interfaces/IHash'

export class Hash implements IHash{
    hash(password:string){
        return bcrypt.hash(password,10)
    }

    compare(password:string,hash:string){
        return bcrypt.compare(password,hash)
    }
}