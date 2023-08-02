"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseClient = exports.ClickHouseProvider = exports.ClickHouseModule = void 0;
var clickHouseModule_1 = require("./module/clickHouseModule");
Object.defineProperty(exports, "ClickHouseModule", { enumerable: true, get: function () { return clickHouseModule_1.ClickHouseModule; } });
var clickHouseProvider_1 = require("./module/src/clickHouseProvider");
Object.defineProperty(exports, "ClickHouseProvider", { enumerable: true, get: function () { return clickHouseProvider_1.ClickHouseProvider; } });
var client_1 = require("@clickhouse/client");
Object.defineProperty(exports, "ClickHouseClient", { enumerable: true, get: function () { return client_1.ClickHouseClient; } });
//# sourceMappingURL=index.js.map