import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import sharp from "sharp";
import formidable from 'formidable'

import User from "../../models/User";

export const config = {
  api: {
    bodyParser: false,

  },
}


const handler = nextConnect();



handler
  .use(auth).post(async (req, res) => {
    const id = req.user._id

    var form = new formidable.IncomingForm()
    console.log(form)
    var videoFile = await new Promise(function (resolve, reject) {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Error', err)
          reject(err)
        }
        for (const file of Object.entries(files)) {
          console.log(file)
          resolve(file)



        }
      })
    })

    if (videoFile) {
      console.log(videoFile[1].path)
      const buffer = await sharp(videoFile[1].path).resize(200, 200).png().toBuffer();


      const user = await User.findByIdAndUpdate({ _id: id },
        { $set: { "profile.profilePic": buffer } })

      if (user) {
        return res.status(200).end()
      } else {
        return res.status(404).end()
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





  })

export default handler;