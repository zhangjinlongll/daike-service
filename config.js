/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-14 16:02:09 
 * @Last Modified by: dragon
 * @Last Modified time: 2019-10-13 01:11:54
 * @Description: config file 
 */

module.exports = {
  port: 8081, // 项目启动的端口
  db: 'mongodb://106.54.126.156:27017/dai-ke', // 数据库
  saltTimes: 3 // 加盐的次数（用户密码加密）
}