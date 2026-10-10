/* =========================================================
 *  ★ 人员名片数据（每张名片一个对象）★
 *
 *  生成方式（推荐，适合全公司批量维护）：
 *    打开 make-cards.html → 下载 Excel 模板发给同事填写 →
 *    收回后在 Excel 里全选复制 → 粘贴进工具 → 下载新的 cards.js 覆盖本文件
 *    （人员头像/二维码图片放进 photos/ 文件夹，文件名与表格一致）
 *
 *  手动方式（少量增删改也可以直接编辑本文件）：
 *    · 新增名片：复制一个 { ... } 块，改掉内容即可，互相不影响
 *    · 删除名片：删掉对应 { } 块
 *    · id 是名片的唯一标识（网址用 card.html?id=xxx 访问），建议用工号/拼音
 *  生成时间：2026-10-09（覆盖本文件不影响 company.js 里的公司公共信息）
 * ========================================================= */
const CARDS = [
  {
    id:       "zhaoyun",
    name:     "赵 允",
    dept:     "人力资源部",
    title:    "HR",
    company:  "北京广监云科技有限公司",
    bio:      "专注组织发展与人才战略，让每一份人才决策都有据可依。",
    phone:    "186 1122 6701",
    email:    "hr@gjian.com",
    wechatId: "186 1122 6701",
    wechatQR: "./photos/微信二维码.jpg",
    avatar:   "./photos/赵允.jpg",
    visitCount: 128
  },
  {
    id:       "demo",
    name:     "李示范",
    dept:     "销售部",
    title:    "销售总监",
    company:  "北京广监云科技有限公司",
    bio:      "这是第二张名片示例——复制本块修改信息，即可无限扩展名片。",
    phone:    "138 0000 0000",
    email:    "demo@gjian.com",
    wechatId: "demo-wechat",
    wechatQR: "",
    avatar:   "",
    visitCount: 56
  }
];
