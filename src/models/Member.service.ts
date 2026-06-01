import { MemberType } from "./../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";

// Service layer — contains all the business logic
// Controllers call this, this talks to the database

class MemberService {
  private readonly memberModel; // holds the MongoDB model (used to query the DB)

  constructor() {
    this.memberModel = MemberModel; // connect to the Member collection in MongoDB
  }

  // creates a new restaurant account in the database
  public async processSignup(input: MemberInput): Promise<Member> {

    // check if a restaurant already exists (only 1 restaurant allowed)
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();

    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); // block if already exists

    try {
      const result = await this.memberModel.create(input); // save new member to MongoDB
      result.memberPassword = "";                          // hide the password before returning
      return result;
    } catch (error) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService;
