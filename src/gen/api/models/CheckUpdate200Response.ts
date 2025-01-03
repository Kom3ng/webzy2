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
import type { CheckUpdate200ResponseResult } from './CheckUpdate200ResponseResult';
import {
    CheckUpdate200ResponseResultFromJSON,
    CheckUpdate200ResponseResultFromJSONTyped,
    CheckUpdate200ResponseResultToJSON,
    CheckUpdate200ResponseResultToJSONTyped,
} from './CheckUpdate200ResponseResult';
import type { ApiError } from './ApiError';
import {
    ApiErrorFromJSON,
    ApiErrorFromJSONTyped,
    ApiErrorToJSON,
    ApiErrorToJSONTyped,
} from './ApiError';

/**
 * 
 * @export
 * @interface CheckUpdate200Response
 */
export interface CheckUpdate200Response {
    /**
     * 
     * @type {CheckUpdate200ResponseResult}
     * @memberof CheckUpdate200Response
     */
    result?: CheckUpdate200ResponseResult;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CheckUpdate200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof CheckUpdate200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof CheckUpdate200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CheckUpdate200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the CheckUpdate200Response interface.
 */
export function instanceOfCheckUpdate200Response(value: object): value is CheckUpdate200Response {
    return true;
}

export function CheckUpdate200ResponseFromJSON(json: any): CheckUpdate200Response {
    return CheckUpdate200ResponseFromJSONTyped(json, false);
}

export function CheckUpdate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckUpdate200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : CheckUpdate200ResponseResultFromJSON(json['result']),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function CheckUpdate200ResponseToJSON(json: any): CheckUpdate200Response {
    return CheckUpdate200ResponseToJSONTyped(json, false);
}

export function CheckUpdate200ResponseToJSONTyped(value?: CheckUpdate200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': CheckUpdate200ResponseResultToJSON(value['result']),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

