import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const UserImage = db.define(
  "User_Image",
  {
    image_path: { type: DataTypes.STRING, allowNull: false },
    image_name: { type: DataTypes.STRING, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: true }
);

export default UserImage;
