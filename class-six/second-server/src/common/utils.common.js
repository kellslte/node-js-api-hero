const catchAsync = ( fn ) =>
{ 
    return async ( req, res ) =>
    {
        try {
            await fn( req, res );
        }
        catch ( error )
        {
            res.status( 500 ).json( {
                success: false,
                message: "Internal Server Error",
                errors: {
                    message: error.message
                }
            } )
        }
    }
};

export { catchAsync };