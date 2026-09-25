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
  date: '2026-09-26',
  standingsDate: '2026-09-20',
  standings: [
    { rank:'1',  team:'长沙',   played:7, w:5, d:2, l:0, gf:14, ga:2,  gd:12,  pts:17 },
    { rank:'2',  team:'娄底',   played:7, w:4, d:3, l:0, gf:9,  ga:3,  gd:6,   pts:15 },
    { rank:'3',  team:'湘潭',   played:7, w:4, d:2, l:1, gf:12, ga:5,  gd:7,   pts:14 },
    { rank:'4',  team:'邵阳',   played:7, w:3, d:3, l:1, gf:9,  ga:5,  gd:4,   pts:12 },
    { rank:'5',  team:'株洲',   played:7, w:3, d:3, l:1, gf:14, ga:8,  gd:6,   pts:12 },
    { rank:'6',  team:'益阳',   played:7, w:3, d:3, l:1, gf:13, ga:10, gd:3,   pts:12 },
    { rank:'7',  team:'岳阳',   played:7, w:3, d:2, l:2, gf:7,  ga:5,  gd:2,   pts:11 },
    { rank:'8',  team:'永州',   played:7, w:2, d:2, l:3, gf:6,  ga:8,  gd:-2,  pts:8 },
    { rank:'9',  team:'常德',   played:7, w:2, d:2, l:3, gf:7,  ga:9,  gd:-2,  pts:8 },
    { rank:'10', team:'衡阳',   played:7, w:1, d:4, l:2, gf:4,  ga:5,  gd:-1,  pts:7 },
    { rank:'11', team:'郴州',   played:7, w:1, d:2, l:4, gf:8,  ga:12, gd:-4,  pts:5 },
    { rank:'12', team:'湘西',   played:7, w:0, d:4, l:3, gf:1,  ga:7,  gd:-6,  pts:4 },
    { rank:'13', team:'怀化',   played:7, w:0, d:3, l:4, gf:6,  ga:18, gd:-12, pts:3 },
    { rank:'14', team:'张家界', played:7, w:0, d:1, l:6, gf:3,  ga:16, gd:-13, pts:1 }
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
    { date:'2026-09-26', home:'永州',   away:'衡阳', note:'第 8 轮 · 主场 · 19:38 · 今晚开球 · 永州市体育场' },
    { date:'2026-10-04', home:'永州',   away:'娄底', note:'第 9 轮 · 主场 · 19:38 · 永州市体育场' },
    { date:'2026-10-10', home:'益阳',   away:'永州', note:'第 10 轮 · 客场 · 19:38' },
    { date:'2026-10-17', home:'郴州',   away:'永州', note:'第 11 轮 · 客场 · 19:38' },
    { date:'2026-10-24', home:'永州',   away:'怀化', note:'第 12 轮 · 主场 · 15:00 · 永州市体育场' },
    { date:'2026-10-31', home:'永州',   away:'张家界', note:'第 13 轮 · 主场 · 15:00 · 永州市体育场' }
  ],
  news: [
    { t:'今晚 19:38 第 8 轮：永州主场迎战衡阳，卡位战一触即发',
      p:'9 月 26 日 19:38，湘超第 8 轮永州队坐镇永州市体育场迎战衡阳队（冷水滩区政府官网赛程确认）。两队只差 1 分：永州 8 分居第 8，衡阳 7 分居第 10，此役是实打实的卡位战。门票此前两轮开售（9-21 12:08 一开、9-24 18:08 二开），大麦网搜索"湘超"可购，每个 ID 限购 4 张。',
      src:'永州发布 / 冷水滩区政府官网' },
    { t:'前瞻：永州主场被看好，媒体预测 2-1 或 3-1 取胜衡阳',
      p:'赛前分析指出，永州队主场进攻效率名列前茅，历史主场对阵衡阳胜率较高；衡阳则以坚韧防守著称但进攻乏力。预测永州 2-1 或 3-1 主场取胜，具体还要看双方临场发挥。今晚永州市体育场的主场氛围将是球队最大的底气。',
      src:'搜狐体育 / 永州赛区' },
    { t:'湘超第七轮：永州客场 1:2 惜败湘潭，王宁世界波难救主',
      p:'9 月 20 日晚湘超第七轮，永州队客场挑战湘潭队。第 25 分钟湘潭张文煊率先破门，第 32 分钟永州 5 号王宁轰出世界波扳平；第 88 分钟湘潭徐永乐完成绝杀，最终永州 1:2 憾负。七轮战罢永州 2 胜 2 平 3 负积 8 分暂列第 8。',
      src:'永州新闻网 / 永州广电' },
    { t:'第七轮战罢：长沙 17 分领跑，湘潭绝杀升第三，邵阳遭赛季首败',
      p:'9 月 19-20 日湘超第七轮全部结束：湘潭 2:1 绝杀永州，株洲 4:0 大胜张家界，邵阳 0:1 不敌岳阳遭遇赛季首败。积分榜上长沙 17 分、娄底 15 分稳居前二，湘潭 14 分升至第三；株洲、邵阳、益阳同积 12 分位列 4-6 位。',
      src:'潇湘晨报 / 红网' }
  ]
};