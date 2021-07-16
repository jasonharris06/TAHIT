import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import sharp from "sharp";
import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import multer from "multer";

import User from "../../models/User";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  const id = req.user._id;

  var form = new formidable.IncomingForm();
  //console.log(form)
  var videoFile = await new Promise(function (resolve, reject) {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error", err);
        reject(err);
      }
      for (const file of Object.entries(files)) {
        //console.log(file)
        resolve(file);
      }
    });
  });

  if (videoFile) {
    const { firstName, lastName } = req.user.profile;
    console.log(videoFile[1].path);
    // const photo = await cloudinary.v2.uploader.upload(videoFile[1].path, {
    //   resource_type: "image",
    //   tags: "avatar",
    //   public_id: videoFile[1].path,
    //   secure: true,
    //   transformation: [{ width: 150, height: 150, gravity: "face", crop: "thumb" }],
    //   overwrite: true
    // })
    console.log(firstName, lastName);
    const public_id = `avatar/${firstName}_${lastName}`;
    // sharp(videoFile[1].path).resize(200, 200).png().toFile(`videoFile[1].path/${firstName}_${lastName}.png`).then((img) => {
    //   console.log(videoFile[1].path)

    //   //cloudinary.uploader.upload(videoFile[1].path, function (error, result) { console.log(result, error); })
    // });

    const imageURL = await cloudinary.v2.uploader.upload(
      videoFile[1].path,
      { public_id, gravity: "faces", height: 100, width: 100, crop: "thumb" },
      function (error, result) {
        //if (error) res.status(404).send(error);
        return result;
      }
    );
    console.log(imageURL);
    // const buffer = await sharp(videoFile[1].path).resize(200, 200).png().toBuffer();

    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { $set: { "profile.profilePic": imageURL } },
      { new: true }
    ).exec();
    console.log(updatedUser);
    if (updatedUser) {
      console.log("I Made it");
      res.json({ message: "Uploaded" });
    } else {
      res.json({
        message: "There was an error uploading your profile picture",
      });
    }
  }

  //   return res.status(200).end()
  // }
  // return res.status(404).end()

  // const buffer = await sharp(
  //   path.join(process.cwd(), `./upload/${req.file.filename}`),
  // ).png().toBuffer();

  // const user = await User.findByIdAndUpdate({ _id: id },
  //   { $set: { "profile.profilePic": buffer } })

  // if (user) {
  //   let video = path.join(process.cwd(), `./upload/${req.file.filename}`)
  //   fs.unlink(video, (err) => {
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     console.log("removed")

  //   })
  //   return res.status(200).end()
  // } else {
  //   return res.status(404).end()
  // }
});

export default handler;
