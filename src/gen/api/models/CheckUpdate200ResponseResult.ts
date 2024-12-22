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
 * @interface CheckUpdate200ResponseResult
 */
export interface CheckUpdate200ResponseResult {
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    appVersionId?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    packageName?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    score?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    creationTime?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    creatorUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    downloads?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    fileUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CheckUpdate200ResponseResult
     */
    forceUpdate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    versionCode?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    versionName?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckUpdate200ResponseResult
     */
    appType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CheckUpdate200ResponseResult
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CheckUpdate200ResponseResult
     */
    lastModificationTime?: string;
}

/**
 * Check if a given object implements the CheckUpdate200ResponseResult interface.
 */
export function instanceOfCheckUpdate200ResponseResult(value: object): value is CheckUpdate200ResponseResult {
    return true;
}

export function CheckUpdate200ResponseResultFromJSON(json: any): CheckUpdate200ResponseResult {
    return CheckUpdate200ResponseResultFromJSONTyped(json, false);
}

export function CheckUpdate200ResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckUpdate200ResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'appVersionId': json['appVersionId'] == null ? undefined : json['appVersionId'],
        'packageName': json['packageName'] == null ? undefined : json['packageName'],
        'score': json['score'] == null ? undefined : json['score'],
        'creationTime': json['creationTime'] == null ? undefined : json['creationTime'],
        'creatorUserId': json['creatorUserId'] == null ? undefined : json['creatorUserId'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'description': json['description'] == null ? undefined : json['description'],
        'downloads': json['downloads'] == null ? undefined : json['downloads'],
        'fileUrl': json['fileUrl'] == null ? undefined : json['fileUrl'],
        'forceUpdate': json['forceUpdate'] == null ? undefined : json['forceUpdate'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'name': json['name'] == null ? undefined : json['name'],
        'size': json['size'] == null ? undefined : json['size'],
        'versionCode': json['versionCode'] == null ? undefined : json['versionCode'],
        'versionName': json['versionName'] == null ? undefined : json['versionName'],
        'appType': json['appType'] == null ? undefined : json['appType'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'lastModificationTime': json['lastModificationTime'] == null ? undefined : json['lastModificationTime'],
    };
}

export function CheckUpdate200ResponseResultToJSON(json: any): CheckUpdate200ResponseResult {
    return CheckUpdate200ResponseResultToJSONTyped(json, false);
}

export function CheckUpdate200ResponseResultToJSONTyped(value?: CheckUpdate200ResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'appVersionId': value['appVersionId'],
        'packageName': value['packageName'],
        'score': value['score'],
        'creationTime': value['creationTime'],
        'creatorUserId': value['creatorUserId'],
        'summary': value['summary'],
        'description': value['description'],
        'downloads': value['downloads'],
        'fileUrl': value['fileUrl'],
        'forceUpdate': value['forceUpdate'],
        'icon': value['icon'],
        'name': value['name'],
        'size': value['size'],
        'versionCode': value['versionCode'],
        'versionName': value['versionName'],
        'appType': value['appType'],
        'disabled': value['disabled'],
        'lastModificationTime': value['lastModificationTime'],
    };
}
