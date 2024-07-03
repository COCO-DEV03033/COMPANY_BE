const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const calendarModel = require("../models/calendarModel");
const incomeModel = require("../models/IncomeModel");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const { jwtDecode } = require("jwt-decode");

const mongoose = require("mongoose");
const { themeColors } = require("../config/constants");

require("dotenv").config({ path: ".env" });

const SITE_URL = "http://localhost:5050/";


//----------------      Income-Management      -------------------//

exports.getIncomes = async (req, res, next) => {
  const year = req.query.year;
  const month = req.query.month;
  const organization = req.query.organization;
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
          "userID": user.userID,
          "name": user.name,
          "organization": user.organization,
          "team": user.team,
          "plan": 0,
        }
        let combinedObj = { ...newdata };
        for (let currentDate = 0; currentDate <= totaldays; currentDate++) {
          // const dateWithoutTime = new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate).setHours(0, 0, 0, 0);
          let income = await incomeModel.findOne({ date: getDateOnly(new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate)), userID: user.userID });
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

exports.getOverViews = async (req, res, next) => {
  const { year, month, organization, projectType, country, universty, jobSite, role, dateformat, } = req.body;
  try {
    let data = {};
    switch (dateformat) {
      case 'year':
        // data = teamGroup(date);
        data = [];
        break;
      case 'month':
        data = await rearrangeDataByYear(year, organization);
        break;
      case 'week':
        data = await rearrangeDataByWeek(year, month, organization);
        break;
      default:
        data = await rearrangeDataByDay(year, month, organization);
    }
    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        overView: data,
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOverViewsForCard = async (req, res, next) => {
  const { year, month, organization, projectType, country, universty, jobSite, role, dateformat, } = req.body;
  try {
    let data = {};
    if (year =='all') {
      data = await rearrangeDataByAllYear(organization, true);
    } else {
      if (month=='all'){
        data = await rearrangeDataByYear(year, organization, true);
      } else {
        data = await rearrangeDataByMonth(year, month, organization, true);
      }
    }
    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        datas: data,
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Incomes according to researcher by year ,month

// Top Max Income for 

exports.getTotalSums = async (req, res, next) => {
  const year = req.query.year;
  try {

    let totalMonths = [];
    let incomes = [];
    const months = await calendarModel.find({ year: year });
    if (!months) {
      return res.status(200).json({
        status_code: 1,
        message: "The calendar data does not exist!",
      });
    } else {
      // for(let i =1; i<=12;i++){
      //     totalMonths.push(getMonthName(i, 'short'));
      // }
      for(let month of months){
        totalMonths.push(getMonthName(month.month, 'short'));
      }
    }

    let minNation = 999999999;
    let minComapany39 = 999999999;
    let minComapany54 = 999999999;
    let minComapany82 = 999999999;
    let minComapanyAI = 999999999;
    let minComapanyNET = 999999999;
    let minEngineer = 999999999;

    let maxNation = 0;
    let maxComapany39 = 0;
    let maxComapany54 = 0
    let maxComapany82 = 0;
    let maxComapanyAI = 0;
    let maxComapanyNET = 0 ;
    let maxEngineer = 0 ;

    const allUsers = await userModel.find();
    for (let user of allUsers) {
      let index = 1;
      let newdata = {
        "userID": user.userID,
        "name": user.name,
        "organization": user.organization,
        "team": user.team,
        "plan": 0,
      }
      let combinedObj = { ...newdata };
      for (let month of months) {
        let income = await incomeModel.aggregate([{
          $match: {
            date: { $gte: month['startDate'], $lt: month['endDate'] },
            userID: user.userID
          }
        }, {
          $group: {
            _id: '$userID',
            totalCost: { $sum: '$cost' }
          }
        }]);
        if (income.length) {
          combinedObj[`month${index++}`] = income[0].totalCost;
        } else {
          combinedObj[`month${index++}`] = 0;
        }
      }
      incomes.push(combinedObj);
    }

    // Company 
    let datas = [];
    let companies = ['3*9', '5*4', '8*2'];
    for (let companyname of companies) {
        let filterdData = incomes.filter(
            (obj) => obj.organization === companyname
        );
        if(filterdData.length){

            // Initialize the sums
            let planSum = 0;
            let incomeSum = 0;
    
            let sum = {};
            for (let i = 1; i <= months.length; i++) {
                sum[`month${i}`] = 0;
            }
            // Loop through the filtered items and calculate the sums
            filterdData.forEach((item) => {
                planSum += parseFloat(item["plan"]);
                for (let i = 1; i <= months.length; i++) {
                    if (item[`month${i}`]) {
                        incomeSum += parseFloat(item[`month${i}`]);
                    }
                    sum[`month${i}`] += parseFloat(item[`month${i}`]);
                }
            });
    
            let result = {
                company: companyname + ' Company',
                plan: parseFloat(planSum.toFixed(2)),
                income: parseFloat(incomeSum.toFixed(2))
            };
            for (let i = 1; i <= months.length; i++) {
                result[`month${i}`] = parseFloat(sum[`month${i}`].toFixed(2))
                if(companyname == '3*9') {
                  if(minComapany39 > result[`month${i}`]){
                    minComapany39 = result[`month${i}`]
                  } 
                  if(maxComapany39 < result[`month${i}`]){
                    maxComapany39 = result[`month${i}`]
                  } 
                }
                else if(companyname == '5*4') {
                  if(minComapany54 > result[`month${i}`]){
                    minComapany54 = result[`month${i}`]
                  } 
                  if(maxComapany54 < result[`month${i}`]){
                    maxComapany54 = result[`month${i}`]
                  } 
                }
                else if(companyname == '8*2') {
                  if(minComapany82 > result[`month${i}`]){
                    minComapany82 = result[`month${i}`]
                  } 
                  if(maxComapany82 < result[`month${i}`]){
                    maxComapany82 = result[`month${i}`]
                  } 
                }
            }
    
            datas.push(result);
            // Group the data by the "team" field
            let groupedByTeam = filterdData.reduce((acc, obj) => {
                if (!acc[obj.team]) {
                    acc[obj.team] = {
                        plan: 0,
                        income: 0,
                        items: [],
                    };
                    for (let i = 1; i <= months.length; i++) {
                        acc[obj.team][`month${i}`] = 0;
                    }
                }
                acc[obj.team].plan += parseFloat(obj.plan);
    
                for (let i = 1; i <= months.length; i++) {
                    if (obj[`month${i}`]) {
                        acc[obj.team].income += parseFloat(obj[`month${i}`]);
                    }
                    acc[obj.team][`month${i}`] += parseFloat(obj[`month${i}`]);
                }
                acc[obj.team].items.push(obj);
                return acc;
            }, {});
            let keyNames = Object.keys(groupedByTeam);
            keyNames.forEach((key) => {
    
                let teamresult = {
                    teamshow: key+' Team',
                    plan: parseFloat(groupedByTeam[key]["plan"].toFixed(2)),
                    income: parseFloat(groupedByTeam[key]["income"].toFixed(2)),
                };
    
                for (let i = 1; i <= months.length; i++) {
                    teamresult[`month${i}`] = parseFloat(groupedByTeam[key][`month${i}`].toFixed(2));
                }
                datas.push(teamresult);
    
                if (groupedByTeam[key].hasOwnProperty("items")) {
                    groupedByTeam[key].items.map((item) => {
                        item["income"] = 0;
                        for (let i = 1; i <= months.length; i++) {
                            if (item[`month${i}`]) {
                                item["income"] += parseFloat(item[`month${i}`]);
                            }
                            if(minEngineer > item["income"]){
                              minEngineer = item["income"]
                            } 
                            if(maxEngineer < item["income"]){
                              maxEngineer = item["income"]
                            } 
                          }
                        datas.push(item);
                    });
                }
            });
        }
    }

    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        totalsums: datas,
        months: totalMonths,
        minComapany39: minComapany39,
        maxComapany39: maxComapany39,
        minComapany54: minComapany54,
        maxComapany54: maxComapany54,
        minComapany82: minComapany82,
        maxComapany82: maxComapany82,

        minEngineer: minEngineer,
        maxEngineer: maxEngineer,
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// exports.getTotalSums = async (req, res, next) => {
//   const year = req.query.year;
//   try {

//     let totalMonths = [];
//     let incomes = [];
//     const months = await calendarModel.find({ year: year });
//     if (!months) {
//       return res.status(200).json({
//         status_code: 1,
//         message: "The calendar data does not exist!",
//       });
//     } else {
//       // for(let i =1; i<=12;i++){
//       //     totalMonths.push(getMonthName(i, 'short'));
//       // }
//       for(let month of months){
//         totalMonths.push(getMonthName(month.month, 'short'));
//       }
//     }

//     const allUsers = await userModel.find();
//     for (let user of allUsers) {
//       let index = 1;
//       let newdata = {
//         "userID": user.userID,
//         "name": user.name,
//         "organization": user.organization,
//         "team": user.team,
//         "plan": 0,
//       }
//       let combinedObj = { ...newdata };
//       for (let month of months) {
//         let income = await incomeModel.aggregate([{
//           $match: {
//             date: { $gte: month['startDate'], $lt: month['endDate'] },
//             userID: user.userID
//           }
//         }, {
//           $group: {
//             _id: '$userID',
//             totalCost: { $sum: '$cost' }
//           }
//         }]);
//         if (income.length) {
//           combinedObj[`month${index++}`] = income[0].totalCost;
//         } else {
//           combinedObj[`month${index++}`] = 0;
//         }
//       }
//       incomes.push(combinedObj);
//     }

//     // Company 
//     let datas = [];
//     let companies = ['3*9', '5*4', '8*2'];
//     for (let companyname of companies) {
//         let filterdData = incomes.filter(
//             (obj) => obj.organization === companyname
//         );
//         if(filterdData.length){

//             // Initialize the sums
//             let planSum = 0;
//             let incomeSum = 0;
    
//             let sum = {};
//             for (let i = 1; i <= months.length; i++) {
//                 sum[`month${i}`] = 0;
//             }
//             // Loop through the filtered items and calculate the sums
//             filterdData.forEach((item) => {
//                 planSum += parseFloat(item["plan"]);
//                 for (let i = 1; i <= months.length; i++) {
//                     if (item[`month${i}`]) {
//                         incomeSum += parseFloat(item[`month${i}`]);
//                     }
//                     sum[`month${i}`] += parseFloat(item[`month${i}`]);
//                 }
//             });
    
//             let result = {
//                 company: companyname + ' Company',
//                 plan: parseFloat(planSum.toFixed(2)),
//                 income: parseFloat(incomeSum.toFixed(2))
//             };
//             for (let i = 1; i <= months.length; i++) {
//                 result[`month${i}`] = parseFloat(sum[`month${i}`].toFixed(2))
//             }
    
//             datas.push(result);
//             // Group the data by the "team" field
//             let groupedByTeam = filterdData.reduce((acc, obj) => {
//                 if (!acc[obj.team]) {
//                     acc[obj.team] = {
//                         plan: 0,
//                         income: 0,
//                         items: [],
//                     };
//                     for (let i = 1; i <= months.length; i++) {
//                         acc[obj.team][`month${i}`] = 0;
//                     }
//                 }
//                 acc[obj.team].plan += parseFloat(obj.plan);
    
//                 for (let i = 1; i <= months.length; i++) {
//                     if (obj[`month${i}`]) {
//                         acc[obj.team].income += parseFloat(obj[`month${i}`]);
//                     }
//                     acc[obj.team][`month${i}`] += parseFloat(obj[`month${i}`]);
//                 }
//                 acc[obj.team].items.push(obj);
//                 return acc;
//             }, {});
//             let keyNames = Object.keys(groupedByTeam);
//             keyNames.forEach((key) => {
    
//                 let teamresult = {
//                     teamshow: key+' Team',
//                     plan: parseFloat(groupedByTeam[key]["plan"].toFixed(2)),
//                     income: parseFloat(groupedByTeam[key]["income"].toFixed(2)),
//                 };
    
//                 for (let i = 1; i <= months.length; i++) {
//                     teamresult[`month${i}`] = parseFloat(groupedByTeam[key][`month${i}`].toFixed(2));
//                 }
//                 datas.push(teamresult);
    
//                 if (groupedByTeam[key].hasOwnProperty("items")) {
//                     groupedByTeam[key].items.map((item) => {
//                         item["income"] = 0;
//                         for (let i = 1; i <= months.length; i++) {
//                             if (item[`month${i}`]) {
//                                 item["income"] += parseFloat(item[`month${i}`]);
//                             }
//                         }
//                         datas.push(item);
//                     });
//                 }
//             });
//         }
//     }

//     res.status(200).json({
//       status_code: 0,
//       message: "Get Data Successfully!",
//       data: {
//         totalsums: datas,
//         months: totalMonths,
//       }
//     });
//   } catch (error) {
//     if (!error.statusCode) {
//       error.statusCode = 500;
//     }
//     next(error);
//   }
// };

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
      for (let currentDate = 0; currentDate < totaldays; currentDate++) {
        index += 1;
        let date = new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate);
        let existincome = await incomeModel.findOneAndUpdate({ date: getDateOnly(date), userID: income.userID }, {
          cost: income[`day${index}`],
        });
        if (existincome) {
        } else {
          if (income[`day${index}`] && (income[`day${index}`] != 0)) {
            const newincome = new incomeModel({
              userID: income.userID,
              date: getDateOnly(date),
              cost: income[`day${index}`],
            });
            await newincome.save();
          }
        }
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
  const year = req.query.year;
  const yearmonths = [];
  try {
    const allyearmonths = await calendarModel.find({ year: year });
    if (yearmonths) {
      let index = 1;
      for (let yearmonth of allyearmonths) {
        let newData = {
          '_id': yearmonth._id,
          'index': index++,
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

//Day
async function rearrangeDataByDay(year, month, organization) {
  const calendar = await calendarModel.findOne({ year: year, month: month });
  if (!calendar) {
    return res.status(200).json({
      status_code: 1,
      message: "The calendar data does not exist!",
    });
  }
  let totaldays = getTotalDatesBetween(calendar.startDate, calendar.endDate);
  let incomes = [];

  const allUsers = await userModel.find();
  for (let user of allUsers) {
    let index = 1;
    let newdata = {
      "userID": user.userID,
      "name": user.name,
      "organization": user.organization,
      "team": user.team,
      "plan": 0,
    }
    let combinedObj = { ...newdata };
    for (let currentDate = 0; currentDate <= totaldays; currentDate++) {
      let income = await incomeModel.findOne({ date: getDateOnly(new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate)), userID: user.userID });
      if (income) {
        combinedObj[`day${index++}`] = income.cost;
      } else {
        combinedObj[`day${index++}`] = 0;
      }
    }
    incomes.push(combinedObj);
  }

  let data = {};
  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
    let filterdData = incomes.filter(
      (obj) => obj.organization === companyname
    );
    if (filterdData.length) {
      if (organization == 'all') {
        // Initialize the sums
        let planSum = 0;
        let incomeSum = 0;

        let sum = {};
        for (let i = 1; i <= totaldays; i++) {
          sum[`day${i}`] = 0;
        }
        // Loop through the filtered items and calculate the sums
        filterdData.forEach((item) => {
          planSum += parseFloat(item["plan"]);
          for (let i = 1; i <= totaldays; i++) {
            if (item[`day${i}`]) {
              incomeSum += parseFloat(item[`day${i}`]);
            }
            sum[`day${i}`] += parseFloat(item[`day${i}`]);
          }
        });

        let result = {
          name: companyname,
          // plan: planSum,
          // income: incomeSum,
        };
        let companyIncome = [];
        for (let i = 1; i <= totaldays; i++) {
          companyIncome.push(sum[`day${i}`]);
        }
        result[`data`] = companyIncome;
        datas.push(result);
      } else {
        if (companyname == organization) {
          // Group the data by the "team" field
          let groupedByTeam = filterdData.reduce((acc, obj) => {
            if (!acc[obj.team]) {
              acc[obj.team] = {
                plan: 0,
                income: 0,
                items: [],
              };
              for (let i = 1; i <= totaldays; i++) {
                acc[obj.team][`day${i}`] = 0;
              }
            }
            acc[obj.team].plan += parseFloat(obj.plan);

            for (let i = 1; i <= totaldays; i++) {
              if (obj[`day${i}`]) {
                acc[obj.team].income += parseFloat(obj[`day${i}`]);
              }
              acc[obj.team][`day${i}`] += parseFloat(obj[`day${i}`]);
            }
            acc[obj.team].items.push(obj);
            return acc;
          }, {});
          let keyNames = Object.keys(groupedByTeam);
          keyNames.forEach((key) => {
            let teamresult = {
              name: "Team" + key,
              // plan: groupedByTeam[key]["plan"],
              // income: groupedByTeam[key]["income"],
            };
            let teamincome = [];
            for (let i = 1; i <= totaldays; i++) {
              teamincome.push(groupedByTeam[key][`day${i}`]);
            }
            teamresult['data'] = teamincome;
            datas.push(teamresult);
          });
        }
      }
    }
  }
  data = {
    series: datas,
    chartOptions: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '-----',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 1
        }
      },
      xaxis: {
        categories: calendar.namelist
      }
    },
    details: [
      {
        group: '3*9',
        total: 1000,
        average: 2,
        distPercent: 30,
      },
      {
        group: '5*4',
        total: 1400,
        average: 2,
        distPercent: 30,
      },
      {
        group: '8*2',
        total: 700,
        average: 2,
        distPercent: 30,
      },
    ]
  };
  return data;
}

//Week
async function rearrangeDataByWeek(year, month, organization) {

  let namelist = [];
  let incomes = [];
  const calendar = await calendarModel.findOne({ year: year, month: month });
  if (!calendar) {
    return res.status(200).json({
      status_code: 1,
      message: "The calendar data does not exist!",
    });
  }

  // const startDate = '2024-03-27T00:00:00.000+00:00';
  // const endDate = '2024-04-26T15:00:00.000+00:00';
  const weeklyDates = getWeeklyDates(calendar.startDate, calendar.endDate);


  // Output the weekly date ranges
  weeklyDates.forEach((week, index) => {
    namelist.push(`Week ${index + 1}`);
  });


  const allUsers = await userModel.find();
  for (let user of allUsers) {
    let index = 1;
    let newdata = {
      "userID": user.userID,
      "name": user.name,
      "organization": user.organization,
      "team": user.team,
      "plan": 0,
    }
    let combinedObj = { ...newdata };
    for (let weeklyDate of weeklyDates) {
      let income = await incomeModel.aggregate([{
        $match: {
          date: { $gte: weeklyDate['weekStart'], $lt: weeklyDate['weekEnd'] },
          userID: user.userID
        }
      }, {
        $group: {
          _id: '$userID',
          totalCost: { $sum: '$cost' }
        }
      }]);
      if (income.length) {
        combinedObj[`${index++}`] = income[0].totalCost;
      } else {
        combinedObj[`${index++}`] = 0;
      }
    }
    incomes.push(combinedObj);
  }

  let data = {};
  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
    let filterdData = incomes.filter(
      (obj) => obj.organization === companyname
    );
    if (filterdData.length) {
      if (organization == 'all') {
        // Initialize the sums
        let planSum = 0;
        let incomeSum = 0;

        let sum = {};
        for (let i = 1; i <= weeklyDates.length; i++) {
          sum[`${i}`] = 0;
        }
        // Loop through the filtered items and calculate the sums
        filterdData.forEach((item) => {
          planSum += parseFloat(item["plan"]);
          for (let i = 1; i <= weeklyDates.length; i++) {
            if (item[`${i}`]) {
              incomeSum += parseFloat(item[`${i}`]);
            }
            sum[`${i}`] += parseFloat(item[`${i}`]);
          }
        });

        let result = {
          name: companyname,
          // plan: planSum,
          // income: incomeSum,
        };
        let companyIncome = [];
        for (let i = 1; i <= weeklyDates.length; i++) {
          companyIncome.push(sum[`${i}`]);
        }
        result[`data`] = companyIncome;
        datas.push(result);
      } else {
        if (companyname == organization) {
          // Group the data by the "team" field
          let groupedByTeam = filterdData.reduce((acc, obj) => {
            if (!acc[obj.team]) {
              acc[obj.team] = {
                plan: 0,
                income: 0,
                items: [],
              };
              for (let i = 1; i <= weeklyDates.length; i++) {
                acc[obj.team][`${i}`] = 0;
              }
            }
            acc[obj.team].plan += parseFloat(obj.plan);

            for (let i = 1; i <= weeklyDates.length; i++) {
              if (obj[`${i}`]) {
                acc[obj.team].income += parseFloat(obj[`${i}`]);
              }
              acc[obj.team][`${i}`] += parseFloat(obj[`${i}`]);
            }
            acc[obj.team].items.push(obj);
            return acc;
          }, {});
          let keyNames = Object.keys(groupedByTeam);
          keyNames.forEach((key) => {
            let teamresult = {
              name: "Team" + key,
              // plan: groupedByTeam[key]["plan"],
              // income: groupedByTeam[key]["income"],
            };
            let teamincome = [];
            for (let i = 1; i <= weeklyDates.length; i++) {
              teamincome.push(groupedByTeam[key][`${i}`]);
            }
            teamresult['data'] = teamincome;
            datas.push(teamresult);
          });
        }
      }
    }
  }

  data = {
    series: datas,
    chartOptions: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '-----',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 1
        }
      },
      xaxis: {
        categories: namelist
      }
    },
    details: [
      {
        group: '3*9',
        total: 1000,
        average: 2,
        distPercent: 30,
      },
      {
        group: '5*4',
        total: 1400,
        average: 2,
        distPercent: 30,
      },
      {
        group: '8*2',
        total: 700,
        average: 2,
        distPercent: 30,
      },
    ]
  };
  return data;
}

//By Month
async function rearrangeDataByMonth(year, month, organization, isCard=false) {

  const calendar = await calendarModel.findOne({ year: year, month: month });
  if (!calendar) {
    return {
      isData: false,
      message: "The calendar data does not exist!",
    };
  }
  let totaldays = getTotalDatesBetween(calendar.startDate, calendar.endDate);
  let incomes = [];

  const allUsers = await userModel.find();
  for (let user of allUsers) {
    let index = 1;
    let newdata = {
      "userID": user.userID,
      "name": user.name,
      "organization": user.organization,
      "team": user.team,
      "plan": 0,
    }
    let combinedObj = { ...newdata };
    for (let currentDate = 0; currentDate <= totaldays; currentDate++) {
      let income = await incomeModel.findOne({ date: getDateOnly(new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate)), userID: user.userID });
      if (income) {
        combinedObj[`day${index++}`] = income.cost;
      } else {
        combinedObj[`day${index++}`] = 0;
      }
    }
    incomes.push(combinedObj);
  }

  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
    let filterdData = incomes.filter(
      (obj) => obj.organization === companyname
    );
    if (filterdData.length) {
      if (organization == 'all') {
        // Initialize the sums
        let planSum = 0;
        let incomeSum = 0;

        let sum = {};
        for (let i = 1; i <= totaldays; i++) {
          sum[`day${i}`] = 0;
        }
        // Loop through the filtered items and calculate the sums
        filterdData.forEach((item) => {
          planSum += parseFloat(item["plan"]);
          for (let i = 1; i <= totaldays; i++) {
            if (item[`day${i}`]) {
              incomeSum += parseFloat(item[`day${i}`]);
            }
            sum[`day${i}`] += parseFloat(item[`day${i}`]);
          }
        });

        let result = {
          name: companyname,
          // plan: planSum,
          // income: incomeSum,
        };
        let companyIncome = [];
        for (let i = 1; i <= totaldays; i++) {
          companyIncome.push(sum[`day${i}`]);
        }
        result[`data`] = companyIncome;
        datas.push(result);
      } else {
        if (companyname == organization) {
          // Group the data by the "team" field
          let groupedByTeam = filterdData.reduce((acc, obj) => {
            if (!acc[obj.team]) {
              acc[obj.team] = {
                plan: 0,
                income: 0,
                items: [],
              };
              for (let i = 1; i <= totaldays; i++) {
                acc[obj.team][`day${i}`] = 0;
              }
            }
            acc[obj.team].plan += parseFloat(obj.plan);

            for (let i = 1; i <= totaldays; i++) {
              if (obj[`day${i}`]) {
                acc[obj.team].income += parseFloat(obj[`day${i}`]);
              }
              acc[obj.team][`day${i}`] += parseFloat(obj[`day${i}`]);
            }
            acc[obj.team].items.push(obj);
            return acc;
          }, {});
          let keyNames = Object.keys(groupedByTeam);
          keyNames.forEach((key) => {
            let teamresult = {
              name: "Team" + key,
              // plan: groupedByTeam[key]["plan"],
              // income: groupedByTeam[key]["income"],
            };
            let teamincome = [];
            for (let i = 1; i <= totaldays; i++) {
              teamincome.push(groupedByTeam[key][`day${i}`]);
            }
            teamresult['data'] = teamincome;
            datas.push(teamresult);
          });
        }
      }
    }
  }
  if(isCard){
    let finalResult = [];
    for(let data of datas){
      let sum = 0;
      for(let income of data['data']) {
        sum +=income;
      }
      finalResult.push({
        "name":data['name'],
        'income': sum,
        'plan': 20000,
        'average': 2000,
      });
    }
    return finalResult;
  } else {
    return datas;
  }
}

//By Year
async function rearrangeDataByYear(year, organization, isCard=false) {

  let totalMonths = [];
  let incomes = [];
  const months = await calendarModel.find({ year: year });
  if (!months) {
    return res.status(200).json({
      status_code: 1,
      message: "The calendar data does not exist!",
    });
  } else {
    for (let month of months) {
      totalMonths.push(getMonthName(month.month, 'short'));
    }
  }

  const allUsers = await userModel.find();
  for (let user of allUsers) {
    let index = 1;
    let newdata = {
      "userID": user.userID,
      "name": user.name,
      "organization": user.organization,
      "team": user.team,
      "plan": 0,
    }
    let combinedObj = { ...newdata };
    for (let month of months) {
      let income = await incomeModel.aggregate([{
        $match: {
          date: { $gte: month['startDate'], $lt: month['endDate'] },
          userID: user.userID
        }
      }, {
        $group: {
          _id: '$userID',
          totalCost: { $sum: '$cost' }
        }
      }]);
      if (income.length) {
        combinedObj[`month${index++}`] = income[0].totalCost;
      } else {
        combinedObj[`month${index++}`] = 0;
      }
    }
    incomes.push(combinedObj);
  }

  let data = {};
  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
    let filterdData = incomes.filter(
      (obj) => obj.organization === companyname
    );
    if (filterdData.length) {
      if (organization == 'all') {
        // Initialize the sums
        let planSum = 0;
        let incomeSum = 0;

        let sum = {};
        for (let i = 1; i <= totalMonths.length; i++) {
          sum[`month${i}`] = 0;
        }
        // Loop through the filtered items and calculate the sums
        filterdData.forEach((item) => {
          planSum += parseFloat(item["plan"]);
          for (let i = 1; i <= totalMonths.length; i++) {
            if (item[`month${i}`]) {
              incomeSum += parseFloat(item[`month${i}`]);
            }
            sum[`month${i}`] += parseFloat(item[`month${i}`]);
          }
        });

        let result = {
          name: companyname,
          // plan: planSum,
          // income: incomeSum,
        };
        let companyIncome = [];
        for (let i = 1; i <= totalMonths.length; i++) {
          companyIncome.push(sum[`month${i}`]);
        }
        result[`data`] = companyIncome;
        datas.push(result);
      } else {
        if (companyname == organization) {
          // Group the data by the "team" field
          let groupedByTeam = filterdData.reduce((acc, obj) => {
            if (!acc[obj.team]) {
              acc[obj.team] = {
                plan: 0,
                income: 0,
                items: [],
              };
              for (let i = 1; i <= totalMonths.length; i++) {
                acc[obj.team][`month${i}`] = 0;
              }
            }
            acc[obj.team].plan += parseFloat(obj.plan);

            for (let i = 1; i <= totalMonths.length; i++) {
              if (obj[`month${i}`]) {
                acc[obj.team].income += parseFloat(obj[`month${i}`]);
              }
              acc[obj.team][`month${i}`] += parseFloat(obj[`month${i}`]);
            }
            acc[obj.team].items.push(obj);
            return acc;
          }, {});
          let keyNames = Object.keys(groupedByTeam);
          keyNames.forEach((key) => {
            let teamresult = {
              name: "Team" + key,
              // plan: groupedByTeam[key]["plan"],
              // income: groupedByTeam[key]["income"],
            };
            let teamincome = [];
            for (let i = 1; i <= totalMonths.length; i++) {
              teamincome.push(groupedByTeam[key][`month${i}`]);
            }
            teamresult['data'] = teamincome;
            datas.push(teamresult);
          });
        }
      }
    }
  }
  if (isCard) {
    let finalResult = [];
    for(let data of datas){
      let sum = 0;
      for(let income of data['data']) {
        sum +=income;
      }
      finalResult.push({
        "name":data['name'],
        'income': sum,
        'plan': 20000,
        'average': 2000,
      });
    }
    return finalResult;
  } else {
    data = {
      series: datas,
      chartOptions: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        colors: themeColors,
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '-----',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 1
          }
        },
        xaxis: {
          categories: totalMonths
        }
      },
      details: [
        {
          group: '3*9',
          total: 1000,
          average: 2,
          distPercent: 30,
        },
        {
          group: '5*4',
          total: 1400,
          average: 2,
          distPercent: 30,
        },
        {
          group: '8*2',
          total: 700,
          average: 2,
          distPercent: 30,
        },
      ]
    };
  }

  return data;
}

// All Year
async function rearrangeDataByAllYear(organization, isCard=false) {

  let totalYears = [2022,2023,2024,2025];
  let incomes = [];

  const allUsers = await userModel.find();
  for (let user of allUsers) {
    let index = 1;
    let newdata = {
      "userID": user.userID,
      "name": user.name,
      "organization": user.organization,
      "team": user.team,
      "plan": 0,
    }

    let combinedObj = { ...newdata };
    for (let year of totalYears) {
      let income = await incomeModel.aggregate([{
        $match: {
          date: { $gte: `${year}-01-01`, $lt: `${year}-12-31` },
          userID: user.userID
        }
      }, {
        $group: {
          _id: '$userID',
          totalCost: { $sum: '$cost' }
        }
      }]);
      if (income.length) {
        combinedObj[`year${index++}`] = income[0].totalCost;
      } else {
        combinedObj[`year${index++}`] = 0;
      }
    }
    incomes.push(combinedObj);
  }

  let data = {};
  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
    let filterdData = incomes.filter(
      (obj) => obj.organization === companyname
    );
    if (filterdData.length) {
      if (organization == 'all') {
        // Initialize the sums
        let planSum = 0;
        let incomeSum = 0;

        let sum = {};
        for (let i = 1; i <= totalYears.length; i++) {
          sum[`year${i}`] = 0;
        }
        // Loop through the filtered items and calculate the sums
        filterdData.forEach((item) => {
          planSum += parseFloat(item["plan"]);
          for (let i = 1; i <= totalYears.length; i++) {
            if (item[`year${i}`]) {
              incomeSum += parseFloat(item[`year${i}`]);
            }
            sum[`year${i}`] += parseFloat(item[`year${i}`]);
          }
        });

        let result = {
          name: companyname,
          // plan: planSum,
          // income: incomeSum,
        };
        let companyIncome = [];
        for (let i = 1; i <= totalYears.length; i++) {
          companyIncome.push(sum[`year${i}`]);
        }
        result[`data`] = companyIncome;
        datas.push(result);
      } else {
        if (companyname == organization) {
          // Group the data by the "team" field
          let groupedByTeam = filterdData.reduce((acc, obj) => {
            if (!acc[obj.team]) {
              acc[obj.team] = {
                plan: 0,
                income: 0,
                items: [],
              };
              for (let i = 1; i <= totalYears.length; i++) {
                acc[obj.team][`year${i}`] = 0;
              }
            }
            acc[obj.team].plan += parseFloat(obj.plan);

            for (let i = 1; i <= totalYears.length; i++) {
              if (obj[`year${i}`]) {
                acc[obj.team].income += parseFloat(obj[`year${i}`]);
              }
              acc[obj.team][`year${i}`] += parseFloat(obj[`year${i}`]);
            }
            acc[obj.team].items.push(obj);
            return acc;
          }, {});
          let keyNames = Object.keys(groupedByTeam);
          keyNames.forEach((key) => {
            let teamresult = {
              name: "Team" + key,
              // plan: groupedByTeam[key]["plan"],
              // income: groupedByTeam[key]["income"],
            };
            let teamincome = [];
            for (let i = 1; i <= totalYears.length; i++) {
              teamincome.push(groupedByTeam[key][`year${i}`]);
            }
            teamresult['data'] = teamincome;
            datas.push(teamresult);
          });
        }
      }
    }
  }
  if (isCard) {
    let finalResult = [];
    for(let data of datas){
      let sum = 0;
      for(let income of data['data']) {
        sum +=income;
      }
      finalResult.push({
        "name":data['name'],
        'income': sum,
        'plan': 20000,
        'average': 2000,
      });
    }
    return finalResult;
  } else {
    data = {
      series: datas,
      chartOptions: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        colors: themeColors,
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '-----',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 1
          }
        },
        xaxis: {
          categories: totalMonths
        }
      },
      details: [
        {
          group: '3*9',
          total: 1000,
          average: 2,
          distPercent: 30,
        },
        {
          group: '5*4',
          total: 1400,
          average: 2,
          distPercent: 30,
        },
        {
          group: '8*2',
          total: 700,
          average: 2,
          distPercent: 30,
        },
      ]
    };
  }

  return data;
}

function getWeeklyDates(start, end) {
  const weeklyDates = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    if (weekEnd > end) {
      weekEnd.setDate(end.getDate());
    }

    weeklyDates.push({
      weekStart: weekStart,
      weekEnd: weekEnd
    });

    currentDate.setDate(currentDate.getDate() + 7);
  }
  return weeklyDates;
}

function getMonthName(monthNumber, format = 'long') {
  const date = new Date();
  date.setMonth(monthNumber - 1); // Subtract 1 because months are zero-indexed

  const monthName = date.toLocaleString('en-US', { month: format });
  return format === 'short' ? monthName.slice(0, 3) : monthName;
}

function getDateOnly(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
