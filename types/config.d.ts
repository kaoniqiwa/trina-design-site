import { CacheTypeEnum } from '/@/enums/cacheEnum';
// 全局配置
export interface GlobConfig {
  title: string;
  apiUrl: string;
  urlPrefix?: string;
  // 短标题
  shortTitle: string;
}

// 环境变量配置
export interface GlobEnvConfig {
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_GLOB_API_URL: string;
  VITE_GLOB_API_URL_PREFIX?: string;
}

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';
export interface LocaleSetting {
  locale: LocaleType;
  fallback: LocaleType;
}

export interface ProjectConfig {
  permissionCacheType: CacheTypeEnum;
}
