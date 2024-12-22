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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetMessagesRequest
 */
export interface GetMessagesRequest {
    /**
     * 
     * @type {string}
     * @memberof GetMessagesRequest
     */
    sessionId?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMessagesRequest
     */
    skip?: number;
    /**
     * 
     * @type {number}
     * @memberof GetMessagesRequest
     */
    take?: number;
}

/**
 * Check if a given object implements the GetMessagesRequest interface.
 */
export function instanceOfGetMessagesRequest(value: object): value is GetMessagesRequest {
    return true;
}

export function GetMessagesRequestFromJSON(json: any): GetMessagesRequest {
    return GetMessagesRequestFromJSONTyped(json, false);
}

export function GetMessagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMessagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['SessionId'] == null ? undefined : json['SessionId'],
        'skip': json['Skip'] == null ? undefined : json['Skip'],
        'take': json['Take'] == null ? undefined : json['Take'],
    };
}

export function GetMessagesRequestToJSON(json: any): GetMessagesRequest {
    return GetMessagesRequestToJSONTyped(json, false);
}

export function GetMessagesRequestToJSONTyped(value?: GetMessagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'SessionId': value['sessionId'],
        'Skip': value['skip'],
        'Take': value['take'],
    };
}
