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
  * @property `_id` id
  * @property `name` 资源名称
  * @property `nameEn` 资源英文名称
  * @property `description` 资源描述
  * @property `isLike` 是否点赞
  * @property `likeCount` 点赞数
  * @property `[price]` 价格
  * @property `[cover]` 
  * @property `[downloadUrl]` 下载列表
  * @property `[images]` 图片列表
  * @property `isDelete` 是否删除
  * @property `commentCount` 评论数
  * @property `[hotComments]` 热门评论
  * @property `[tag]` 标签
  * @property `[publisher]` 
  * @property `viewCount` 浏览数
  * @property `top` 置顶
  */
export interface InlineResponse2007Result {
  /**
   * 创建时间
   */
  'createdAt': number;
  /**
   * 更新时间
   */
  'updatedAt': number;
  /**
   * id
   */
  '_id': string;
  /**
   * 资源名称
   */
  'name': string;
  /**
   * 资源英文名称
   */
  'nameEn': string;
  /**
   * 资源描述
   */
  'description': string;
  /**
   * 是否点赞
   */
  'isLike': boolean;
  /**
   * 点赞数
   */
  'likeCount': number;
  /**
   * 价格
   */
  'price'?: boolean;
  'cover'?: models.InlineResponse2001FromUserInfoCustomAvatarUrl;
  /**
   * 下载列表
   */
  'downloadUrl'?: Array<models.InlineResponse2007DownloadUrl>;
  /**
   * 图片列表
   */
  'images'?: Array<models.InlineResponse2001FromUserInfoCustomAvatarUrl>;
  /**
   * 是否删除
   */
  'isDelete': boolean;
  /**
   * 评论数
   */
  'commentCount': number;
  /**
   * 热门评论
   */
  'hotComments'?: Array<models.InlineResponse2001ReplyComment>;
  /**
   * 标签
   */
  'tag'?: Array<string>;
  'publisher'?: models.InlineResponse2001From;
  /**
   * 浏览数
   */
  'viewCount': number;
  /**
   * 置顶
   */
  'top': number;
}
