import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service"


const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.send('Home Page');
        // send | json | redirect | end | render => response methods
    } catch (err) {
        console.log("Error on goHome", err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.send('Login Page');
    } catch (err) {
        console.log("Error on getLogin", err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.send('Signup Page');
    } catch (err) {
        console.log("Error on getSignup", err);
    }
}


restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin')
        res.send('Process Login DONE');
    } catch (err) {
        console.log("Error on processLogin", err);
    }
}

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('processSignup')
        res.send('Signup Process DONE');
    } catch (err) {
        console.log("Error on processSignup", err);
    }
}
export default restaurantController;