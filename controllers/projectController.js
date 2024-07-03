const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const getProjectData = (projects) => {
  return projects.map(project => ({
    id: project._id,
    title: project.title,
    devField: project.devField,
    requiredSkills: project.requiredSkills,
    clientLocation: project.clientLocation,
    projectstatus: project.projectstatus,
    type: project.type,
    potentialBudget: project.potentialBudget,
    description: project.description,
    siteID:project.siteID,
    note: project.note,
    paymentDate: project.paymentDate,
    earnings: project.earnings,
    paymentDateAndIncome: project.earnings.map(item => `${item.date}-${item.cost}`).join(', ')
  }));
};

const calculateExpectedIncome = (projects) => {
  return projects.reduce((total, project) => {
    return total + project.earnings.reduce((sum, earning) => sum + parseFloat(earning.cost), 0);
  }, 0);
};

exports.getProjects = async (req, res, next) => {
  try {
    const allUsers = await userModel.find({ userID: { $ne: "superAdmin0303" } });
    if (!allUsers.length) {
      return res.status(404).json({ status_code: 1, message: "The data does not exist!" });
    }

    const projects = await Promise.all(
      allUsers.map(async (user) => {
        const allProjects = await projectModel.find({ userID: user.userID });
        const projectData = getProjectData(allProjects);
        const expectedIncome = calculateExpectedIncome(allProjects);

        return {
          userID: user.userID,
          name: user.name,
          company: user.organization,
          team: user.team,
          plan: '$5000',
          income: '$3000',
          devField: projectData.length ? projectData[0].devField : null,
          paymentDateAndIncome: projectData.map(proj => proj.paymentDateAndIncome).join(', '),
          expectedIncome: `$${expectedIncome}`,
          projects: projectData,
        };
      })
    );

    res.status(200).json({ status_code: 0, message: "Get Data Successfully!", data: { projects } });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
};

exports.addProject = async (req, res, next) => {
  const { title, userID, devField, requiredSkills, type, clientLocation, projectstatus, siteID, potentialBudget, description, earnings, note } = req.body;
  try {
    const existproject = await projectModel.findOne({ title, devField, requiredSkills, type, siteID });
    if (existproject) {
      return res.status(409).json({ status_code: 1, message: 'The project already exists!' });
    }

    const newProject = new projectModel({ title, userID, devField, requiredSkills, projectstatus, type, clientLocation, siteID, potentialBudget, description, earnings, note });
    await newProject.save();

    res.status(201).json({
      status_code: 0,
      message: 'Project was created successfully!',
      data: { project: {
        id: newProject._id,
        title: newProject.title,
        devField: newProject.devField,
        requiredSkills: newProject.requiredSkills,
        clientLocation: newProject.clientLocation,
        projectstatus: newProject.projectstatus,
        type: newProject.type,
        potentialBudget: newProject.potentialBudget,
        description: newProject.description,
        siteID:newProject.siteID,
        note: newProject.note,
        paymentDate: newProject.paymentDate,
        earnings: newProject.earnings,
        paymentDateAndIncome: newProject.earnings.map(item => `${item.date}-${item.cost}`).join(', ')
      } }
    });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
};

exports.getProjectByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const projects = await projectModel.find({ userID: id });
    if (!projects.length) {
      return res.status(404).json({ status_code: 1, message: "Projects not found!" });
    }
    console.log(projects)

    const projectData = getProjectData(projects);

    res.status(200).json({ status_code: 0, message: "Get Data Successfully!", data: { projects: projectData } });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
};

exports.updateProject = async (req, res, next) => {
  const { id } = req.params;
  const { title, devField, requiredSkills, type, clientLocation, projectstatus, siteID, potentialBudget, description, note, earnings } = req.body;
  try {
    const updatedProject = await projectModel.findByIdAndUpdate(id, { title, devField, requiredSkills, type, clientLocation, projectstatus, siteID, potentialBudget, description, note, earnings }, { new: true });

    if (!updatedProject) {
      return res.status(404).json({ status_code: 1, message: 'Project not found!' });
    }

    res.status(200).json({ status_code: 0, message: 'Selected project was updated successfully!', data: { project: updatedProject } });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
};

exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await projectModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ status_code: 1, message: 'Project not found!' });
    }

    res.status(200).json({ status_code: 0, message: 'Selected project was deleted successfully!' });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
};
