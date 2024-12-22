/* tslint:disable */
/* eslint-disable */
/**
 * 中育API
 * 中育的api
 *
 * The version of the OpenAPI document: 1.0
 * Contact: 3262392248@qq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ClientType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type ClientType = typeof ClientType[keyof typeof ClientType];


export function instanceOfClientType(value: any): boolean {
    for (const key in ClientType) {
        if (Object.prototype.hasOwnProperty.call(ClientType, key)) {
            if (ClientType[key as keyof typeof ClientType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ClientTypeFromJSON(json: any): ClientType {
    return ClientTypeFromJSONTyped(json, false);
}

export function ClientTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientType {
    return json as ClientType;
}

export function ClientTypeToJSON(value?: ClientType | null): any {
    return value as any;
}

export function ClientTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ClientType {
    return value as ClientType;
}

