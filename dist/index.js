"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
//Define Routes
app.get('/', (req, res) => {
    res.json({ message: "App is running as expected" });
});
app.get('/health', (req, res) => {
    res.json({ message: "Everything is healthy 😊" });
});
//Start express server
app.listen(PORT, () => {
    console.log(`Application is up and running on PORT ${PORT}`);
});
