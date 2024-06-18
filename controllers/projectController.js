const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");

const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

exports.getProjects = async (req, res, next) => { 
  const projects = [];
  try {
    const allusers = await userModel.find({ userID: { $ne: "superAdmin0303" } });
    if (allusers) {
      for (let user of allusers) {
      const datas = [];
      let allprojects = await projectModel.find({userID:user._id});
      if(projects.length){
          for (let project of allprojects){
              let newData = {
                'id': project.id,
                'title': project.title,
                'devField':project.devField,
                'requiredSkills':project.requiredSkills,
                'clientLocation':project.clientLocation,
                'projectstatus':project.projectstatus,
                'type': project.type,
                'potentialBudget':project.potentialBudget,
                'description': project.description,
                'note': project.note,
                'paymentDate': project.paymentDate,
                'earnings':project.earnings,                
                'totalCost': 120,
                'note': "Note",
              }              
              datas.push(newData);
          }
        }
        projects.push({
          userID:user._id,         
          name:user.name,
          company:user.organization,
          team:user.team,
          project:datas
        });
      }
      res.status(200).json({
        status_code: 0,
        message: "Get Data Successfully!",
        data: {
          projects
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
  console.log(req.body)

  const { title, userID, devField, requiredSkills, type, clientLocation, projectstatus, siteID, potentialBudget, description,earnings, note} = req.body;
  try {
    const existproject = await projectModel.findOne({ title:title, devField:devField, requiredSkills:requiredSkills, type:type, siteID:siteID });    
    if (!existproject) {
      const newproject = new projectModel({
        title: title,
        userID: userID,
        devField: devField,
        requiredSkills: requiredSkills,
        projectstatus:projectstatus,
        type:type,
        clientLocation:clientLocation,
        siteID:siteID,
        potentialBudget:potentialBudget,
        description:description,
        earnings:earnings,
        note:note

      })
      console.log('projectstatus------------------------------------->', projectstatus)
      await newproject.save()
      res.status(200).json({
        status_code: 0,
        message: 'project was created successfully!',
        data: {
          project: {
            'id': newproject.id,
            'title': newproject.title,
            'userID': newproject.userID,
            'devField': newproject.devField,
            'requiredSkills':newproject.requiredSkills,
            'type': newproject.type,
            'clientLocation':newproject.clientLocation,
            'projectstatus':newproject.projectstatus,
            'siteID': newproject.siteID,
            'potentialBudget': newproject.potentialBudget,
            'description' :newproject.description,
            'note':note
          }
        }
      });
    } else {
      res.status(200).json({
        status_code: 1,
        message: 'The project was already exist!'
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

  const { id } = req.params
  try {
    const datas = [];
      let allprojects = await projectModel.find({userID:id});
      console.log(allprojects)
      if(allprojects.length){
        for (let project of allprojects){
            let newData = {
              'id': project.id,
              'title': project.title,
              'plan': 100,
              'income': 100,
              'devField': project.devField,
              'requiredSkills':project.requiredSkills,
              'clientLocation':project.clientLocation,
              'type':project.type,
              'projectstatus':project.projectstatus,       
              'siteID':project.siteID,
              'potentialBudget': project.potentialBudget,
              'description' : project.description,
              'earnings' : project.earnings,
              'note': project.note       
            }
            datas.push(newData);
        }
      }
    res.status(200).json({
      status_code: 0,
      message: "Get Data Successfully!",
      data: {
        projects:datas
      }
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

exports.updateProject = async (req, res, next) => {

  const { id } = req.params
  const { title, devField, requiredSkills, type, clientLocation, projectstatus, siteID, potentialBudget, description, note, earnings } = req.body;

  try {
    const updateproject = await projectModel.findOneAndUpdate({ _id: id }, {
      title: title,
      devField: devField,
      requiredSkills: requiredSkills,
      type: type,
      clientLocation: clientLocation,
      projectstatus: projectstatus,
      siteID: siteID,
      potentialBudget: potentialBudget,
      description: description,
      note: note,
      earnings: earnings
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



