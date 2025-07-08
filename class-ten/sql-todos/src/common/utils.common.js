import jwt from "jsonwebtoken";
import { config } from "./config.common.js";

export const catchAsync = ( fn ) =>
{
    return async ( req, res, next ) =>
    {
        try {
            await fn( req, res );
        } catch (error) {
            res.status( 500 ).json( {
                success: false,
                message: 'Something went wrong',
                errors: {
                    message: error.message
                }
            })
        }
     }
}
 
export const generateUniqueId = () =>
{
    return Math.random().toString( 36 ).substring( 2, 15 ) + Math.random().toString( 36 ).substring( 2, 15 );
}

export const sendResponse = ( res, statusCode, success, message, data ) =>
{
    return res.status( statusCode ).json( {
        success,
        message,
        data
    } )
}

export const generateAccessToken = ( payload ) =>
{
    return jwt.sign(payload, config.getOrThrow("JWT_SECRET"), {
      expiresIn: config.getOrThrow("JWT_EXPIRES_IN"),
    });
}

export const decodeAccessToken = ( token ) =>
{
    return jwt.verify(token, config.getOrThrow("JWT_SECRET"));
}