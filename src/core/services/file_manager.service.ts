import fs from "fs";
import path from "path";

class FileManagerService {
  constructor(private _uploadFolder: string) {}

  uploadFile(folder: string, file: string, fileName: string) {
    const outputPath = `${this._uploadFolder}/${folder}/${fileName}`;
    fs.renameSync(file, outputPath);
  }

  removeFile(filePath: string) {
    fs.unlinkSync(filePath);
  }
}

const uploadFilePath = path.join(__dirname, "./../../uploads");
const fileMangerService = new FileManagerService(uploadFilePath);
Object.freeze(fileMangerService);

export default fileMangerService;
