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
import type { SearchMistakeQstItems200ResponseResult } from './SearchMistakeQstItems200ResponseResult';
import {
    SearchMistakeQstItems200ResponseResultFromJSON,
    SearchMistakeQstItems200ResponseResultFromJSONTyped,
    SearchMistakeQstItems200ResponseResultToJSON,
    SearchMistakeQstItems200ResponseResultToJSONTyped,
} from './SearchMistakeQstItems200ResponseResult';

/**
 * 
 * @export
 * @interface SearchMistakeQstItems200Response
 */
export interface SearchMistakeQstItems200Response {
    /**
     * 
     * @type {SearchMistakeQstItems200ResponseResult}
     * @memberof SearchMistakeQstItems200Response
     */
    result?: SearchMistakeQstItems200ResponseResult;
    /**
     * 
     * @type {string}
     * @memberof SearchMistakeQstItems200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMistakeQstItems200Response
     */
    success?: boolean;
    /**
     * 
     * @type {ApiError}
     * @memberof SearchMistakeQstItems200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMistakeQstItems200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMistakeQstItems200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the SearchMistakeQstItems200Response interface.
 */
export function instanceOfSearchMistakeQstItems200Response(value: object): value is SearchMistakeQstItems200Response {
    return true;
}

export function SearchMistakeQstItems200ResponseFromJSON(json: any): SearchMistakeQstItems200Response {
    return SearchMistakeQstItems200ResponseFromJSONTyped(json, false);
}

export function SearchMistakeQstItems200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMistakeQstItems200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : SearchMistakeQstItems200ResponseResultFromJSON(json['result']),
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function SearchMistakeQstItems200ResponseToJSON(json: any): SearchMistakeQstItems200Response {
    return SearchMistakeQstItems200ResponseToJSONTyped(json, false);
}

export function SearchMistakeQstItems200ResponseToJSONTyped(value?: SearchMistakeQstItems200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': SearchMistakeQstItems200ResponseResultToJSON(value['result']),
        'targetUrl': value['targetUrl'],
        'success': value['success'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

