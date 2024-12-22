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
 * @interface CoursesSubscribed200ResponseResultInnerTopics
 */
export interface CoursesSubscribed200ResponseResultInnerTopics {
    /**
     * 
     * @type {string}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    sort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    system?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    platformId?: number;
    /**
     * 
     * @type {string}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    lastModificationTime?: string;
    /**
     * 
     * @type {number}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    lastModifierUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    creationTime?: string;
    /**
     * 
     * @type {number}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    creatorUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof CoursesSubscribed200ResponseResultInnerTopics
     */
    id?: number;
}

/**
 * Check if a given object implements the CoursesSubscribed200ResponseResultInnerTopics interface.
 */
export function instanceOfCoursesSubscribed200ResponseResultInnerTopics(value: object): value is CoursesSubscribed200ResponseResultInnerTopics {
    return true;
}

export function CoursesSubscribed200ResponseResultInnerTopicsFromJSON(json: any): CoursesSubscribed200ResponseResultInnerTopics {
    return CoursesSubscribed200ResponseResultInnerTopicsFromJSONTyped(json, false);
}

export function CoursesSubscribed200ResponseResultInnerTopicsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoursesSubscribed200ResponseResultInnerTopics {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'content': json['content'] == null ? undefined : json['content'],
        'sort': json['sort'] == null ? undefined : json['sort'],
        'isActive': json['isActive'] == null ? undefined : json['isActive'],
        'system': json['system'] == null ? undefined : json['system'],
        'platformId': json['platformId'] == null ? undefined : json['platformId'],
        'lastModificationTime': json['lastModificationTime'] == null ? undefined : json['lastModificationTime'],
        'lastModifierUserId': json['lastModifierUserId'] == null ? undefined : json['lastModifierUserId'],
        'creationTime': json['creationTime'] == null ? undefined : json['creationTime'],
        'creatorUserId': json['creatorUserId'] == null ? undefined : json['creatorUserId'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function CoursesSubscribed200ResponseResultInnerTopicsToJSON(json: any): CoursesSubscribed200ResponseResultInnerTopics {
    return CoursesSubscribed200ResponseResultInnerTopicsToJSONTyped(json, false);
}

export function CoursesSubscribed200ResponseResultInnerTopicsToJSONTyped(value?: CoursesSubscribed200ResponseResultInnerTopics | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'content': value['content'],
        'sort': value['sort'],
        'isActive': value['isActive'],
        'system': value['system'],
        'platformId': value['platformId'],
        'lastModificationTime': value['lastModificationTime'],
        'lastModifierUserId': value['lastModifierUserId'],
        'creationTime': value['creationTime'],
        'creatorUserId': value['creatorUserId'],
        'id': value['id'],
    };
}

