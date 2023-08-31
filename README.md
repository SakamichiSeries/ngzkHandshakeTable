# ngzkHandshakeTable
 Display handshake/meet-and-greet sales of each Nogizaka46 CD in a reasonably good-looking table.

-[完売表の見方 (JP)](https://ameblo.jp/seto-kasumi/entry-11695182533.html) 
-[完売表の見方 (ZH-TW)](https://pttyes.com/SakaTalk/M.1648729058.A.59E) 

# データ源
- [乃木坂46公式サイト](nogizaka46.com) - メンバー情報
- [乃木坂46・欅坂46握手会情報まとめ](https://ameblo.jp/seto-kasumi/) ー 完売情報
- [ツイーターユーザー ✝︎ジ〜ン✝︎](https://twitter.com/lovefiaa) ー 完売情報
- Scraped from [ngzkHandshakeScrape](https://github.com/universallyleo/ngzkHandshakeScrape) since 30th Single ３次受付

# Acknowledgement
- この完売表は [✝︎ジ〜ン✝︎](https://twitter.com/lovefiaa) のをもとにしてデザインしたものです。

# TODO
- Progression page
  - improve UI
    - allow reordering series
    - allow resizable graph area (need to check chart.js ability)
  - new series
    - number of solded slot / CD
- Member data page
  - new sortings:
    - kana
    - blood type
    - senbatsu participation
  - redesign MB data card (?)
- Handshake table
  - More precise ordering for soldout member
  - show soldout progression through each reception with fade (if possible?)
  - show only up to certain reception
  - Add 曜日 and 握手会会場 info
  - allow more flexible multi-table (e.g. Sakurazaka/Hinatazaka type)
  - n-th reception of current vs m-th reception of past
- Rewrite using class so functions related to individual member's data become methods
- Finish recording all old data (current earliest: 17th Single)