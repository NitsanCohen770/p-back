"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FunnyMessage = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
});
const funnyMessageModel = mongoose_1.models.FunnyMessage || (0, mongoose_1.model)('FunnyMessage', FunnyMessage);
exports.default = funnyMessageModel;
//# sourceMappingURL=funnyMessage.js.map