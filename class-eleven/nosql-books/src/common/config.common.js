import dotenv from 'dotenv';
dotenv.config();

export const config = {
    get( key )
    {
        return process.env[key];
    },

    getOrThrow(key) {
        const value = this.get(key);

        if(!value) {
            throw new Error(`Missing environment variable: ${key}`);
        }

        return value;
    }
}