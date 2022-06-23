import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  // 当前发性版本，用来check前端版本
  version: string
  // 是否报告前端错误
  reportError: boolean,
  // 前端报告错误的网址
  reportUrl: string
};

const proSettings: DefaultSettings = {
  // 拂晓蓝
  title: 'HI健康运营平台',
  pwa: false,
  iconfontUrl: '',
  reportError: false,
  reportUrl: '/frontendError/report',
  version: 'haiyul-2021.01',
  navTheme: "light",
  primaryColor: "#1890ff",
  layout: "mix",
  contentWidth: "Fluid",
  splitMenus: false,
  fixedHeader: true,
};

export { DefaultSettings };

export default proSettings;
