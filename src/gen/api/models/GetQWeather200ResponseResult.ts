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
import type { GetQWeather200ResponseResultDaily } from './GetQWeather200ResponseResultDaily';
import {
    GetQWeather200ResponseResultDailyFromJSON,
    GetQWeather200ResponseResultDailyFromJSONTyped,
    GetQWeather200ResponseResultDailyToJSON,
    GetQWeather200ResponseResultDailyToJSONTyped,
} from './GetQWeather200ResponseResultDaily';

/**
 * 
 * @export
 * @interface GetQWeather200ResponseResult
 */
export interface GetQWeather200ResponseResult {
    /**
     * 
     * @type {string}
     * @memberof GetQWeather200ResponseResult
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof GetQWeather200ResponseResult
     */
    updateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof GetQWeather200ResponseResult
     */
    fxLink?: string;
    /**
     * 
     * @type {GetQWeather200ResponseResultDaily}
     * @memberof GetQWeather200ResponseResult
     */
    daily?: GetQWeather200ResponseResultDaily;
}

/**
 * Check if a given object implements the GetQWeather200ResponseResult interface.
 */
export function instanceOfGetQWeather200ResponseResult(value: object): value is GetQWeather200ResponseResult {
    return true;
}

export function GetQWeather200ResponseResultFromJSON(json: any): GetQWeather200ResponseResult {
    return GetQWeather200ResponseResultFromJSONTyped(json, false);
}

export function GetQWeather200ResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetQWeather200ResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'updateTime': json['updateTime'] == null ? undefined : json['updateTime'],
        'fxLink': json['fxLink'] == null ? undefined : json['fxLink'],
        'daily': json['daily'] == null ? undefined : GetQWeather200ResponseResultDailyFromJSON(json['daily']),
    };
}

export function GetQWeather200ResponseResultToJSON(json: any): GetQWeather200ResponseResult {
    return GetQWeather200ResponseResultToJSONTyped(json, false);
}

export function GetQWeather200ResponseResultToJSONTyped(value?: GetQWeather200ResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'updateTime': value['updateTime'],
        'fxLink': value['fxLink'],
        'daily': GetQWeather200ResponseResultDailyToJSON(value['daily']),
    };
}
