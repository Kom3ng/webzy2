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
import type { Session } from './Session';
import {
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
    SessionToJSONTyped,
} from './Session';

/**
 * 
 * @export
 * @interface GetSessions200Response
 */
export interface GetSessions200Response {
    /**
     * 
     * @type {Array<Session>}
     * @memberof GetSessions200Response
     */
    result?: Array<Session>;
    /**
     * 
     * @type {string}
     * @memberof GetSessions200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetSessions200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetSessions200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetSessions200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetSessions200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GetSessions200Response interface.
 */
export function instanceOfGetSessions200Response(value: object): value is GetSessions200Response {
    return true;
}

export function GetSessions200ResponseFromJSON(json: any): GetSessions200Response {
    return GetSessions200ResponseFromJSONTyped(json, false);
}

export function GetSessions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSessions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : ((json['result'] as Array<any>).map(SessionFromJSON)),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GetSessions200ResponseToJSON(json: any): GetSessions200Response {
    return GetSessions200ResponseToJSONTyped(json, false);
}

export function GetSessions200ResponseToJSONTyped(value?: GetSessions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'] == null ? undefined : ((value['result'] as Array<any>).map(SessionToJSON)),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}
