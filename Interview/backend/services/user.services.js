const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/Users.model.js");
const jwtProvider = require("../config/jwtProvider.js");
const createUser = async (userData) => {
  try {
    console.log("Inside createUser Service");
    let { firstName, lastName, email, password, role } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exists with email: " + email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    console.log("User created: ", user);
    return user;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("user not found with id : ", userId);
    }
    return user;
  } catch (error) {
    console.log("error :------- ", error.message);
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("user found with email : ", email);
    }

    return user;
  } catch (error) {
    console.log("error - ", error.message);
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("error - ", error);
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,

  getUserByEmail,
  getAllUsers,
};
