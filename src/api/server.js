import dotenv from "../node_modules/dotenv";
import api from "./Api";

dotenv.config();

api.listen(process.env.PORT || 3333);
