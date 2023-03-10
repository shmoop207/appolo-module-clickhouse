import {define, inject, singleton, IFactory} from '@appolo/inject'
import {ClickHouseClient} from "@clickhouse/client";
import {clearInterval} from "timers";
import {ILogger} from '@appolo/logger';
import {ClickHouseConnection} from "./clickHouseConnection";
import {ExecParams, InsertParams, QueryParams} from "@clickhouse/client/dist/client";
import {Readable} from "stream";


@define()
@singleton()
export class ClickHouseProvider {

    @inject() protected logger: ILogger;
    @inject("clickHouseConnection") protected _client: ClickHouseClient;

    public close(): Promise<void> {
        return this._client.close();
    }

    public get client(): ClickHouseClient {
        return this._client
    }

    public async exec(params: ExecParams): Promise<void> {
        await this._client.exec(params)
    }

    public async query<T>(params: QueryParams): Promise<T> {
        let query = await this._client.query(params)

        return query.json<T>()
    }

    public async stream(params: QueryParams): Promise<Readable> {
        let query = await this._client.query(params)

        return query.stream()
    }

    public async insert(params: InsertParams): Promise<void> {
        await this._client.insert(params)
    }
}
