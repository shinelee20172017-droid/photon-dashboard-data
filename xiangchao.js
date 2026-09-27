/* 湘超（湖南省足球联赛）数据源 · 每天清晨由定时任务自动更新
   结构：window.XIANGCHAO = {
     date:'YYYY-MM-DD'（本文件更新日）,
     standingsDate / scorersDate（榜单数据截止日）,
     standings:[{rank, team, played, w, d, l, gf, ga, gd, pts}],
     scorers:[{rank, name, team, goals}]   goals 形如 '3(0)' = 总进球(点球),
     assists:[{rank, name, team, count}]   官方暂未发布时为空数组,
     fixtures:[{date, home, away, note}]   永州队全赛季 13 轮赛程（含已赛比分）,
     news:[{t,p,src}]
   }
   首批种子数据：积分榜/射手榜为官方发布（截至 2026-07-26 首轮后），
   赛程为官方 13 轮全量（2026-08-06 转录自官方赛程图），
   之后由「足球日报」定时任务每日更新为最新轮次。 */
window.XIANGCHAO = {
  date: '2026-09-28',
  standingsDate: '2026-09-27',
  standings: [
    { rank:'1',  team:'长沙',   played:8, w:5, d:3, l:0, gf:15, ga:3,  gd:12,  pts:18 },
    { rank:'2',  team:'娄底',   played:8, w:5, d:3, l:0, gf:11, ga:4,  gd:7,   pts:18 },
    { rank:'3',  team:'湘潭',   played:8, w:5, d:2, l:1, gf:17, ga:7,  gd:10,  pts:17 },
    { rank:'4',  team:'邵阳',   played:8, w:3, d:4, l:1, gf:10, ga:6,  gd:4,   pts:13 },
    { rank:'5',  team:'株洲',   played:8, w:3, d:4, l:1, gf:14, ga:8,  gd:6,   pts:13 },
    { rank:'6',  team:'益阳',   played:8, w:3, d:4, l:1, gf:14, ga:11, gd:3,   pts:13 },
    { rank:'7',  team:'岳阳',   played:8, w:3, d:3, l:2, gf:8,  ga:6,  gd:2,   pts:12 },
    { rank:'8',  team:'永州',   played:8, w:3, d:2, l:3, gf:8,  ga:9,  gd:-1,  pts:11 },
    { rank:'9',  team:'郴州',   played:8, w:2, d:2, l:4, gf:14, ga:12, gd:2,   pts:8 },
    { rank:'10', team:'常德',   played:8, w:2, d:2, l:4, gf:9,  ga:14, gd:-5,  pts:8 },
    { rank:'11', team:'衡阳',   played:8, w:1, d:4, l:3, gf:5,  ga:7,  gd:-2,  pts:7 },
    { rank:'12', team:'湘西',   played:8, w:0, d:5, l:3, gf:1,  ga:7,  gd:-6,  pts:5 },
    { rank:'13', team:'怀化',   played:8, w:0, d:3, l:5, gf:6,  ga:24, gd:-18, pts:3 },
    { rank:'14', team:'张家界', played:8, w:0, d:1, l:7, gf:4,  ga:18, gd:-14, pts:1 }
  ],
  scorersDate: '2026-09-20',
  scorers: [
    { rank:'1', name:'李悦宁', team:'长沙', goals:'8(0)' },
    { rank:'1', name:'贺元杰', team:'益阳', goals:'8(0)' },
    { rank:'3', name:'张翔',   team:'长沙', goals:'4(0)' },
    { rank:'3', name:'黄天逸', team:'邵阳', goals:'4(2)' },
    { rank:'3', name:'刘轩辰', team:'怀化', goals:'4(1)' },
    { rank:'6', name:'冯锦豪', team:'株洲', goals:'3(0)' },
    { rank:'6', name:'潘鏖鸾', team:'岳阳', goals:'3(0)' },
    { rank:'6', name:'王博',   team:'郴州', goals:'3(0)' },
    { rank:'9', name:'王博',   team:'娄底', goals:'2(0)' },
    { rank:'9', name:'何阳钊', team:'湘潭', goals:'2(0)' },
    { rank:'9', name:'孙治博', team:'邵阳', goals:'2(0)' },
    { rank:'9', name:'曾庆洵', team:'株洲', goals:'2(0)' },
    { rank:'9', name:'肖劲光', team:'益阳', goals:'2(0)' },
    { rank:'9', name:'吴思江', team:'益阳', goals:'2(0)' },
    { rank:'9', name:'蒋政',   team:'常德', goals:'2(0)' },
    { rank:'9', name:'吴晓巍', team:'娄底', goals:'2(1)' },
    { rank:'9', name:'郑毅飞', team:'湘潭', goals:'2(1)' },
    { rank:'9', name:'徐永乐', team:'湘潭', goals:'2(1)' },
    { rank:'9', name:'李超豪', team:'株洲', goals:'2(1)' }
  ],
  assists: [],
  fixtures: [
    { date:'2026-07-25', home:'长沙',   away:'永州', note:'第 1 轮 · 客场 · 19:38 · 已赛 0:4 负' },
    { date:'2026-08-01', home:'永州',   away:'岳阳', note:'第 2 轮 · 主场 · 19:38 · 已赛 0:1 负' },
    { date:'2026-08-09', home:'永州',   away:'株洲', note:'第 3 轮 · 主场 · 19:38 · 已赛 1:1 平' },
    { date:'2026-08-29', home:'湘西',   away:'永州', note:'第 4 轮 · 客场 · 19:38 · 已赛 2:0 胜' },
    { date:'2026-09-05', home:'邵阳',   away:'永州', note:'第 5 轮 · 客场 · 19:38 · 已赛 0:0 平' },
    { date:'2026-09-13', home:'常德',   away:'永州', note:'第 6 轮 · 客场 · 19:38 · 已赛 2:0 胜' },
    { date:'2026-09-20', home:'湘潭',   away:'永州', note:'第 7 轮 · 客场 · 19:38 · 已赛 1:2 负' },
    { date:'2026-09-26', home:'永州',   away:'衡阳', note:'第 8 轮 · 主场 · 19:38 · 已赛 2:1 胜' },
    { date:'2026-10-04', home:'永州',   away:'娄底', note:'第 9 轮 · 主场 · 19:38 · 永州市体育场' },
    { date:'2026-10-10', home:'益阳',   away:'永州', note:'第 10 轮 · 客场 · 19:38' },
    { date:'2026-10-17', home:'郴州',   away:'永州', note:'第 11 轮 · 客场 · 19:38' },
    { date:'2026-10-24', home:'永州',   away:'怀化', note:'第 12 轮 · 主场 · 15:00 · 永州市体育场' },
    { date:'2026-10-31', home:'永州',   away:'张家界', note:'第 13 轮 · 主场 · 15:00 · 永州市体育场' }
  ],
  news: [
    { t:'第 8 轮收官：郴州 6:0 血洗怀化创湘超单场净胜球纪录，王博上演帽子戏法',
      p:'9 月 27 日晚湘超第 8 轮收官战，郴州队主场 6:0 大胜怀化队，创造湘超单场净胜球新纪录。7 号王博开场 2 分钟 40 米远射破门，随后头球破门+禁区内建功完成帽子戏法；王晋涛、梁伟杰（直接任意球）、郭嘉旭各入一球。怀化队八轮仅积 3 分继续深陷榜尾。',
      src:'郴州广电 / 搜狐体育' },
    { t:'第 8 轮：永州 2:1 力克衡阳，八轮 11 分稳居八强之列',
      p:'9 月 26 日晚永州队主场 2:1 击败衡阳队，高温鏖战中抢下关键三分。八轮战罢永州 3 胜 2 平 3 负积 11 分，位列积分榜第 8，牢牢占据八强席位。第 9 轮永州将于 10 月 4 日国庆长假期间主场迎战积分榜次席的娄底队。',
      src:'深爱榜 / 搜狐体育' },
    { t:'第 8 轮：湘西 0:0 闷平株洲，八轮战罢长娄同积 18 分并驾齐驱',
      p:'9 月 27 日晚另一场收官战，湘西队主场 0:0 战平株洲队，双方各取一分。至此第 8 轮全部结束：长沙、娄底同为 5 胜 3 平积 18 分领跑，湘潭 17 分紧随其后；邵阳、株洲、益阳同积 13 分。株洲队第 9 轮将客场挑战岳阳队。',
      src:'直播株洲 / 凤凰网湖南' },
    { t:'射手榜追踪：王博帽子戏法后总进球达 6 粒，紧追榜首双雄',
      p:'本轮郴州 7 号王博独中三元，联赛总进球达到 6 粒，仅次于同进 8 球的李悦宁（长沙）与贺元杰（益阳）。湘潭队郑毅飞本轮头球建功后进球数增至 3 粒。官方完整射手榜截至 9-27 版本暂未检索到，榜单数据仍以官方 9-20 发布为准，王博数据以官方后续榜单确认。',
      src:'新湖南 / 郴州广电' }
  ]
};
