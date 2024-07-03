const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const planModel = require("../models/planModel");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";

// exports.getCompanyPlans = async (req, res, next) => {
  
//   const { year, month } = req.body;
//   console.log ("companyPlan", req.body)
//   let organizations = ['3*9', '5*4', '8*2'];
  
//   try {
//     const allUsers = await userModel.find()
//     for (let user of allUsers){
//       const organization = user.organization;
//       try {
//         console.log('organization',organization)
//         const allPlans = await planModel.find({year: year, month: month})
//         console.log('allPlans', allPlans)
//         const sumByUserID = allPlans.reduce((acc, plan) => {
//           const userID = plan.userID;
//           if (!acc[userID]) {
//             acc[userID] = 0;
//           }
//           acc[userID] += plan.amount || 0; // Assuming null amounts should be treated as 0
//           return acc;
//         }, {});
//         const totalSum = Object.values(sumByUserID).reduce((acc, sum) => acc + sum, 0);
//         console.log('totalSum', totalSum)
//         res.json({
//           organization,
//           sumByUserID,
//           totalSum
//         });
//       } catch (error) {
//       }
//     }
//   } catch (error) {
//   }
// }
// const planModel = require('./path-to-your-model'); // Adjust the path to your plan model
// const userModel = require('./path-to-your-user-model'); // Adjust the path to your user model

exports.getCompanyPlans = async (req, res, next) => {
  const { year, month } = req.body;
  console.log("companyPlan", req.body);

  try {
    const allUsers = await userModel.find();
    const organizationData = {};
    const companyPlans = {}; 
    const userNumber = {};
    for (let user of allUsers) {
      const organization = user.organization;
      if (!organizationData[organization]) {
        organizationData[organization] = {
          sumByUserID: {},
          totalSum: 0,
          userCount: 0
        };
      }
      organizationData[organization].userCount += 1;
      try {
        const allPlans = await planModel.find({ year: year, month: month, userID: user.userID });
        const userTotal = allPlans.reduce((acc, plan) => {
          // console.log('acc', acc + (plan.amount || 0))
          return acc + (plan.amount || 0);
        }, 0);
        organizationData[organization].sumByUserID[user.userID] = userTotal;
        // console.log('sumByUserID', organizationData[organization].sumByUserID[user.userID] )
        organizationData[organization].totalSum += userTotal;
        // console.log('totalSum',organizationData[organization].totalSum)

      } catch (error) {
        console.error(`Error fetching plans for user ${user.userID} in organization ${organization}:`, error);
      }
    }

    // Log the result
    for (let [organization, data] of Object.entries(organizationData)) {
      console.log(`Total sum for organization ${organization}:`, data.totalSum);
      console.log(`Sum by user ID for organization ${organization}:`, data.sumByUserID);
      console.log(`Length ${organization}:`, data.sumByUserID);
      console.log(`User count for organization ${organization}:`, data.userCount);
      
    }

    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        companyPlans: {
          '5*4': organizationData['5*4']? organizationData['5*4']['totalSum'] : 0,
          'AI': organizationData['AI']? organizationData['AI']['totalSum'] : 0,
          '3*9': organizationData['3*9']? organizationData['3*9']['totalSum'] : 0,
          '8*2': organizationData['8*2']? organizationData['8*2']['totalSum'] : 0,
          'CT': organizationData['CT']? organizationData['CT']['totalSum'] : 0,
        },
        userNumber: {
          '5*4': organizationData['5*4'] ? organizationData['5*4'].userCount : 0,
          'AI': organizationData['AI'] ? organizationData['AI'].userCount : 0,
          '3*9': organizationData['3*9'] ? organizationData['3*9'].userCount : 0,
          '8*2': organizationData['8*2'] ? organizationData['8*2'].userCount : 0,
          'CT': organizationData['CT'] ? organizationData['CT'].userCount : 0
        }
      }
    });
    console.log('organizationData',  organizationData['3*9']['totalSum'])

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: 'An error occurred while fetching company plans' });
  }
};


exports.getPlans = async (req, res, next) => {
 
  const year = req.query.year;
  const month = req.query.month;
  const organization = req.query.organization;
  const plans = [];
  try {
      const allUsers = await userModel.find();
      for (let user of allUsers) {
        if(user.organization==organization){
          let newData = {};
          let existPlan = await planModel.findOne({userID:user.userID, year:year, month:month});
          if (existPlan){
            newData = {
              'amount': existPlan.amount,
              'userID':user.userID,
              'name':user.name,
              'team':user.team,
            }
          } else {
            newData = {
              'amount': "",
              'userID':user.userID,
              'name':user.name,
              'team':user.team,
            }
          }
          plans.push(newData);
        }
      }

      console.log("plans--->", plans);

      const groupedData = plans.reduce((acc, curr) => {
        const { team } = curr;
        if (!acc[team]) {
          acc[team] = [];
        }
        acc[team].push(curr);
        return acc;
      }, {});

      if(groupedData[0]==null){
        groupedData[0]=[];
      }



        // const groupedByTeam = plans.reduce((acc, item) => {
        //   const { team } = item.team;
        //   if (!acc[team]) {
        //     acc[team] = [];
        //   }
        //   acc[team].push(item);
        //   return acc;
        // }, []);
        // console.log(groupedByTeam)
        res.status(200).json({
          status_code: 0,
          message: "Get Data Successfully!",
          data: {
            plans: groupedData
          }
        });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// exports.addPlan = async (req, res, next) => {

//   const { year, month, amount, userID } = req.body;
//   try {
//     const existPlan = await planModel.findOne({ userID:userID, year: year, month: month });
//     if (!existPlan) {
//       const newPlan = new planModel({
//         year: year,
//         month: month,
//         userID:userID,
//         amount:amount,
//       })
//       await newPlan.save()
//       res.status(200).json({
//         status_code: 0,
//         message: 'Plan was created successfully!',
//         data: {
//           plan: {
//             '_id': newPlan._id,
//             'year': newPlan.year,
//             'month': newPlan.month,
//             'amount': newPlan.amount,
//             'userID': newPlan.userID,
//           }
//         }
//       });
//     } else {
//       res.status(200).json({
//         status_code: 1,
//         message: 'Year month was already exist!'
//       });
//     }
//   } catch (error) {
//     if (!error.statusCode) {
//       error.statusCode = 500;
//     }
//     next(error);
//   }
// }

exports.savePlans = async (req, res, next) => {

  const { data, year, month } = req.body;
  console.log('datas', data);

  try {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        for(let plan of data[key]){
          console.log('plan-->', plan);
          await userModel.findOneAndUpdate({ userID: plan['userID'] },{
            team: key,
            // amount: plan['amount'],
          })
          
          const saveamount = await planModel.findOneAndUpdate(
            { userID: plan['userID'],
              year: year,
              month: month
            }, 
            { amount: plan['amount']}
        );
          if(saveamount){

          } else {
              const newamount = new planModel({
                userID: plan['userID'],
                year: year,
                month: month,
                amount: plan['amount']
              })
              await newamount.save()
          }
        }
      }
    }
    res.status(200).json({
      status_code: 0,
      message: 'selected Plan was updated successfully!',
    });

  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.deletePlan = async (req, res, next) => {
  const { _id } = req.body;
  console.log("deleted", _id);
  try {
    const result = await planModel.findByIdAndDelete(_id);
    if (result) {
      res.status(200).json({
        status_code: 0,
        message: 'selected plan was deleted successfully!',
      });
    } else {
      res.status(200).json({
        status_code: 1,
        message: 'failed!'
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

