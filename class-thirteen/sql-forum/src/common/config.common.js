import dotenv from 'dotenv'
dotenv.config();

export const config = {
  getOrThrow(key) {
    const value = process.env[key];
    if (!value) throw new Error(`Missing config key: ${key}`);
    return value;
  },

  getEnvironment ()
  {
    return this.getOrThrow( 'NODE_ENV' );
  }
}; 