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
  * @property `createdAt` 创建时间
  * @property `updatedAt` 更新时间
  * @property `_id` 消息 id
  * @property `[to]` 
  * @property `[from]` 
  * @property `content` 内容
  * @property `type` 消息类型
  * @property `[ext]` 
  * @property `isRead` 是否已读
  */
export interface InlineResponse2005Result {
  /**
   * 创建时间
   */
  'createdAt': number;
  /**
   * 更新时间
   */
  'updatedAt': number;
  /**
   * 消息 id
   */
  '_id': string;
  'to'?: models.InlineResponse2001From;
  'from'?: models.InlineResponse2001From;
  /**
   * 内容
   */
  'content': string;
  /**
   * 消息类型
   */
  'type': InlineResponse2005Result.TypeEnum;
  'ext'?: models.InlineResponse2005Ext;
  /**
   * 是否已读
   */
  'isRead': boolean;
}

export namespace InlineResponse2005Result {
  export enum TypeEnum {
  /**
   * `BrickLike` 消息类型
   */
    BrickLike = 'BrickLike' as any,
  /**
   * `MateLike` 消息类型
   */
    MateLike = 'MateLike' as any,
  /**
   * `CommentLike` 消息类型
   */
    CommentLike = 'CommentLike' as any,
  /**
   * `Comment` 消息类型
   */
    Comment = 'Comment' as any,
  /**
   * `Hot` 消息类型
   */
    Hot = 'Hot' as any
  }
}
