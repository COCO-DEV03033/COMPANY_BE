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

exports.getOverViews = async (req, res, next) => {
  
  const { year, month, organization, projectType, country, universty, jobSite, role, date, } = req.body;
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
    
    let data ={};
    switch(organization) {
      case '3*9':
        data = teamGroup(date);
        break;
      case '5*4':
        data = teamGroup(date);
        break;
      case '8*2':
        data = teamGroup(date);
        break;
      default:
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
            for (let currentDate = 0; currentDate <= 7; currentDate++) {
              let income = await incomeModel.findOne({ date: new Date(calendar.startDate.getFullYear(), calendar.startDate.getMonth(), calendar.startDate.getDate() + currentDate), userID: user._id });
              if (income) {
                combinedObj[`day${index++}`] = income.cost;
              } else {
                combinedObj[`day${index++}`] = 0;
              }
            }
            incomes.push(combinedObj);
          }

        data = organizationGroup(date);
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
          let existincome = await incomeModel.findOneAndUpdate({ date: date, userID: user._id }, {
            cost: income[`day${index}`],
          });
          if (existincome) {
            console.log(`existincome update, day${index}`, '--->', income[`day${index}`]);
          } else {
            if (income[`day${index}`] && (income[`day${index}`] != 0)) {
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

function organizationGroup(date='week') {
  let data ={};
  switch(date) {
    case 'year':
      data = {
        series: [
          {
            name: '3*9',
            data: [130, 120, 150]
          },
          {
            name: '5*4',
            data: [200, 300, 250]
          },
          {
            name: '8*2',
            data: [100, 80, 110]
          },
        ],
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
            categories: ['2022', '2023', '2024']
          }
        },
        details:[
          {
            group:'3*9',
            total:1000,
            average:2,
            distPercent:30,
          },
          {
            group:'5*4',
            total:1400,
            average:2,
            distPercent:30,
          },
          {
            group:'8*2',
            total:700,
            average:2,
            distPercent:30,
          },
        ]
      };
      break;
    case 'month':
      data = {
        series: [
          {
            name: '3*9',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          },
          {
            name: '5*4',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 200]
          },
          {
            name: '8*2',
            data: [120, 41, 35, 51, 49, 62, 69, 91, 150]
          },
        ],
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
          }
        },
        details:[
          {
            group:'3*9',
            total:100,
            average:2,
            distPercent:30,
          },
          {
            group:'5*4',
            total:140,
            average:2,
            distPercent:30,
          },
          {
            group:'8*2',
            total:70,
            average:2,
            distPercent:30,
          },
        ]
      };
      break;
    default:
      data = {
        series: [
          {
            name: '3*9',
            data: [10, 41, 35, 51, 49, 69, 148]
          },
          {
            name: '5*4',
            data: [10, 41, 35, 51, 49, 62, 91]
          },
          {
            name: '8*2',
            data: [120, 51, 49, 62, 69, 91, 150]
          },
        ],
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
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        },
        details:[
          {
            group:'3*9',
            total:10,
            average:2,
            distPercent:30,
          },
          {
            group:'5*4',
            total:14,
            average:2,
            distPercent:30,
          },
          {
            group:'8*2',
            total:7,
            average:2,
            distPercent:30,
          },
        ]
      };
  }
  return data;
}

function teamGroup(date='week') {
  let data ={};
  switch(date) {
    case 'year':
      data = {
        series: [
          {
            name: '1 team',
            data: [130, 120, 150]
          },
          {
            name: '2 team',
            data: [200, 300, 250]
          },
          {
            name: '3 team',
            data: [100, 80, 110]
          },
        ],
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
            categories: ['2022', '2023', '2024']
          }
        },
        details:[
          {
            group:'1 team',
            total:100,
            average:2,
            distPercent:30,
          },
          {
            group:'2 team',
            total:140,
            average:2,
            distPercent:30,
          },
          {
            group:'3 team',
            total:70,
            average:2,
            distPercent:30,
          },
        ]
      };
      break;
    case 'month':
      data = {
        series: [
          {
          name: '1 team',
          data: [85, 27, 63, 71, 92, 48, 74, 106, 183]
          },
          {
          name: '2 team',
          data: [92, 35, 54, 77, 61, 83, 58, 78, 225]
          },
          {
          name: '3 team',
          data: [143, 29, 47, 65, 82, 55, 64, 99, 166]
          },
        ],
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
          }
        },
        details:[
          {
            group:'1 team',
            total:10,
            average:2,
            distPercent:30,
          },
          {
            group:'2 team',
            total:15,
            average:2,
            distPercent:30,
          },
          {
            group:'3 team',
            total:7,
            average:2,
            distPercent:30,
          },
        ]
      };
      break;
    default:
      data = {
        series: [
          {
            name: '1 team',
            data: [22, 57, 41, 38, 73, 82, 134]
            },
            {
            name: '2 team',
            data: [17, 35, 47, 28, 55, 75, 103]
            },
            {
            name: '3 team',
            data: [134, 43, 64, 77, 84, 106, 172]
          },
        ],
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
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
        },
        details:[
          {
            group:'1 team',
            total:10,
            average:2,
            distPercent:30,
          },
          {
            group:'2 team',
            total:3,
            average:2,
            distPercent:30,
          },
          {
            group:'3 team',
            total:2,
            average:2,
            distPercent:30,
          },
        ]
      };
  }
  return data;
}

function rearrangeData(importdatas, dates) {
  if (importdatas.length == 0) {
      return [];
  }
  // Company 
  let datas = [];
  let companies = ['3*9', '5*4', '8*2'];
  for (let companyname of companies) {
      let filterdData = importdatas.filter(
          (obj) => obj.organization === companyname
      );
      if(filterdData.length){

          // Initialize the sums
          let planSum = 0;
          let incomeSum = 0;
  
          let sum = {};
          for (let i = 1; i <= dates.length; i++) {
              sum[`day${i}`] = 0;
          }
          // Loop through the filtered items and calculate the sums
          filterdData.forEach((item) => {
              planSum += parseFloat(item["plan"]);
              for (let i = 1; i <= dates.length; i++) {
                  if (item[`day${i}`]) {
                      incomeSum += parseFloat(item[`day${i}`]);
                  }
                  sum[`day${i}`] += parseFloat(item[`day${i}`]);
              }
          });
  
          let result = {
              company: companyname,
              plan: planSum,
              income: incomeSum,
          };
          for (let i = 1; i <= dates.length; i++) {
              result[`day${i}`] = sum[`day${i}`];
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
                  for (let i = 1; i <= dates.length; i++) {
                      acc[obj.team][`day${i}`] = 0;
                  }
              }
              acc[obj.team].plan += parseFloat(obj.plan);
  
              for (let i = 1; i <= dates.length; i++) {
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
                  teamshow: key,
                  plan: groupedByTeam[key]["plan"],
                  income: groupedByTeam[key]["income"],
              };
  
              for (let i = 1; i <= dates.length; i++) {
                  teamresult[`day${i}`] = groupedByTeam[key][`day${i}`];
              }
              datas.push(teamresult);
  
              if (groupedByTeam[key].hasOwnProperty("items")) {
                  groupedByTeam[key].items.map((item) => {
                      item["income"] = 0;
                      for (let i = 1; i <= dates.length; i++) {
                          if (item[`day${i}`]) {
                              item["income"] += parseFloat(item[`day${i}`]);
                          }
                      }
                      datas.push(item);
                  });
              }
          });
      }
  }
  return datas;
}


