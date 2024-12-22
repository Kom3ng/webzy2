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
import type { NoQstExamGroupsInnerQuestionsInnerAnswerListInner } from './NoQstExamGroupsInnerQuestionsInnerAnswerListInner';
import {
    NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSON,
    NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSONTyped,
    NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSON,
    NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSONTyped,
} from './NoQstExamGroupsInnerQuestionsInnerAnswerListInner';
import type { QstFlow } from './QstFlow';
import {
    QstFlowFromJSON,
    QstFlowFromJSONTyped,
    QstFlowToJSON,
    QstFlowToJSONTyped,
} from './QstFlow';

/**
 * 
 * @export
 * @interface NoQstExamGroupsInnerQuestionsInner
 */
export interface NoQstExamGroupsInnerQuestionsInner {
    /**
     * 
     * @type {Array<NoQstExamGroupsInnerQuestionsInnerAnswerListInner>}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    answerList?: Array<NoQstExamGroupsInnerQuestionsInnerAnswerListInner>;
    /**
     * 
     * @type {boolean}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    answerWithQuestion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    askForHelp?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    completed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    myScore?: number;
    /**
     * 
     * @type {string}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    number?: number;
    /**
     * 
     * @type {Array<QstFlow>}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    qstFlows?: Array<QstFlow>;
    /**
     * 
     * @type {number}
     * @memberof NoQstExamGroupsInnerQuestionsInner
     */
    score?: number;
}

/**
 * Check if a given object implements the NoQstExamGroupsInnerQuestionsInner interface.
 */
export function instanceOfNoQstExamGroupsInnerQuestionsInner(value: object): value is NoQstExamGroupsInnerQuestionsInner {
    return true;
}

export function NoQstExamGroupsInnerQuestionsInnerFromJSON(json: any): NoQstExamGroupsInnerQuestionsInner {
    return NoQstExamGroupsInnerQuestionsInnerFromJSONTyped(json, false);
}

export function NoQstExamGroupsInnerQuestionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoQstExamGroupsInnerQuestionsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'answerList': json['answerList'] == null ? undefined : ((json['answerList'] as Array<any>).map(NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSON)),
        'answerWithQuestion': json['answerWithQuestion'] == null ? undefined : json['answerWithQuestion'],
        'askForHelp': json['askForHelp'] == null ? undefined : json['askForHelp'],
        'completed': json['completed'] == null ? undefined : json['completed'],
        'id': json['id'] == null ? undefined : json['id'],
        'myScore': json['myScore'] == null ? undefined : json['myScore'],
        'name': json['name'] == null ? undefined : json['name'],
        'number': json['number'] == null ? undefined : json['number'],
        'qstFlows': json['qstFlows'] == null ? undefined : ((json['qstFlows'] as Array<any>).map(QstFlowFromJSON)),
        'score': json['score'] == null ? undefined : json['score'],
    };
}

export function NoQstExamGroupsInnerQuestionsInnerToJSON(json: any): NoQstExamGroupsInnerQuestionsInner {
    return NoQstExamGroupsInnerQuestionsInnerToJSONTyped(json, false);
}

export function NoQstExamGroupsInnerQuestionsInnerToJSONTyped(value?: NoQstExamGroupsInnerQuestionsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'answerList': value['answerList'] == null ? undefined : ((value['answerList'] as Array<any>).map(NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSON)),
        'answerWithQuestion': value['answerWithQuestion'],
        'askForHelp': value['askForHelp'],
        'completed': value['completed'],
        'id': value['id'],
        'myScore': value['myScore'],
        'name': value['name'],
        'number': value['number'],
        'qstFlows': value['qstFlows'] == null ? undefined : ((value['qstFlows'] as Array<any>).map(QstFlowToJSON)),
        'score': value['score'],
    };
}

