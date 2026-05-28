import { Request, Response } from 'express';
import { T } from "../libs/types/common";



const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send('Home Page');
    } catch (err) {
        console.log("Error on goHome", err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login Page');
    } catch (err) {
        console.log("Error on getLogin", err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup Page');
    } catch (err) {
        console.log("Error on getSignup", err);
    }
}

export default restaurantController;