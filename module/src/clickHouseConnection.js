"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseConnection = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const client_1 = require("@clickhouse/client");
let ClickHouseConnection = class ClickHouseConnection {
    async get() {
        try {
            let client = (0, client_1.createClient)(Object.assign(Object.assign({}, (this.moduleOptions.config || {})), { host: this.moduleOptions.host, username: this.moduleOptions.username, password: this.moduleOptions.password }));
            if (this.moduleOptions.checkConnection) {
                const isAlive = await client.ping();
                if (!isAlive) {
                    throw new Error(`failed to connect to clickhouse`);
                }
            }
            this.logger.info(`connected to clickhouse ${this.moduleOptions.id}`);
            return client;
        }
        catch (e) {
            this.logger.error(`failed to connect to clickhouse ${this.moduleOptions.id}`, { err: e.toString() });
            throw e;
        }
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], ClickHouseConnection.prototype, "logger", void 0);
tslib_1.__decorate([
    (0, inject_1.inject)()
], ClickHouseConnection.prototype, "moduleOptions", void 0);
ClickHouseConnection = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)(),
    (0, inject_1.factory)()
], ClickHouseConnection);
exports.ClickHouseConnection = ClickHouseConnection;
//# sourceMappingURL=clickHouseConnection.js.map