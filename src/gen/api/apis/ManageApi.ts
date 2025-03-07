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
  CanIOpenCamera200Response,
  CheckUpdate200Response,
  CoursesSubscribed200Response,
  GeneratorToken200Response,
  GetAllCommonWebSite200Response,
  GetAllSettings200Response,
  GetAllWhiteUrlAsync200Response,
  GetInfo200Response,
  GetMyMessageList200Response,
  GetMyMessageListRequest,
  GetMyUnreadMessageCount200Response,
  GetNotice200Response,
  GetSystemSettingsForStudent200Response,
  Login200Response,
  LoginRequest,
  RecordPictures200Response,
  RecordPicturesRequest,
  RefreshToken200Response,
  SetMessageRead200Response,
} from '../models/index';
import {
    CanIOpenCamera200ResponseFromJSON,
    CanIOpenCamera200ResponseToJSON,
    CheckUpdate200ResponseFromJSON,
    CheckUpdate200ResponseToJSON,
    CoursesSubscribed200ResponseFromJSON,
    CoursesSubscribed200ResponseToJSON,
    GeneratorToken200ResponseFromJSON,
    GeneratorToken200ResponseToJSON,
    GetAllCommonWebSite200ResponseFromJSON,
    GetAllCommonWebSite200ResponseToJSON,
    GetAllSettings200ResponseFromJSON,
    GetAllSettings200ResponseToJSON,
    GetAllWhiteUrlAsync200ResponseFromJSON,
    GetAllWhiteUrlAsync200ResponseToJSON,
    GetInfo200ResponseFromJSON,
    GetInfo200ResponseToJSON,
    GetMyMessageList200ResponseFromJSON,
    GetMyMessageList200ResponseToJSON,
    GetMyMessageListRequestFromJSON,
    GetMyMessageListRequestToJSON,
    GetMyUnreadMessageCount200ResponseFromJSON,
    GetMyUnreadMessageCount200ResponseToJSON,
    GetNotice200ResponseFromJSON,
    GetNotice200ResponseToJSON,
    GetSystemSettingsForStudent200ResponseFromJSON,
    GetSystemSettingsForStudent200ResponseToJSON,
    Login200ResponseFromJSON,
    Login200ResponseToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    RecordPictures200ResponseFromJSON,
    RecordPictures200ResponseToJSON,
    RecordPicturesRequestFromJSON,
    RecordPicturesRequestToJSON,
    RefreshToken200ResponseFromJSON,
    RefreshToken200ResponseToJSON,
    SetMessageRead200ResponseFromJSON,
    SetMessageRead200ResponseToJSON,
} from '../models/index';

export interface CanIOpenCameraRequest {
    appName: string;
    appVersion: number;
    packageName?: string;
}

export interface CheckUpdateRequest {
    packageName?: string;
    appType?: number;
}

export interface CoursesSubscribedRequest {
    appName: string;
    appVersion: number;
}

export interface GeneratorTokenRequest {
    appName: string;
    appVersion: number;
}

export interface GetAllCommonWebSiteRequest {
    appName: string;
    appVersion: number;
}

export interface GetAllSettingsRequest {
    appName: string;
    appVersion: number;
}

export interface GetAllWhiteUrlAsyncRequest {
    appName: string;
    appVersion: number;
}

export interface GetMyMessageListOperationRequest {
    appName: string;
    appVersion: number;
    getMyMessageListRequest?: GetMyMessageListRequest;
}

export interface GetMyUnreadMessageCountRequest {
    appName: string;
    appVersion: number;
}

export interface GetNoticeRequest {
    appName: string;
    appVersion: number;
    id?: number;
}

export interface GetSystemSettingsForStudentRequest {
    appName: string;
    appVersion: number;
}

export interface LoginOperationRequest {
    loginRequest?: LoginRequest;
}

export interface RecordPicturesOperationRequest {
    appName: string;
    appVersion: number;
    recordPicturesRequest?: RecordPicturesRequest;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface SetMessageReadRequest {
    appName: string;
    appVersion: number;
    messageId?: number;
}

/**
 * 
 */
export class ManageApi extends runtime.BaseAPI {

    /**
     * 获取打开摄像头权限
     */
    async canIOpenCameraRaw(requestParameters: CanIOpenCameraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CanIOpenCamera200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling canIOpenCamera().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling canIOpenCamera().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['packageName'] != null) {
            queryParameters['packageName'] = requestParameters['packageName'];
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
            path: `/services/app/StoreAppControl/CanIOpenCameraAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CanIOpenCamera200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取打开摄像头权限
     */
    async canIOpenCamera(requestParameters: CanIOpenCameraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CanIOpenCamera200Response> {
        const response = await this.canIOpenCameraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 检查更新
     */
    async checkUpdateRaw(requestParameters: CheckUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckUpdate200Response>> {
        const queryParameters: any = {};

        if (requestParameters['packageName'] != null) {
            queryParameters['packageName'] = requestParameters['packageName'];
        }

        if (requestParameters['appType'] != null) {
            queryParameters['appType'] = requestParameters['appType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/services/app/AppStore/CheckUpdateAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckUpdate200ResponseFromJSON(jsonValue));
    }

    /**
     * 检查更新
     */
    async checkUpdate(requestParameters: CheckUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckUpdate200Response> {
        const response = await this.checkUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取订阅课程
     */
    async coursesSubscribedRaw(requestParameters: CoursesSubscribedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoursesSubscribed200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling coursesSubscribed().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling coursesSubscribed().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/StudentUser/CoursesSubscribed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoursesSubscribed200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取订阅课程
     */
    async coursesSubscribed(requestParameters: CoursesSubscribedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoursesSubscribed200Response> {
        const response = await this.coursesSubscribedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 生成OSS令牌
     */
    async generatorTokenRaw(requestParameters: GeneratorTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneratorToken200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling generatorToken().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling generatorToken().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/ObjectStorage/GeneratorTokenAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneratorToken200ResponseFromJSON(jsonValue));
    }

    /**
     * 生成OSS令牌
     */
    async generatorToken(requestParameters: GeneratorTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneratorToken200Response> {
        const response = await this.generatorTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 不知道是干什么的(^^;
     * 获取共同的网址
     */
    async getAllCommonWebSiteRaw(requestParameters: GetAllCommonWebSiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllCommonWebSite200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getAllCommonWebSite().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getAllCommonWebSite().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/WebWhiteList/GetAllCommonWebSiteAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllCommonWebSite200ResponseFromJSON(jsonValue));
    }

    /**
     * 不知道是干什么的(^^;
     * 获取共同的网址
     */
    async getAllCommonWebSite(requestParameters: GetAllCommonWebSiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllCommonWebSite200Response> {
        const response = await this.getAllCommonWebSiteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取所有设置
     */
    async getAllSettingsRaw(requestParameters: GetAllSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllSettings200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getAllSettings().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getAllSettings().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/Setting/GetAllSettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllSettings200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取所有设置
     */
    async getAllSettings(requestParameters: GetAllSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllSettings200Response> {
        const response = await this.getAllSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取白名单
     */
    async getAllWhiteUrlAsyncRaw(requestParameters: GetAllWhiteUrlAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllWhiteUrlAsync200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getAllWhiteUrlAsync().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getAllWhiteUrlAsync().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/WebWhiteList/GetAllWhiteUrlAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllWhiteUrlAsync200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取白名单
     */
    async getAllWhiteUrlAsync(requestParameters: GetAllWhiteUrlAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllWhiteUrlAsync200Response> {
        const response = await this.getAllWhiteUrlAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetInfo200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/app/User/GetInfoAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInfo200ResponseFromJSON(jsonValue));
    }

    /**
     * 
     */
    async getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetInfo200Response> {
        const response = await this.getInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * 获取消息列表
     */
    async getMyMessageListRaw(requestParameters: GetMyMessageListOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMyMessageList200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getMyMessageList().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getMyMessageList().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/services/app/Message/GetMyMessageListAsync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetMyMessageListRequestToJSON(requestParameters['getMyMessageListRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetMyMessageList200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取消息列表
     */
    async getMyMessageList(requestParameters: GetMyMessageListOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMyMessageList200Response> {
        const response = await this.getMyMessageListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取未读消息列表
     */
    async getMyUnreadMessageCountRaw(requestParameters: GetMyUnreadMessageCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMyUnreadMessageCount200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getMyUnreadMessageCount().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getMyUnreadMessageCount().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/Message/GetMyUnreadMessageCountAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetMyUnreadMessageCount200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取未读消息列表
     */
    async getMyUnreadMessageCount(requestParameters: GetMyUnreadMessageCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMyUnreadMessageCount200Response> {
        const response = await this.getMyUnreadMessageCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取通知
     */
    async getNoticeRaw(requestParameters: GetNoticeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetNotice200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getNotice().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getNotice().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
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
            path: `/services/app/Notice/GetNoticeAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetNotice200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取通知
     */
    async getNotice(requestParameters: GetNoticeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetNotice200Response> {
        const response = await this.getNoticeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 获取学生设置
     */
    async getSystemSettingsForStudentRaw(requestParameters: GetSystemSettingsForStudentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSystemSettingsForStudent200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling getSystemSettingsForStudent().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling getSystemSettingsForStudent().'
            );
        }

        const queryParameters: any = {};

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
            path: `/services/app/Setting/GetSystemSettingsForStudentAsync`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSystemSettingsForStudent200ResponseFromJSON(jsonValue));
    }

    /**
     * 获取学生设置
     */
    async getSystemSettingsForStudent(requestParameters: GetSystemSettingsForStudentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSystemSettingsForStudent200Response> {
        const response = await this.getSystemSettingsForStudentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 登陆
     */
    async loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Login200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/TokenAuth/Login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters['loginRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Login200ResponseFromJSON(jsonValue));
    }

    /**
     * 登陆
     */
    async login(requestParameters: LoginOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Login200Response> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 记录图片
     */
    async recordPicturesRaw(requestParameters: RecordPicturesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecordPictures200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling recordPictures().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling recordPictures().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/services/app/StoreAppControl/RecordPicturesAsync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecordPicturesRequestToJSON(requestParameters['recordPicturesRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordPictures200ResponseFromJSON(jsonValue));
    }

    /**
     * 记录图片
     */
    async recordPictures(requestParameters: RecordPicturesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecordPictures200Response> {
        const response = await this.recordPicturesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 刷新token
     */
    async refreshTokenRaw(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefreshToken200Response>> {
        if (requestParameters['refreshToken'] == null) {
            throw new runtime.RequiredError(
                'refreshToken',
                'Required parameter "refreshToken" was null or undefined when calling refreshToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['refreshToken'] != null) {
            headerParameters['refreshToken'] = String(requestParameters['refreshToken']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/TokenAuth/RefreshToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefreshToken200ResponseFromJSON(jsonValue));
    }

    /**
     * 刷新token
     */
    async refreshToken(requestParameters: RefreshTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefreshToken200Response> {
        const response = await this.refreshTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 设置消息已读
     */
    async setMessageReadRaw(requestParameters: SetMessageReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SetMessageRead200Response>> {
        if (requestParameters['appName'] == null) {
            throw new runtime.RequiredError(
                'appName',
                'Required parameter "appName" was null or undefined when calling setMessageRead().'
            );
        }

        if (requestParameters['appVersion'] == null) {
            throw new runtime.RequiredError(
                'appVersion',
                'Required parameter "appVersion" was null or undefined when calling setMessageRead().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['messageId'] != null) {
            queryParameters['messageId'] = requestParameters['messageId'];
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
            path: `/services/app/Message/SetMessageReadAsync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SetMessageRead200ResponseFromJSON(jsonValue));
    }

    /**
     * 设置消息已读
     */
    async setMessageRead(requestParameters: SetMessageReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SetMessageRead200Response> {
        const response = await this.setMessageReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
