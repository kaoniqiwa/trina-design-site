import type { App } from 'vue'

declare global {
  declare type Recordable<T = any> = Record<string, T>
  declare type Nullable<T> = T | null

  /**自定义 vite 环境变量 */
  declare interface ViteEnv {
    VITE_USE_MOCK: boolean
    VITE_PUBLIC_PATH: string
    VITE_PORT: number
    VITE_PROXY: [string, string][]
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
  }
  // 类型合并
  interface ImportMetaEnv extends ViteEnv {
    // __: unknown;
  }
  // declare interface Window {
  //   appRootInstance: App<Element>;
  // }
}

declare module '@vue/runtime-core' {
  // 声明全局属性
  interface ComponentCustomProperties {
    $i18n: any
  }
}
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any> & { readonly pageDate?: PageData }
  export default component
}

declare global {
  interface Window {
    docsearch: any
    notBlockEnabled: any
  }
  interface Header {
    level: number
    title: string
    slug: string
    content: string
  }
}
