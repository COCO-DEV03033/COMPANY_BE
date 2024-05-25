const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const calendarModel = require("../models/calendarModel");
const earningModel = require("../models/earningModel");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const { jwtDecode } = require("jwt-decode");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";


//----------------      Earning-Management      -------------------//

exports.getAllEarning = async (req, res, next) => {
  const { year, month } = req.body;
  try {
    const calendar = await calendarModel.findOne({ year: year, month: month });
    if (!calendar) {
      return res.status(200).json({
        status_code: 1,
        message: "The data does not exist!",
      });
    }
    const allEarnings = await earningModel.find({ calendar_id: calendar._id });
    const earnings = [];
    for (let earning of allEarnings) {
      const user = await userModel.findById(earning.user_id);
      if (user) {
        let newdata = {
          '_id': earning._id,
          "name": user.name,
          "organization": user.organization ?? "3*9",
          "team": user.team ?? 1,
          "plan": earning.plan ?? 0,
          "day1": earning.day1 ?? 0,
          "day2": earning.day2 ?? 0,
          "day3": earning.day3 ?? 0,
          "day4": earning.day4 ?? 0,
          "day5": earning.day5 ?? 0,
          "day6": earning.day6 ?? 0,
          "day7": earning.day7 ?? 0,
          "day8": earning.day8 ?? 0,
          "day9": earning.day9 ?? 0,
          "day10": earning.day10 ?? 0,
          "day11": earning.day11 ?? 0,
          "day12": earning.day12 ?? 0,
          "day13": earning.day13 ?? 0,
          "day14": earning.day14 ?? 0,
          "day15": earning.day15 ?? 0,
          "day16": earning.day16 ?? 0,
          "day17": earning.day17 ?? 0,
          "day18": earning.day18 ?? 0,
          "day19": earning.day19 ?? 0,
          "day20": earning.day20 ?? 0,
          "day21": earning.day21 ?? 0,
          "day22": earning.day22 ?? 0,
          "day23": earning.day23 ?? 0,
          "day24": earning.day24 ?? 0,
          "day25": earning.day25 ?? 0,
          "day26": earning.day26 ?? 0,
          "day27": earning.day27 ?? 0,
          "day28": earning.day28 ?? 0,
          "day29": earning.day29 ?? 0,
          "day30": earning.day30 ?? 0,
          "day31": earning.day31 ?? 0,
          "day32": earning.day32 ?? 0,
          "day33": earning.day33 ?? 0,
          "day34": earning.day34 ?? 0,
          "day35": earning.day35 ?? 0

        }
        earnings.push(newdata);
      }
    }

    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        earnings: earnings,
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

exports.getAllYearMonth = async (req, res, next) => {
  const { year, month } = req.body;
  const yearmonths = [];
  try {
    const allyearmonths = await calendarModel.find({ year: year });
    if (yearmonths) {
      for(let yearmonth of allyearmonths) {
        let newData ={
          '_id' : yearmonth._id,
          'yearmonth' : yearmonth.year +'-' + yearmonth.month,
          'start_date' : yearmonth.start_date,
          'end_date' : yearmonth.end_date,
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

exports.addYearMonth = async (req, res, next) => {

  const { start_date, end_date, year, month } = req.body;
  // Parse the start and end dates
  const start = new Date(start_date.replace('-', '/'));
  const end = new Date(end_date.replace('-', '/'));
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
        start_date: start_date,
        end_date: end_date,
        namelist: dates,
        status: 1,
      })
      await calendar.save()
      let calendar_id = calendar._id;
      const allUsers = await userModel.find();
      for (let user of allUsers) {
        // const existEarning = await earningModel.findOne({ _id: calendar._id, user_id:user._id}).lean()
        const existEarning = await earningModel.findOne({ calendar_id: calendar_id, user_id: user._id });
        if (!existEarning) {
          const createEarning = new earningModel({
            user_id: user._id,
            calendar_id: calendar_id,///
            plan: 0,
            day1: 0,
            day2: 0,
            day3: 0,
            day4: 0,
            day5: 0,
            day6: 0,
            day7: 0,
            day8: 0,
            day9: 0,
            day10: 0,
            day11: 0,
            day12: 0,
            day13: 0,
            day14: 0,
            day15: 0,
            day16: 0,
            day17: 0,
            day18: 0,
            day19: 0,
            day20: 0,
            day21: 0,
            day22: 0,
            day23: 0,
            day24: 0,
            day25: 0,
            day26: 0,
            day27: 0,
            day28: 0,
            day29: 0,
            day30: 0,
            day31: 0,
            day32: 0,
            day33: 0,
            day34: 0,
            day35: 0,
          })
          await createEarning.save()
        }
      }
      res.status(200).json({
        status_code: 0,
        message: 'Year month was set successfully!',
        data :{
          yearmonth:{
              '_id' : calendar._id,
              'yearmonth' : calendar.year +'-' + calendar.month,
              'start_date' : calendar.start_date,
              'end_date' : calendar.end_date,
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

  const { _id, start_date, end_date, year, month } = req.body;

  // Parse the start and end dates
  const start = new Date(start_date.replace('-', '/'));
  const end = new Date(end_date.replace('-', '/'));

  // Initialize the date array
  const dates = [];

  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    dates.push(`${month}/${day}`);
  }

  try {
    const updateCalendar = await calendarModel.findOneAndUpdate({ _id: _id}, {
      year: year,
      month: month,
      start_date: start_date,
      end_date: end_date,
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
  console.log("deleted",_id);
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
exports.updateEarning = async (req, res, next) => {
  const earnings = req.body;
  const updateEarnings = [];
  try {
    for (let earning of earnings) {
      existEarning = await earningModel.findOneAndUpdate({ _id: earning._id }, earning);
      updateEarnings.push(existEarning);
    }
    res.status(200).json({
      status_code: 0,
      message: 'updated successfully!'
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.getUserInfo = (req, res, next) => { };


