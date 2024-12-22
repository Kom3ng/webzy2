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
 * @interface RecordPictures200Response
 */
export interface RecordPictures200Response {
    /**
     * 
     * @type {string}
     * @memberof RecordPictures200Response
     */
    result?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RecordPictures200Response
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RecordPictures200Response
     */
    targetUrl?: string;
    /**
     * 
     * @type {ApiError}
     * @memberof RecordPictures200Response
     */
    error?: ApiError;
    /**
     * 
     * @type {boolean}
     * @memberof RecordPictures200Response
     */
    unAuthorizedRequest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RecordPictures200Response
     */
    abp?: boolean;
}

/**
 * Check if a given object implements the RecordPictures200Response interface.
 */
export function instanceOfRecordPictures200Response(value: object): value is RecordPictures200Response {
    return true;
}

export function RecordPictures200ResponseFromJSON(json: any): RecordPictures200Response {
    return RecordPictures200ResponseFromJSONTyped(json, false);
}

export function RecordPictures200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordPictures200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
        'success': json['success'] == null ? undefined : json['success'],
        'targetUrl': json['targetUrl'] == null ? undefined : json['targetUrl'],
        'error': json['error'] == null ? undefined : ApiErrorFromJSON(json['error']),
        'unAuthorizedRequest': json['unAuthorizedRequest'] == null ? undefined : json['unAuthorizedRequest'],
        'abp': json['__abp'] == null ? undefined : json['__abp'],
    };
}

export function RecordPictures200ResponseToJSON(json: any): RecordPictures200Response {
    return RecordPictures200ResponseToJSONTyped(json, false);
}

export function RecordPictures200ResponseToJSONTyped(value?: RecordPictures200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'],
        'success': value['success'],
        'targetUrl': value['targetUrl'],
        'error': ApiErrorToJSON(value['error']),
        'unAuthorizedRequest': value['unAuthorizedRequest'],
        '__abp': value['abp'],
    };
}

