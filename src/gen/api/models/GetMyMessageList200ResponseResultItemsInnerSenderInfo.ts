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
import type { RoleType } from './RoleType';
import {
    RoleTypeFromJSON,
    RoleTypeFromJSONTyped,
    RoleTypeToJSON,
    RoleTypeToJSONTyped,
} from './RoleType';

/**
 * 
 * @export
 * @interface GetMyMessageList200ResponseResultItemsInnerSenderInfo
 */
export interface GetMyMessageList200ResponseResultItemsInnerSenderInfo {
    /**
     * 
     * @type {string}
     * @memberof GetMyMessageList200ResponseResultItemsInnerSenderInfo
     */
    fullName?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMyMessageList200ResponseResultItemsInnerSenderInfo
     */
    gender?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMyMessageList200ResponseResultItemsInnerSenderInfo
     */
    picture?: string;
    /**
     * 
     * @type {RoleType}
     * @memberof GetMyMessageList200ResponseResultItemsInnerSenderInfo
     */
    roleType?: RoleType;
}



/**
 * Check if a given object implements the GetMyMessageList200ResponseResultItemsInnerSenderInfo interface.
 */
export function instanceOfGetMyMessageList200ResponseResultItemsInnerSenderInfo(value: object): value is GetMyMessageList200ResponseResultItemsInnerSenderInfo {
    return true;
}

export function GetMyMessageList200ResponseResultItemsInnerSenderInfoFromJSON(json: any): GetMyMessageList200ResponseResultItemsInnerSenderInfo {
    return GetMyMessageList200ResponseResultItemsInnerSenderInfoFromJSONTyped(json, false);
}

export function GetMyMessageList200ResponseResultItemsInnerSenderInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyMessageList200ResponseResultItemsInnerSenderInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'fullName': json['fullName'] == null ? undefined : json['fullName'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'picture': json['picture'] == null ? undefined : json['picture'],
        'roleType': json['roleType'] == null ? undefined : RoleTypeFromJSON(json['roleType']),
    };
}

export function GetMyMessageList200ResponseResultItemsInnerSenderInfoToJSON(json: any): GetMyMessageList200ResponseResultItemsInnerSenderInfo {
    return GetMyMessageList200ResponseResultItemsInnerSenderInfoToJSONTyped(json, false);
}

export function GetMyMessageList200ResponseResultItemsInnerSenderInfoToJSONTyped(value?: GetMyMessageList200ResponseResultItemsInnerSenderInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fullName': value['fullName'],
        'gender': value['gender'],
        'picture': value['picture'],
        'roleType': RoleTypeToJSON(value['roleType']),
    };
}

