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

/**
 * 
 * @export
 * @interface GetAllWhiteUrlAsync200Response
 */
export interface GetAllWhiteUrlAsync200Response {
    /**
     * 加密过
     * @type {string}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllWhiteUrlAsync200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GetAllWhiteUrlAsync200Response interface.
 */
export function instanceOfGetAllWhiteUrlAsync200Response(value: object): value is GetAllWhiteUrlAsync200Response {
    return true;
}

export function GetAllWhiteUrlAsync200ResponseFromJSON(json: any): GetAllWhiteUrlAsync200Response {
    return GetAllWhiteUrlAsync200ResponseFromJSONTyped(json, false);
}

export function GetAllWhiteUrlAsync200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllWhiteUrlAsync200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GetAllWhiteUrlAsync200ResponseToJSON(json: any): GetAllWhiteUrlAsync200Response {
    return GetAllWhiteUrlAsync200ResponseToJSONTyped(json, false);
}

export function GetAllWhiteUrlAsync200ResponseToJSONTyped(value?: GetAllWhiteUrlAsync200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'],
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}
