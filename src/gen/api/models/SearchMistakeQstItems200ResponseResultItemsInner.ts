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
/**
 * 
 * @export
 * @interface SearchMistakeQstItems200ResponseResultItemsInner
 */
export interface SearchMistakeQstItems200ResponseResultItemsInner {
    /**
     * 
     * @type {string}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    creationTime?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    stemShoot?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    hasStem?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    diff?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    attainedLevel?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    errorReason?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    tagNames?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    isRelatedQstGroup?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchMistakeQstItems200ResponseResultItemsInner
     */
    id?: number;
}

/**
 * Check if a given object implements the SearchMistakeQstItems200ResponseResultItemsInner interface.
 */
export function instanceOfSearchMistakeQstItems200ResponseResultItemsInner(value: object): value is SearchMistakeQstItems200ResponseResultItemsInner {
    return true;
}

export function SearchMistakeQstItems200ResponseResultItemsInnerFromJSON(json: any): SearchMistakeQstItems200ResponseResultItemsInner {
    return SearchMistakeQstItems200ResponseResultItemsInnerFromJSONTyped(json, false);
}

export function SearchMistakeQstItems200ResponseResultItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMistakeQstItems200ResponseResultItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : json['source'],
        'creationTime': json['creationTime'] == null ? undefined : json['creationTime'],
        'stemShoot': json['stemShoot'] == null ? undefined : json['stemShoot'],
        'hasStem': json['hasStem'] == null ? undefined : json['hasStem'],
        'diff': json['diff'] == null ? undefined : json['diff'],
        'attainedLevel': json['attainedLevel'] == null ? undefined : json['attainedLevel'],
        'errorReason': json['errorReason'] == null ? undefined : json['errorReason'],
        'tagNames': json['tagNames'] == null ? undefined : json['tagNames'],
        'isRelatedQstGroup': json['isRelatedQstGroup'] == null ? undefined : json['isRelatedQstGroup'],
        'number': json['number'] == null ? undefined : json['number'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SearchMistakeQstItems200ResponseResultItemsInnerToJSON(json: any): SearchMistakeQstItems200ResponseResultItemsInner {
    return SearchMistakeQstItems200ResponseResultItemsInnerToJSONTyped(json, false);
}

export function SearchMistakeQstItems200ResponseResultItemsInnerToJSONTyped(value?: SearchMistakeQstItems200ResponseResultItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': value['source'],
        'creationTime': value['creationTime'],
        'stemShoot': value['stemShoot'],
        'hasStem': value['hasStem'],
        'diff': value['diff'],
        'attainedLevel': value['attainedLevel'],
        'errorReason': value['errorReason'],
        'tagNames': value['tagNames'],
        'isRelatedQstGroup': value['isRelatedQstGroup'],
        'number': value['number'],
        'name': value['name'],
        'id': value['id'],
    };
}
