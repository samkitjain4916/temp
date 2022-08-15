const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express= require("express");
const bodyParser=require('body-parser');
const cors=require("cors");
const app=express();
const formidable=require('formidable');
const { request } = require("express");
const fs = require('fs');
const multer = require('multer');
const session = require('express-session');
// const cookieParser = require('cookie-parser');  //Added from Auth.js


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(
  session({
    secret:"my secret key",
    saveUnitialized:true,
    resave:false,
  })
);
app.use((req,res,next)=>{
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});
app.set('view engine','ejs');





dotenv.config({path: "./config.env"});

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Connection Successfull");
}).catch((err)=> console.log(err));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




const userSchema = mongoose.Schema({
    udid:{
       type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const User = mongoose.model('User', userSchema);
  app.post("/signup", async (req, res) => {
    const { udid,username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
     const ud = await User.findOne({ udid });
    if (ud) {
      res.status(500);
      res.json({
        message: "user already exists",
      });
      return;
    }
    const user = await User.findOne({ username });
    if (user) {
      res.status(500);
      res.json({
        message: "user already exists",
      });
      return;
    }
    const newUser = new User({udid,username, password});
    await newUser.save();
   
    res.status(200).json({message: "User registered successfully"});
  });


/*************************************************************************/ 

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      res.status(403);
      res.json({
        message: "invalid login",
      });
      return;
    }
    res.status(200).json({message: "Logged in successfully"});
  });

/*************************************************************************/

const govtuserSchema = mongoose.Schema({
  username:{
      type:String
  },
  password:{
      type:String
  }
})
const govtofficials = mongoose.model('govtofficials', govtuserSchema);
  app.post("/govtlogin", async (req, res) => {
    const { username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await govtofficials.findOne({ username });
    if (!user || user.password !== password) {
      res.status(403);
      res.json({
        message: "invalid login",
      });
      return;
    }
    res.status(200).json({message: "Official Logged in successfully"});
  });


/*************************************************************************/


const agencyuserSchema = mongoose.Schema({
  username:{
      type:String
  },
  password:{
      type:String
  }
})
const agencyofficials = mongoose.model('agencyofficials', agencyuserSchema);
  app.post("/agencylogin", async (req, res) => {
    const { username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await agencyofficials.findOne({ username });
    if (!user || user.password !== password) {
      res.status(403);
      res.json({
        message: "invalid login",
      });
      return;
    }
    res.status(200).json({message: "Agency official Logged in successfully"});
  });



/**************************************************************************/

const formSchema = mongoose.Schema({
  name: String,
  img:{
    data : Buffer,
    contentType : String
  }
});

module.exports = applyforms = mongoose.model('applyforms',formSchema);

const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,'uploads');
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({
storage : storage,
})

app.post("/userdashboard",upload.single('testImage'),(req,res)=>{
  const saveImage = new applyforms({
    name : req.body.name,
    img : {
      data : fs.readFileSync('uploads/' + req.file.filename),
      contentType : "image/png"
    }
  });

  saveImage
  .save()
  .then((res)=>{console.log('image is saved');
  })
  .catch((err)=>{
    console.log(err,'error has occured');
  });

  res.redirect('http://localhost:3000');
});


/**************************************************************************/


const agencyformSchema = mongoose.Schema({
  name:{
    type : String,
    trim : true,
    required : true
  },
  photo:{
    data : Buffer,
    contentType : String
  }
})

const agencyforms = mongoose.model('agencyforms',agencyformSchema);

app.post("/agencyapplyform",(req,res)=>{
  const form = new formidable.IncomingForm();
  form.parse(req,(err,fields,file)=>{
      
    if(fields)
    {
        const {name} = fields
        if(!name)
        {
            return res.status(400).json({
              error : "Fill all the fields"
            })
        }
    }
  
    if(file.photo)
    {
      if(file.photo.size>4000000)
      {
        return res.status(400).jason({
          error : "Image size exceeds limit"
        })
      }

      const user = new agencyforms(fields)
      user.photo.data = fs.readFileSync(file.photo.filepath)
      user.photo.contentType = file.photo.type

      user.save((err,user)=>{
        if(err)
        {
          return res.status(400).json({
            error : "Error in saving in DB"
          })
        }
        return res.json(user);
      })
    }

  })
});

app.get("/agencyapplications",async(req,res)=>{
    const allData = await applyforms.find()
    res.json(allData)
})


/*****************************************************************************/



/*****************************************************************************/



const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running at port no ${PORT}`);
});