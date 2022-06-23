/* eslint-disable no-restricted-syntax */
import { parse } from 'querystring';
import proSettings from '../../config/defaultSettings';
import { reportError } from '@/services/utils';
// import { getAccount, getAccountInfo } from '@/utils/storage';
import { getAccount, getAccountInfo } from '@/utils/storage';
import { notification } from 'antd';



export function errorReport(message: any, reqUrl: string, code: any = '未收集') {
    const user = getAccount() || 'guest';
    const currentPage = window.location.href.toString();
    //浏览器的正式名称
    const appName = navigator.appName.toString();
    //浏览器的版本号
    const appVersion = navigator.appVersion.toString();
    if (reqUrl.indexOf(proSettings.reportUrl) < 0) {
        reportError({ message, user, reqUrl, currentPage, appName, appVersion, code })
            .then((res: any) => {
                console.log('报告异常成功');
            })
            .catch((error: any) => {
                console.log('报告异常失败');
            });
    }
}