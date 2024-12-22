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
 * @interface Session
 */
export interface Session {
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    cleared?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    courseId?: number;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    createTime?: string;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    askUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    members?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    messages?: number;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    snapshot?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    updateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    updateUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    sessionRole?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    unRead?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    primaryUnRead?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    sentMessages?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    openCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    state?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    joinType?: number;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    joinTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    askUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    updateUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    askUserPhoto?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    updateUserPhoto?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    _class?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    topicName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    isCollect?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    searched?: number;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    id?: number;
}

/**
 * Check if a given object implements the Session interface.
 */
export function instanceOfSession(value: object): value is Session {
    return true;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if (json == null) {
        return json;
    }
    return {
        
        'cleared': json['cleared'] == null ? undefined : json['cleared'],
        'closed': json['closed'] == null ? undefined : json['closed'],
        'courseId': json['courseId'] == null ? undefined : json['courseId'],
        'createTime': json['createTime'] == null ? undefined : json['createTime'],
        'askUserId': json['askUserId'] == null ? undefined : json['askUserId'],
        'members': json['members'] == null ? undefined : json['members'],
        'messages': json['messages'] == null ? undefined : json['messages'],
        'snapshot': json['snapshot'] == null ? undefined : json['snapshot'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'updateTime': json['updateTime'] == null ? undefined : json['updateTime'],
        'updateUserId': json['updateUserId'] == null ? undefined : json['updateUserId'],
        'sessionRole': json['sessionRole'] == null ? undefined : json['sessionRole'],
        'unRead': json['unRead'] == null ? undefined : json['unRead'],
        'primaryUnRead': json['primaryUnRead'] == null ? undefined : json['primaryUnRead'],
        'sentMessages': json['sentMessages'] == null ? undefined : json['sentMessages'],
        'openCount': json['openCount'] == null ? undefined : json['openCount'],
        'state': json['state'] == null ? undefined : json['state'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'joinType': json['joinType'] == null ? undefined : json['joinType'],
        'joinTime': json['joinTime'] == null ? undefined : json['joinTime'],
        'askUserName': json['askUserName'] == null ? undefined : json['askUserName'],
        'updateUserName': json['updateUserName'] == null ? undefined : json['updateUserName'],
        'askUserPhoto': json['askUserPhoto'] == null ? undefined : json['askUserPhoto'],
        'updateUserPhoto': json['updateUserPhoto'] == null ? undefined : json['updateUserPhoto'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        '_class': json['class'] == null ? undefined : json['class'],
        'topicName': json['topicName'] == null ? undefined : json['topicName'],
        'isCollect': json['isCollect'] == null ? undefined : json['isCollect'],
        'searched': json['searched'] == null ? undefined : json['searched'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SessionToJSON(json: any): Session {
    return SessionToJSONTyped(json, false);
}

export function SessionToJSONTyped(value?: Session | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cleared': value['cleared'],
        'closed': value['closed'],
        'courseId': value['courseId'],
        'createTime': value['createTime'],
        'askUserId': value['askUserId'],
        'members': value['members'],
        'messages': value['messages'],
        'snapshot': value['snapshot'],
        'summary': value['summary'],
        'updateTime': value['updateTime'],
        'updateUserId': value['updateUserId'],
        'sessionRole': value['sessionRole'],
        'unRead': value['unRead'],
        'primaryUnRead': value['primaryUnRead'],
        'sentMessages': value['sentMessages'],
        'openCount': value['openCount'],
        'state': value['state'],
        'userId': value['userId'],
        'joinType': value['joinType'],
        'joinTime': value['joinTime'],
        'askUserName': value['askUserName'],
        'updateUserName': value['updateUserName'],
        'askUserPhoto': value['askUserPhoto'],
        'updateUserPhoto': value['updateUserPhoto'],
        'disabled': value['disabled'],
        'class': value['_class'],
        'topicName': value['topicName'],
        'isCollect': value['isCollect'],
        'searched': value['searched'],
        'id': value['id'],
    };
}

