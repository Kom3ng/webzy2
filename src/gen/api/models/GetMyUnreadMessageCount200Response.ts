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
import type { GetMyUnreadMessageCount200ResponseResultInner } from './GetMyUnreadMessageCount200ResponseResultInner';
import {
    GetMyUnreadMessageCount200ResponseResultInnerFromJSON,
    GetMyUnreadMessageCount200ResponseResultInnerFromJSONTyped,
    GetMyUnreadMessageCount200ResponseResultInnerToJSON,
    GetMyUnreadMessageCount200ResponseResultInnerToJSONTyped,
} from './GetMyUnreadMessageCount200ResponseResultInner';
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
 * @interface GetMyUnreadMessageCount200Response
 */
export interface GetMyUnreadMessageCount200Response {
    /**
     * 
     * @type {Array<GetMyUnreadMessageCount200ResponseResultInner>}
     * @memberof GetMyUnreadMessageCount200Response
     */
    result?: Array<GetMyUnreadMessageCount200ResponseResultInner>;
    /**
     * 
     * @type {string}
     * @memberof GetMyUnreadMessageCount200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyUnreadMessageCount200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetMyUnreadMessageCount200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyUnreadMessageCount200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyUnreadMessageCount200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GetMyUnreadMessageCount200Response interface.
 */
export function instanceOfGetMyUnreadMessageCount200Response(value: object): value is GetMyUnreadMessageCount200Response {
    return true;
}

export function GetMyUnreadMessageCount200ResponseFromJSON(json: any): GetMyUnreadMessageCount200Response {
    return GetMyUnreadMessageCount200ResponseFromJSONTyped(json, false);
}

export function GetMyUnreadMessageCount200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyUnreadMessageCount200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : ((json['result'] as Array<any>).map(GetMyUnreadMessageCount200ResponseResultInnerFromJSON)),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GetMyUnreadMessageCount200ResponseToJSON(json: any): GetMyUnreadMessageCount200Response {
    return GetMyUnreadMessageCount200ResponseToJSONTyped(json, false);
}

export function GetMyUnreadMessageCount200ResponseToJSONTyped(value?: GetMyUnreadMessageCount200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'] == null ? undefined : ((value['result'] as Array<any>).map(GetMyUnreadMessageCount200ResponseResultInnerToJSON)),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

