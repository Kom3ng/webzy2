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
import type { AnswersAnswersInner } from './AnswersAnswersInner';
import {
    AnswersAnswersInnerFromJSON,
    AnswersAnswersInnerFromJSONTyped,
    AnswersAnswersInnerToJSON,
    AnswersAnswersInnerToJSONTyped,
} from './AnswersAnswersInner';

/**
 * 
 * @export
 * @interface Answers
 */
export interface Answers {
    /**
     * 
     * @type {Array<AnswersAnswersInner>}
     * @memberof Answers
     */
    answers?: Array<AnswersAnswersInner>;
    /**
     * 
     * @type {string}
     * @memberof Answers
     */
    draft?: string;
    /**
     * 
     * @type {number}
     * @memberof Answers
     */
    questionId?: number;
}

/**
 * Check if a given object implements the Answers interface.
 */
export function instanceOfAnswers(value: object): value is Answers {
    return true;
}

export function AnswersFromJSON(json: any): Answers {
    return AnswersFromJSONTyped(json, false);
}

export function AnswersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Answers {
    if (json == null) {
        return json;
    }
    return {
        
        'answers': json['answers'] == null ? undefined : ((json['answers'] as Array<any>).map(AnswersAnswersInnerFromJSON)),
        'draft': json['draft'] == null ? undefined : json['draft'],
        'questionId': json['questionId'] == null ? undefined : json['questionId'],
    };
}

export function AnswersToJSON(json: any): Answers {
    return AnswersToJSONTyped(json, false);
}

export function AnswersToJSONTyped(value?: Answers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'answers': value['answers'] == null ? undefined : ((value['answers'] as Array<any>).map(AnswersAnswersInnerToJSON)),
        'draft': value['draft'],
        'questionId': value['questionId'],
    };
}
