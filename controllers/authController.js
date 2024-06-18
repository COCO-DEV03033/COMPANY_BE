const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const planModel = require("../models/planModel")
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const { jwtDecode } = require("jwt-decode");

const mongoose = require("mongoose");
const { superAdminInformation, sampleUsers } = require("../config/constants");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";

registerSuperAdmin = async (data) => {

  const { name, dob, organization, department, team, gender, userID, password, avatar, age } = data;

  try {
    const existUser = await userModel.findOne({ userID: userID })
    if (existUser) {
      console.log('Super Admin Already Registered!')
      return
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new userModel({
        userID: userID,
        password: hashedPassword,
        roles: 'superAdmin',
        status: true,
        dob: dob,
        gender: gender,
        name: name,
        organization: organization,
        department: department,
        team: team,
        avatar: avatar,
        age: age
      })

      await user.save()
      console.log("Super Admin Registered!")
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
  }
}

registerUsers = async (users) => {

  for(let user of users) {
    const { name, dob, organization, department, team, gender, userID, password, avatar, age, role } = user;
  
    try {
      const existUser = await userModel.findOne({ userID: userID })
      if (existUser) {
        console.log('The User Already Registered!')
        return
      }
      else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new userModel({
          userID: userID,
          password: hashedPassword,
          role: role,
          status: true,
          dob: dob,
          gender: gender,
          name: name,
          organization: organization,
          department: department,
          team: team,
          avatar: avatar,
          age: age
        })
        await user.save()
      }
  
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
    }
  }

}

registerUsers = async (users) => {

  for(let user of users) {
    const { name, dob, organization, department, team, gender, userID, password, avatar, age, role } = user;
  
    try {
      const existUser = await userModel.findOne({ userID: userID })
      if (existUser) {
        console.log('The User Already Registered!')
        return
      }
      else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new userModel({
          userID: userID,
          password: hashedPassword,
          role: role,
          status: true,
          dob: dob,
          gender: gender,
          name: name,
          organization: organization,
          department: department,
          team: team,
          avatar: avatar,
          age: age
        })
        await user.save()
      }
  
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
    }
  }
  console.log("Sample Users Registered")

}

exports.register = async (req, res, next) => {

  const { name, dob, organization, department, team, gender, userID, password } = req.body;

  try {

    const existUser = await userModel.findOne({ userID: userID });

    if (existUser) {
      res.status(201).json({
        message: "UserID already in use. Please pick another one."
      })
    }

    const today = new Date()

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new userModel({
      userID: userID,
      password: hashedPassword,
      role: 'Engineer',
      status: false,
      dob: dob,
      gender: gender,
      name: name,
      organization: organization,
      department: department,
      team: team,
      age: today.getFullYear() - Number((dob.split(' '))[2])
    });

    user.save(async (err, result) => {
      res.status(200).json({
        message: "Your request had been sent.\n Please wait until your account has been approved.",
        user: user
      })
    })

  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }

}

exports.checkUserID = async (req, res, next) => {

  const { userID } = req.body

  const existUser = await userModel.findOne({ userID: userID })
  if (existUser) {
    res.status(201).json({
      message: "UserID already exist, Please pick another userID!"
    })
  }
  else {
    res.status(200).json({
      message: "UserID is available. You can use this."
    })
  }

}

exports.importUser = async (req, res, next) => {

  const { userData } = req.body
  
  try {
    await userModel.insertMany(userData);
    console.log('Done!');
      res.status(200).json({
          message: "User Data imported successfully!"
      })
  } catch(e) {
    console.log(e);
  }


  // const existUser = await userModel.findOne({ userID: userID })
  // if (existUser) {
  //   res.status(201).json({
  //     message: "UserID already exist, Please pick another userID!"
  //   })
  // }
  // else {
  //   res.status(200).json({
  //     message: "UserID is available. You can use this."
  //   })
  // }

}

exports.login = async (req, res, next) => {

  const { userID, password } = req.body;

  try {
    const User = await userModel.findOne({ userID: userID })

    if (!User) {
      res.status(201).json({
        message: "User with this userID not found!"
      })
    }

    if (User.status == false) {
      res.status(203).json({
        message: "User still not approved! \n Please wait till you are approved by Admin."
      })
    }
    else {

      const comparePassword = await bcrypt.compare(password, User.password);

      if (!comparePassword) {
        res.status(202).json({
          message: "Password is not match! \n Please try again."
        })
      } else {
        const token = jwt.sign({ userID: userID }, "company-project-secret", {
          expiresIn: "30m"
        })

        res.status(200).json({
          accessToken: token,
          userData: User
        })
      }
    }
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

//----------------      User-Management      -------------------//

exports.getAllUser = async (req, res, next) => {
  const allUser = await userModel.find();
  res.status(200).json({
    allUser: allUser,
  });
};

exports.getUserByID = async (req, res, next) => {

  const { userID } = req.params

  try {

    const existUser = await userModel.findOne({ userID: userID }).lean()

    if (!existUser) {
      const error = new Error("user with this ID not found!");
      error.statusCode = 401;
      throw error;
    }

    res.status(200).json({
      existUser
    });

  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.removeUser = async (req, res, next) => {

  const { userID } = req.params

  try {
    const result = await userModel.deleteOne({ userID: userID })

    if (result.ok) {
      res.status(200).json({

      })
    }

  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);

  }

}

exports.updateUser = async (req, res, next) => {

  try {
    const { name, dob, organization, department, team, gender, userID, status, role } = req.body;
    const file = req.files ? req.files.file : '';

    const result = await userModel.findOne({ userID: userID }).updateMany({
      $set: {
        name: name,
        role: role,
        department: department,
        team: team,
        organization: organization
      }
    })

    if (result.ok < 1) {
      res.status(501).json({
        message: 'userData update Faild'
      })
    }
    if (file === '') {
      res.status(200).json({
        file: false,
        message: 'User updated success'
      })
    }
    else {
      file.mv(
        `${__dirname}/../public/avatar/${file.name}`,
        async function (err, re) {
          let avatarURL = "";
          if (err) {
            return res.status(500).send({ msg: "Error occured" });
          }
          // returing the response with file path and name
          const update_avatar = await userModel.findOne({ userID: userID }).updateMany({
            $set: {
              avatar: SITE_URL + "avatar/" + file.name
            },
          });

          console.log("update avatar", update_avatar, SITE_URL + "avatar/" + file.name)

          return res.status(200).send({ file: true, path: SITE_URL + "avatar/" + file.name, message: 'User updated success!' });
        })
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}

exports.approveUser = async (req, res, next) => {
  try {

    const { userID } = req.params
    const selectedUser = await userModel.findOne({ userID: userID })

    if (!selectedUser) {
      res.status(201).send({
        message: "User with this userID doesn\'t exist"
      })
    }

    const updateResult = await userModel.findOne({userID: userID}).updateMany({
      $set: {
        status: true
      }
    })

    if (updateResult.ok < 1) {
      res.status(202).send({
        message: "User status update Faild."
      })
    }

    res.status(200).send({
      message: "User with ID: " + userID + " has been approved."
    })

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.rejectUser = async (req, res, next) => {
  try {

    const { userID } = req.params
    const selectedUser = await userModel.findOne({ userID: userID })

    if (!selectedUser) {
      res.status(201).send({
        message: "User with this userID doesn\'t exist"
      })
    }

    const updateResult = await userModel.findOne({userID: userID}).updateMany({
      $set: {
        status: false
      }
    })

    if (updateResult.ok < 1) {
      res.status(202).send({
        message: "User status update Faild."
      })
    }

    res.status(200).send({
      message: "User with ID: " + userID + " has been rejected."
    })

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}



exports.postSignup = async (req, res, next) => {

  const { userID, password } = req.body;

  console.log(userID, password);

  try {
    const exsitUser = await userModel.findOne({ userID: userID });
    if (exsitUser) {
      const error = new Error(
        "userID already exist, please pick another userID!"
      );
      res.status(409).json({
        error: "userID already exist, please pick another userID! ",
      });
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const id = Date.now();

    const user = new userModel({
      userID: userID,
      password: hashedPassword,
      status: false
    });

    await user.save();

    res.status(200).json({
      message: "User created",
      user: { id: result._id, userID: result.userID },
    });

  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

var loadedUser;
exports.postLogin = async (req, res, next) => {
  const { userID, password } = req.body.data;

  console.log(req.body)

  try {
    const user = await userModel.findOne({ userID: userID });
    console.log("user done; ", user);

    if (!user) {
      const error = new Error("user with this email not found!");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;

    const comparePassword = await bcrypt.compare(password, user.password);
    // const comparePassword = password === user.password;

    if (!comparePassword) {
      const error = new Error("password is not match!");
      error.statusCode = 401;
      throw error;
    } else {
      const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
        expiresIn: "60m",
      });

      res.status(200).json({
        token: token,
        emailStatus: loadedUser.emailStatus,
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const email = loadedUser.email;
    const result = await userModel.findOne({ email: email }).updateMany({
      $set: {
        firstname: req.body.info.firstName,
        lastname: req.body.info.lastName,
        filledInfo: true,
        birthday: req.body.info.birth,
        country: req.body.info.country,
      },
    });

    res.status(200).json({
      message: "User info saved",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.resetPass = async (req, res, next) => {
  try {
    const userInfo = req.body.info;

    if (userInfo.email != userInfo.oldEmail) {
      const existUser = await userModel.findOne({ email: userInfo.email });

      if (existUser) {
        const error = new Error(
          "Eamil already exist, please pick another email!"
        );
        res.status(409).json({
          error: "Eamil already exist, please pick another email! ",
        });
        error.statusCode = 409;
        throw error;
      }
    } else {
      const comparePassword = await bcrypt.compare(
        userInfo.password,
        loadedUser.password
      );

      if (!comparePassword) {
        const error = new Error("password is not match!");
        error.statusCode = 401;
        throw error;
      } else {
        const hashedPassword = await bcrypt.hash(userInfo.newPassword, 12);

        const result = await userModel
          .findOne({ email: userInfo.oldEmail })
          .updateMany({
            $set: {
              email: userInfo.email,
              password: hashedPassword,
            },
          });

        if (result.ok) {
          loadedUser.email = userInfo.email;
          loadedUser.password = hashedPassword;
        }

        const token = jwt.sign({ email: userInfo.email }, "expressnuxtsecret", {
          expiresIn: "60m",
        });

        res.status(200).json({
          token: token,
          email: userInfo.email,
          password: hashedPassword,
        });
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.avatarUpload = async (req, res, next) => {
  const userId = req.body.user;

  try {
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" });
    }
    // accessing the file
    const myFile = req.files.file;
    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      myFile
    );

    //  mv() method places the file inside public directory
    myFile.mv(
      `${__dirname}/../public/avatar/${myFile.name}`,
      async function (err) {
        let avatarURL = "";
        console.log("the error is: ", err);
        if (err) {
          return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name

        await userModel.findOne({ _id: userId }).update({
          $set: {
            avatar: SITE_URL + "avatar/" + myFile.name,
          },
        });

        await userModel.findOne({ _id: userId }).then((res) => {
          console.log("bbbbbbbbbbbbb", res.avatar);
          avatarURL = res.avatar;
          loadedUser.avatar = avatarURL;
          // res.send({ name: myFile.name, path: avatarURL });
        });

        return res.status(200).send({ name: myFile.name, path: avatarURL });
      }
    );
  } catch (error) { }
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    user: loadedUser,
  });
};

exports.passwordReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error(
        "Email dones't registered, please use registered email!"
      );
      res.status(409).json({
        error: "Email dones't registered, please use registered email!",
      });
      error.statusCode = 409;
      throw error;
    } else {
      var randomstring = Math.random().toString(36).slice(-12);

      const hashedPassword = await bcrypt.hash(randomstring, 12);

      const update = await userModel.findOne({ email: email }).update({
        $set: {
          password: hashedPassword,
        },
      });

      res.status(200).json({
        message: "Password reseted successfully, Please check your inbox",
        password: randomstring,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getUserInfo = (req, res, next) => { };

registerSuperAdmin(superAdminInformation)
registerUsers(sampleUsers)
