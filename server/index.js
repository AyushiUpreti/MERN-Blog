const express= require('express')
const cors= require('cors')
const {connect} = require('mongoose')
require('dotenv').config()
const upload = require('express-fileupload')


//imports
const userRoutes=require('./routes/userRoutes')
const postRoutes=require('./routes/postRoutes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')


const app= express()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(upload())
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use('/api/users', userRoutes)    //takes us to userRoutes page
app.use('/api/posts', postRoutes)    //takes us to postRoutes page

app.use(notFound)
app.use(errorHandler)

app.use(notFound)

connect(process.env.MONGO_URI).then(app.listen(process.env.PORT || 5000,()=>console.log(`Server running on port ${process.env.PORT}`))).catch(error=>{console.log(error)})
 