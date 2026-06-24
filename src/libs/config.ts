// Morgan log format — printed in the terminal for every request
// shows: method (GET/POST), url, response time, and status code
export const MORGAN_FORMAT = `:method :url :response-time [:status] \n`;

import mongoose from "mongoose";

export const shapeIntoMongooseObjectId = (target: any) => {
  return typeof target === "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};
