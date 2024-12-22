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
import type { GetMyMessageList200ResponseResultItemsInner } from './GetMyMessageList200ResponseResultItemsInner';
import {
    GetMyMessageList200ResponseResultItemsInnerFromJSON,
    GetMyMessageList200ResponseResultItemsInnerFromJSONTyped,
    GetMyMessageList200ResponseResultItemsInnerToJSON,
    GetMyMessageList200ResponseResultItemsInnerToJSONTyped,
} from './GetMyMessageList200ResponseResultItemsInner';

/**
 * 
 * @export
 * @interface GetMyMessageList200ResponseResult
 */
export interface GetMyMessageList200ResponseResult {
    /**
     * 
     * @type {number}
     * @memberof GetMyMessageList200ResponseResult
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<GetMyMessageList200ResponseResultItemsInner>}
     * @memberof GetMyMessageList200ResponseResult
     */
    items?: Array<GetMyMessageList200ResponseResultItemsInner>;
}

/**
 * Check if a given object implements the GetMyMessageList200ResponseResult interface.
 */
export function instanceOfGetMyMessageList200ResponseResult(value: object): value is GetMyMessageList200ResponseResult {
    return true;
}

export function GetMyMessageList200ResponseResultFromJSON(json: any): GetMyMessageList200ResponseResult {
    return GetMyMessageList200ResponseResultFromJSONTyped(json, false);
}

export function GetMyMessageList200ResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyMessageList200ResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(GetMyMessageList200ResponseResultItemsInnerFromJSON)),
    };
}

export function GetMyMessageList200ResponseResultToJSON(json: any): GetMyMessageList200ResponseResult {
    return GetMyMessageList200ResponseResultToJSONTyped(json, false);
}

export function GetMyMessageList200ResponseResultToJSONTyped(value?: GetMyMessageList200ResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalCount': value['totalCount'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(GetMyMessageList200ResponseResultItemsInnerToJSON)),
    };
}
