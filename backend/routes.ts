import usersApi from "./components/user/userApi";
import { Router } from "express";

class Routes {
    private _appRoutes: Router;
    constructor() {
        this._appRoutes = Router();

        this.initComponentsRoutes();

        // Init main Route
        // this._appRoutes.get("/", (req: any, res: any) => {
        //     res.sendFile(__dirname + "../dist/shift-it/index.html");
        // });

        this._appRoutes.get('/api', (req, res) => res.json({ application: 'App is good' }));
    }

    private initComponentsRoutes() {
        this._appRoutes.use("/user", usersApi);
    }

    get routes(): Router {
        return this._appRoutes;
    }
}

export default new Routes().routes;
