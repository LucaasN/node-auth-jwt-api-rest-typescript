import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = 10;

//Hasheador
export const hashPassword = async (password: string) : Promise <string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

//Leer y comparar con el hash en la base de datos
export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
}