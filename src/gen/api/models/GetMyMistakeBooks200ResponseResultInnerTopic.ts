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
 * @interface GetMyMistakeBooks200ResponseResultInnerTopic
 */
export interface GetMyMistakeBooks200ResponseResultInnerTopic {
    /**
     * 
     * @type {number}
     * @memberof GetMyMistakeBooks200ResponseResultInnerTopic
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMyMistakeBooks200ResponseResultInnerTopic
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMyMistakeBooks200ResponseResultInnerTopic
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMyMistakeBooks200ResponseResultInnerTopic
     */
    sort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyMistakeBooks200ResponseResultInnerTopic
     */
    isActive?: boolean;
}

/**
 * Check if a given object implements the GetMyMistakeBooks200ResponseResultInnerTopic interface.
 */
export function instanceOfGetMyMistakeBooks200ResponseResultInnerTopic(value: object): value is GetMyMistakeBooks200ResponseResultInnerTopic {
    return true;
}

export function GetMyMistakeBooks200ResponseResultInnerTopicFromJSON(json: any): GetMyMistakeBooks200ResponseResultInnerTopic {
    return GetMyMistakeBooks200ResponseResultInnerTopicFromJSONTyped(json, false);
}

export function GetMyMistakeBooks200ResponseResultInnerTopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyMistakeBooks200ResponseResultInnerTopic {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'content': json['content'] == null ? undefined : json['content'],
        'sort': json['sort'] == null ? undefined : json['sort'],
        'isActive': json['isActive'] == null ? undefined : json['isActive'],
    };
}

export function GetMyMistakeBooks200ResponseResultInnerTopicToJSON(json: any): GetMyMistakeBooks200ResponseResultInnerTopic {
    return GetMyMistakeBooks200ResponseResultInnerTopicToJSONTyped(json, false);
}

export function GetMyMistakeBooks200ResponseResultInnerTopicToJSONTyped(value?: GetMyMistakeBooks200ResponseResultInnerTopic | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'content': value['content'],
        'sort': value['sort'],
        'isActive': value['isActive'],
    };
}

