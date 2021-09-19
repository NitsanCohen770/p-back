"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
exports.dbConnection = {
    url: process.env.MONGODB_URL,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
};
//# sourceMappingURL=index.js.map