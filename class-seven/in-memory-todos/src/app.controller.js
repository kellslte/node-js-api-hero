import { catchAsync } from "./common/utils.common.js";

export const sayHello = catchAsync( async ( req, res ) =>
{
    res.status( 200 ).json( {
        success: true,
        message: 'Hello World'
    })
 } );

export const getServerHealthStatus = catchAsync( async ( req, res ) =>
{
    res.status( 200 ).json( {
        success: true,
        message: 'Server is running'
    })
} );