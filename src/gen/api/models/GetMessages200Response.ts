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
import type { Message } from './Message';
import {
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
    MessageToJSONTyped,
} from './Message';
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
 * @interface GetMessages200Response
 */
export interface GetMessages200Response {
    /**
     * 
     * @type {Array<Message>}
     * @memberof GetMessages200Response
     */
    result?: Array<Message>;
    /**
     * 
     * @type {string}
     * @memberof GetMessages200Response
     */
    targetUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetMessages200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GetMessages200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GetMessages200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetMessages200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GetMessages200Response interface.
 */
export function instanceOfGetMessages200Response(value: object): value is GetMessages200Response {
    return true;
}

export function GetMessages200ResponseFromJSON(json: any): GetMessages200Response {
    return GetMessages200ResponseFromJSONTyped(json, false);
}

export function GetMessages200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMessages200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : ((json['result'] as Array<any>).map(MessageFromJSON)),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GetMessages200ResponseToJSON(json: any): GetMessages200Response {
    return GetMessages200ResponseToJSONTyped(json, false);
}

export function GetMessages200ResponseToJSONTyped(value?: GetMessages200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'] == null ? undefined : ((value['result'] as Array<any>).map(MessageToJSON)),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

