import { ConflictError, UnauthenticatedError } from "../common/errors.common.js";
import { generateAccessToken } from "../common/utils.common.js";
import * as userService from "../user/user.service.js";
import bcrypt from "bcrypt";

export const register = async ( user ) =>
{
    const existingUserWithUsername = await userService.getUserByUsername( user.username );
    
    if ( existingUserWithUsername ) throw new ConflictError( "Username already exists" );
    
    const existingUserWithEmail = await userService.getUserByEmail( user.email );

    if ( existingUserWithEmail ) throw new ConflictError( "This email has been taken" );

    const hashedPassword = await bcrypt.hash( user.password, 10 );

    const newUser = await userService.createUser( {
        ...user,
        password: hashedPassword,
    });

    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
    };
 }

export const login = async ( user ) =>
{
    const existingUser = await userService.getUserByUsername( user.username );

    if ( !existingUser ) throw new UnauthenticatedError( "Invalid credentials, please check your input and try again" );

    if ( !await bcrypt.compare( user.password, existingUser.password ) ) throw new UnauthenticatedError( "Invalid credentials, please check your input and try again" );

    const payload = {
        sub: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        username: existingUser.username,
    };

    const accessToken = generateAccessToken( payload );

    return { accessToken };
}
