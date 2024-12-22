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
 * @interface TaskListItemsInner
 */
export interface TaskListItemsInner {
    /**
     * 
     * @type {string}
     * @memberof TaskListItemsInner
     */
    address?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    answerPad?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    answerSheet?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    answeringUrge?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    correctOnline?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    correctOnlineState?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    correctWithSelf?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof TaskListItemsInner
     */
    creationTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TaskListItemsInner
     */
    endTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    examId?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskListItemsInner
     */
    examName?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    examState?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    examTaskId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    isCollect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    isExempted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    isNoStem?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskListItemsInner
     */
    isRead?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    revisingUrge?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskListItemsInner
     */
    serialNum?: string;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    specificTrainingType?: number;
    /**
     * 
     * @type {Date}
     * @memberof TaskListItemsInner
     */
    startTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    taskState?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    testPagerId?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskListItemsInner
     */
    topicId?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskListItemsInner
     */
    topicName?: string;
}

/**
 * Check if a given object implements the TaskListItemsInner interface.
 */
export function instanceOfTaskListItemsInner(value: object): value is TaskListItemsInner {
    return true;
}

export function TaskListItemsInnerFromJSON(json: any): TaskListItemsInner {
    return TaskListItemsInnerFromJSONTyped(json, false);
}

export function TaskListItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskListItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
        'answerPad': json['answerPad'] == null ? undefined : json['answerPad'],
        'answerSheet': json['answerSheet'] == null ? undefined : json['answerSheet'],
        'answeringUrge': json['answeringUrge'] == null ? undefined : json['answeringUrge'],
        'correctOnline': json['correctOnline'] == null ? undefined : json['correctOnline'],
        'correctOnlineState': json['correctOnlineState'] == null ? undefined : json['correctOnlineState'],
        'correctWithSelf': json['correctWithSelf'] == null ? undefined : json['correctWithSelf'],
        'creationTime': json['creationTime'] == null ? undefined : (new Date(json['creationTime'])),
        'endTime': json['endTime'] == null ? undefined : (new Date(json['endTime'])),
        'examId': json['examId'] == null ? undefined : json['examId'],
        'examName': json['examName'] == null ? undefined : json['examName'],
        'examState': json['examState'] == null ? undefined : json['examState'],
        'examTaskId': json['examTaskId'] == null ? undefined : json['examTaskId'],
        'isCollect': json['isCollect'] == null ? undefined : json['isCollect'],
        'isExempted': json['isExempted'] == null ? undefined : json['isExempted'],
        'isNoStem': json['isNoStem'] == null ? undefined : json['isNoStem'],
        'isRead': json['isRead'] == null ? undefined : json['isRead'],
        'revisingUrge': json['revisingUrge'] == null ? undefined : json['revisingUrge'],
        'serialNum': json['serialNum'] == null ? undefined : json['serialNum'],
        'size': json['size'] == null ? undefined : json['size'],
        'specificTrainingType': json['specificTrainingType'] == null ? undefined : json['specificTrainingType'],
        'startTime': json['startTime'] == null ? undefined : (new Date(json['startTime'])),
        'taskState': json['taskState'] == null ? undefined : json['taskState'],
        'testPagerId': json['testPagerId'] == null ? undefined : json['testPagerId'],
        'topicId': json['topicId'] == null ? undefined : json['topicId'],
        'topicName': json['topicName'] == null ? undefined : json['topicName'],
    };
}

export function TaskListItemsInnerToJSON(json: any): TaskListItemsInner {
    return TaskListItemsInnerToJSONTyped(json, false);
}

export function TaskListItemsInnerToJSONTyped(value?: TaskListItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'answerPad': value['answerPad'],
        'answerSheet': value['answerSheet'],
        'answeringUrge': value['answeringUrge'],
        'correctOnline': value['correctOnline'],
        'correctOnlineState': value['correctOnlineState'],
        'correctWithSelf': value['correctWithSelf'],
        'creationTime': value['creationTime'] == null ? undefined : ((value['creationTime']).toISOString()),
        'endTime': value['endTime'] == null ? undefined : ((value['endTime']).toISOString()),
        'examId': value['examId'],
        'examName': value['examName'],
        'examState': value['examState'],
        'examTaskId': value['examTaskId'],
        'isCollect': value['isCollect'],
        'isExempted': value['isExempted'],
        'isNoStem': value['isNoStem'],
        'isRead': value['isRead'],
        'revisingUrge': value['revisingUrge'],
        'serialNum': value['serialNum'],
        'size': value['size'],
        'specificTrainingType': value['specificTrainingType'],
        'startTime': value['startTime'] == null ? undefined : ((value['startTime']).toISOString()),
        'taskState': value['taskState'],
        'testPagerId': value['testPagerId'],
        'topicId': value['topicId'],
        'topicName': value['topicName'],
    };
}
