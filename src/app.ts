import  express  from "express";
import path from 'path';


/** 1- ENTRANCE **/
console.log("STEP 2 public folder ochiqlanyapti, traditional api hamda rest api uchun yol ochilyapti")
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
/** 2- SESSIONS **/

/** 3- VIEWS **/
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");


/** 4- ROUTERS **/


export default app;