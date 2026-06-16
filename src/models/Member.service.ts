import { MemberType } from "./../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";


class MemberService {
  private readonly memberModel;             // holds the MongoDB model (used to query the DB)

  constructor() {
    this.memberModel = MemberModel;         // connect to the Member collection in MongoDB
  }


  /** SPA */

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input); 
      result.memberPassword = "";                         
      return result.toJSON();
    } catch (error) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }




  public async login(input: LoginInput): Promise<Member> {
    // TODO: Consider member status later
    const member = await this.memberModel
        .findOne(
            { memberNick: input.memberNick }, 
            { memberNick: 1, memberPassword: 1 }
        )
        .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword, 
      member.memberPassword
     );

    if (!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).lean().exec();
  }






  /** SSR */

  // creates a new restaurant account in the database
  public async processSignup(input: MemberInput): Promise<Member> {

    // check if a restaurant already exists (only 1 restaurant allowed)
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); // block if already exists

    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input); // save new member to MongoDB
      result.memberPassword = "";                          // hide the password before returning
      return result;
    } catch (error) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }




  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
        .findOne(
            { memberNick: input.memberNick }, 
            { memberNick: 1, memberPassword: 1 }
        )
        .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    // const isMatch = input.memberPassword === member.memberPassword;
    const isMatch = await bcrypt.compare(
      input.memberPassword, 
      member.memberPassword!
     );

    if (!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).exec();
  }


  public async getUsers(): Promise<Member[]> {
    const result = await this.memberModel
    .find({ memberType: MemberType.USER })
    .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async updateChosenUser(input: MemberUpdateInput): Promise<Member[]> {
    input._id = shapeIntoMongooseObjectId(input._id)
    const result = await this.memberModel
    .findByIdAndUpdate({ _id: input._id }, input, { new: true })
    .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }
}

export default MemberService;
