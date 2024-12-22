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
 * @interface GetAllSettings200ResponseResult
 */
export interface GetAllSettings200ResponseResult {
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    schoolName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    schoolShortName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    systemName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    stuNumLength?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    backgroundImage?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    icon?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllSettings200ResponseResult
     */
    stageIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    xkwOrder?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    dnOrder?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    newDeviceSmsAuthentication?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    studentSelectActivity?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    studentSatisfaction?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    qq?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    wechat?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllSettings200ResponseResult
     */
    mobile?: string;
}

/**
 * Check if a given object implements the GetAllSettings200ResponseResult interface.
 */
export function instanceOfGetAllSettings200ResponseResult(value: object): value is GetAllSettings200ResponseResult {
    return true;
}

export function GetAllSettings200ResponseResultFromJSON(json: any): GetAllSettings200ResponseResult {
    return GetAllSettings200ResponseResultFromJSONTyped(json, false);
}

export function GetAllSettings200ResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllSettings200ResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'schoolName': json['schoolName'] == null ? undefined : json['schoolName'],
        'schoolShortName': json['schoolShortName'] == null ? undefined : json['schoolShortName'],
        'systemName': json['systemName'] == null ? undefined : json['systemName'],
        'stuNumLength': json['stuNumLength'] == null ? undefined : json['stuNumLength'],
        'backgroundImage': json['backgroundImage'] == null ? undefined : json['backgroundImage'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'stageIds': json['stageIds'] == null ? undefined : json['stageIds'],
        'xkwOrder': json['xkwOrder'] == null ? undefined : json['xkwOrder'],
        'dnOrder': json['dnOrder'] == null ? undefined : json['dnOrder'],
        'newDeviceSmsAuthentication': json['newDeviceSmsAuthentication'] == null ? undefined : json['newDeviceSmsAuthentication'],
        'studentSelectActivity': json['studentSelectActivity'] == null ? undefined : json['studentSelectActivity'],
        'studentSatisfaction': json['studentSatisfaction'] == null ? undefined : json['studentSatisfaction'],
        'qq': json['qq'] == null ? undefined : json['qq'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'wechat': json['wechat'] == null ? undefined : json['wechat'],
        'telephone': json['telephone'] == null ? undefined : json['telephone'],
        'mobile': json['mobile'] == null ? undefined : json['mobile'],
    };
}

export function GetAllSettings200ResponseResultToJSON(json: any): GetAllSettings200ResponseResult {
    return GetAllSettings200ResponseResultToJSONTyped(json, false);
}

export function GetAllSettings200ResponseResultToJSONTyped(value?: GetAllSettings200ResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schoolName': value['schoolName'],
        'schoolShortName': value['schoolShortName'],
        'systemName': value['systemName'],
        'stuNumLength': value['stuNumLength'],
        'backgroundImage': value['backgroundImage'],
        'icon': value['icon'],
        'stageIds': value['stageIds'],
        'xkwOrder': value['xkwOrder'],
        'dnOrder': value['dnOrder'],
        'newDeviceSmsAuthentication': value['newDeviceSmsAuthentication'],
        'studentSelectActivity': value['studentSelectActivity'],
        'studentSatisfaction': value['studentSatisfaction'],
        'qq': value['qq'],
        'emailAddress': value['emailAddress'],
        'wechat': value['wechat'],
        'telephone': value['telephone'],
        'mobile': value['mobile'],
    };
}

