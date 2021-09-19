"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const users_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/users.controller"));
class UsersRoute {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.usersController = new users_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.usersController.getRandomMessage);
        this.router.post(`${this.path}`, this.usersController.createUserAction);
    }
}
exports.default = UsersRoute;
//# sourceMappingURL=users.route.js.map