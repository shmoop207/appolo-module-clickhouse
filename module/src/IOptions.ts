import {Connection} from "@clickhouse/client";
import {ConnectionParams} from "@clickhouse/client/dist/connection/connection";


export interface IOptions {
    id?: string;
    host: string
    username: string
    password: string

    checkConnection?: boolean
    requestTimeout?: number
    config: Partial<ConnectionParams>
}
