import Errors, { HttpCode } from "../libs/Errors";
import { T } from "../libs/types/common";
import { ExtendenRequest } from "../libs/types/member";
import { Response } from "express";
import OrderService from "../models/Order.service";

const orderService = new OrderService();

const orderController: T = {};

orderController.createOrder = async (req: ExtendenRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error on createOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default orderController;
