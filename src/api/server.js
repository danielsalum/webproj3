import dotenv from "dotenv";
import api from "./Api";


api.listen(process.env.PORT || 3333);
