import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import Errors, { Message } from '../libs/Errors';

const memberService = new MemberService          // create instance of the service

const restaurantController: T = {}

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.render("home");
        // response options: send | json | redirect | end | render
    } catch (err) {
        console.log("Error on goHome", err);;
        res.redirect("/admin");
    }
}

// GET /admin/signup  →  shows the signup page
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.render("signup");
    } catch (err) {
        console.log("Error on getSignup", err);
        res.redirect("/admin");
    }
}

// GET /admin/login  →  shows the login page
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.render("login");
    } catch (err) {
        console.log("Error on getLogin", err);
        res.redirect("/admin");
    }
}


// POST /admin/signup  →  receives signup form data, saves a new restaurant to MongoDB
restaurantController.processSignup = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log('processSignup')

        const newMember: MemberInput = req.body          // get form data sent from the browser
        newMember.memberType = MemberType.RESTAURANT;    // force the type to RESTAURANT
        const result = await memberService.processSignup(newMember); // call the service to save to DB
        // TODO: SESSIONS AUTHENTICATION
        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        });
    } catch (err) {
        console.log("Error on processSignup", err);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script>alert("${message}"); window.location.replace('admin/signup') </script>`
        );
    }
}

// POST /admin/login  →  receives login form data and processes it
restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin')
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        // TODO: SESSIONS AUTHENTICATION
        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        });
    } catch (err) {
        console.log("Error on processLogin", err);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script>alert("${message}"); window.location.replace('admin/login') </script>`
        );
    }
}


restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log('logout')
        req.session.destroy(function() {
            res.redirect("/admin")
        })
    } catch (err) {
        console.log("Error on logout", err);
        res.redirect("/admin");
    }
}




restaurantController.checkAuthSession = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("checkAuthSession");
        if (req.session?.member) res.send (`<script> alert("${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession", err);
        res.send(err)
    }
    
}

export default restaurantController;
