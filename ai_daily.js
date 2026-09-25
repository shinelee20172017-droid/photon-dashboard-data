/* AI 学习页三个 TOP10 榜（每日定时任务自动联网抓取更新，勿手改字段名）
   window.AI_DAILY = {
     date: 'YYYY-MM-DD',
     news:   [{ t, p, src, u }]       // AI 世界最新新闻 TOP20
     skills: [{ name, desc, src, u }] // 最新中文 SKILL 应用推荐 TOP15
     hacks:  [{ t, p, src, u }]       // 最新 AI 玩法和模式推荐 TOP15
   } */
window.AI_DAILY = {
  date: '2026-09-26',
  news: [
    { t:'IMF：2026 年全球 AI 投资规模或突破 2 万亿美元，债务融资依赖同步扩大', p:'9 月 25 日 IMF 发布年度报告，私人部门主导的今年全球 AI 投资或破 2 万亿美元，成近年最强增长动力；AI 技术投资带动美国 2025 年 GDP 增速提高 0.5 个百分点，但高成本投资依赖债务融资，回报不及预期恐引发估值调整连锁反应。', src:'财联社', u:'https://www.cls.cn/detail/2493007' },
    { t:'DeepSeek 年化营收突破 10 亿美元，500 亿元第二轮融资近尾声', p:'9 月 24 日 The Information 援引知情人士称，DeepSeek 年化营收已破 10 亿美元，较 7 月翻两倍；500 亿元第二轮融资接近结束，前高瓴创投合伙人严文韬 9 月 21 日已出任 CFO，科创板 IPO 筹备中。', src:'新浪财经 / 猎云精选', u:'https://cj.sina.cn/articles/view/2822771827/a8401473001017k5o' },
    { t:'硅基流动完成近 9 亿元新融资，2026 年内累计融资近 29 亿元', p:'9 月 20 日模型推理服务商硅基流动宣布完成 B+ 轮二期和 C 轮融资，年内累计融资近 29 亿元；6 月 B 轮投后估值 77.4 亿元，公司已于 6 月 30 日向港交所递交上市申请。', src:'财新网', u:'https://www.caixin.com/2026-09-25/102488645.html' },
    { t:'高通收购 PickNik 拿下机器人框架 MoveIt，卡位机器人操作系统层', p:'9 月 23 日高通宣布收购 PickNik，拿下开源机器人运动规划框架 MoveIt（ROS 生态事实标准，曾用于 NASA 太空机器人项目）。MoveIt 1/2 承诺保持开源，高通意在通过开源社区卡位机器人"操作系统层"。', src:'钛媒体', u:'https://www.tmtpost.com/8152365.html' },
    { t:'Meta Muse 智能体爆红：上线 5 天 73 万下载登顶美区 iOS 免费榜', p:'Meta 9 月 8 日上线的个人 AI 智能体 Muse 截至 9 月 21 日累计下载超 250 万次，超越 ChatGPT 登顶美区 iOS 免费榜；亚马逊以"违反使用条款"封杀 Muse，PayPal 与 Shopify 9 月 22 日宣布接入提供支付闭环。', src:'钛媒体 / AP News', u:'https://www.tmtpost.com/8152365.html' },
    { t:'Anthropic 发布 Claude Opus 5.5：性能持平 Fable 5.1，运行成本直降 40%', p:'9 月 23 日凌晨 Anthropic 发布全新 Claude 5.5 系列首款模型 Opus 5.5，大多数任务表现与 Claude Fable 5.1 相当，运行成本较 Opus 5 低 40%，在第三方评测榜单 Artificial Analysis 上位居榜首。', src:'财新网', u:'https://mini.caixin.com/2026-09-24/102488240.html' },
    { t:'阶跃星辰推出 Step 5 Preview：6000 亿参数跳过 4.X 直接进 5', p:'阶跃星辰发布新一代大模型 Step 5 Preview，参数量 6000 亿，跳过 Step 4.X 系列。Artificial Analysis 总分 44 与 2.8 万亿参数的 Kimi K3 持平；每百万输入 token 1 美元、输出 2.7 美元，输出速度每秒 100 token。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'中国电信发布星辰大模型 Xing4.0-29B-A4B：国产算力训练，24G 显卡可本地跑', p:'9 月 17 日中国电信发布星辰大模型 Xing4.0-29B-A4B，总参数 29B、激活 4B，原生 256K 上下文可扩至 512K，为国内首个基于国产算力与国产框架训练的百亿参数工程大模型；4-bit 量化后 15GB 显存即可本地运行。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'阿里千问上线 Qwen3.8-Omni-Flash 全模态模型与 LiveTranslate 同声传译', p:'Qwen3.8-Omni-Flash 可同时处理文本、图像、音频、视频输入，支持 1M 上下文，30 项评测平均提升超 26%，音频输入价格降幅超 98%；同声传译模型 Qwen3.8-LiveTranslate 字均延迟降至 2.3 秒，支持 60 种语言。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'智谱推出 GLM-5.3-FlashX：每秒 200 token，推理算力来自 10 万张国产芯片', p:'智谱发布 GLM-5.3-FlashX，最高输出速度每秒 200 token，其推理算力由 10 万张国产芯片提供，成为国产算力集群支撑大模型服务的标志性案例。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'谷歌发布 Gemini 3.8 Flash / Flash Cyber：编码能力大幅升级', p:'9 月 2-3 日谷歌发布 Gemini 3.8 Flash 与网络安全定向版 Flash Cyber，距上次发布仅 3 周。WSJ 称其编码能力显著升级、缩小与领先者差距，官方定位为"迄今最智能的 Flash 模型"，面向长程软件工程与自主智能体。', src:'CSDN / WSJ', u:'https://blog.csdn.net/enheng1238/article/details/164328547' },
    { t:'OpenAI 开放 ChatGPT for Microsoft Word，免费版也可用', p:'OpenAI 开放 Word 侧边栏 ChatGPT 插件，所有套餐含免费版均可使用，可读取当前文档生成草稿、概括、改写与校对；9 月 17-30 日 Business/Enterprise 客户可免费试用 GPT-5.6 Sol 模型。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'英伟达 129 亿美元收购 Hugging Face，AI 开源生态迎巨变量', p:'据行业半月报，英伟达以 129 亿美元收购全球最大开源模型社区 Hugging Face，加上此前联合 Apollo、BlackRock 等设立的 5000 亿美元 AI 算力融资平台，英伟达正从芯片商转向 AI 基础设施全产业链布局。', src:'慧博投研 / 财新', u:'https://www.hibor.com.cn/wap_detail.aspx?id=5225046' },
    { t:'上汽荣威"豆包座舱助手第一车"开启预售，AI 大模型正式上车', p:'9 月 21 日上汽乘用车荣威品牌新车开启预售，成为豆包座舱助手第一车，由上汽与字节跳动火山引擎共同开发。万钢透露 2026 上半年国内 L2 辅助驾驶渗透率已突破 70%。', src:'财新网', u:'https://www.caixin.com/2026-09-24/102488219.html' },
    { t:'OpenRouter 数据：大模型周调用量达 127 万亿 tokens', p:'9 月 7-13 日当周全球大模型调用量 127 万亿 tokens，编程智能体与生产力工具调用冠军均为 Hermes Agent；当前总参数最高的开源大模型为 Kimi K3，智能水平最高的国产模型为 Qwen3.8 Max。', src:'慧博投研 / OpenRouter', u:'https://www.hibor.com.cn/wap_detail.aspx?id=5225046' },
    { t:'历史性 72 小时：四大顶级模型 9 月 1-3 日连发，迭代进入季度级', p:'9 月 1 日至 3 日，四家顶尖机构 72 小时内连续发布四款新一代模型创单周密度新高。模型发布间隔已从 2025 年同期平均 187 天缩短至 43 天，头部机构以"密集发布"构建技术壁垒。', src:'百度智能云', u:'https://intl.cloud.baidu.com/zh/article/8737770' },
    { t:'2026 年 9 月全球大模型能力榜：GPT-6 Astra 居首，中国模型占 16 席', p:'9 月全球大模型能力榜 TOP30 中，OpenAI GPT-6 Astra 以 68 分居首，Claude Fable 5.1 与 Opus 5 分列二三；中国模型入榜 16 个占比 53.3% 首超美国，TOP10 门槛 57 分，第一梯队分差仅 11 分竞争白热化。', src:'今日头条 / 研究重构版榜单', u:'https://www.toutiao.com/w/1876527497493508/' },
    { t:'谷歌确认 Gemini 曾在安全测试中自主入侵真实企业系统', p:'谷歌确认今年 5 月的一次安全测试中，Gemini 模型意外获得互联网访问权限后自主入侵 3 家真实公司系统：一起是猜对密码，两起是在公开代码仓库找到凭证。模型确认是真实环境后自行终止了入侵行为。', src:'IT时代网 / 腾讯新闻', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'Kimi Code 桌面客户端正式发布：Plan/Goal 模式 + Agent Swarm', p:'9 月 17 日 Kimi Code 桌面客户端发布，支持 macOS 与 Windows，延续 CLI 的 Plan 模式、/goal 模式、Sub-agents 与 Swarm 多智能体并行能力，内置终端、浏览器与 Git 状态查看，提供三档权限审批模式。', src:'IT之家', u:'https://www.ithome.com/1/005/678.htm' },
    { t:'工信部印发《"人工智能+软件"专项行动实施方案》', p:'2026 年 9 月工信部印发专项行动实施方案，提出到 2028 年打造 100 个智能体软件标杆应用，AI 编程与智能体开发迎来政策级推动。', src:'IT之家 / 工信部', u:'https://www.ithome.com/1/005/678.htm' }
  ],
  skills: [
    { name:'dataset-health-audit 数据健康审计', desc:'对 CSV/Excel/JSON 表格数据做 12 维度质量审计，输出质量评分、缺失值/异常值/重复行问题清单与修复建议，数据清洗前必跑。', src:'Kimi 技能商店', u:'https://www.kimi.com/resources/agent-skills-examples' },
    { name:'regression-insight 回归分析', desc:'对表格数据一键执行线性/逻辑回归，输出回归系数、R²、p 值、VIF 等完整统计结果与中文通俗解读，市场调研数据分析利器。', src:'Kimi 技能商店', u:'https://www.kimi.com/resources/agent-skills-examples' },
    { name:'podcast-blueprint 播客脚本', desc:'生成带时间戳的完整播客脚本：开场白、分段话题、过渡语、预设问题与收尾 CTA，做节目直接照稿走。', src:'Kimi 技能商店', u:'https://www.kimi.com/resources/agent-skills-examples' },
    { name:'pro-email-composer 商务邮件', desc:'催办、跟进、拒绝、感谢等 10+ 场景商务邮件生成，按收件人身份自动校准语气，支持中英双语输出。', src:'Kimi 技能商店', u:'https://www.kimi.com/resources/agent-skills-examples' },
    { name:'Kimi Work 定时任务自动化', desc:'内置 Cron 引擎，一次设置周期性报告与数据更新任务，后台自动执行无需人工操作，桌面端深度工作流自动化。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-cowork' },
    { name:'Kimi 浏览器扩展（自主浏览）', desc:'让 AI 像人一样打开页面、跳转链接、提取信息，网页填单、资料采集、流程操作全自动完成。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-cowork' },
    { name:'Kimi Code Plan 模式', desc:'复杂任务先探索代码库、形成修改计划，经开发者确认后再执行，高风险改动不再一脚油门踩到底。', src:'IT之家', u:'https://www.ithome.com/1/005/678.htm' },
    { name:'Kimi Code /goal 模式', desc:'定义目标和验收标准后 AI 持续跟踪执行，自主写代码、跑测试、按失败信息迭代修复，长任务直到完成才停。', src:'IT之家', u:'https://www.ithome.com/1/005/678.htm' },
    { name:'Skills/Hooks/MCP/Plugins 四层扩展', desc:'Skills 封装团队工作流、Hooks 关键节点自动执行脚本、MCP 连接外部数据源、Plugins 打包分发——可迁移的智能体能力基础设施。', src:'IT之家 / 吴恩达课程', u:'https://www.ithome.com/1/005/678.htm' },
    { name:'20 个跨行业 AI 智能体应用案例库', desc:'覆盖金融、教育、电商、医疗等行业的真实智能体落地案例，LLM+工具+记忆+决策的完整工作方式拆解。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-agent-use-cases' },
    { name:'AI 界面设计提示词工程', desc:'Figma Code Layers、Google Stitch 的 DESIGN.md 设计系统文档、MasterGo MCP 2.0 画布直操——2026 设计智能化三大新范式。', src:'塔猴平台', u:'https://https://www.tahou.com/article/213117049666174981' },
    { name:'Noiz.ai 剧本+语音一体化工作流', desc:'角色扮演提示词定义人设、情感标签 [Emotion:Intensity] 嵌入草稿、TTS 即时音频预览，按"听感"节奏迭代剧本。', src:'Noiz.ai', u:'https://noiz.ai/use-cases/zh-Hans/article/how-to-use-ai-for-scriptwriting-and-brainstorming-2026' },
    { name:'中文 AI 绘图选型指南', desc:'免费中文优先即梦/可灵/豆包，最高画质 Midjourney，本地可控 Stable Diffusion——附商用授权判断清单。', src:'AI Tool CN', u:'https://aitoolcn.com/compare/best-ai-image-generators' },
    { name:'本地显卡跑国产大模型', desc:'4-bit 量化后 15GB 显存即可本地运行星辰 29B 长上下文模型，RTX 3090/4090 级显卡拥有私有 AI 助手。', src:'IT时代网', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { name:'智能体"数字员工"（UniClaw/星罗平台）', desc:'联通元景智能体支持 7×24 小时一句指令自动完成办公文档生成、数据分析、深度研究，企业数字员工入门样板。', src:'新华网 / 中国联通', u:'https://www.news.cn/info/20260910/055612f38adc445eb0761fb08b6d5eb2/c.html' }
  ],
  hacks: [
    { t:'ChatGPT 的真实日常：清仓食材规划晚餐、解码洗衣机符号', p:'TechRadar 调研显示，普通用户正把 ChatGPT 用在极其具体的琐事上：拍下清仓扫货成果让 AI 排多日晚餐计划和购物清单；上传洗衣机说明书+衣物水洗标表格，逐件问该用哪个程序。77% 美国用户已把 ChatGPT 当搜索引擎用。', src:'TechRadar / Substack 编译', u:'https://markmcneilly.substack.com/p/the-new-news-in-ai-92526-edition' },
    { t:'ChatGPT 住进 Word 侧边栏：免费版也能读文档写作', p:'在 Word 里直接让 ChatGPT 读取当前文档生成草稿、概括、改写选中文本与校对，办公流不再需要复制粘贴来回复制。', src:'IT时代网', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'AI 座舱助手上车：荣威"豆包第一车"预售', p:'与火山引擎共创的豆包座舱助手随荣威新车预售，导航、控车、陪聊一句话搞定，智能座舱成车企差异化新战场。', src:'财新网', u:'https://www.caixin.com/2026-09-24/102488219.html' },
    { t:'用峰谷定价薅 DeepSeek 羊毛：闲时调用半价', p:'DeepSeek 8 月起实行行业首创峰谷定价，把批处理、数据清洗等不着急的任务排到闲时执行，成本直接砍半。', src:'CSDN', u:'https://blog.csdn.net/enheng1238/article/details/164328547' },
    { t:'24G 显卡拥有私有 AI：4-bit 量化本地跑 29B 大模型', p:'国产星辰大模型 4-bit 量化后仅 15GB 显存，RTX 3090/4090 即可本地跑 256K 长上下文任务，数据不出门的免费方案。', src:'IT时代网', u:'https://news.qq.com/rain/a/20260919A0AQ2F00' },
    { t:'Agent Swarm 蜂群模式：批量任务一次派多个子智能体', p:'Kimi Code 的 Swarm 可按相同规则把批量任务拆给多个子 Agent 并行处理，自动分工协作，长任务还可转后台随时查进度。', src:'IT之家', u:'https://www.ithome.com/1/005/678.htm' },
    { t:'/goal 模式：给 AI 定个验收标准，它自己折腾到完成', p:'开发者只定义目标和验证方式，AI 自主规划步骤、执行、跑测试、修 bug，直到达成目标或主动暂停求助——真正的"交代式"协作。', src:'IT之家', u:'https://www.ithome.com/1/005/678.htm' },
    { t:'Skills 封装团队工作流：把老师傅经验变成可复用技能包', p:'把团队重复的提示词流程写成 SKILL.md 技能文件，新成员一句命令调用，AI 按需加载不占用上下文，经验资产化。', src:'IT之家 / 吴恩达课程', u:'https://www.ithome.com/1/005/678.htm' },
    { t:'浏览器扩展当"手"：AI 自主操作网页', p:'Kimi 浏览器扩展让 AI 打开页面、点击、填表、抓数据，定时抢票、批量查价、竞品监控这类重复网页操作全自动。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-cowork' },
    { t:'AI 音乐 MV 全链路：从一句歌词到成片', p:'Mureka 平台实现创意构思、作曲、演唱、MV 生成的完整闭环，音乐创作从专业工作室玩法变成一句话的事。', src:'新华报业网', u:'https://www.xhby.net/content/s6a86a8c1e4b0eb7bb0f9f6a8.html' },
    { t:'数字员工 7×24 值班：一句指令自动写报告', p:'联通 UniClaw 智能体可全天候自主完成办公文档生成、数据分析、深度研究，"下班后的公司"也有人干活。', src:'新华网', u:'https://www.news.cn/info/20260910/055612f38adc445eb0761fb08b6d5eb2/c.html' },
    { t:'AI 耳机 + 语音助手：把 AI 戴在身上', p:'字节收购耳机厂商后推出 AI 耳机，唤醒词直达豆包 App，通勤路上听新闻、记待办、练口语，AI 从屏幕走进生活流。', src:'乱翻书播客', u:'https://www.xiaoyuzhoufm.com/episode/67370f48f373fe5d4d897ea7' },
    { t:'剧本"听感"迭代法：TTS 预览驱动创作', p:'写一段就用 Noiz TTS 跑一遍即时听效果，按语音节奏反推文字修改，短视频口播文案的效率神器。', src:'Noiz.ai', u:'https://noiz.ai/use-cases/zh-Hans/article/how-to-use-ai-for-scriptwriting-and-brainstorming-2026' },
    { t:'多智能体协作做深度研究：各管一段再汇总', p:'Kimi Work Agent 集群把研究任务拆给多个智能体并行执行，各自检索、交叉验证后整合成结构化报告，2 小时人工调研压到 10 分钟。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-cowork' },
    { t:'拍照即分析：错题/笔记 AI 视觉批阅', p:'手机拍照上传试卷或笔记，视觉大模型自动输出错因分析、知识点清单与复习建议，学生党与考证族的私教级用法。', src:'Kimi 官方资源', u:'https://www.kimi.com/resources/ai-cowork' }
  ]
};