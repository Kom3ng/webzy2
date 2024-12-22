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
 * @interface NoQstExamGroupsInnerQuestionsInnerAnswerListInner
 */
export interface NoQstExamGroupsInnerQuestionsInnerAnswerListInner {
    /**
     * 
     * @type {Array<string>}
     * @memberof NoQstExamGroupsInnerQuestionsInnerAnswerListInner
     */
    answers?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof NoQstExamGroupsInnerQuestionsInnerAnswerListInner
     */
    pid?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NoQstExamGroupsInnerQuestionsInnerAnswerListInner
     */
    uuid?: string;
}

/**
 * Check if a given object implements the NoQstExamGroupsInnerQuestionsInnerAnswerListInner interface.
 */
export function instanceOfNoQstExamGroupsInnerQuestionsInnerAnswerListInner(value: object): value is NoQstExamGroupsInnerQuestionsInnerAnswerListInner {
    return true;
}

export function NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSON(json: any): NoQstExamGroupsInnerQuestionsInnerAnswerListInner {
    return NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSONTyped(json, false);
}

export function NoQstExamGroupsInnerQuestionsInnerAnswerListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoQstExamGroupsInnerQuestionsInnerAnswerListInner {
    if (json == null) {
        return json;
    }
    return {
        
        'answers': json['answers'] == null ? undefined : json['answers'],
        'pid': json['pid'] == null ? undefined : json['pid'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
    };
}

export function NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSON(json: any): NoQstExamGroupsInnerQuestionsInnerAnswerListInner {
    return NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSONTyped(json, false);
}

export function NoQstExamGroupsInnerQuestionsInnerAnswerListInnerToJSONTyped(value?: NoQstExamGroupsInnerQuestionsInnerAnswerListInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'answers': value['answers'],
        'pid': value['pid'],
        'uuid': value['uuid'],
    };
}

