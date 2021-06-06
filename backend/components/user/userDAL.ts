import { IMshUser } from "../../../shared/models";
export class UserDal {


    public async findByThirdPartyId(thirdPartyId: string): Promise<IMshUser> {
        throw Error();
    }

    public async findById(id: string): Promise<IMshUser> {
        throw Error();
    }

    public async create(newUser: IMshUser): Promise<IMshUser> {
        throw Error();
    }

    public async all(ids?: string[]): Promise<IMshUser[]> {
        throw Error();
    }
}