/* 湘超（湖南省足球联赛）数据源 · 每天清晨由定时任务自动更新
   结构：window.XIANGCHAO = {
     date:'YYYY-MM-DD'（本文件更新日）,
     standingsDate / scorersDate（榜单数据截止日）,
     standings:[{rank,team,played,w,d,l,gf,ga,gd,pts}],
     scorers:[{rank,name,team,goals}]   goals 形如 '3(0)' = 总进球(点球),
     assists:[{rank,name,team,count}]   官方暂未发布时为空数组,
     fixtures:[{date,home,away,note}]   永州队全赛季 13 轮赛程（含已赛比分）,
     news:[{t,p,src}]
   }
   首批种子数据：积分榜/射手榜为官方发布（截至 2026-07-26 首轮后），
   赛程为官方 13 轮全量（2026-08-06 转录自官方赛程图），
   之后由「足球日报」定时任务每日更新为最新轮次。 */
window.XIANGCHAO = {
  date: '2026-08-06',
  standingsDate: '2026-07-26',
  standings: [
    { rank:'1',  team:'湘潭',   played:1, w:1, d:0, l:0, gf:4, ga:0, gd:4,  pts:3 },
    { rank:'2',  team:'长沙',   played:1, w:1, d:0, l:0, gf:4, ga:0, gd:4,  pts:3 },
    { rank:'3',  team:'株洲',   played:1, w:1, d:0, l:0, gf:2, ga:0, gd:2,  pts:3 },
    { rank:'4',  team:'娄底',   played:1, w:1, d:0, l:0, gf:2, ga:1, gd:1,  pts:3 },
    { rank:'5',  team:'益阳',   played:1, w:1, d:0, l:0, gf:2, ga:1, gd:1,  pts:3 },
    { rank:'6',  team:'湘西',   played:1, w:0, d:1, l:0, gf:0, ga:0, gd:0,  pts:1 },
    { rank:'7',  team:'张家界', played:1, w:0, d:1, l:0, gf:0, ga:0, gd:0,  pts:1 },
    { rank:'7',  team:'邵阳',   played:1, w:0, d:1, l:0, gf:0, ga:0, gd:0,  pts:1 },
    { rank:'8',  team:'衡阳',   played:1, w:0, d:1, l:0, gf:0, ga:0, gd:0,  pts:1 },
    { rank:'9',  team:'岳阳',   played:1, w:0, d:0, l:1, gf:1, ga:2, gd:-1, pts:0 },
    { rank:'10', team:'郴州',   played:1, w:0, d:0, l:1, gf:1, ga:2, gd:-1, pts:0 },
    { rank:'11', team:'常德',   played:1, w:0, d:0, l:1, gf:0, ga:2, gd:-2, pts:0 },
    { rank:'12', team:'怀化',   played:1, w:0, d:0, l:1, gf:0, ga:4, gd:-4, pts:0 },
    { rank:'12', team:'永州',   played:1, w:0, d:0, l:1, gf:0, ga:4, gd:-4, pts:0 }
  ],
  scorersDate: '2026-07-26',
  scorers: [
    { rank:'1', name:'张翔',   team:'长沙', goals:'3(0)' },
    { rank:'2', name:'李悦宁', team:'长沙', goals:'1(0)' },
    { rank:'2', name:'王奥辰', team:'湘潭', goals:'1(0)' },
    { rank:'2', name:'何阳钊', team:'湘潭', goals:'1(0)' },
    { rank:'2', name:'成浩轩', team:'湘潭', goals:'1(0)' },
    { rank:'2', name:'罗云',   team:'株洲', goals:'1(0)' },
    { rank:'2', name:'冯锦豪', team:'株洲', goals:'1(0)' },
    { rank:'2', name:'邱会林', team:'娄底', goals:'1(0)' },
    { rank:'2', name:'贺元杰', team:'益阳', goals:'1(0)' },
    { rank:'2', name:'吴思江', team:'益阳', goals:'1(0)' },
    { rank:'2', name:'田军',   team:'郴州', goals:'1(0)' },
    { rank:'2', name:'梅碧瑞', team:'岳阳', goals:'1(0)' },
    { rank:'3', name:'徐永乐', team:'湘潭', goals:'1(1)' }
  ],
  assists: [],
  fixtures: [
    { date:'2026-07-25', home:'长沙',   away:'永州', note:'第 1 轮 · 客场 · 19:38 · 已赛 0:4 负' },
    { date:'2026-08-01', home:'永州',   away:'岳阳', note:'第 2 轮 · 主场 · 19:38 · 已赛 0:1 负' },
    { date:'2026-08-09', home:'永州',   away:'株洲', note:'第 3 轮 · 主场 · 19:38 · 永州市体育场' },
    { date:'2026-08-29', home:'湘西',   away:'永州', note:'第 4 轮 · 客场 · 19:38' },
    { date:'2026-09-05', home:'邵阳',   away:'永州', note:'第 5 轮 · 客场 · 19:38' },
    { date:'2026-09-13', home:'常德',   away:'永州', note:'第 6 轮 · 客场 · 19:38' },
    { date:'2026-09-20', home:'湘潭',   away:'永州', note:'第 7 轮 · 客场 · 19:38' },
    { date:'2026-09-26', home:'永州',   away:'衡阳', note:'第 8 轮 · 主场 · 19:38 · 永州市体育场' },
    { date:'2026-10-04', home:'永州',   away:'娄底', note:'第 9 轮 · 主场 · 19:38 · 永州市体育场' },
    { date:'2026-10-10', home:'益阳',   away:'永州', note:'第 10 轮 · 客场 · 19:38' },
    { date:'2026-10-17', home:'郴州',   away:'永州', note:'第 11 轮 · 客场 · 19:38' },
    { date:'2026-10-24', home:'永州',   away:'怀化', note:'第 12 轮 · 主场 · 15:00 · 永州市体育场' },
    { date:'2026-10-31', home:'永州',   away:'张家界', note:'第 13 轮 · 主场 · 15:00 · 永州市体育场' }
  ],
  news: [
    { t:'益阳队暂列第一！湘超积分榜最新出炉',
      p:'第二轮战罢，益阳队表现强势暂居积分榜首。2026 湘超联赛共有 14 支市州球队参赛，常规赛采用单循环，前 8 名晋级淘汰赛。',
      src:'益阳广电 / 湖南省足球联赛（2026-08-03）' },
    { t:'第二轮积分榜、射手榜发布',
      p:'湘超官方发布第二轮后的积分榜与射手榜，首轮领跑的湘潭、长沙、株洲等队继续位居前列，具体排名以官方发布为准。',
      src:'湖南省足球联赛（2026-08-04）' },
    { t:'首轮战报：张翔帽子戏法领跑射手榜',
      p:'长沙队张翔首轮独进 3 球上演帽子戏法，强势领跑射手榜；湘潭 4 球大胜与长沙同积 3 分并列榜首。郴州首轮 1:2 憾负娄底。',
      src:'湖南省足球联赛（2026-07-27）' },
    { t:'永州主场迎战岳阳，场外"预言蛇"火了',
      p:'湘超永州赛区氛围火爆，球迷的"预言蛇"吉祥物现身赛场外引发围观，湖南各地市球迷文化成为联赛一大看点。',
      src:'潇湘晨报' }
  ]
};