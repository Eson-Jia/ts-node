import express from "express";
import { welcome } from "./app";


const app = express();


app.get('/welcome',welcome );

app.listen(8080);