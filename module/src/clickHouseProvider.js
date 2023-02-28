"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
let ClickHouseProvider = class ClickHouseProvider {
    close() {
        return this._client.close();
    }
    get client() {
        return this._client;
    }
    async exec(params) {
        await this._client.exec(params);
    }
    async query(params) {
        let query = await this._client.query(params);
        return query.json();
    }
    async stream(params) {
        let query = await this._client.query(params);
        return query.stream();
    }
    async insert(params) {
        await this._client.insert(params);
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], ClickHouseProvider.prototype, "logger", void 0);
tslib_1.__decorate([
    (0, inject_1.inject)("clickHouseConnection")
], ClickHouseProvider.prototype, "_client", void 0);
ClickHouseProvider = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], ClickHouseProvider);
exports.ClickHouseProvider = ClickHouseProvider;
//# sourceMappingURL=clickHouseProvider.js.map