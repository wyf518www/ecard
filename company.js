/* =========================================================
 *  ★ 公司级信息（所有名片共用，改一处全员生效）★
 *  本文件只放"公司"信息，人员名片数据在 cards.js。
 *  手动修改本文件后，重新部署即可（docker compose up -d --build）。
 * ========================================================= */
const COMPANY = {
  company:      "北京广监云科技有限公司",   // 公司全称（名片、名片墙共用）
  logo:         "./广监云.png",            // 公司 LOGO
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
