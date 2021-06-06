import { UserService } from './userService';
import { Router } from "express";
var request = require('request-promise');
class UserApi {
    private _userRoutes: Router;
    private _userService: UserService;

    constructor() {
        this._userRoutes = Router();
        this._userService = new UserService();
        this.InitRoutes();
    }

    private InitRoutes() {
        this._userRoutes.get("/all", async (req, res) => {
            try{
                var dataAsString = await request('https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122');
                var candidates : Array<any> = JSON.parse(dataAsString);
                const result: Array<candidate> = [];
                for(let i = 0; i< candidates.length; i++){
                    const currentCandidate = candidates[i];
                    const newCandidate: candidate = {
                        name: currentCandidate["contact_info"]["name"]["formatted_name"],
                        positions: []
                    }
                    
                    const experiences = currentCandidate["experience"];
                    for(let j = 0; j < experiences.length; j++){
                        const experience = experiences[j];
                        const newPosition: position = {
                            name: experience["position_type"],
                            startDate: experience["start_date"],
                            endDate: experience["end_date"],
                        }
                        newCandidate.positions.push(newPosition);
                    }

                    result.push(newCandidate);
                }

                res.send(result);
            }

            catch{
                res.status(500).send("can not fetch data");
            }
        });
    }
    get userRoutes(): Router {
        return this._userRoutes;
    }
}

interface candidate{
    name: string,
    positions : Array<position>
}

interface position{
    name: string,
    startDate: string,
    endDate: string,
}

export default new UserApi().userRoutes;
