const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const calendarModel = require("../models/calendarModel");
const incomeModel = require("../models/IncomeModel");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const { jwtDecode } = require("jwt-decode");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";


//----------------      Earning-Management      -------------------//

exports.getIncomes = async (req, res, next) => {
  const { year, month, organization } = req.body;
  try {
    const calendar = await calendarModel.findOne({ year: year, month: month });
    if (!calendar) {
      return res.status(200).json({
        status_code: 1,
        message: "The calendar data does not exist!",
      });
    }
    let totaldays = getTotalDatesBetween(calendar.startDate, calendar.endDate);
    let incomes = [];
    if (organization == 'all') {
      const allUsers = await userModel.find();
      for (let user of allUsers) {
        let index = 1;
        let newdata = {
          "userID": user._id,
          "name": user.name,
          "organization": user.organization,
          "team": user.team,
          "plan": 0,
        }
        let combinedObj = { ...newdata };
        for (let currentDate = 0; currentDate <= totaldays; currentDate++) {
          let income = await incomeModel.findOne({ date: new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate), userID: user._id });
          if (income) {
            combinedObj[`day${index++}`] = income.cost;
          } else {
            combinedObj[`day${index++}`] = 0;
          }
        }
        incomes.push(combinedObj);
      }
    }
    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        incomes: incomes,
        dates: calendar.namelist,
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.updateIncome = async (req, res, next) => {
  const { incomes, year, month } = req.body;
  const updateIncomes = [];
  try {
    const calendar = await calendarModel.findOne({ year: year, month: month });
    if (!calendar) {
      return res.status(200).json({
        status_code: 1,
        message: "The calendar data does not exist!",
      });
    }
    let totaldays = getTotalDatesBetween(calendar.startDate, calendar.endDate);
    let combinedObj = {};
    for (let income of incomes) {
      let index = 0;
      const user = await userModel.findById(income.userID);
      if (user) {
        for (let currentDate = 0; currentDate < totaldays; currentDate++) {
          index += 1;
          let date = new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate);
          let existincome = await incomeModel.findOneAndUpdate({ date: date, userID: user._id } ,{
            cost: income[`day${index}`],
          });
          if (existincome) {
            console.log(`existincome update, day${index}`, '--->', income[`day${index}`]);
          } else {
            if (income[`day${index}`]&&(income[`day${index}`] != 0)) {
              console.log(`day${index}`, '---> add', income[`day${index}`]);
              const newincome = new incomeModel({
                userID: income.userID,
                date: date,
                cost: income[`day${index}`],
              });
              await newincome.save();
            }
          }
        }
      } else {
        // The user doesn't exist!!!
      }
    }
    res.status(200).json({
      status_code: 0,
      message: 'updated successfully!',
      data: {
        incomes: combinedObj,
        dates: calendar.namelist,
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.getYearMonths = async (req, res, next) => {
  const { year, month } = req.body;
  const yearmonths = [];
  try {
    const allyearmonths = await calendarModel.find({ year: year });
    if (yearmonths) {
      for (let yearmonth of allyearmonths) {
        let newData = {
          '_id': yearmonth._id,
          'yearmonth': yearmonth.year + '-' + yearmonth.month,
          'startDate': convertDateToString(yearmonth.startDate),
          'endDate': convertDateToString(yearmonth.endDate),
        }
        yearmonths.push(newData);
      }
      res.status(200).json({
        status_code: 0,
        message: "Get Data Successfully!",
        data: {
          yearmonths: yearmonths
        }
      });
    } else {
      return res.status(200).json({
        status_code: 1,
        message: "The data does not exist!",
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.storeYearMonth = async (req, res, next) => {

  const { startDate, endDate, year, month } = req.body;
  // Parse the start and end dates
  const start = new Date(startDate.replace('-', '/'));
  const end = new Date(endDate.replace('-', '/'));

  const startDate1 = `${year}-${startDate.replace('-', '-')}`;
  const endDate1 = `${year}-${endDate.replace('-', '-')}`;
  // Initialize the date array
  const dates = [];
  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    dates.push(`${month}/${day}`);
  }

  try {
    const existCalendar = await calendarModel.findOne({ year: year, month: month });
    if (!existCalendar) {
      const calendar = new calendarModel({
        year: year,
        month: month,
        startDate: startDate1,
        endDate: endDate1,
        namelist: dates,
        status: 1,
      })
      await calendar.save()
      res.status(200).json({
        status_code: 0,
        message: 'Year month was created successfully!',
        data: {
          yearmonth: {
            '_id': calendar._id,
            'yearmonth': calendar.year + '-' + calendar.month,
            'startDate': startDate,
            'endDate': endDate,
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

exports.updateYearMonth = async (req, res, next) => {

  const { _id, startDate, endDate, year, month } = req.body;

  // Parse the start and end dates
  const start = new Date(startDate.replace('-', '/'));
  const end = new Date(endDate.replace('-', '/'));

  const startDate1 = `${year}-${startDate.replace('-', '-')}`;
  const endDate1 = `${year}-${endDate.replace('-', '-')}`;

  // Initialize the date array
  const dates = [];

  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    dates.push(`${month}/${day}`);
  }

  try {
    const updateCalendar = await calendarModel.findOneAndUpdate({ _id: _id }, {
      year: year,
      month: month,
      startDate: startDate1,
      endDate: endDate1,
      namelist: dates,
      status: 1,
    });

    if (updateCalendar) {
      res.status(200).json({
        status_code: 0,
        message: 'Year month was updated successfully!',
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

exports.deleteYearMonth = async (req, res, next) => {
  const { _id } = req.body;
  console.log("deleted", _id);
  try {
    const result = await calendarModel.findByIdAndDelete(_id);
    if (result) {
      res.status(200).json({
        status_code: 0,
        message: 'Year month was deleted successfully!',
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


exports.getUserInfo = (req, res, next) => { };

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


