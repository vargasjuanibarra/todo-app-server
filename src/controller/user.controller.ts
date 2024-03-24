import { Request, Response } from "express";
import { sample_user } from "../sample_data";
import { User, UserModel } from "../models/user.models";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    res.send(sample_user)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Error')
  }
}

export const registerUser = async (req: Request, res:Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({email})

    if (existingUser) {
      res.status(403).send('Email already exists!');
      return
    }

    const encyptedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: '',
      name,
      email: email.toLowerCase(),
      password:encyptedPassword,
    }

    await UserModel.create(newUser)

    res.status(200).send(newUser)

  } catch (error) {
    throw new Error(`Internal Error on registering user ${error}`)
  }
}

export const loginUser = async(req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({email});
  if(!user) {
    res.status(404).send('User does not exist!');
    return
  }

  try {
    if(await bcrypt.compare(password, user.password)) {
      res.status(200).send(generateToken(user))
    } else {
    res.status(500).send('Invalid password!')
    }
  } catch (error) {
    
  }
}

const generateToken = (user:User) => {
  const token = jwt.sign({email: user.email}, 'itsAFoqingSecretBruv', {expiresIn: '30d'})

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token
  }
}

