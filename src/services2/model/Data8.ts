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
  * @property `[to]` wall id
  * @property `[tel]` 表白人的手机号
  * @property `[content]` 内容
  * @property `[photos]` 图片列表
  */
export interface Data8 {
  /**
   * wall id
   */
  'to'?: string;
  /**
   * 表白人的手机号
   */
  'tel'?: string;
  /**
   * 内容
   */
  'content'?: string;
  /**
   * 图片列表
   */
  'photos'?: Array<string>;
}
