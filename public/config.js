// 配置
window.Config = {

  // 站点名
  SiteName: 'Ender\'s Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm789531287-210b470971efb1b9146a0c53',
    'm783825758-99570f0039c8792809ba8a0b',
    'm789531289-6f3a565d42f27338f6ce608d',
    'm791207770-56f9624e3a35454de4026e53',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 导航栏菜单
  Navi: [
    {
      text: 'GitHub',
      url: 'https://github.com/code004Accepted'
    },
    {
      text: 'Blog',
      url: 'https://code004accepted.github.io'
    }
  ]
};
