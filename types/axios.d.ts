export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export type SuccessMessageMode = 'none' | 'success' | 'error' | undefined;

export interface RequestOptions {
  /**默认将prefix 添加到url */
  joinPrefix?: boolean;
  /**是否返回axios原生响应头 比如：需要获取响应头response headers中的content时使用该属性 */
  isReturnNativeResponse?: boolean;
  /**需要对返回数据进行处理 */
  isTransformResponse?: boolean;
  /**post请求的时候添加参数到url */
  joinParamsToUrl?: boolean;
  /**格式化提交参数时间 */
  formatDate?: boolean;
  /**错误消息提示类型 */
  errorMessageMode?: ErrorMessageMode;
  /**成功消息提示类型 */
  successMessageMode?: SuccessMessageMode;
  // 接口地址，如果保留为空，则使用默认值
  apiUrl?: string;
  /** 请求拼接路径 */
  urlPrefix?: string;
  /**是否添加时间戳 --用于防止缓存 */
  joinTime?: boolean;
  /**是否在标头中发送令牌 */
  withToken?: boolean;
  /**忽略重复请求 */
  ignoreCancelToken?: boolean;
}

// Result.java
export interface Result<T = any> {
  // 返回代码
  code: number;
  // 成功标志
  success: boolean;
  // 返回处理消息
  message: string;
  // 返回数据对象
  result: T;
  // 时间戳
  timestamp: number;
}
