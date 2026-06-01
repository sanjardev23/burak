import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';


const restaurantController: T = {}

// GET /admin/  →  just sends "Home Page" text for now
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.send('Home Page');
        // response options: send | json | redirect | end | render
    } catch (err) {
        console.log("Error on goHome", err);
    }
}

// GET /admin/login  →  shows the login page
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.send('Login Page');
    } catch (err) {
        console.log("Error on getLogin", err);
    }
}

// GET /admin/signup  →  shows the signup page
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.send('Signup Page');
    } catch (err) {
        console.log("Error on getSignup", err);
    }
}

// POST /admin/login  →  receives login form data and processes it
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin')
        console.log("body:", req.body)
        const input: LoginInput = req.body;

        const memberService = new MemberService()
        const result = await memberService.processLogin(input)

        res.send(result);
    } catch (err) {
        console.log("Error on processLogin", err);
        res.send(err)
    }
}

// POST /admin/signup  →  receives signup form data, saves a new restaurant to MongoDB
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup')

        const newMember: MemberInput = req.body          // get form data sent from the browser
        newMember.memberType = MemberType.RESTAURANT;    // force the type to RESTAURANT

        const memberService = new MemberService          // create instance of the service
        const result = await memberService.processSignup(newMember); // call the service to save to DB

        res.send(result); // send the created member back as a response
    } catch (err) {
        console.log("Error on processSignup", err);
        res.send(err)
    }
}

export default restaurantController;
