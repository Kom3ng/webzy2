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
 * @interface GetMyUnreadMessageCount200ResponseResultInner
 */
export interface GetMyUnreadMessageCount200ResponseResultInner {
    /**
     * 
     * @type {number}
     * @memberof GetMyUnreadMessageCount200ResponseResultInner
     */
    type?: number;
    /**
     * 
     * @type {number}
     * @memberof GetMyUnreadMessageCount200ResponseResultInner
     */
    count?: number;
}

/**
 * Check if a given object implements the GetMyUnreadMessageCount200ResponseResultInner interface.
 */
export function instanceOfGetMyUnreadMessageCount200ResponseResultInner(value: object): value is GetMyUnreadMessageCount200ResponseResultInner {
    return true;
}

export function GetMyUnreadMessageCount200ResponseResultInnerFromJSON(json: any): GetMyUnreadMessageCount200ResponseResultInner {
    return GetMyUnreadMessageCount200ResponseResultInnerFromJSONTyped(json, false);
}

export function GetMyUnreadMessageCount200ResponseResultInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyUnreadMessageCount200ResponseResultInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'count': json['count'] == null ? undefined : json['count'],
    };
}

export function GetMyUnreadMessageCount200ResponseResultInnerToJSON(json: any): GetMyUnreadMessageCount200ResponseResultInner {
    return GetMyUnreadMessageCount200ResponseResultInnerToJSONTyped(json, false);
}

export function GetMyUnreadMessageCount200ResponseResultInnerToJSONTyped(value?: GetMyUnreadMessageCount200ResponseResultInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'count': value['count'],
    };
}

