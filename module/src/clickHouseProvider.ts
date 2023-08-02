import {define, inject, singleton, IFactory} from '@appolo/inject'
import {ClickHouseClient} from "@clickhouse/client";
import {clearInterval} from "timers";
import {ILogger} from '@appolo/logger';
import {ClickHouseConnection} from "./clickHouseConnection";
import {CommandParams, CommandResult, ExecParams, InsertParams, QueryParams, ExecResult} from "@clickhouse/client";
import {Readable} from "stream";


@define()
@singleton()
export class ClickHouseProvider {

    @inject() protected logger: ILogger;
    @inject("clickHouseConnection") protected _client: ClickHouseClient<Readable>;

    public close(): Promise<void> {
        return this._client.close();
    }

    public get client(): ClickHouseClient {
        return this._client
    }

    public async exec(params: ExecParams): Promise<ExecResult<Readable>> {
        let result = await this._client.exec(params)
        return result

    }

    public async command(params: CommandParams): Promise<CommandResult> {
        let result = await this._client.command(params)

        return result;
    }

    public async query<T>(params: QueryParams): Promise<T> {
        let query = await this._client.query(params)

        return query.json<T>()
    }

    public async stream(params: QueryParams): Promise<Readable> {
        let query = await this._client.query(params)

        return query.stream()
    }

    public async insert(params: InsertParams<Readable>): Promise<void> {
        await this._client.insert(params)
    }
}
