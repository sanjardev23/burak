// HTTP status codes — used when sending responses back to the browser
export enum HttpCode {
  OK = 200, // success
  CREATED = 201, // something was created successfully
  NOT_MODIFIED = 304, // nothing changed
  BAD_REQUEST = 400, // client sent wrong/invalid data
  UNAUTHORIZED = 401, // not logged in
  FORBIDDEN = 403, // logged in but no permission
  NOT_FOUND = 404, // resource doesn't exist
  INTERNAL_SERVER_ERROR = 500, // something broke on the server
}

// Reusable error messages
export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data found!",
  CREATE_FAILED = "Create failed!",
  UPDATE_FAILED = "Update failed!",

  USED_NICK_PHONE = "You are inserting already used nick or phone!",
  NO_MEMBER_NICK = "No member with that member nick",
  BLOCKED_USER = "You have been blocked, contact the resturant!",
  WRONG_PASSWORD = "Wrong password, please try again!",
  NOT_AUTHENTICATED = "You are not authenticated, please login first!",
}

// Custom error class — combines an HTTP code + a message into one object
class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standart = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
