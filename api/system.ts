const request = require('../utils/request')

/**
 * 获取系统基础统计
 *
 * @constructor
 * @returns Promise<object>
 */
export async function Total(): Promise<object> {
  const req = await request({
    url: '/system?action=GetSystemTotal',
  })
  return req.data
}

/**
 * 获取磁盘分区信息
 *
 * @constructor
 * @returns Promise<object>
 */
export async function Disk(): Promise<object> {
  const req = await request({
    url: '/system?action=GetDiskInfo',
  })
  return req.data
}

/**
 * 获取实时状态信息(CPU、内存、网络、负载)
 *
 * @constructor
 * @returns Promise<object>
 */
export async function Status(): Promise<object> {
  const req = await request({
    url: '/system?action=GetNetWork',
  })
  return req.data
}

/**
 * 检查面板更新
 *
 * @constructor
 * @returns Promise<object>
 */
export async function Update(params: Object): Promise<object> {
  const req = await request({
    url: '/ajax?action=UpdatePanel',
    params,
  })
  return req.data
}
