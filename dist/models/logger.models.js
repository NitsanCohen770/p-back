"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userActionSchema = new mongoose_1.Schema({
    IP: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
}, { timestamps: { createdAt: 'created_at' } });
const userModel = mongoose_1.models.UserActions || (0, mongoose_1.model)('UserActions', userActionSchema);
exports.default = userModel;
//# sourceMappingURL=logger.models.js.map