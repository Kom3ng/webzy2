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


import * as runtime from '../runtime';
import type {
  GetDnUrl200Response,
  GetQWeather200Response,
} from '../models/index';
import {
    GetDnUrl200ResponseFromJSON,
    GetDnUrl200ResponseToJSON,
    GetQWeather200ResponseFromJSON,
    GetQWeather200ResponseToJSON,
} from '../models/index';

export interface GetDnUrlRequest {
    appName: string;
    appVersion: number;
    clientType?: number;
}

export interface GetQWeatherRequest {
    appName: string;
    appVersion: number;
    location?: string;
}

/**
 * 
 */
export class MiscApi extends runtime.BaseAPI {

    /**
     * 获取懂你100URL
     */
    async getDnUrlRaw(requestParameters: GetDnUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDnUrl200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getDnUrl().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getDnUrl().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['clientType'] != null) {
            queryParameters['clientType'] = requestParameters['clientType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['appName'] != null) {
            headerParameters['AppName'] = String(requestParameters['appName']);
        }

        if (requestParameters['appVersion'] != null) {
            headerParameters['AppVersion'] = String(requestParameters['appVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dn/GetDnUrl`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDnUrl200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取懂你100URL
     */
    async getDnUrl(requestParameters: GetDnUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDnUrl200Response> {
        const response = await this.getDnUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取三天天气
     * 获取天气信息
     */
    async getQWeatherRaw(requestParameters: GetQWeatherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetQWeather200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getQWeather().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getQWeather().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['location'] != null) {
            queryParameters['location'] = requestParameters['location'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['appName'] != null) {
            headerParameters['AppName'] = String(requestParameters['appName']);
        }

        if (requestParameters['appVersion'] != null) {
            headerParameters['AppVersion'] = String(requestParameters['appVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/app/Weather/GetQWeatherAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetQWeather200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取三天天气
     * 获取天气信息
     */
    async getQWeather(requestParameters: GetQWeatherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetQWeather200Response> {
        const response = await this.getQWeatherRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
