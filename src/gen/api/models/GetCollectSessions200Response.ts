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
import type { CollectSession } from './CollectSession';
import {
    CollectSessionFromJSON,
    CollectSessionFromJSONTyped,
    CollectSessionToJSON,
    CollectSessionToJSONTyped,
} from './CollectSession';
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
 * @interface GetCollectSessions200Response
 */
export interface GetCollectSessions200Response {
    /**
     * 
     * @type {Array<CollectSession>}
     * @memberof GetCollectSessions200Response
     */
    result?: Array<CollectSession>;
    /**
     * 
     * @type {string}
     * @memberof GetCollectSessions200Response
     */
    targetUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetCollectSessions200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetCollectSessions200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetCollectSessions200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetCollectSessions200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GetCollectSessions200Response interface.
 */
export function instanceOfGetCollectSessions200Response(value: object): value is GetCollectSessions200Response {
    return true;
}

export function GetCollectSessions200ResponseFromJSON(json: any): GetCollectSessions200Response {
    return GetCollectSessions200ResponseFromJSONTyped(json, false);
}

export function GetCollectSessions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCollectSessions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : ((json['result'] as Array<any>).map(CollectSessionFromJSON)),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GetCollectSessions200ResponseToJSON(json: any): GetCollectSessions200Response {
    return GetCollectSessions200ResponseToJSONTyped(json, false);
}

export function GetCollectSessions200ResponseToJSONTyped(value?: GetCollectSessions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'] == null ? undefined : ((value['result'] as Array<any>).map(CollectSessionToJSON)),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

