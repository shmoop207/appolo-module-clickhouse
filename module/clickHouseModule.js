"use strict";
var ClickHouseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const clickHouseProvider_1 = require("./src/clickHouseProvider");
const inject_1 = require("@appolo/inject");
let ClickHouseModule = ClickHouseModule_1 = class ClickHouseModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "clickHouseProvider",
            checkConnection: true,
        };
    }
    static for(options) {
        return { type: ClickHouseModule_1, options };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: clickHouseProvider_1.ClickHouseProvider }];
    }
    beforeModuleInitialize() {
    }
    async beforeReset() {
        await this.clickHouseProvider.close();
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], ClickHouseModule.prototype, "clickHouseProvider", void 0);
ClickHouseModule = ClickHouseModule_1 = tslib_1.__decorate([
    (0, engine_1.module)()
], ClickHouseModule);
exports.ClickHouseModule = ClickHouseModule;
//# sourceMappingURL=clickHouseModule.js.map