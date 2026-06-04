import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const memberService = new MemberService          // create instance of the service

const restaurantController: T = {}

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.render("home");
        // response options: send | json | redirect | end | render
    } catch (err) {
        console.log("Error on goHome", err);
    }
}

// GET /admin/signup  →  shows the signup page
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.render("signup");
    } catch (err) {
        console.log("Error on getSignup", err);
    }
}

// GET /admin/login  →  shows the login page
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.render("login");
    } catch (err) {
        console.log("Error on getLogin", err);
    }
}


// POST /admin/signup  →  receives signup form data, saves a new restaurant to MongoDB
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup')

        const newMember: MemberInput = req.body          // get form data sent from the browser
        newMember.memberType = MemberType.RESTAURANT;    // force the type to RESTAURANT
        const result = await memberService.processSignup(newMember); // call the service to save to DB
        // TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error on processSignup", err);
        res.send(err)
    }
}

// POST /admin/login  →  receives login form data and processes it
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin')
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        // TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error on processLogin", err);
        res.send(err)
    }
}


export default restaurantController;
