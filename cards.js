/* =========================================================
 *  ★ 名片数据配置 —— 全部名片都在这里管理（唯一需要修改的文件）
 *  · 新增名片：复制一个 { ... } 块，改掉内容即可，互相不影响
 *  · 删除名片：删掉对应 { } 块
 *  · id 是名片的唯一标识（网址用 ?id=xxx 访问），建议用拼音/英文
 * ========================================================= */

/* ---------- 公司级信息（所有名片共用，改一处全员生效） ---------- */
const COMPANY = {
  logo:         "./广监云.png",       // 公司 LOGO
  website:      "https://www.gjian.com",
  address:      "北京市海淀区知春路68号院1号楼10层1001",
  map:          { lng: "116.325", lat: "39.977" },   // 高德经纬度（lbs.amap.com/tools/picker 拾取）

  /* 业务 Tab：公司介绍 + 2x2 服务网格（icon 可选 monitor/shield/chart/code） */
  companyIntro: "大羽·AI隐患排查：重塑隐患排查治理模式 全面提升安全治理能力",
  services: [
    { icon: "monitor", title: "大羽·安全应急模型", desc: "国内率先发布的安全应急垂类大模型" },
    { icon: "shield",  title: "九小场所·AI隐患排查智能体", desc: "适用于各级政府、街道办事处、各行业监管部门对九小场所的隐患排查治理业务场景，用AI技术助力安全监管减负提质增效" },
    { icon: "chart",   title: "大羽·应急安全管理系统智能体", desc: "对话即操作，从自然语言到业务结果的直通车" },
    { icon: "code",    title: "重点场所·AI隐患排查智能体", desc: "面向医院、养老机构、院校、宾馆酒店、大型商业综合体、交通枢纽等重点消防安全场所，依托AI大模型技术赋能隐患排查全流程，助力各类经营主体构建闭环式隐患治理体系" }
  ],

  /* 视频 Tab：企业视频（url 替换为正式 mp4） */
  video: {
    title: "广监云 · 企业宣传片",
    desc:  "3 分钟了解我们的平台与服务",
    dur:   "02:30",
    url:   "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
};

/* ---------- 名片列表（每张名片一个对象） ----------
 * 字段说明：
 *   id        唯一标识，网址为 card.html?id=zhaoyun
 *   avatar    头像图片路径；留空 "" 自动生成姓名首字渐变头像
 *   wechatQR  微信二维码图片路径；留空显示占位提示
 *   个人字段不填时会自动继承 COMPANY 的地址/官网等 */
const CARDS = [
  {
    id:       "zhaoyun",
    name:     "赵 允",
    title:    "HR",
    company:  "北京广监云科技有限公司",
    bio:      "专注组织发展与人才战略，让每一份人才决策都有据可依。",
    phone:    "186 1122 6701",
    email:    "hr@gjian.com",
    wechatId: "186 1122 6701",
    wechatQR: "./微信二维码.jpg",
    avatar:   "./赵允.jpg",
    visitCount: 128
  },

  /* ↓↓↓ 复制下面这一整块，改成新名片即可（可复制多份） ↓↓↓ */
  {
    id:       "demo",
    name:     "李示范",
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
  /* ↑↑↑ 示例名片，正式使用时可删除 ↑↑↑ */
];
