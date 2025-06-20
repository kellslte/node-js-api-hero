import { catchAsync } from "./common/utils.common.js";


const sayHello = catchAsync(async ( req, res ) =>
{
    throw new Error( "This is a test error" );

        res.status( 200 ).json( {
            success: true,
            message: "Hello World",
        } ) 
})

export { sayHello };