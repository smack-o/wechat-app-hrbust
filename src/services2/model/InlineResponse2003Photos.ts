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
  * @property `key` 图片 url
  * @property `status` 
  */
export interface InlineResponse2003Photos {
  /**
   * 图片 url
   */
  'key': string;
  'status': InlineResponse2003Photos.StatusEnum;
}

export namespace InlineResponse2003Photos {
  export enum StatusEnum {
    _0 = '0' as any,
    _1 = '1' as any,
    _2 = '2' as any
  }
}