"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("../services/users.service");
class UsersController {
    constructor() {
        this.userActionsService = new users_service_1.UserActionsService();
        this.messagesService = new users_service_1.MessagesService();
        this.getRandomMessage = async (req, res, next) => {
            try {
                const findRandomMessage = await this.messagesService.getRandomMessage();
                const randomFunnyMessage = { message: findRandomMessage[0].message };
                res.status(200).json({ data: randomFunnyMessage });
            }
            catch (error) {
                next(error);
            }
        };
        this.createUserAction = async (req, res, next) => {
            try {
                const userActionData = req.body;
                const IP = req.ip;
                const newUserAction = Object.assign(Object.assign({}, userActionData), { IP });
                const createUserData = await this.userActionsService.createUserAction(newUserAction);
                res.status(201).json({ data: createUserData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map