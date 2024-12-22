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
 * @interface AskForHelp200Response
 */
export interface AskForHelp200Response {
    /**
     * 
     * @type {string}
     * @memberof AskForHelp200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AskForHelp200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof AskForHelp200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof AskForHelp200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AskForHelp200Response
     */
    abp?: boolean;
    /**
     * 
     * @type {object}
     * @memberof AskForHelp200Response
     */
    result?: object;
}

/**
 * Check if a given object implements the AskForHelp200Response interface.
 */
export function instanceOfAskForHelp200Response(value: object): value is AskForHelp200Response {
    return true;
}

export function AskForHelp200ResponseFromJSON(json: any): AskForHelp200Response {
    return AskForHelp200ResponseFromJSONTyped(json, false);
}

export function AskForHelp200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AskForHelp200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function AskForHelp200ResponseToJSON(json: any): AskForHelp200Response {
    return AskForHelp200ResponseToJSONTyped(json, false);
}

export function AskForHelp200ResponseToJSONTyped(value?: AskForHelp200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
        'result': value['result'],
    };
}

