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

import ajax, { AjaxPromise, ExtraFetchParams } from '@ajax'
import * as models from '../model/models'

/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * request body
  */
export type ParamsBodyapiConfigGet = models.Data1

export class ConfigApi {
  protected $basePath = ''.replace(/\/$/, '')

  public constructor(basePath?: string) {
    if (basePath !== undefined) {
      this.$basePath = basePath.replace(/\/$/, '')
    }
  }

  /**
   * 获取配置
   * @summary 获取配置
   
   * @param data: ParamsBodyapiConfigGet// request body
   * @param opt ajax config
   * @returns models.InlineResponse2002
   */
  public apiConfigGet = (
    
    data: ParamsBodyapiConfigGet,opt?: ExtraFetchParams
  ) : AjaxPromise<models.InlineResponse2002>  => {
    const url = this.$basePath + '/api/config'
    const p: any = {}
    p.data = data
    return ajax.ajax({
      ...opt,
      method: 'GET',
      url,
      ...p
    })
  }
}

export default new ConfigApi()