import {IModuleParams, Module, module} from "@appolo/engine";
import {IOptions} from "./src/IOptions";
import {ClickHouseProvider} from "./src/clickHouseProvider";
import {inject} from '@appolo/inject';

@module()
export class ClickHouseModule extends Module<IOptions> {

    @inject() clickHouseProvider: ClickHouseProvider

    public static for(options: IOptions): IModuleParams {
        return {type: ClickHouseModule, options}
    }

    protected readonly Defaults: Partial<IOptions> = {
        id: "clickHouseProvider",
        checkConnection: true,
    };

    public get exports() {
        return [{id: this.moduleOptions.id, type: ClickHouseProvider}];
    }

    public beforeModuleInitialize() {
        process.on("exit", () => {
            this.clickHouseProvider.close().catch()
        })
    }

    public async beforeReset() {

        await this.clickHouseProvider.close()
    }
}
