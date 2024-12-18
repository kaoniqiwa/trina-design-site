/// <reference types="vite/client" />
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any> & { readonly pageDate?: PageData }
  export default component
}
