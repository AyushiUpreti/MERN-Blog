//unsupported (404) routes

const notFound=(req,res,next)=>{
    const error=new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error);
}


//Middleware to handle Errors
const errorHandler= (error,req,res,next)=>{
    if(res.headerSent){  // will check if a response has alreayd been sent
        return next(error)
    }

    res.status(error.code || 500).json({message: error.message || "An unkown error occured"})
}

module.exports={notFound,errorHandler}

//notFound - If someone requests a URL (a page) that doesn't exist on our server, this function is called
//errorHnadler - This function is called when error occurs during request handling process 