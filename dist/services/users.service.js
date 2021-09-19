"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = exports.UserActionsService = void 0;
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const logger_models_1 = (0, tslib_1.__importDefault)(require("../models/logger.models"));
const util_1 = require("../utils/util");
const funnyMessage_1 = (0, tslib_1.__importDefault)(require("../models/funnyMessage"));
class UserActionsService {
    constructor() {
        this.usersActions = logger_models_1.default;
    }
    async createUserAction(userActionData) {
        if ((0, util_1.isEmpty)(userActionData))
            throw new HttpException_1.HttpException(400, "You're not userActionData");
        const createUserData = await this.usersActions.create(Object.assign({}, userActionData));
        return createUserData;
    }
}
exports.UserActionsService = UserActionsService;
class MessagesService {
    constructor() {
        this.funnyMessages = funnyMessage_1.default;
    }
    async getRandomMessage() {
        const funnyMessage = await this.funnyMessages.aggregate([{ $sample: { size: 1 } }]);
        return funnyMessage;
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=users.service.js.map