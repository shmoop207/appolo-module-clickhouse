import {ClickHouseClientConfigOptions, Connection} from "@clickhouse/client";


export interface IOptions {
    id?: string;
    host: string
    username: string
    password: string

    checkConnection?: boolean
    config: Partial<ClickHouseClientConfigOptions>
}
