const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

exports.getProjects = async (req, res, next) => {
  // const { year, month } = req.body;
  const projects = [];
  try {
    const allprojects = await projectModel.find();
    if (allprojects) {
      for (let project of allprojects) {
      let userInfo = {};
      await userModel.findById(project.userID, function (err, docs) {
          if (err){
              console.log(err);
          }
          else{
              userInfo = docs;
          }
      });
        let newData = {
          '_id': project._id,
          'title': project.title,
          'plan': 100,
          'income': 100,
          'devField': 'Dev Field',
          'cost': 100,
          'totalCost': 120,
          'note': "Note",
          'username': userInfo.name,
          'company': userInfo.organization,
          'team': userInfo.team,
        }
        projects.push(newData);
      }
      res.status(200).json({
        status_code: 0,
        message: "Get Data Successfully!",
        data: {
          projects: projects
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

exports.addProject = async (req, res, next) => {

  const { title, userID } = req.body;
  try {
    const existproject = await projectModel.findOne({ title:title });
    if (!existproject) {
      const newproject = new projectModel({
        title: title,
        userID:userID,
      })
      await newproject.save()
      res.status(200).json({
        status_code: 0,
        message: 'project was created successfully!',
        data: {
          project: {
            '_id': newproject._id,
            'title': newproject.title,
            'userID': newproject.userID,
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

exports.getProjectByID = async (req, res, next) => {

  const { ID } = req.params

  try {

    const existProject = await projectModel.findOne({ _id: ID }).lean()

    if (!existProject) {
      const error = new Error("Project with this ID not found!");
      error.statusCode = 401;
      throw error;
    }

    res.status(200).json({
      existProject
    });

  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.updateProject = async (req, res, next) => {

  const { _id, year, month, amount } = req.body;

  try {
    const updateproject = await projectModel.findOneAndUpdate({ _id: _id }, {
      // year: year,
      // month: month,
      amount: amount,
    });

    if (updateproject) {
      res.status(200).json({
        status_code: 0,
        message: 'selected project was updated successfully!',
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

exports.deleteProject = async (req, res, next) => {
  const { _id } = req.body;
  console.log("deleted", _id);
  try {
    const result = await projectModel.findByIdAndDelete(_id);
    if (result) {
      res.status(200).json({
        status_code: 0,
        message: 'selected project was deleted successfully!',
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


