/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models'

/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
export interface InlineResponse2008 {
  'code': InlineResponse2008.CodeEnum;
  'resultCode': InlineResponse2008.ResultCodeEnum;
  'message': string;
  'result'?: models.InlineResponse2007Result;
  'error'?: models.InlineResponse200Error;
}

export namespace InlineResponse2008 {
  export enum CodeEnum {
    _100001 = '100001' as any,
    _100002 = '100002' as any,
    _400001 = '400001' as any,
    _400002 = '400002' as any,
    _400003 = '400003' as any,
    _500000 = '500000' as any,
    _500001 = '500001' as any,
    _500002 = '500002' as any
  }
  export enum ResultCodeEnum {
    SUCCESS = 'SUCCESS' as any,
    ERRPARAM = 'ERR_PARAM' as any,
    SENMESSAGE = 'SEN_MESSAGE' as any,
    NOTWECHATAUTH = 'NOT_WECHAT_AUTH' as any,
    NOTLOGIN = 'NOT_LOGIN' as any,
    NOTAUTH = 'NOT_AUTH' as any,
    ERROR = 'ERROR' as any,
    FAILUPLOAD = 'FAIL_UPLOAD' as any,
    FACECOMPARERUPLOAD = 'FACE_COMPARER_UPLOAD' as any
  }
}