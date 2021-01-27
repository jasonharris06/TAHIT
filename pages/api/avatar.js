import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import sharp from "sharp";
import fs from "fs"
import path from "path";
import multer from "multer";

import User from "../../models/User";

export const config = {
  api: {
    bodyParser: false,

  },
}

let upload = multer({ dest: "upload/" });
const handler = nextConnect();



handler
  .use(auth).post(upload.single('avatar'), async (req, res) => {

    const id = req.user._id

    const buffer = await sharp(
      path.join(process.cwd(), `./upload/${req.file.filename}`),
    ).png().toBuffer();

    const user = await User.findByIdAndUpdate({ _id: id },
      { $set: { "profile.profilePic": buffer } })

    if (user) {
      let video = path.join(process.cwd(), `./upload/${req.file.filename}`)
      fs.unlink(video, (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("removed")

      })
      return res.status(200).end()
    } else {
      return res.status(404).end()
    }





  })

export default handler;