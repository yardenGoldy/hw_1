import { UserDal } from "./userDAL";
import { IMshUser } from "./../../../shared/models";
export class UserService {
    private _dal = new UserDal();
    async findByThirdPartyId(thirdPartyId: string): Promise<IMshUser> {
        const user = await this._dal.findByThirdPartyId(thirdPartyId);
        return user;
    }

    async findById(id: string): Promise<IMshUser> {
        const user = await this._dal.findById(id);
        return user;
    }

    async create(newUser: IMshUser): Promise<IMshUser> {
        const user = await this._dal.create(newUser);
        return user;
    }

    async all(ids?: string[]): Promise<IMshUser[]> {
        const users = await this._dal.all(ids);
        return users;
    }

    async getAllTeamsForUser(thirdPartyId: string): Promise<string[]> {
        const user = await this._dal.findByThirdPartyId(thirdPartyId);
        return user.teamsIds;
    }
} 