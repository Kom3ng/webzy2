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
import type { ApiError } from './ApiError';
import {
    ApiErrorFromJSON,
    ApiErrorFromJSONTyped,
    ApiErrorToJSON,
    ApiErrorToJSONTyped,
} from './ApiError';
import type { GetQWeather200ResponseResult } from './GetQWeather200ResponseResult';
import {
    GetQWeather200ResponseResultFromJSON,
    GetQWeather200ResponseResultFromJSONTyped,
    GetQWeather200ResponseResultToJSON,
    GetQWeather200ResponseResultToJSONTyped,
} from './GetQWeather200ResponseResult';

/**
 * 
 * @export
 * @interface GetQWeather200Response
 */
export interface GetQWeather200Response {
    /**
     * 
     * @type {GetQWeather200ResponseResult}
     * @memberof GetQWeather200Response
     */
    result?: GetQWeather200ResponseResult;
    /**
     * 
     * @type {string}
     * @memberof GetQWeather200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetQWeather200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetQWeather200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetQWeather200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetQWeather200Response
     */
    adp?: boolean;
}

/**
 * Check if a given object implements the GetQWeather200Response interface.
 */
export function instanceOfGetQWeather200Response(value: object): value is GetQWeather200Response {
    return true;
}

export function GetQWeather200ResponseFromJSON(json: any): GetQWeather200Response {
    return GetQWeather200ResponseFromJSONTyped(json, false);
}

export function GetQWeather200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetQWeather200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : GetQWeather200ResponseResultFromJSON(json['result']),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'adp': json['__adp'] == null ? undefined : json['__adp'],
    };
}

export function GetQWeather200ResponseToJSON(json: any): GetQWeather200Response {
    return GetQWeather200ResponseToJSONTyped(json, false);
}

export function GetQWeather200ResponseToJSONTyped(value?: GetQWeather200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': GetQWeather200ResponseResultToJSON(value['result']),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__adp': value['adp'],
    };
}
