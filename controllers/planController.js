const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const planModel = require("../models/planModel");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";


exports.getPlans = async (req, res, next) => {
  const { year, month, organization } = req.body;
  const plans = [];

  try {
      const allUsers = await userModel.find();
      for (let user of allUsers) {
        if(user.organization==organization){
          let newData = {};
          let existPlan = await planModel.findOne({userID:user._id, year:year, month:month});
          if (existPlan){
            newData = {
              'amount': existPlan.amount,
              'name':user.name,
              'team':user.team,
            }
          } else {
            newData = {
              'amount': 0,
              'name':user.name,
              'team':user.team,
            }
          }
          plans.push(newData);
        }
      }

        const groupedByTeam = plans.reduce((acc, item) => {
          const team = item.team;
          if (!acc[team]) {
            acc[team] = [];
          }
          acc[team].push(item);
          return acc;
        }, []);
        console.log(groupedByTeam)
        res.status(200).json({
          status_code: 0,
          message: "Get Data Successfully!",
          data: {
            plans: groupedByTeam
          }
        });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.addPlan = async (req, res, next) => {

  const { year, month, amount, userID } = req.body;
  try {
    const existPlan = await planModel.findOne({ userID:userID, year: year, month: month });
    if (!existPlan) {
      const newPlan = new planModel({
        year: year,
        month: month,
        userID:userID,
        amount:amount,
      })
      await newPlan.save()
      res.status(200).json({
        status_code: 0,
        message: 'Plan was created successfully!',
        data: {
          plan: {
            '_id': newPlan._id,
            'year': newPlan.year,
            'month': newPlan.month,
            'amount': newPlan.amount,
            'userID': newPlan.userID,
          }
        }
      });
    } else {
      res.status(200).json({
        status_code: 1,
        message: 'Year month was already exist!'
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.updatePlan = async (req, res, next) => {

  const { _id, year, month, amount } = req.body;

  try {
    const updatePlan = await planModel.findOneAndUpdate({ _id: _id }, {
      // year: year,
      // month: month,
      amount: amount,
    });

    if (updatePlan) {
      res.status(200).json({
        status_code: 0,
        message: 'selected Plan was updated successfully!',
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


function convertDateToString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}`;
}

function getTotalDatesBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  return totalDays;
}


