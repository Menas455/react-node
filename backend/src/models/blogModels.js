import db from "../server/db.js";
 
import { DataTypes } from "sequelize";


const blogModels = db.define('blogs',{
    tittle: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
}, {
    timestamps: false, 
  });

export default blogModels