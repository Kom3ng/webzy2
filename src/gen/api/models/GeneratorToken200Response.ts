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
import type { GeneratorToken200ResponseResult } from './GeneratorToken200ResponseResult';
import {
    GeneratorToken200ResponseResultFromJSON,
    GeneratorToken200ResponseResultFromJSONTyped,
    GeneratorToken200ResponseResultToJSON,
    GeneratorToken200ResponseResultToJSONTyped,
} from './GeneratorToken200ResponseResult';

/**
 * 
 * @export
 * @interface GeneratorToken200Response
 */
export interface GeneratorToken200Response {
    /**
     * 
     * @type {GeneratorToken200ResponseResult}
     * @memberof GeneratorToken200Response
     */
    result?: GeneratorToken200ResponseResult;
    /**
     * 
     * @type {string}
     * @memberof GeneratorToken200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GeneratorToken200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof GeneratorToken200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof GeneratorToken200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneratorToken200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the GeneratorToken200Response interface.
 */
export function instanceOfGeneratorToken200Response(value: object): value is GeneratorToken200Response {
    return true;
}

export function GeneratorToken200ResponseFromJSON(json: any): GeneratorToken200Response {
    return GeneratorToken200ResponseFromJSONTyped(json, false);
}

export function GeneratorToken200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratorToken200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : GeneratorToken200ResponseResultFromJSON(json['result']),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function GeneratorToken200ResponseToJSON(json: any): GeneratorToken200Response {
    return GeneratorToken200ResponseToJSONTyped(json, false);
}

export function GeneratorToken200ResponseToJSONTyped(value?: GeneratorToken200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': GeneratorToken200ResponseResultToJSON(value['result']),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

