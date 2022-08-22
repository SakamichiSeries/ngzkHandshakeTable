import { concat, pullAll, without } from "lodash-es";
const data = [
  {
    cd: {
      num: 22,
      type: "Single",
      title: "\u5E30\u308A\u9053\u306F\u9060\u56DE\u308A\u3057\u305F\u304F\u306A\u308B"
    },
    lastDraw: 19,
    meetDates: [
      "2019-01-06",
      "2019-01-14",
      "2019-01-20",
      "2019-02-03",
      "2019-02-16",
      "2019-03-17"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Hori Miona",
      "Ikuta Erika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Takayama Kazumi",
      "Nishino Nanase",
      "Hoshino Minami",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Itou Riria",
      "Umezawa Minami",
      "Oozono Momoko",
      "Sato Kaede",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Shinuchi Mai"
    ],
    table: [
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "2|2|2|2|2",
          "3|3|2|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "3|3|2|3|3",
          "5|4|4|4|4",
          "3|3|3|3|4",
          "4|3|3|3|4",
          "3|3|3|3|3",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "5|4|4|4|5",
          "11|8|7|8|9",
          "7|5|5|5|7",
          "9|6|5|6|8",
          "6|5|4|4|5",
          "6|5|4|4|4"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "3|2|2|3|3",
          "4|4|4|4|4",
          "3|3|2|3|3",
          "3|3|2|3|3",
          "3|3|3|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|3|2|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x||",
          "x|x|x|x|x",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "|10|10||",
          "||||",
          "||||",
          "||||",
          "||15||",
          "17|14|9|13|13"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "10|6|4|6|",
          "x|x|x|x|x",
          "|6|5|7|",
          "|11|7|9|",
          "|10|6|6|13",
          "15|7|6|8|11"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "|9|6|x|x",
          "x|x|x|x|x",
          "||9|x|x",
          "||13|x|x",
          "||12|x|x",
          "|13|11|x|x"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "2|2|2|2|2",
          "3|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "2|2|2|2|3",
          "x|x|x|x|x",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "3|2|2|3|3",
          "x|x|x|x|x",
          "4|3|2|3|3",
          "4|3|3|3|4",
          "4|3|2|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|3|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "4|3|3|4|4",
          "6|5|5|5|5",
          "5|4|4|4|5",
          "5|4|4|4|5",
          "5|4|4|4|4",
          "5|4|3|4|3"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "4|3|3|3|4",
          "5|5|5|5|5",
          "5|3|3|4|5",
          "4|3|3|4|4",
          "4|3|3|3|4",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "3|2|2|2|3",
          "3|3|3|3|4",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|2|2|2|3",
          "5|5|4|5|5",
          "4|3|3|3|4",
          "3|3|2|3|3",
          "4|3|3|3|4",
          "3|3|2|3|3"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "||||",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|3|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "4|3|3|4|4",
          "7|7|6|6|7",
          "5|4|3|4|5",
          "6|4|4|4|5",
          "5|4|4|5|5",
          "4|4|3|4|4"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "3|3|3|3|3",
          "4|4|4|4|4",
          "3|3|3|3|4",
          "4|3|3|3|4",
          "4|3|3|3|4",
          "3|2|2|3|3"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "|6|5|6|10",
          "||||",
          "x|x|x|x|x",
          "|7|6|8|",
          "|12|7|8|14",
          "12|6|5|6|8"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "8|5|4|6|6",
          "|10|7||",
          "10|5|5|7|10",
          "13|6|6|7|12",
          "8|5|5|6|7",
          "7|5|5|5|5"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "|8|6|9|",
          "||||",
          "||9||",
          "||13||",
          "|13|6|8|15",
          "16|9|6|7|14"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      }
    ]
  },
  {
    cd: {
      num: 4,
      type: "Album",
      title: "\u4ECA\u304C\u601D\u3044\u51FA\u306B\u306A\u308B\u307E\u3067"
    },
    lastDraw: 7,
    meetDates: [
      "2019-04-28",
      "2019-05-01",
      "2019-05-11"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Hori Miona",
      "Ikuta Erika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Takayama Kazumi",
      "Nishino Nanase",
      "Hoshino Minami",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Itou Riria",
      "Umezawa Minami",
      "Oozono Momoko",
      "Sato Kaede",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Shinuchi Mai"
    ],
    addgroups: [
      {
        id: "gen4",
        has: [
          "Endo Sakura",
          "Kaki Haruka",
          "Kakehashi Sayaka",
          "Kanagawa Saya",
          "Kitagawa Yuri",
          "Shibata Yuna",
          "Seimiya Rei",
          "Tamura Mayu",
          "Tsutsui Ayame",
          "Hayakawa Seira",
          "Yakubo Mio"
        ]
      }
    ],
    table: [
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "3|3|3|3|3",
          "2|2|2|2|2",
          "3|3|2|3|3"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "4|3|3|3|4",
          "2|2|2|2|2",
          "4|4|3|3|2"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "5|6|5|6|4",
          "4|4|3|4|4",
          "5|6|5|4|4"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "|||x|x"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "6|6|6|5|6",
          "6|6|5|6|5",
          "5|5|5|5|4"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "||||",
          "6|5|4|5|5",
          "||||"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|3|2|2|3"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "3|2|2|3|4",
          "2|2|2|2|2",
          "3|3|2|3|3"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "3|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "|6|5||",
          "4|4|4|4|4",
          "4|4|4|5|4"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "4|4|3|3|4",
          "2|2|2|2|2",
          "4|4|3|3|3"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "4|3|3|3|3",
          "2|2|2|2|2",
          "5|4|3|4|3"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "4|3|3|4|4",
          "3|3|2|2|2",
          "5|5|4|5|4"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "5|4|4|4|5",
          "3|3|3|3|3",
          "6|5|4|5|5"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "4|3|3|3|4",
          "2|2|2|2|2",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "|6|5|6|",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "4|3|4|4|4",
          "||||5"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|1",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||5|6|",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "x|x|2|2|5",
          "x|x|2|2|5",
          "x|x|2|2|5"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "x|x|2|2|5",
          "x|x|2|2|5",
          "x|x|2|2|5"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|x|x|5",
          "2|2|x|x|5",
          "2|2|x|x|5"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "2|2|x|x|x",
          "2|2|x|x|x",
          "3|2|x|x|x"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||x|x|x",
          "5|5|x|x|x",
          "|6|x|x|x"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "2|2|x|x|x",
          "2|2|x|x|x",
          "3|3|x|x|x"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "x|x|3|3|x",
          "x|x|2|2|x",
          "x|x|3|2|x"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "x|x|2|2|5",
          "x|x|2|2|5",
          "x|x|2|2|5"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "x|x|2|2|6",
          "x|x|2|2|5",
          "x|x|2|2|5"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "|5|x|x|x",
          "4|3|x|x|x",
          "7|6|x|x|x"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "x|x|2|2|6",
          "x|x|2|2|5",
          "x|x|2|2|6"
        ]
      }
    ]
  },
  {
    cd: {
      num: 23,
      type: "Single",
      title: "Sing Out!"
    },
    lastDraw: 17,
    meetDates: [
      "2019-06-08",
      "2019-06-30",
      "2019-07-07",
      "2019-07-28",
      "2019-08-10",
      "2019-09-07"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Hori Miona",
      "Kitano Hinako",
      "Suzuki Ayane",
      "Watanabe Miria",
      "Ikuta Erika",
      "Inoue Sayuri",
      "Saito Asuka",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Takayama Kazumi",
      "Hoshino Minami",
      "Matsumura Sayuri",
      "Itou Riria",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Oozono Momoko",
      "Kubo Shiori",
      "Sakaguchi Tamami",
      "Sato Kaede",
      "Yoda Yuuki",
      "Shinuchi Mai"
    ],
    addgroups: [
      {
        id: "gen4",
        has: [
          "Endo Sakura",
          "Kaki Haruka",
          "Kakehashi Sayaka",
          "Kanagawa Saya",
          "Kitagawa Yuri",
          "Shibata Yuna",
          "Seimiya Rei",
          "Tamura Mayu",
          "Tsutsui Ayame",
          "Hayakawa Seira",
          "Yakubo Mio"
        ]
      }
    ],
    table: [
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "4|4|4|4|4",
          "x|x|x|x|x",
          "2|2|2|2|3",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|6|6",
          "x|x|x|x|x",
          "x|x|x|6|6",
          "x|x|x|6|6",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "||||4",
          "6|4|4|4|7",
          "||8||",
          "10|7|7|7|9",
          "7|6|4|4|4",
          "12|10|9|10|6"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "4|4|4|4|4",
          "2|2|2|2|3",
          "3|3|2|2|3",
          "x|x|x|x|x",
          "3|2|2|2|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "||||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "||||",
          "6|4|4|4|6",
          "||7||",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "|13|11|9|8"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "4|3|3|3|4",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "|||x|x",
          "|||x|x",
          "|||x|x",
          "|||x|x"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "4|3|3|3|3",
          "2|2|2|2|2",
          "3|2|2|2|3",
          "2|2|2|2|3",
          "3|2|2|2|2",
          "3|3|2|2|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "||4|4|4",
          "2|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|3|4",
          "4|3|2|2|4",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "||||4",
          "3|2|2|2|3",
          "4|3|3|3|4",
          "4|3|3|3|4",
          "4|3|3|3|3",
          "4|3|3|2|3"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "3|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||",
          "6|4|4|4|5",
          "8|5|5|5|5",
          "6|5|5|4|7",
          "8|5|5|5|5",
          "8|6|6|4|4"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "4|4|4|4|4",
          "2|2|2|2|2",
          "4|2|2|3|3",
          "2|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "4|2|3|3|3",
          "4|3|3|3|4",
          "5|4|4|4|4",
          "5|4|4|4|4",
          "6|4|3|3|4"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "||||4",
          "3|2|2|2|3",
          "4|3|4|3|4",
          "4|3|3|3|4",
          "4|3|3|3|3",
          "5|4|3|4|4"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "3|3|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "||||",
          "4|3|3|3|5",
          "6|4|4|4|4",
          "7|4|4|4|7",
          "7|5|4|4|5",
          "9|5|4|5|5"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||4|4|4",
          "3|2|2|2|3",
          "4|4|4|3|5",
          "4|3|2|3|4",
          "4|3|3|2|4",
          "4|2|2|3|3"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "|7|6|7|",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "|5|4|5|6",
          "||||",
          "|11|7|9|",
          "12|8|6|6|4",
          "||||11"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||7||",
          "||||",
          "||||",
          "||||",
          "||16|15|14"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "3|3|3||x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "3|3|3||x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "3|3|3||x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "4|4|4||x",
          "3|2|2|6|x",
          "3|3|3|6|x",
          "3|3|2|7|x",
          "3|3|3|7|x",
          "4|3|3|6|x"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "x|x|x|x|x",
          "6|4|4||x",
          "6|6|5||x",
          "6|5|5|11|x",
          "6|5|5|11|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "||4|x|x",
          "4|3|3||x",
          "4|3|3||x",
          "4|3|3|10|x",
          "4|3|3|9|x",
          "4|4|3|9|x"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "x|x|x|x|x",
          "3|3|2|6|x",
          "3|3|3|6|x",
          "4|3|3|6|x",
          "4|3|3|6|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "3|3|2||x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x",
          "2|2|2|5|x"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "3|3|3||x",
          "2|2|2|5|x",
          "3|2|2|5|x",
          "3|2|2|5|x",
          "3|2|2|5|x",
          "3|2|2|5|x"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "|||x|x",
          "4|4|4||x",
          "5|4|4||x",
          "5|4|4|10|x",
          "5|5|4|9|x",
          "5|4|4|9|x"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "x|x|x|x|x",
          "3|3|2|7|x",
          "4|3|3|7|x",
          "4|3|3|7|x",
          "4|3|3|7|x",
          "x|x|x|x|x"
        ]
      }
    ]
  },
  {
    cd: {
      num: 24,
      type: "Single",
      title: "\u591C\u660E\u3051\u307E\u3067\u5F37\u304C\u3089\u306A\u304F\u3066\u3082\u3044\u3044"
    },
    lastDraw: 17,
    meetDates: [
      "2019-09-16",
      "2019-10-22",
      "2019-11-09",
      "2019-11-17",
      "2019-11-24",
      "2019-12-15"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Hori Miona",
      "Kitano Hinako",
      "Ikuta Erika",
      "Saito Asuka",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Takayama Kazumi",
      "Hoshino Minami",
      "Matsumura Sayuri",
      "Umezawa Minami",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Tsutsui Ayame",
      "Shinuchi Mai"
    ],
    addgroups: [
      {
        id: "gen4",
        has: [
          "Endo Sakura",
          "Kaki Haruka",
          "Kakehashi Sayaka",
          "Kanagawa Saya",
          "Kitagawa Yuri",
          "Kuromi Haruka",
          "Sato Rika",
          "Shibata Yuna",
          "Seimiya Rei",
          "Tamura Mayu",
          "Tsutsui Ayame",
          "Hayakawa Seira",
          "Hayashi Runa",
          "Matsuo Miyu",
          "Yakubo Mio",
          "Yumiki Nao"
        ]
      }
    ],
    table: [
      {
        member: "Nakada Kana",
        slotsSold: [
          "||||",
          "||||",
          "|9|8|11|",
          "|10|9||",
          "|13|11|12|",
          "11|8|8|7|5"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "3|2|2|3|3",
          "5|5|4|5|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "3|2|2|3|3",
          "3|2|2|3|3"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x||",
          "x|x|||",
          "x|x|x||",
          "x|x|||",
          "x|x|x||",
          "x|x|||"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "||||",
          "||||",
          "10|5|5|7|7",
          "||||",
          "x|x|x|x|x",
          "|16|14|17|17"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "2|3|3|3|3",
          "5|3|4|4|4",
          "3|2|3|2|3",
          "2|2|2|2|3",
          "3|2|2|2|3",
          "2|2|2|2|3"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "|||x|x",
          "||x|x|x",
          "|||x|x",
          "||x|x|x",
          "|||x|x",
          "||x|x|x"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "2|2|2|2|3",
          "3|3|3|3|3",
          "3|2|2|3|2",
          "3|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "3|2|3|3|3",
          "5|4|5|5|5",
          "3|2|2|2|3",
          "3|2|3|3|4",
          "4|3|3|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "3|2|2|2|2",
          "4|4|5|4|4",
          "4|3|3|3|3",
          "3|2|3|3|3",
          "3|3|3|3|3",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "||||",
          "||||",
          "2|2|2|2|2",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||",
          "||||",
          "|6|5|7|9",
          "13|6|5|6|11",
          "13|10|9|10|6",
          "6|5|5|5|4"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "3|2|2|3|3",
          "4|4|4|4|4",
          "2|2|2|2|2",
          "3|2|2|2|2",
          "3|2|3|3|3",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "|5|4|5|5",
          "||7|9|",
          "6|4|4|4|5",
          "5|4|4|5|5",
          "6|5|4|5|5",
          "6|4|4|4|5"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|3|3|3",
          "4|4|4|4|4",
          "3|2|2|3|3",
          "3|2|2|3|3",
          "3|3|2|3|3",
          "3|2|2|2|3"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|x|x|x|x",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "|5|||",
          "||||",
          "5|3|3|4|3",
          "7|4|4|5|8",
          "9|6|6|6|10",
          "5|4|4|4|6"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "5|4|4|4|5",
          "8|8|8|9|9",
          "4|3|3|3|4",
          "4|3|3|3|4",
          "5|3|3|4|4",
          "4|3|3|3|4"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "||||",
          "||16|17|17"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "x|x|x|x|x",
          "|8|9|10|12",
          "||||",
          "x|x|x|x|x",
          "16|15|14|14|10"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||17|15|"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "1|2|2|2|4"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "3|2|2|2|",
          "4|3|3|3|7",
          "3|2|2|2|6",
          "3|2|2|2|7",
          "3|2|2|2|6",
          "3|2|2|2|6"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||5|5|x",
          "x|x|x|x|x",
          "||||4",
          "|9|8|11|",
          "9|7|5|5|x",
          "11|8|5|5|x"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "3|3|3|3|",
          "5|4|4|5|8",
          "4|3|3|3|8",
          "3|3|3|3|8",
          "4|3|3|4|8",
          "3|3|3|3|8"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "3|3|3|3|",
          "5|5|4|4|9",
          "3|3|3|3|8",
          "3|2|2|3|8",
          "3|3|3|3|7",
          "3|3|3|2|7"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "x|x|x|x|x",
          "2|2|2|2|4"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4",
          "2|2|2|2|4"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "3|2|2|3|",
          "5|4|5|5|7",
          "3|3|2|3|7",
          "3|2|2|2|8",
          "x|x|x|x|x",
          "3|2|2|2|7"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "5|4|4|4|x",
          "||||x",
          "5|4|4|4|",
          "4|4|4|4|",
          "6|4|4|5|14",
          "5|4|4|4|15"
        ]
      }
    ]
  },
  {
    cd: {
      num: 25,
      type: "Single",
      title: "\u3057\u3042\u308F\u305B\u306E\u4FDD\u8B77\u8272"
    },
    lastDraw: 20,
    meetDates: [
      "2020-03-29",
      "2020-04-11",
      "2020-04-25",
      "2020-05-02",
      "2020-05-16",
      "2020-07-11"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Hori Miona",
      "Kitano Hinako",
      "Ikuta Erika",
      "Inoue Sayuri",
      "Saito Asuka",
      "Shiraishi Mai",
      "Takayama Kazumi",
      "Nakada Kana",
      "Higuchi Hina",
      "Hoshino Minami",
      "Matsumura Sayuri",
      "Wada Maaya",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Oozono Momoko",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Shinuchi Mai"
    ],
    table: [
      {
        member: "Nakada Kana",
        slotsSold: [
          "||||",
          "8|6|5|5|6",
          "x|x|x|x|x",
          "||||",
          "8|6|5|4|4",
          "?|?|?|?|?"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "3|3|3|3|4",
          "3|3|3|3|3",
          "x|x|x|x|x",
          "5|3|3|3|4",
          "x|x|x|x|x",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "2|2|2|2|3",
          "3|3|3|3|4",
          "4|3|3|3|4",
          "2|2|2|2|3",
          "4|3|3|3|4",
          "3|2|3|3|4"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "3|2|2|2|3",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "3|2|2|2|3",
          "3|2|2|2|3"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "4|2|2|3|3",
          "5|3|4|4|5",
          "5|4|5|5|4",
          "5|4|4|4|4",
          "4|4|3|3|3",
          "4|4|3|3|3"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "13|5|9|10|7",
          "17|15|15|15|4"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "3|2|2|2|3",
          "3|3|2|3|3",
          "3|3|3|3|3",
          "4|3|3|3|3",
          "3|2|2|3|3",
          "3|3|2|3|3"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "|5|5|6|6",
          "|6|6|8|",
          "||10||",
          "10|5|5|5|9",
          "|6|6|9|",
          "18|5|5|6|6"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "2|2|2|2|2",
          "3|2|2|2|2",
          "3|3|2|3|3",
          "3|2|2|2|3",
          "3|3|2|3|3",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "|6|5||",
          "||8||",
          "||||",
          "||6|11|",
          "||12||",
          "|12|8|10|17"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "3|3|2|3|3",
          "8|5|5|5|6",
          "9|6|5|6|7",
          "7|5|5|5|6",
          "8|5|4|5|6",
          "6|5|4|5|4"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "x|x|x|x|x",
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||13||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|3",
          "2|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "?|?|?|?|?",
          "?|?|?|?|?",
          "?|?|?|?|?",
          "?|?|?|?|?",
          "?|?|?|?|?"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "3|2|2|3|3",
          "5|3|3|3|3",
          "5|4|4|4|5",
          "4|3|3|3|4",
          "5|4|4|4|5",
          "5|4|3|4|4"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|2|2|2",
          "?|?|?|?|?",
          "2|2|2|2|2",
          "?|?|?|?|?",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "x|x|x|x|x",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "|6|5|5|",
          "8|5|5|4|5",
          "x|x|x|4|5",
          "|7|6|8|11",
          "|||3|4",
          "|||3|4"
        ]
      }
    ]
  },
  {
    cd: {
      num: 26,
      type: "Single",
      title: "\u50D5\u306F\u50D5\u3092\u597D\u304D\u306B\u306A\u308B"
    },
    lastDraw: 12,
    meetDates: [
      "2021-01-31",
      "2021-02-07",
      "2021-02-14",
      "2021-02-27",
      "2021-03-14",
      "2021-03-21"
    ],
    sbt: [
      "Iwamoto Renka",
      "Umezawa Minami",
      "Oozono Momoko",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame"
    ],
    addgroups: [
      {
        id: "gen4",
        has: [
          "Endo Sakura",
          "Kaki Haruka",
          "Kakehashi Sayaka",
          "Kanagawa Saya",
          "Kitagawa Yuri",
          "Kuromi Haruka",
          "Sato Rika",
          "Shibata Yuna",
          "Seimiya Rei",
          "Tamura Mayu",
          "Tsutsui Ayame",
          "Hayakawa Seira",
          "Hayashi Runa",
          "Matsuo Miyu",
          "Yakubo Mio",
          "Yumiki Nao"
        ]
      }
    ],
    table: [
      {
        member: "Higuchi Hina",
        slotsSold: [
          "4|5|5|3|4",
          "||||",
          "||||",
          "||||",
          "11|11|11|11|",
          "12|12|11|10|7"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "5|5|5|4|5",
          "6||6||",
          "6|6|6|6|6",
          "8|7|7|6|7",
          "9|7|7|7|7",
          "8|8|7|7|5"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "||5||",
          "||||",
          "||||",
          "||||",
          "10|10|9|10|10",
          "12|12|12|12|11"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "||||",
          "||||",
          "||7||",
          "||||",
          "||10|11|",
          "11|10|8|8|5"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "|5|5||5",
          "||||",
          "|7|6|7|7",
          "||9||",
          "11|10|9|10|10",
          "11|10|10|9|8"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "x|x|x|x|x",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "|5|||",
          "5|6|5|4|5",
          "6|7|6|7|6",
          "6|7|7|7|6",
          "7|7|7|7|7",
          "7|6|7|6|7"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "4|3|3|3|4",
          "3|4|4|3|4",
          "3|3|4|3|3",
          "4|4|3|3|3",
          "4|5|4|4|4",
          "4|4|3|5|4"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "5|5|4|4|4",
          "6|5|5|5|5",
          "5|5|5|5|5",
          "5|5|5|5|5",
          "5|5|6|5|4",
          "6|5|6|5|5"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "4|5|4|4|5",
          "4|5|4|5|4",
          "4|4|4|5|3",
          "4|4|5|4|4",
          "4|4|4|4|4",
          "3|3|3|4|3"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "7|6|6|7|5"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "4|3|3|4|3",
          "3|4|3|3|3",
          "4|3|3|4|3",
          "5|3|4|3|3",
          "7|6|7|6|7",
          "?|?|?|?|?"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "3|4|3|4|3",
          "3|3|3|4|5",
          "4|3|3|4|4",
          "3|3|3|4|4",
          "3|4|3|4|5",
          "3|3|3|3|4"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "3|3|4|3|3",
          "3|4|4|5|3",
          "3|3|3|4|4",
          "4|3|4|3|3",
          "4|3|3|3|3",
          "5|3|4|3|4"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "4|3|3|4|3",
          "4|4|3|4|4",
          "4|3|4|3|5",
          "3|5|3|3|3",
          "3|3|3|3|4",
          "4|3|4|3|3"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "|4|5|5|5",
          "5|5|6|6|",
          "6|5|5|5|5",
          "7|6|7|7|6",
          "7|6|6|7|7",
          "7|7|5|7|6"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "||||",
          "||||",
          "|7|5|7|",
          "||9||",
          "11|10|8|9|10",
          "11|11|9|9|10"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "||||",
          "||||",
          "||7||",
          "||9||",
          "|10|9|10|11",
          "12|11|11|11|10"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "|11|10|10|",
          "|||12|"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "4|5|||4",
          "5||||",
          "7|5|4|4|5",
          "5|6|5|6|7",
          "5|7|5|7|5",
          "7|6|6|6|5"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "4|4|4|4|5",
          "5|4|4|5|5",
          "3|3|3|4|3",
          "3|4|5|4|4",
          "5|4|4|3|3",
          "4|3|3|4|4"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "5|4|5|4|5",
          "4|5|5|6|5",
          "5|5|4|5|4",
          "5|4|5|5|4",
          "5|6|5|5|6",
          "5|5|6|5|4"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "4|4|3|3|4",
          "4|3|4|4|5",
          "5|4|3|4|4",
          "4|5|4|5|4",
          "4|4|5|4|4",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      }
    ]
  },
  {
    cd: {
      num: 27,
      type: "Single",
      title: "\u3054\u3081\u3093\u306DFingers crossed"
    },
    lastDraw: 15,
    meetDates: [
      "2021-06-13",
      "2021-06-27",
      "2021-07-04",
      "2021-07-25",
      "2021-08-08",
      "2021-08-29"
    ],
    sbt: [
      "Higuchi Hina",
      "Matsumura Sayuri",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Oozono Momoko",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame",
      "Hayakawa Seira"
    ],
    addgroups: [
      {
        id: "gen4",
        has: [
          "Endo Sakura",
          "Kaki Haruka",
          "Kakehashi Sayaka",
          "Kanagawa Saya",
          "Kitagawa Yuri",
          "Kuromi Haruka",
          "Sato Rika",
          "Shibata Yuna",
          "Seimiya Rei",
          "Tamura Mayu",
          "Tsutsui Ayame",
          "Hayakawa Seira",
          "Hayashi Runa",
          "Matsuo Miyu",
          "Yakubo Mio",
          "Yumiki Nao"
        ]
      }
    ],
    table: [
      {
        member: "Higuchi Hina",
        slotsSold: [
          "2|3|3|3|4",
          "||||",
          "||||",
          "||11||",
          "||||",
          "11|12|9|9|3"
        ]
      },
      {
        member: "Matsumura Sayuri",
        slotsSold: [
          "||||",
          "7|6|7|7|7",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Ito Jyunna",
        slotsSold: [
          "4|5|5|5|5",
          "x|x|x|x|x",
          "6|6|5|6|6",
          "7|6|5|7|5",
          "7|6|5|6|5",
          "5|5|5|4|5"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "2|2|2|3|3",
          "4|4|2|4|4",
          "4|2|2|4|3",
          "3|2|2|2|2",
          "5|4|4|4|4",
          "4|4|3|3|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "4|4|4|5|4",
          "||6||7",
          "||||",
          "||||",
          "||||",
          "||11|10|4"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "3|4|2|4|3",
          "||||",
          "||||",
          "||||",
          "||||",
          "6|5|4|3|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "3|4|4|4|x",
          "||||x",
          "||||x",
          "||||x",
          "||||x",
          "|||12|x"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "2|3|3|2|3",
          "4|4|4|4|4",
          "4|4|4|4|4",
          "4|4|4|4|4",
          "4|4|4|4|4",
          "4|4|3|3|2"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "2|2|2|2|2",
          "4|3|3|3|3",
          "4|3|3|3|3",
          "4|4|3|3|3",
          "4|3|3|3|3",
          "4|3|2|2|2"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|3|3|3",
          "2|3|3|3|3",
          "3|3|3|3|3",
          "2|2|2|2|3"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "1|1|2|1|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||12"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "|||12|9"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "1|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "1|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "1|2|2|2|1"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|3|3",
          "3|2|2|2|3",
          "2|2|2|2|2",
          "3|2|2|3|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "2|4|3|5|",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||15"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "?|?|?|?|?",
          "?|?|?|?|?",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "4||||",
          "||||",
          "||||",
          "||11||",
          "4|3|3|4|4",
          "||13|14|7"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "4|4|4|4|5",
          "||5||",
          "||8||",
          "||5|10|",
          "||9|12|12",
          "14|13|6|9|9"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|1|2|2"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|1|2|2"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||15||15"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||11||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||13"
        ]
      }
    ]
  },
  {
    cd: {
      num: 28,
      type: "Single",
      title: "\u541B\u306B\u53F1\u3089\u308C\u305F"
    },
    lastDraw: 19,
    meetDates: [
      "2021-09-25",
      "2021-10-15",
      "2021-10-30",
      "2021-11-12",
      "2021-12-04",
      "2021-12-24"
    ],
    sbt: [
      "Takayama Kazumi",
      "Higuchi Hina",
      "Suzuki Ayane",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Kakehashi Sayaka",
      "Shibata Yuna",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame",
      "Hayakawa Seira"
    ],
    table: [
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "x|x|x|x|x",
          "7|7|8|8|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "4|4|4|5|5",
          "||||",
          "7|8|5|9|6",
          "||||",
          "||16||15",
          "6|5|4|5|3"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "3|3|3|3|3",
          "6|5|5|4|5",
          "4|3|3|3|3",
          "5|5|4|5|3",
          "5|5|4|4|4",
          "3|3|2|2|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "4|4|4|5|4",
          "8|9|8|9|8",
          "7|6|5|7|5",
          "13|13|10|12|11",
          "14|13|10|13|14",
          "5|6|5|4|3"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||x",
          "||||x",
          "||||x",
          "||||x",
          "||||x",
          "||15|5|x"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|2|2|2|2",
          "x|x|x|x|x",
          "3|2|2|3|2",
          "3|3|3|3|2",
          "3|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "8|6|4|6|6",
          "||||",
          "19|19|18|16|9"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||||",
          "||||",
          "||10||",
          "||||",
          "||||",
          "13|12|9|8|5"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "x|x|x|x|x",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "1|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|3|3|3",
          "4|3|3|3|3",
          "2|2|2|2|3",
          "2|2|2|3|3",
          "3|3|2|3|3",
          "2|2|3|2|3"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "8|8|7|8|8",
          "||||",
          "3|3|2|3|3",
          "||||",
          "||||",
          "11|9|7|6|5"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "?|?|?|?|?",
          "?|?|?|?|?"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "x|x|||",
          "x|x|x|x|x",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "||||",
          "||||",
          "|9|7|11|11",
          "||||",
          "||15||",
          "8|7|6|7|4"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "5|4|4|4|5",
          "8|8|8|8|9",
          "5|4|3|4|4",
          "9|9|9|9|8",
          "9|8|8|7|8",
          "4|4|3|3|3"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "3|3|3|2|3",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "3|3|3|3|3",
          "3|2|3|3|3",
          "x|x|x|2|2"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "2|2|2|2|2",
          "3|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|3",
          "3|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "3|3|3|3|3",
          "4|4|4|4|3",
          "2|2|2|2|3",
          "4|4|3|3|4",
          "2|3|3|3|3",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "x|x|x|x|x",
          "||||",
          "||||19"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "x|x|||",
          "||||",
          "x|x|||",
          "||||",
          "||||",
          "11|7|5|5|4"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "|||6|",
          "||10||10",
          "10|9|7|8|9",
          "||||",
          "|16|16||",
          "10|8|7|6|5"
        ]
      }
    ]
  },
  {
    cd: {
      num: 1,
      type: "Best",
      title: "Time flies"
    },
    lastDraw: 14,
    meetDates: [
      "2022-01-15",
      "2022-02-05",
      "2022-03-11"
    ],
    sbt: [
      "Higuchi Hina",
      "Shinuchi Mai",
      "Suzuki Ayane",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Kakehashi Sayaka",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame",
      "Hayakawa Seira"
    ],
    table: [
      {
        member: "Higuchi Hina",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "7|7|8|8|8",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "x|x|x|x|x",
          "||||",
          "||||14"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||x",
          "||||x",
          "||||x"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "||||8",
          "6|6|6|7|5",
          "||13|11|9"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "3|2|3|3|3",
          "4|4|3|3|4",
          "4|4|3|3|3"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|3",
          "3|3|3|3|3",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "x|x|x|x|x",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|3|3|2",
          "3|2|3|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "8||8||",
          "||11||",
          "||||"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "x|x|x|x|x",
          "?|?|?|?|?",
          "||||"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "||||",
          "||||",
          "12|11|8|10|6"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "4|4|3|4|3",
          "8|7|6|8|9",
          "11|11|5|11|10"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "3|3|4|3|3",
          "3|3|4|3|3",
          "3|4|4|4|3"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "?|?|?|?|?",
          "||||",
          "||||"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "?|?|?|?|?",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "||||",
          "|||11|",
          "||||"
        ]
      }
    ]
  },
  {
    cd: {
      num: 29,
      type: "Single",
      title: "Actually..."
    },
    lastDraw: 20,
    meetDates: [
      "2022-04-16",
      "2022-04-29",
      "2022-05-21",
      "2022-06-04",
      "2022-07-02",
      "2022-07-16"
    ],
    sbt: [
      "Higuchi Hina",
      "Suzuki Ayane",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Kakehashi Sayaka",
      "Shibata Yuna",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame",
      "Hayakawa Seira"
    ],
    addgroups: [
      {
        id: "gen5",
        has: [
          "Ioki Mao",
          "Ikeda Teresa",
          "Ichinose Miku",
          "Inoue Nagi",
          "Ogawa Aya",
          "Okuda Iroha",
          "Sugawara Satsuki",
          "Tomisato Nao"
        ]
      },
      {
        id: "grad",
        has: [
          "Kitano Hinako"
        ]
      }
    ],
    table: [
      {
        member: "Higuchi Hina",
        slotsSold: [
          "3|3|3|4|4",
          "||||",
          "||||",
          "||||",
          "||||",
          "20||||16"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "3|3|3|3|3",
          "3|3|3|3|3",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "4|4|4|5|5",
          "9|9|8|9|7",
          "11|12|9|11|10",
          "14|14|12|14|12",
          "17|17|16|16|16",
          "16|17|15|14|4"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||x",
          "||||x",
          "7|8|6|4|x",
          "||||x",
          "||18|18|x",
          "18|18|18|11|x"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|2|3|3",
          "9|8|6|8|6",
          "7|5|5|7|6",
          "10|8|6|8|6",
          "10|8|7|7|7",
          "10|9|4|6|4"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|3",
          "2|3|2|3|3",
          "2|2|2|2|3",
          "2|2|2|3|3",
          "2|2|3|3|3",
          "3|2|3|3|3"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|2",
          "3|2|3|3|3",
          "2|2|2|2|2",
          "2|2|2|3|3",
          "3|2|3|3|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "6|4|3|7|8",
          "||||",
          "||12||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "8|8|6|8|8",
          "||||",
          "|12|8|10|12",
          "||14||",
          "||18||",
          "||||20"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|1|1|2|1",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|1|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "1|2|2|1|2",
          "2|2|x|x|x"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "1|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "3|3|3|3|4",
          "7|5|5|7|7",
          "5|4|3|4|6",
          "7|4|4|5|7",
          "9|5|3|7|6",
          "7|6|4|4|5"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "8|8|7|8|8",
          "||||",
          "|12|12||12",
          "||14|14|",
          "||17|18|17",
          "19|18|17|17|15"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "||||",
          "?|?|?|?|?",
          "||||",
          "?|?|?|?|?",
          "?|?|?|?|?"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||14|18|",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "6|7|6|7|7",
          "||10||",
          "||10||",
          "||||",
          "||||",
          "20|20|19|19|14"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "3|3|3|3|3",
          "5|4|4|4|4",
          "4|4|3|4|5",
          "5|5|4|5|5",
          "5|5|5|5|5",
          "4|5|4|4|3"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "x|x|3|5|4",
          "||||",
          "11|8|9|9|10",
          "||13|14|13",
          "17|17|15|15|12",
          "14|14|10|12|6"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "3|3|2|3|3",
          "3|3|3|3|3",
          "3|3|3|3|3",
          "3|3|3|3|3",
          "3|3|3|3|3",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "3|3|3|4|5",
          "||||",
          "6|4|4|5|6",
          "3|3|3|3|3",
          "7|7|5|6|7",
          "7|6|5|6|6"
        ]
      },
      {
        member: "Hayakawa Seira",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2",
          "x|x|x|x|x",
          "3|2|2|2|2",
          "3|3|2|2|3"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||17",
          "||||20"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "5|5|5|5|5",
          "||10||10",
          "12|11|11|11|9",
          "14||14|14|14",
          "16|16|16|15|15",
          "15|15|14|14|12"
        ]
      },
      {
        member: "Ioki Mao",
        slotsSold: [
          "x|6|6|7|x",
          "x|7|7|7|x",
          "x|6|7|7|x",
          "x|6|7|7|x",
          "x|7|8|8|x",
          "x|7|7|7|x"
        ]
      },
      {
        member: "Ikeda Teresa",
        slotsSold: [
          "x||||x",
          "x||||x",
          "x||||x",
          "x|13|13|13|x",
          "x|13|14|14|x",
          "x|13|14|14|x"
        ]
      },
      {
        member: "Ichinose Miku",
        slotsSold: [
          "x|6|6|7|x",
          "x|7|7|7|x",
          "x|7|7|7|x",
          "x|7|7|7|x",
          "x|7|7|7|x",
          "x|7|7|7|x"
        ]
      },
      {
        member: "Inoue Nagi",
        slotsSold: [
          "x|6|6|6|x",
          "x|6|6|7|x",
          "x|7|6|7|x",
          "x|6|6|6|x",
          "x|7|7|7|x",
          "x|7|7|7|x"
        ]
      },
      {
        member: "Ogawa Aya",
        slotsSold: [
          "x|7|7|7|x",
          "x|8|8|8|x",
          "x|8|8|8|x",
          "x|7|9|8|x",
          "x|8|9|9|x",
          "x|8|9|8|x"
        ]
      },
      {
        member: "Okuda Iroha",
        slotsSold: [
          "x||||x",
          "x||||x",
          "x||||x",
          "x||||x",
          "x||||x",
          "x||||x"
        ]
      },
      {
        member: "Sugawara Satsuki",
        slotsSold: [
          "x|6|6|6|x",
          "x|6|6|6|x",
          "x|7|6|6|x",
          "x|6|6|6|x",
          "x|6|6|6|x",
          "x|6|6|6|x"
        ]
      },
      {
        member: "Tomisato Nao",
        slotsSold: [
          "x|6|7|8|x",
          "x|8|9|8|x",
          "x|8|8|8|x",
          "x|8|10|9|x",
          "x|10|9|10|x",
          "x|10|9|9|x"
        ]
      }
    ]
  },
  {
    cd: {
      num: 30,
      type: "Single",
      title: "\u597D\u304D\u3068\u3044\u3046\u306E\u306F\u30ED\u30C3\u30AF\u3060\u305C!"
    },
    lastDraw: 3,
    meetDates: [
      "2022-09-04",
      "2022-09-18",
      "2022-09-25",
      "2022-10-09",
      "2022-11-13",
      "2022-12-04"
    ],
    sbt: [
      "Iwamoto Renka",
      "Umezawa Minami",
      "Kubo Shiori",
      "Sato Kaede",
      "Yamashita Mizuki",
      "Yoda Yuuki",
      "Endo Sakura",
      "Kaki Haruka",
      "Kakehashi Sayaka",
      "Kanagawa Saya",
      "Shibata Yuna",
      "Seimiya Rei",
      "Tamura Mayu",
      "Tsutsui Ayame",
      "Yumiki Nao"
    ],
    addgroups: [
      {
        id: "gen5",
        has: [
          "Ioki Mao",
          "Ikeda Teresa",
          "Ichinose Miku",
          "Inoue Nagi",
          "Okamoto Hina",
          "Ogawa Aya",
          "Okuda Iroha",
          "Kawasaki Sakura",
          "Sugawara Satsuki",
          "Tomisato Nao",
          "Nakanishi Aruno"
        ]
      }
    ],
    table: [
      {
        member: "Wada Maaya",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "|||3|2"
        ]
      },
      {
        member: "Ito Riria",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|3|3|3",
          "||||",
          "||||",
          "||||",
          "||||",
          "||3|3|2"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "x|x|x|x|x",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "|3|3||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "2|3|3|3|3",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||3||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|1|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|1|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|1|2|2|2",
          "x|x|1|1|x"
        ]
      },
      {
        member: "Endo Sakura",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kaki Haruka",
        slotsSold: [
          "2|1|2|2|2",
          "2|2|2|2|2",
          "1|1|1|2|2",
          "2|1|2|1|2",
          "2|2|1|1|2",
          "1|2|2|2|2"
        ]
      },
      {
        member: "Kakehashi Sayaka",
        slotsSold: [
          "2|2|2|3|3",
          "||||",
          "3||||",
          "3|3|3||",
          "3|3|3|3|3",
          "3|3|3|3|2"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "2|2|2|2|2",
          "||||3",
          "||||",
          "||||3",
          "3||3||3",
          "3|3|3|3|2"
        ]
      },
      {
        member: "Kitagawa Yuri",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Kuromi Haruka",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "3||3||",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "3|2|2|2|3",
          "||||",
          "||||",
          "||3||3",
          "||3|3|",
          "3|3|2|2|2"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "3|3|3||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Tamura Mayu",
        slotsSold: [
          "2|2|2|2|3",
          "3|3|2|3|3",
          "3|3|3|3|3",
          "2|3|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Tsutsui Ayame",
        slotsSold: [
          "3||3||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||3||"
        ]
      },
      {
        member: "Yakubo Mio",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||||",
          "||||",
          "||||"
        ]
      },
      {
        member: "Yumiki Nao",
        slotsSold: [
          "2|2|2|2|2",
          "3|3|3|3|3",
          "||||3",
          "||||3",
          "||3|3|3",
          "3|3|3|3|2"
        ]
      },
      {
        member: "Ioki Mao",
        slotsSold: [
          "x|2|2|2|3",
          "x|3|3|3|",
          "x|3|3||",
          "x|3|3|3|",
          "x|2|3|3|3",
          "x|2|2|2|3"
        ]
      },
      {
        member: "Ikeda Teresa",
        slotsSold: [
          "x|2|2|2|2",
          "x|3|2|3|",
          "x|3|3|3|",
          "x|3|3|3|",
          "x|3|3|3|",
          "x|2|3|3|3"
        ]
      },
      {
        member: "Ichinose Miku",
        slotsSold: [
          "x|2|2|2|3",
          "x|3|3|3|3",
          "x|2|3|3|",
          "x|2|3|3|3",
          "x|2|3|3|3",
          "x|2|3|3|3"
        ]
      },
      {
        member: "Inoue Nagi",
        slotsSold: [
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2"
        ]
      },
      {
        member: "Okamoto Hina",
        slotsSold: [
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x||||"
        ]
      },
      {
        member: "Ogawa Aya",
        slotsSold: [
          "x|3|3|3|3",
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x|3|||"
        ]
      },
      {
        member: "Okuda Iroha",
        slotsSold: [
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x||||"
        ]
      },
      {
        member: "Kawasaki Sakura",
        slotsSold: [
          "x|2|2|2|2",
          "x|2|2|2|",
          "x|3|3||",
          "x|2|2|3|",
          "x|2|2|3|",
          "x|2|2|3|3"
        ]
      },
      {
        member: "Sugawara Satsuki",
        slotsSold: [
          "x|2|2|2|2",
          "x|2|2|3|3",
          "x|2|2|3|3",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2"
        ]
      },
      {
        member: "Tomisato Nao",
        slotsSold: [
          "x|2|2|2|3",
          "x|2|2|2|2",
          "x|3|3||",
          "x|2|3||",
          "x|3|3|3|",
          "x|3|2|3|3"
        ]
      },
      {
        member: "Nakanishi Aruno",
        slotsSold: [
          "x|2|2|3|3",
          "x||||",
          "x||||",
          "x||||",
          "x||||",
          "x||||"
        ]
      }
    ]
  }
];
const membersdata = [
  {
    member: "Akimoto Manatsu",
    kanji: "\u79CB\u5143 \u771F\u590F",
    furi: "\u3042\u304D\u3082\u3068 \u307E\u306A\u3064",
    gen: 1,
    dob: "1993-08-20",
    from: "\u57FC\u7389",
    bloodtype: "B",
    height: 154,
    status: ""
  },
  {
    member: "Inoue Sayuri",
    kanji: "\u4E95\u4E0A \u5C0F\u767E\u5408",
    furi: "\u3044\u306E\u3046\u3048 \u3055\u3086\u308A",
    gen: 1,
    dob: "1994-12-14",
    from: "\u57FC\u7389",
    bloodtype: "B",
    height: 156,
    status: "2020-04-27"
  },
  {
    member: "Saito Asuka",
    kanji: "\u9F4B\u85E4 \u98DB\u9CE5",
    furi: "\u3055\u3044\u3068\u3046  \u3042\u3059\u304B",
    gen: 1,
    dob: "1998-08-10",
    from: "\u6771\u4EAC",
    bloodtype: "O",
    height: 158,
    status: ""
  },
  {
    member: "Saitou Yuuri",
    kanji: "\u6589\u85E4 \u512A\u91CC",
    furi: "\u3055\u3055\u3044\u3068\u3046 \u3086\u3046\u308A",
    gen: 1,
    dob: "1993-07-20",
    from: "\u6771\u4EAC",
    bloodtype: "O",
    height: 157,
    status: "2019-06-30"
  },
  {
    member: "Takayama Kazumi",
    kanji: "\u9AD8\u5C71 \u4E00\u5B9F",
    furi: "\u305F\u304B\u3084\u307E \u304B\u305A\u307F",
    gen: 1,
    dob: "1994-02-08",
    from: "\u5343\u8449",
    bloodtype: "A",
    height: 162,
    status: "2021-11-21"
  },
  {
    member: "Nakada Kana",
    kanji: "\u4E2D\u7530 \u82B1\u5948",
    furi: "\u306A\u304B\u3060 \u304B\u306A",
    gen: 1,
    dob: "1994-08-06",
    from: "\u57FC\u7389",
    bloodtype: "A",
    height: 158,
    status: "2020-10-25"
  },
  {
    member: "Higuchi Hina",
    kanji: "\u6A0B\u53E3 \u65E5\u5948",
    furi: "\u3055\u3044\u3068\u3046  \u3042\u3059\u304B",
    gen: 1,
    dob: "1998-01-31",
    from: "\u6771\u4EAC",
    bloodtype: "A",
    height: 161,
    status: ""
  },
  {
    member: "Hoshino Minami",
    kanji: "\u661F\u91CE \u307F\u306A\u307F",
    furi: "\u307B\u3057\u306E \u307F\u306A\u307F",
    gen: 1,
    dob: "1998-02-06",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "B",
    height: 155,
    status: "2022-02-12"
  },
  {
    member: "Matsumura Sayuri",
    kanji: "\u677E\u6751 \u6C99\u53CB\u7406",
    furi: "\u307E\u3064\u3080\u3089 \u3055\u3086\u308A",
    gen: 1,
    dob: "1992-08-27",
    from: "\u5927\u962A",
    bloodtype: "B",
    height: 164,
    status: "2021-07-13"
  },
  {
    member: "Wada Maaya",
    kanji: "\u548C\u7530 \u307E\u3042\u3084",
    furi: "\u308F\u3060 \u307E\u3042\u3084",
    gen: 1,
    dob: "1998-04-23",
    from: "\u5E83\u5CF6",
    bloodtype: "O",
    height: 161,
    status: ""
  },
  {
    member: "Itou Karin",
    kanji: "\u4F0A\u85E4 \u304B\u308A\u3093",
    furi: "\u3044\u3068\u3046 \u304B\u308A\u3093",
    gen: 2,
    dob: "1993-05-26",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "O",
    height: 153,
    status: "2019-05-24"
  },
  {
    member: "Ito Jyunna",
    kanji: "\u4F0A\u85E4 \u7D14\u5948",
    furi: "\u3044\u3068\u3046 \u3058\u3085\u3093\u306A",
    gen: 2,
    dob: "1998-08-27",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "A",
    height: 166,
    status: "2021-08-31"
  },
  {
    member: "Sasaki Kotoko",
    kanji: "\u4F50\u3005\u6728 \u7434\u5B50",
    furi: "\u3055\u3055\u304D \u3053\u3068\u3053",
    gen: 2,
    dob: "1998-08-28",
    from: "\u57FC\u7389",
    bloodtype: "A",
    height: 163,
    status: "2020-03-31"
  },
  {
    member: "Shinuchi Mai",
    kanji: "\u65B0\u5185 \u771E\u8863",
    furi: "\u3057\u3093\u3046\u3061 \u307E\u3044",
    gen: 2,
    dob: "1992-01-22",
    from: "\u57FC\u7389",
    bloodtype: "B",
    height: 165,
    status: "2022-02-10"
  },
  {
    member: "Terada Ranze",
    kanji: "\u5BFA\u7530 \u862D\u4E16",
    furi: "\u3066\u3089\u3060 \u3089\u3093\u305C",
    gen: 2,
    dob: "1998-09-23",
    from: "\u6771\u4EAC",
    bloodtype: "\u4E0D\u660E",
    height: 155,
    status: "2021-12-12"
  },
  {
    member: "Kitano Hinako",
    kanji: "\u5317\u91CE \u65E5\u5948\u5B50",
    furi: "\u304D\u305F\u306E \u3072\u306A\u3053",
    gen: 2,
    dob: "1996-07-17",
    from: "\u5343\u8449",
    bloodtype: "O",
    height: 158,
    status: "2022-04-30"
  },
  {
    member: "Suzuki Ayane",
    kanji: "\u9234\u6728 \u7D62\u97F3",
    furi: "\u3059\u305A\u304D \u3042\u3084\u306D",
    gen: 2,
    dob: "1999-03-05",
    from: "\u5E83\u5CF6",
    bloodtype: "O",
    height: 161,
    status: ""
  },
  {
    member: "Hori Miyona",
    kanji: "\u5800 \u672A\u592E\u5948",
    furi: "\u307B\u308A \u307F\u304A\u306A",
    gen: 2,
    dob: "1996-10-15",
    from: "\u5C90\u961C",
    bloodtype: "O",
    height: 162,
    status: "2021-03-28"
  },
  {
    member: "Yamazaki Rena",
    kanji: "\u5C71\u5D0E \u601C\u5948",
    furi: "\u3084\u307E\u3056\u304D \u308C\u306A",
    gen: 2,
    dob: "1997-05-21",
    from: "\u6771\u4EAC",
    bloodtype: "B",
    height: 164,
    status: "2022-07-17"
  },
  {
    member: "Watanabe Miria",
    kanji: "\u6E21\u8FBA \u307F\u308A\u611B",
    furi: "\u308F\u305F\u306A\u3079 \u307F\u308A\u3042",
    gen: 2,
    dob: "1999-11-01",
    from: "\u6771\u4EAC",
    bloodtype: "O",
    height: 153,
    status: "2021-08-31"
  },
  {
    member: "Ito Riria",
    kanji: "\u4F0A\u85E4 \u7406\u3005\u674F",
    furi: "\u3044\u3068\u3046 \u308A\u308A\u3042",
    gen: 3,
    dob: "2002-10-08",
    from: "\u6C96\u7E04",
    bloodtype: "B",
    height: 154,
    status: ""
  },
  {
    member: "Iwamoto Renka",
    kanji: "\u5CA9\u672C \u84EE\u52A0",
    furi: "\u3044\u308F\u3082\u3068 \u308C\u3093\u304B",
    gen: 3,
    dob: "2004-02-02",
    from: "\u6771\u4EAC",
    bloodtype: "B",
    height: 159,
    status: ""
  },
  {
    member: "Umezawa Minami",
    kanji: "\u6885\u6FA4 \u7F8E\u6CE2",
    furi: "\u3046\u3081\u3056\u308F \u307F\u306A\u307F",
    gen: 3,
    dob: "1999-01-06",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "A",
    height: 170,
    status: ""
  },
  {
    member: "Oozono Momoko",
    kanji: "\u5927\u5712 \u6843\u5B50",
    furi: "\u304A\u304A\u305E\u306E \u3082\u3082\u3053",
    gen: 3,
    dob: "1999-09-13",
    from: "\u9E7F\u5150\u5CF6",
    bloodtype: "O",
    height: 156,
    status: "2021-09-04"
  },
  {
    member: "Kubo Shiori",
    kanji: "\u4E45\u4FDD \u53F2\u7DD2\u91CC",
    furi: "\u304F\u307C \u3057\u304A\u308A",
    gen: 3,
    dob: "2001-07-14",
    from: "\u5BAE\u57CE",
    bloodtype: "O",
    height: 161,
    status: ""
  },
  {
    member: "Sakaguchi Tamami",
    kanji: "\u962A\u53E3 \u73E0\u7F8E",
    furi: "\u3055\u304B\u3050\u3061 \u305F\u307E\u307F",
    gen: 3,
    dob: "2001-11-10",
    from: "\u6771\u4EAC",
    bloodtype: "A",
    height: 161,
    status: ""
  },
  {
    member: "Sato Kaede",
    kanji: "\u4F50\u85E4 \u6953",
    furi: "\u3055\u3068\u3046 \u304B\u3048\u3067",
    gen: 3,
    dob: "1998-03-23",
    from: "\u611B\u77E5",
    bloodtype: "A",
    height: 161,
    status: ""
  },
  {
    member: "Nakamura Reno",
    kanji: "\u4E2D\u6751 \u9E97\u4E43",
    furi: "\u306A\u304B\u3080\u3089 \u308C\u306E",
    gen: 3,
    dob: "2001-09-27",
    from: "\u6771\u4EAC",
    bloodtype: "\u4E0D\u660E",
    height: 167,
    status: ""
  },
  {
    member: "Mukai Hazuki",
    kanji: "\u5411\u4E95 \u8449\u6708",
    furi: "\u3080\u304B\u3044 \u306F\u3065\u304D",
    gen: 3,
    dob: "1999-08-23",
    from: "\u6771\u4EAC",
    bloodtype: "A",
    height: 152,
    status: ""
  },
  {
    member: "Yamashita Mizuki",
    kanji: "\u5C71\u4E0B \u7F8E\u6708",
    furi: "\u3084\u307E\u3057\u305F \u307F\u3065\u304D",
    gen: 3,
    dob: "1999-07-26",
    from: "\u6771\u4EAC",
    bloodtype: "O",
    height: 160,
    status: ""
  },
  {
    member: "Yoshida Ayano Cristi",
    kanji: "\u5409\u7530 \u7DBE\u4E43\u30AF\u30EA\u30B9\u30C6\u30A3\u30FC",
    furi: "\u3088\u3057\u3060 \u3042\u3084\u306E\u30AF\u30EA\u30B9\u30C6\u30A3\u30FC",
    gen: 3,
    dob: "1995-09-06",
    from: "\u5927\u5206",
    bloodtype: "A",
    height: 161,
    status: ""
  },
  {
    member: "Yoda Yuuki",
    kanji: "\u4E0E\u7530 \u7950\u5E0C",
    furi: "\u3088\u3060 \u3086\u3046\u304D",
    gen: 3,
    dob: "2000-05-05",
    from: "\u798F\u5CA1",
    bloodtype: "O",
    height: 153,
    status: ""
  },
  {
    member: "Endo Sakura",
    kanji: "\u9060\u85E4 \u3055\u304F\u3089",
    furi: "\u3048\u3093\u3069\u3046 \u3055\u304F\u3089",
    gen: 4,
    dob: "2001-10-03",
    from: "\u611B\u77E5",
    bloodtype: "\u4E0D\u660E",
    height: 164,
    status: ""
  },
  {
    member: "Kaki Haruka",
    kanji: "\u8CC0\u559C \u9065\u9999",
    furi: "\u304B\u304D \u306F\u308B\u304B",
    gen: 4,
    dob: "2001-08-08",
    from: "\u6803\u6728",
    bloodtype: "A",
    height: 166,
    status: ""
  },
  {
    member: "Kakehashi Sayaka",
    kanji: "\u639B\u6A4B \u6C99\u8036\u9999",
    furi: "\u304B\u3051\u306F\u3057 \u3055\u3084\u304B",
    gen: 4,
    dob: "2002-11-20",
    from: "\u5CA1\u5C71",
    bloodtype: "B\u578B",
    height: 154,
    status: ""
  },
  {
    member: "Kanagawa Saya",
    kanji: "\u91D1\u5DDD \u7D17\u8036",
    furi: "\u304B\u306A\u304C\u308F \u3055\u3084",
    gen: 4,
    dob: "2001-10-31",
    from: "\u5317\u6D77\u9053",
    bloodtype: "O",
    height: 165,
    status: ""
  },
  {
    member: "Kitagawa Yuri",
    kanji: "\u5317\u5DDD \u60A0\u7406",
    furi: "\u304D\u305F\u304C\u308F \u3086\u308A",
    gen: 4,
    dob: "2001-08-08",
    from: "\u30AB\u30EA\u30D5\u30A9\u30EB\u30CB\u30A2\u5DDE",
    bloodtype: "\u4E0D\u660E",
    height: 165,
    status: ""
  },
  {
    member: "Kuromi Haruka",
    kanji: "\u9ED2\u898B \u660E\u9999",
    furi: "\u304F\u308D\u307F \u306F\u308B\u304B",
    gen: 4,
    dob: "2004-01-19",
    from: "\u6771\u4EAC",
    bloodtype: "O",
    height: 162,
    status: ""
  },
  {
    member: "Sato Rika",
    kanji: "\u4F50\u85E4 \u7483\u679C",
    furi: "\u3055\u3068\u3046 \u308A\u304B",
    gen: 4,
    dob: "2001-08-09",
    from: "\u5CA9\u624B",
    bloodtype: "B",
    height: 160,
    status: ""
  },
  {
    member: "Shibata Yuna",
    kanji: "\u67F4\u7530 \u67DA\u83DC",
    furi: "\u3057\u3070\u305F \u3086\u306A",
    gen: 4,
    dob: "2003-03-03",
    from: "\u5343\u8449",
    bloodtype: "A",
    height: 160,
    status: ""
  },
  {
    member: "Seimiya Rei",
    kanji: "\u6E05\u5BAE \u30EC\u30A4",
    furi: "\u305B\u3044\u307F\u3084 \u30EC\u30A4",
    gen: 4,
    dob: "2003-08-01",
    from: "\u57FC\u7389",
    bloodtype: "O",
    height: 164,
    status: ""
  },
  {
    member: "Tamura Mayu",
    kanji: "\u7530\u6751 \u771F\u4F51",
    furi: "\u305F\u3080\u3089 \u307E\u3086",
    gen: 4,
    dob: "1999-01-12",
    from: "\u57FC\u7389",
    bloodtype: "A",
    height: 160,
    status: ""
  },
  {
    member: "Tsutsui Ayame",
    kanji: "\u7B52\u4E95 \u3042\u3084\u3081",
    furi: "\u3064\u3064\u3044 \u3042\u3084\u3081",
    gen: 4,
    dob: "2004-06-08",
    from: "\u611B\u77E5",
    bloodtype: "O",
    height: 160,
    status: ""
  },
  {
    member: "Hayakawa Seira",
    kanji: "\u65E9\u5DDD \u8056\u6765",
    furi: "\u306F\u3084\u304B\u308F \u305B\u3044\u3089",
    gen: 4,
    dob: "2000-08-24",
    from: "\u5927\u962A",
    bloodtype: "A",
    height: 164,
    status: "rest"
  },
  {
    member: "Hayashi Runa",
    kanji: "\u6797 \u7460\u5948",
    furi: "\u306F\u3084\u3057 \u308B\u306A",
    gen: 4,
    dob: "2003-10-02",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "O",
    height: 164,
    status: ""
  },
  {
    member: "Matsuo Miyu",
    kanji: "\u677E\u5C3E \u7F8E\u4F51",
    furi: "\u307E\u3064\u304A \u307F\u3086",
    gen: 4,
    dob: "2004-01-03",
    from: "\u5343\u8449",
    bloodtype: "O",
    height: 167,
    status: ""
  },
  {
    member: "Yakubo Mio",
    kanji: "\u77E2\u4E45\u4FDD \u7F8E\u7DD2",
    furi: "\u3084\u304F\u307C \u307F\u304A",
    gen: 4,
    dob: "2002-08-14",
    from: "\u6771\u4EAC",
    bloodtype: "B",
    height: 153,
    status: ""
  },
  {
    member: "Yumiki Nao",
    kanji: "\u5F13\u6728 \u5948\u65BC",
    furi: "\u3086\u307F\u304D \u306A\u304A",
    gen: 4,
    dob: "1999-02-03",
    from: "\u4EAC\u90FD",
    bloodtype: "A",
    height: 165,
    status: ""
  },
  {
    member: "Ioki Mao",
    kanji: "\u4E94\u767E\u57CE \u8309\u592E",
    furi: "\u3044\u304A\u304D \u307E\u304A",
    gen: 5,
    dob: "2005-07-29",
    from: "\u5175\u5EAB",
    bloodtype: "O",
    height: 166,
    status: "5\u671F\u751F"
  },
  {
    member: "Ikeda Teresa",
    kanji: "\u6C60\u7530 \u745B\u7D17",
    furi: "\u3044\u3051\u3060 \u3066\u308C\u3055",
    gen: 5,
    dob: "2002-05-12",
    from: "\u6771\u4EAC",
    bloodtype: "\u4E0D\u660E",
    height: 159,
    status: "5\u671F\u751F"
  },
  {
    member: "Ichinose Miku",
    kanji: "\u4E00\u30CE\u702C \u7F8E\u7A7A",
    furi: "\u3044\u3061\u306E\u305B \u307F\u304F",
    gen: 5,
    dob: "2003-05-24",
    from: "\u798F\u5CA1",
    bloodtype: "B",
    height: 156,
    status: "5\u671F\u751F"
  },
  {
    member: "Inoue Nagi",
    kanji: "\u4E95\u4E0A \u548C",
    furi: "\u3044\u306E\u3046\u3048 \u306A\u304E ",
    gen: 5,
    dob: "2005-02-17",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "B",
    height: 156,
    status: "5\u671F\u751F"
  },
  {
    member: "Okamoto Hina",
    kanji: "\u5CA1\u672C \u59EB\u5948",
    furi: "\u304A\u304B\u3082\u3068 \u3072\u306A",
    gen: 5,
    dob: "2003-12-17",
    from: "\u611B\u77E5",
    bloodtype: "A",
    height: 158,
    status: "5\u671F\u751F"
  },
  {
    member: "Ogawa Aya",
    kanji: "\u5C0F\u5DDD \u5F69",
    furi: "\u304A\u304C\u308F \u3042\u3084 ",
    gen: 5,
    dob: "2007-06-27",
    from: "\u5343\u8449",
    bloodtype: "B",
    height: 154,
    status: "5\u671F\u751F"
  },
  {
    member: "Okuda Iroha",
    kanji: "\u5965\u7530 \u3044\u308D\u306F",
    furi: "\u304A\u304F\u3060 \u3044\u308D\u306F",
    gen: 5,
    dob: "2005-08-20",
    from: "\u5343\u8449",
    bloodtype: "A",
    height: 157,
    status: "5\u671F\u751F"
  },
  {
    member: "Kawasaki Sakura",
    kanji: "\u5DDD\uFA11 \u685C",
    furi: "\u304B\u308F\u3055\u304D \u3055\u304F\u3089",
    gen: 5,
    dob: "2003-04-17",
    from: "\u795E\u5948\u5DDD",
    bloodtype: "\u4E0D\u660E",
    height: 155,
    status: "5\u671F\u751F"
  },
  {
    member: "Sugawara Satsuki",
    kanji: "\u83C5\u539F \u54B2\u6708",
    furi: "\u3059\u304C\u308F\u3089 \u3055\u3064\u304D ",
    gen: 5,
    dob: "2005-10-31",
    from: "\u5343\u8449",
    bloodtype: "A",
    height: 157,
    status: "5\u671F\u751F"
  },
  {
    member: "Tomisato Nao",
    kanji: "\u51A8\u91CC \u5948\u592E",
    furi: "\u3068\u307F\u3055\u3068 \u306A\u304A",
    gen: 5,
    dob: "2006\u5E749\u670818",
    from: "\u5343\u8449",
    bloodtype: "O",
    height: 164,
    status: "5\u671F\u751F"
  },
  {
    member: "Nakanishi Aruno",
    kanji: "\u4E2D\u897F \u30A2\u30EB\u30CE",
    furi: "\u306A\u304B\u306B\u3057 \u30A2\u30EB\u30CE",
    gen: 5,
    dob: "2003\u5E743\u670817",
    from: "\u5343\u8449",
    bloodtype: "A",
    height: 157,
    status: "5\u671F\u751F"
  }
];
const isISODate = (d) => d.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
const isExpandedDatalist = (l) => "slotsSoldex" in l[0];
function getMember(name) {
  let res = membersdata.filter((x) => x.member == name);
  if (res.length != 0) {
    res[0]["stripped_kanji"] = res[0].kanji.replace(" ", "");
    return res[0];
  } else {
    return {
      memebr: name,
      kanji: name,
      furi: name,
      stripped_kanji: name,
      gen: 0,
      dob: "1900-01-01",
      from: "",
      status: "none"
    };
  }
}
function getMembers(listOfNames) {
  return listOfNames.map((x) => getMember(x));
}
function involvedMembers(cdData2, dataform = "full") {
  return cdData2.table.map((x) => dataform == "name" ? x.member : getMember(x.member));
}
const status2label = (s) => {
  if (isISODate(s)) {
    return "OG";
  } else {
    return "\u73FE\u5F79";
  }
};
const groupID2label = (id) => {
  switch (id) {
    case "sbt":
      return "\u9078\u629C";
    case "und":
      return "\u30A2\u30F3\u30C0\u30FC";
    case "grad":
      return "\u5352\u696D\u4E88\u5B9A";
    default:
      if (id.match(/^(gen)\d+$/))
        return `${id.slice(3)}\u671F\u751F`;
      return `?`;
  }
};
const ordering = {
  gen: (a, b) => a - b,
  group: (a, b) => {
    let o = ["grad", "sbt", "und", ...[...Array(5).keys()].map((x) => `gen${x + 1}`)];
    return o.indexOf(a) - o.indexOf(b);
  },
  "dob-year": (a, b) => a - b,
  soldstatus: (a, b) => a ? -1 : b ? 1 : 0
};
const opt2label = (opt, val) => {
  switch (opt) {
    case "gen":
      return `${val}\u671F\u751F`;
    case "group":
      return groupID2label(val);
    case "status":
      return status2label(val);
    case "bloodtype":
      return val != "\u4E0D\u660E" ? `${val}\u578B` : "\u4E0D\u660E";
    case "dob-year":
      return isISODate(val) ? `${val.slice(0, 4)}\u5E74` : `${val}\u5E74`;
    case "dob-month":
      return isISODate(val) ? `${val.slice(5, 7)}\u6708` : `${val}\u6708`;
    case "soldstatus":
      return val ? "\u5B8C\u58F2" : "\u672A\u5B8C\u58F2";
    case "from":
      return val;
  }
};
const expandSoldslots = (mbdata) => {
  if (!("slotsSoldex" in mbdata))
    mbdata["slotsSoldex"] = mbdata.slotsSold.map((x) => x.split("|"));
  return mbdata.slotsSoldex;
};
function expandMBData(mbdata, groups) {
  let res = { member: mbdata.member, slotsSoldex: [], numSold: [0, 0], group: "" };
  res.slotsSoldex = expandSoldslots(mbdata);
  let f = res.slotsSoldex.flat();
  res.numSold = [
    f.filter((x) => x.match(/^\d+$/) ? parseInt(x) > 0 : false).length,
    f.filter((x) => x != "x" && x != "?").length
  ];
  res.group = groups == "" ? "" : determineGroup(mbdata, groups);
  return res;
}
function compareData(mbdataNow, mbdataCompare, atdraw = -1) {
  let [m, totalThen] = getNumSold(mbdataCompare, atdraw), [n, totalNow] = getNumSold(mbdataNow, atdraw);
  let lastTimeSoldout = m == totalThen, currentSoldout = n == totalNow, bothSoldout = lastTimeSoldout && currentSoldout;
  if (bothSoldout) {
    return {
      prev: m,
      curr: n,
      diff: 0,
      extraprev: `(${finalSoldoutDraw(mbdataCompare)}\u6B21)`,
      extracurr: `(${finalSoldoutDraw(mbdataNow)}\u6B21)`,
      extradiff: totalThen != "N/A" ? `\u5168\u5B8C\u58F2` : ""
    };
  } else if (lastTimeSoldout && n > m) {
    return {
      prev: `${m}(\u5168)`,
      curr: n,
      diff: "N/A"
    };
  } else if (currentSoldout && n < m) {
    return {
      prev: m,
      curr: `${n}(\u5168)`,
      diff: "N/A"
    };
  } else {
    return {
      prev: totalThen == "N/A" ? "N/A" : m,
      curr: `${n}${currentSoldout ? "(\u5168)" : ""}`,
      diff: m !== "N/A" ? `${n - m > 0 ? "+" : ""}${n - m}` : ""
    };
  }
}
function expandDataList(cdData2) {
  let groups = concat(
    [
      { id: "sbt", has: cdData2.sbt },
      { id: "und", has: getUnderList(cdData2) }
    ],
    cdData2.addgroups ? cdData2.addgroups : []
  );
  return cdData2.table.map((x) => expandMBData(x, groups));
}
function getNumSold(mbdata, atdraw = -1) {
  if (!mbdata)
    return [0, "N/A"];
  let expanded = expandSoldslots(mbdata).flat();
  let bound = atdraw == -1 ? finalSoldoutDraw(mbdata) : atdraw;
  let total = expanded.filter((x) => x != "x" && x != "?").length;
  return bound == -1 ? [0, total] : [expanded.filter((x) => x.match(/^\d+$/) ? parseInt(x) <= bound : false).length, total];
}
function finalSoldoutDraw(mbdata) {
  return mbdata ? expandSoldslots(mbdata).flat().reduce((prev, curr) => {
    if (String(curr).match(/^\d+$/)) {
      let c = parseInt(curr);
      return c > prev ? c : prev;
    } else {
      return String(prev).match(/^\d+$/) ? parseInt(prev) : -1;
    }
  }) : -1;
}
function partitionToGroup(mbDataList, opt = "gen") {
  if (opt == "none")
    return mbDataList;
  let res = [];
  let withopt = [];
  for (let mbdata of mbDataList) {
    let mb = getMember(mbdata.member);
    let val;
    switch (opt) {
      case "dob-year":
        val = mb.dob.slice(0, 4);
        break;
      case "dob-month":
        val = mb.dob.slice(5, 7);
        break;
      case "group":
        val = mbdata.group;
        break;
      case "soldstatus":
        val = mbdata.numSold[0] == mbdata.numSold[1];
        break;
      default:
        val = mb[opt];
        break;
    }
    let i = withopt.indexOf(val);
    if (i != -1) {
      res[i].has.push(mbdata);
    } else {
      withopt.push(val);
      res.push({ label: opt2label(opt, val), value: val, has: [mbdata] });
    }
  }
  return res.sort((a, b) => ordering[opt](a.value, b.value));
}
function sortList(datalist, opt = "none") {
  return "has" in datalist[0] ? datalist.map((x) => {
    return { label: x.label, value: x.value, has: sortPlainList(x.has, opt) };
  }) : sortPlainList(datalist, opt);
}
function sortPlainList(mbdatalist, opt = "kana") {
  switch (opt) {
    case "numsold": {
      let t = isExpandedDatalist(mbdatalist) ? mbdatalist : mbdatalist.map((x) => expandMBData(x, ""));
      return t.sort((a, b) => {
        let soldout = [a, b].map((x) => x.numSold[0] == x.numSold[1]);
        if (soldout[0])
          return soldout[1] ? b.numSold[0] - a.numSold[0] : -1;
        else
          return soldout[1] ? 1 : b.numSold[0] - a.numSold[0];
      });
    }
    case "kana":
      return mbdatalist.sort((a, b) => {
        let [aa, bb] = getMembers([a.member, b.member]);
        return aa.furi.localeCompare(bb.furi, "ja");
      });
    default:
      return mbdatalist;
  }
}
function nth(n) {
  return ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th";
}
function cdData(cd) {
  let value = `${cd.num}${cd.type}`;
  let type;
  switch (cd.type) {
    case "Best":
      type = "Best Album";
      break;
    default:
      type = cd.type;
      break;
  }
  let display = `${cd.num}${nth(cd.num)} ${type}`;
  return { display, value };
}
function getUnderList(cdData2) {
  let mblist = cdData2.table.map((x) => x.member);
  if ("addgroups" in cdData2)
    cdData2.addgroups.map((x) => pullAll(mblist, x.has));
  return without(mblist, ...cdData2.sbt);
}
function determineGroup(mb, groups) {
  for (let g of groups) {
    if (g.has.indexOf(mb.member) !== -1)
      return g.id;
  }
  return "NoData";
}
function nthColor(n) {
  const palette = [
    "#911eb4",
    "#3cb44b",
    "#4363d8",
    "#e6194b",
    "#42d4f4",
    "#f58231",
    "#f032e6",
    "#469990",
    "#fabed4",
    "#dcbeff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#000075",
    "#ffe119",
    "#bfef45",
    "#808000",
    "#ffd8b1",
    "#000000"
  ];
  return n < palette.length ? palette[n] : palette[n % palette.length];
}
export {
  cdData as a,
  getNumSold as b,
  compareData as c,
  data as d,
  expandDataList as e,
  getMember as g,
  involvedMembers as i,
  nthColor as n,
  partitionToGroup as p,
  sortList as s
};