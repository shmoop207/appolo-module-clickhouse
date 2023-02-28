"use strict";
import {define, factory, IFactory, inject, factoryMethod, singleton} from '@appolo/inject'
import {ILogger} from '@appolo/logger';
import {IOptions} from "./IOptions";
import {ClickHouseClient, createClient} from "@clickhouse/client";

@define()
@singleton()
@factory()
export class ClickHouseConnection implements IFactory<ClickHouseClient> {

    @inject() protected logger: ILogger;
    @inject() protected moduleOptions: IOptions;

    public async get(): Promise<ClickHouseClient> {

        try {

            let client = createClient({
                ...(this.moduleOptions.config || {} as any),
                host: this.moduleOptions.host,
                username: this.moduleOptions.username,
                password: this.moduleOptions.password
            })

            if(this.moduleOptions.checkConnection){
                const isAlive = await client.ping();

                if(!isAlive){
                    throw new Error(`failed to connect to clickhouse`)
                }
            }

            this.logger.info(`connected to clickhouse ${this.moduleOptions.id}`);

            return client;

        } catch (e) {

            this.logger.error(`failed to connect to clickhouse ${this.moduleOptions.id}`, {err: e.toString()});

            throw e;
        }
    }
}
