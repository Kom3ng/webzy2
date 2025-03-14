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
 * @interface SetQuoraCollect200Response
 */
export interface SetQuoraCollect200Response {
    /**
     * 
     * @type {object}
     * @memberof SetQuoraCollect200Response
     */
    result?: object;
    /**
     * 
     * @type {string}
     * @memberof SetQuoraCollect200Response
     */
    targetUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SetQuoraCollect200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof SetQuoraCollect200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof SetQuoraCollect200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SetQuoraCollect200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the SetQuoraCollect200Response interface.
 */
export function instanceOfSetQuoraCollect200Response(value: object): value is SetQuoraCollect200Response {
    return true;
}

export function SetQuoraCollect200ResponseFromJSON(json: any): SetQuoraCollect200Response {
    return SetQuoraCollect200ResponseFromJSONTyped(json, false);
}

export function SetQuoraCollect200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetQuoraCollect200Response {
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

export function SetQuoraCollect200ResponseToJSON(json: any): SetQuoraCollect200Response {
    return SetQuoraCollect200ResponseToJSONTyped(json, false);
}

export function SetQuoraCollect200ResponseToJSONTyped(value?: SetQuoraCollect200Response | null, ignoreDiscriminator: boolean = false): any {
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

