import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "./index-16508633.js";
import { a as cdData } from "./util-257069f2.js";
import { differenceWith, isEqual, findIndex, zip } from "lodash-es";
const data = [
  {
    cd: {
      num: 17,
      type: "Single",
      title: "\u30A4\u30F3\u30D5\u30EB\u30A8\u30F3\u30B5\u30FC",
      release: "2017-03-22"
    },
    lastDraw: 14,
    meetDates: [
      "2017-04-09",
      "2017-04-23",
      "2017-04-29",
      "2017-05-07",
      "2017-05-14",
      "2017-05-28",
      "2017-06-11",
      "2017-06-17"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Ikoma Rina",
      "Itou Marika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Higuchi Hina",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nakada Kana",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Kitano Hinako",
      "Terada Ranze",
      "Hori Miona",
      "Shinuchi Mai"
    ],
    table: [
      {
        member: "Akimoto Manatsu",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Ikuta Erika",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "4|4|4|4|4",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Ikoma Rina",
        slotsSold: [
          "5|4|3|4|5",
          "5|4|3|4|6",
          "7|4|3|5|7",
          "7|6|4|5|6",
          "7|7|6|6|8",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "8|8|6|7|7"
        ]
      },
      {
        member: "Itou Marika",
        slotsSold: [
          "3|2|2|2|4",
          "3|2|2|2|4",
          "4|3|2|3|4",
          "4|4|2|3|3",
          "x|x|x|x|x",
          "4|3|2|2|3",
          "4|3|2|3|3",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "2|2|2|2|3",
          "2|2|2|2|3",
          "3|3|2|2|3",
          "3|3|2|2|2",
          "5|4|5|5|5",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|5|4|4|4"
        ]
      },
      {
        member: "Etou Misa",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Kawago Hina",
        slotsSold: [
          "x|x|x|6|",
          "x|x|x|8|",
          "x|x|x||",
          "x|x|x||",
          "x|x|x|x|x",
          "x|x|x||",
          "x|x|x|12|13",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Kawamura Mahiro",
        slotsSold: [
          "x|x|x|x|4",
          "x|x|x|x|7",
          "x|x|x|x|9",
          "x|x|x|x|5",
          "x|x|x|x|x",
          "x|x|x|x|7",
          "x|x|x|x|10",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Saitou Chiharu",
        slotsSold: [
          "||4|x|x",
          "||4|x|x",
          "||5|x|x",
          "||6|x|x",
          "x|x|x|4|5",
          "|12|4|x|x",
          "14|12|5|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "4|4|3|3|5",
          "5|3|3|3|5",
          "5|4|3|3|5",
          "5|4|3|3|3",
          "x|x|x|x|x",
          "4|3|2|3|4",
          "5|4|3|3|5",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Sakurai Reika",
        slotsSold: [
          "3|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2",
          "3|3|2|2|2",
          "x|x|x|x|x",
          "2|3|2|2|2",
          "3|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "2|2|2|2|3",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "3|3|2|2|2",
          "x|x|x|x|x",
          "2|3|2|2|2",
          "3|2|2|2|3",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "4|4|3|3|5",
          "6|4|3|4|5",
          "4|6|4|4|5",
          "6|5|4|4|4",
          "x|x|x|x|x",
          "5|4|3|4|4",
          "6|4|4|4|4",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Nishino Nanase",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "x|x|x|x|x",
          "|7|4|x|x",
          "x|x|x|x|x",
          "x|x|6|5|x",
          "x|x|x|6|x",
          "||8|x|x",
          "14|11|4|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|3|2|2|3",
          "4|5|4|x|x",
          "4|3|2|2|4",
          "3|2|2|2|3",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "2|2|2|2|3",
          "3|2|2|2|3",
          "4|3|2|3|3",
          "3|3|2|2|3",
          "x|x|x|x|x",
          "3|3|2|2|3",
          "3|3|2|2|3",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wakatsuki Yumi",
        slotsSold: [
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|3|2|2|2",
          "4|4|4|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x|x|",
          "x|x|x|x|5",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|x",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "|||x|x",
          "||x|x|x",
          "x|x|x|x|x",
          "x|x|x||",
          "2|2|2|2|2",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|4|8",
          "x|x|x|6|",
          "||x|x|x",
          "x|x|x|x|9",
          "x|x|x|8|12",
          "x|x|x|6|11",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "2|2|2|3|3",
          "3|3|2|2|3",
          "4|3|2|2|3",
          "3|3|2|2|3",
          "5|5|5|5|5",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "x|x|x|4|",
          "x|x|x|4|8",
          "||4|x|x",
          "x|x|x|5|10",
          "x|x|x|x|x",
          "x|x|x|6|",
          "x|x|x|4|5",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|x",
          "x|x|x|x|",
          "x|x|x|x|13",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "3|2|2|2|3",
          "2|2|2|2|3",
          "3|3|2|2|3",
          "3|3|2|2|2",
          "4|5|4|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "5|5|4|4|4"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "4|4|2|3|x",
          "4|4|3|3|x",
          "6|4|3|3|x",
          "7|6|4|4|x",
          "x|x|x|x|x",
          "7|6|4|4|x",
          "5|4|3|3|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "4|3|2|3|3",
          "4|3|2|3|4",
          "4|4|2|3|4",
          "4|3|2|2|3",
          "x|x|x|x|x",
          "3|3|2|3|3",
          "4|3|2|3|3e",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "5|4|3|3|x",
          "5|5|3|3|x",
          "6|5|4|3|x",
          "4|4|3|3|x",
          "x|x|x|x|x",
          "4|4|3|3|x",
          "4|4|3|3|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "5|4|3|3|x",
          "6|5|3|3|x",
          "6|5|3|4|5",
          "7|6|4|4|5",
          "x|x|x|x|x",
          "7|5|3|3|x",
          "5|5|3|3|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "2|2|x|x|2",
          "2|2|x|x|2",
          "2|2|x|x|2",
          "2|2|x|x|2",
          "x|x|x|x|x",
          "4|4|x|x|8",
          "3|3|x|x|8",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "x|x|3|5|x",
          "x|x|5|6|x",
          "x|x|6|6|x",
          "x|x|6|7|x",
          "x|x|x|x|x",
          "x|x|10|10|x",
          "x|x|5|6|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|x|x|5",
          "3|2|x|x|5",
          "3|3|x|x|6",
          "3|3|x|x|6",
          "x|x|x|x|x",
          "3|3|x|x|6",
          "3|3|x|x|5",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "x|x|2|2|5",
          "x|x|2|2|5",
          "x|x|2|2|6",
          "x|x|3|3|5",
          "x|x|x|x|x",
          "x|x|3|3|6",
          "x|x|2|2|5",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "x|x|3|3|x",
          "x|x|3|4|x",
          "x|x|3|4|x",
          "x|x|4|5|x",
          "x|x|x|x|x",
          "x|x|7|7|x",
          "x|x|3|4|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "||x|x|x",
          "||x|x|x",
          "||x|x|x",
          "||x|x|x",
          "x|x|x|x|x",
          "||x|x|x",
          "14|11|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "|4|x|x|x",
          "|6|x|x|x",
          "|5|x|x|x",
          "||x|x|x",
          "x|x|x|x|x",
          "||x|x|x",
          "12|6|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "5|3|x|x|x",
          "|5|x|x|x",
          "|7|x|x|x",
          "||x|x|x",
          "x|x|x|x|x",
          "||x|x|x",
          "10|4|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||x|x|x",
          "||x|x|x",
          "||x|x|x",
          "||x|x|x",
          "x|x|x|x|x",
          "||x|x|x",
          "12|10|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x",
          "x|x|2|2|4",
          "x|x|2|2|4",
          "x|x|x|x|x"
        ]
      }
    ]
  },
  {
    cd: {
      num: 3,
      type: "Album",
      title: "\u751F\u307E\u308C\u3066\u304B\u3089\u521D\u3081\u3066\u898B\u305F\u5922",
      release: "2017-05-24"
    },
    lastDraw: 10,
    meetDates: [
      "2017-07-16",
      "2017-07-17",
      "2017-07-23"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Ikoma Rina",
      "Itou Marika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Higuchi Hina",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nakada Kana",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Kitano Hinako",
      "Terada Ranze",
      "Hori Miona",
      "Shinuchi Mai"
    ],
    table: [
      {
        member: "Akimoto Manatsu",
        slotsSold: [
          "2|3|3|3|3",
          "3|3|3|3|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Ikoma Rina",
        slotsSold: [
          "||||",
          "||||",
          "6|4|4|6|7"
        ]
      },
      {
        member: "Itou Marika",
        slotsSold: [
          "|8|7|9|4",
          "||||",
          "3|3|3|3|4"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "|9|7|9|9",
          "||||",
          "3|2|3|3|3"
        ]
      },
      {
        member: "Etou Misa",
        slotsSold: [
          "3|2|3|3|3",
          "3|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kawago Hina",
        slotsSold: [
          "x|x|x||",
          "||x|x|x",
          "x|x|x|8|"
        ]
      },
      {
        member: "Kawamura Mahiro",
        slotsSold: [
          "x|x|x||",
          "||x|x|x",
          "x|x|x|4|5"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "3|2|3|2|2",
          "2|2|2|3|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Saitou Chiharu",
        slotsSold: [
          "x|x|x||",
          "||x|x|x",
          "x|x|x|5|6"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "||||",
          "||||",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Sakurai Reika",
        slotsSold: [
          "6|5|4|5|5",
          "8|6|6|6|5",
          "2|2|3|2|2"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "4|4|4|3|3",
          "8|6|5|4|5",
          "2|2|2|2|3"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "||||",
          "||||",
          "8|4|4|5|8"
        ]
      },
      {
        member: "Nakamoto Himeka",
        slotsSold: [
          "5|4|3|5|4",
          "||||",
          "2|2|2|3|3"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "x|x|||x",
          "x|||x|x",
          "x|x|9|9|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "||||",
          "||||",
          "4|3|3|3|4"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "6|5|4|5|6",
          "|9|9||9",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Wakatsuki Yumi",
        slotsSold: [
          "3|3|3|3|3",
          "4|4|4|4|3",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x|x|",
          "|x|x|x|x",
          "x|x|x|x|"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "x|x|||x",
          "x|||x|x",
          "x|x|4|6|x"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "x|x|||x",
          "x|||x|x",
          "x|x|5|6|x"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "||||",
          "||9||",
          "3|3|3|3|4"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "x|x|||x",
          "x|||x|x",
          "x|x|6|6|x"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x|x|",
          "|x|x|x|x",
          "x|x|x|x|4"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "6|5|6|6|8",
          "8|6|6|6|8",
          "2|2|2|2|3"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "||||",
          "||||",
          "6|4|3|4|6"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "8|7|6|6|7",
          "||||5",
          "3|3|2|3|3"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "4|3|3|3|4",
          "5|5|6|5|5",
          "2|2|3|3|3"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "||||",
          "||||",
          "5|3|3|4|5"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "||||",
          "||||",
          "3|3|4|3|4"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "4|4|x|x|x",
          "x|x|x|5|5",
          "2|2|x|x|x"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "7|5|x|x|x",
          "x|x|x|7|",
          "3|2|x|x|x"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "4|3|x|x|x",
          "x|x|x|5|6",
          "2|2|x|x|x"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "4|3|x|x|x",
          "x|x|x|4|5",
          "2|2|x|x|x"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "3|3|2|x|x",
          "x|x|3|3|4",
          "2|2|2|x|x"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "x|x|6|7|x",
          "x||8|x|x",
          "x|x|3|3|x"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "x|x|x|x|",
          "|x|x|x|x",
          "x|x|x|x|3"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "x|x|x|x|",
          "|x|x|x|x",
          "x|x|x|x|3"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||x|x|x",
          "x|x|x||",
          "4|3|x|x|x"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|x|x",
          "x|x|2|2|3",
          "2|2|2|x|x"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "x|x|x|x|",
          "|x|x|x|x",
          "x|x|x|x|3"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|x|x",
          "x|x|2|2|2",
          "2|2|2|x|x"
        ]
      }
    ]
  },
  {
    cd: {
      num: 18,
      type: "Single",
      title: "\u9003\u3052\u6C34",
      release: "2017-08-09"
    },
    lastDraw: 20,
    meetDates: [
      "2017-09-18",
      "2017-09-24",
      "2017-09-30",
      "2017-10-28",
      "2017-11-04",
      "2017-12-23"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Ikoma Rina",
      "Itou Marika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Hori Miona",
      "Shinuchi Mai",
      "Oozono Momoko",
      "Yoda Yuuki"
    ],
    table: [
      {
        member: "Akimoto Manatsu",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Ikuta Erika",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Ikoma Rina",
        slotsSold: [
          "5|5|4|5|5",
          "6|4|4|4|6",
          "10|10|6|9|10",
          "7|5|4|5|6",
          "10|6|4|5|8",
          "11|7|6|6|8"
        ]
      },
      {
        member: "Itou Marika",
        slotsSold: [
          "3|3|2|3|3",
          "x|x|x|x|x",
          "5|5|4|5|4",
          "3|3|2|2|3",
          "4|4|2|3|4",
          "6|6|5|5|5"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "3|3|2|3|3",
          "3|3|2|3|3",
          "4|4|2|3|4",
          "3|2|2|2|3",
          "4|4|2|3|3",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Etou Misa",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Kawago Hina",
        slotsSold: [
          "x|x|x|8|",
          "x|x|x||",
          "x|x|x||",
          "x|x|x|6|9",
          "x|x|x||",
          "x|x|x|20|19"
        ]
      },
      {
        member: "Kawamura Mahiro",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Saitou Chiharu",
        slotsSold: [
          "x|x|x|5|7",
          "x|x|x|4|6",
          "x|x|x|7|7",
          "x|x|x|3|5",
          "x|x|x|4|5",
          "x|x|x|11|14"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "4|3|3|3|4",
          "5|4|3|3|5",
          "5|5|3|3|3",
          "4|3|3|3|3",
          "5|5|4|4|4",
          "8|7|5|6|6"
        ]
      },
      {
        member: "Sakurai Reika",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|x|x|x",
          "4|3|2|2|2",
          "2|2|2|2|2",
          "3|3|2|2|2",
          "5|5|4|4|4"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|3|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "6|5|4|4|5",
          "9|6|4|5|6",
          "10|10|7|8|9",
          "6|5|4|4|5",
          "12|9|6|5|7",
          "18|12|8|8|8"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "x|x|x|4|7",
          "x|x|x|6|7",
          "x|x|x|7|7",
          "x|x|4|4|4",
          "12|6|x|x|x",
          "x|x|x|9|10"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "4|4|3|3|4",
          "5|4|3|3|5",
          "6|6|4|4|4",
          "5|4|3|3|4",
          "5|5|3|4|4",
          "9|8|6|7|5"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "3|2|2|2|3",
          "3|2|2|2|3",
          "4|3|2|3|3",
          "3|2|2|2|3",
          "3|2|2|2|2",
          "6|5|5|5|5"
        ]
      },
      {
        member: "Wakatsuki Yumi",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "|7|4|x|x",
          "|6|4|x|x",
          "|||x|x",
          "6|4|x|x|x",
          "|8|x|x|x",
          "||11|x|x"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "6|5|x|x|x",
          "6|4|x|x|x",
          "|10|x|x|x",
          "6|4|x|x|x",
          "x|x|7|7|8",
          "17|8|x|x|x"
        ]
      },
      {
        member: "Kitano Hinako",
        slotsSold: [
          "3|2|2|2|3",
          "4|4|3|4|4",
          "6|6|5|5|5",
          "5|4|3|3|4",
          "6|5|4|4|5",
          "7|6|5|5|5"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "x|x|x|3|5",
          "x|x|x|4|6",
          "x|x|x|9|",
          "x|x|x|3|4",
          "x|x|12|12|13",
          "x|x|x|8|10"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x|x|3",
          "x|x|x|x|5",
          "x|x|x|x|6",
          "x|x|x|x|4",
          "x|x|x|x|4",
          "x|x|x|x|6"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "3|2|2|2|3",
          "3|2|2|2|3",
          "4|4|2|2|3",
          "3|2|2|2|2",
          "4|3|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "7|5|3|4|4",
          "7|5|4|4|6",
          "||6|7|9",
          "6|4|3|3|4",
          "14|7|5|5|7",
          "14|9|6|7|7"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "3|3|2|2|3",
          "3|2|2|2|2",
          "4|4|3|4|4",
          "4|2|2|2|2",
          "4|4|2|2|2",
          "5|5|5|5|4"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "5|4|4|4|4",
          "6|5|4|4|4",
          "6|7|4|5|4",
          "5|4|3|3|4",
          "8|6|4|6|6",
          "9|9|7|6|6"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "5|4|3|3|4",
          "5|4|3|3|4",
          "6|6|4|4|5",
          "4|3|2|3|3",
          "6|6|4|4|4",
          "8|7|6|6|6"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "2|2|2|x|x",
          "2|2|2|x|x",
          "3|3|2|x|x",
          "2|2|2|x|x",
          "3|2|2|x|x",
          "4|4|4|x|x"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|2|x|x",
          "4|3|2|x|x",
          "5|5|3|x|x",
          "3|3|2|x|x",
          "6|5|3|x|x",
          "6|5|4|x|x"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|x|2",
          "2|2|2|x|2",
          "3|3|2|x|2",
          "2|2|2|x|2",
          "2|2|2|x|2",
          "4|4|4|x|4"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|x",
          "2|2|2|2|x",
          "4|4|3|3|x",
          "3|2|2|2|x",
          "4|3|2|2|x",
          "4|4|4|4|x"
        ]
      },
      {
        member: "Kubo Shiori",
        slotsSold: [
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "4|4|4|4|x"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "4|3|2|x|x",
          "4|3|3|x|x",
          "6|6|3|x|x",
          "4|3|2|x|x",
          "5|4|2|x|x",
          "6|6|4|x|x"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "x|x|3|x|4",
          "x|x|3|x|4",
          "x|x|4|x|5",
          "x|x|3|x|4",
          "x|x|4|x|5",
          "x|x|5|x|6"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "x|x|x|3|4",
          "x|x|x|3|4",
          "x|x|x|5|5",
          "x|x|x|3|4",
          "x|x|x|4|6",
          "x|x|x|7|7"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "x|x|3|3|4",
          "x|x|3|4|5",
          "x|x|5|7|6",
          "x|x|2|3|4",
          "6|5|x|x|x",
          "x|x|6|7|7"
        ]
      },
      {
        member: "Yamashita Mizuki",
        slotsSold: [
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "4|4|4|4|x"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "5|4|x|x|x",
          "4|3|x|x|x",
          "10|8|x|x|x",
          "5|4|x|x|x",
          "x|x|x|3|5",
          "9|7|x|x|x"
        ]
      },
      {
        member: "Yoda Yuuki",
        slotsSold: [
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "4|4|4|4|x"
        ]
      }
    ]
  },
  {
    cd: {
      num: 19,
      type: "Single",
      title: "\u3044\u3064\u304B\u3067\u304D\u308B\u304B\u3089\u4ECA\u65E5\u3067\u304D\u308B",
      release: "2018-04-25"
    },
    lastDraw: 14,
    meetDates: [
      "2018-01-30",
      "2018-01-03",
      "2018-02-09",
      "2018-02-17",
      "2018-03-23",
      "2018-03-16"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Ikoma Rina",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Higuchi Hina",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nakada Kana",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Hori Miona",
      "Kitano Hinako",
      "Shinuchi Mai"
    ],
    table: [
      {
        member: "Ikuta Erika",
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
        member: "Ikoma Rina",
        slotsSold: [
          "|13|10|13|",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "5|4|4|5|5",
          "x|x|x|x|x",
          "11|8|5|9|10"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "3|2|2|2|2",
          "3|2|2|2|3",
          "3|3|2|3|3",
          "3|2|2|2|3",
          "3|3|2|2|3",
          "3|2|2|2|3"
        ]
      },
      {
        member: "Etou Misa",
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
        member: "Kawago Hina",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "||x|x|x",
          "|18|x|x|x",
          "18|13|x|x|x",
          "|18|x|x|x"
        ]
      },
      {
        member: "Kawamura Mahiro",
        slotsSold: [
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "|20|x|x|x",
          "x|x|x|x|19"
        ]
      },
      {
        member: "Saito Asuka",
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
        member: "Saitou Chiharu",
        slotsSold: [
          "|||x|x",
          "||10|x|x",
          "x|x|||",
          "x|x|7|8|9",
          "|21|17|x|x",
          "||16|x|x"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "4|4|3|4|4",
          "5|3|3|4|5",
          "7|5|4|5|6",
          "4|3|3|4|5",
          "6|4|4|4|5",
          "5|4|3|4|4"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "3|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|2|2|2|2",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "13|12|11|11|10",
          "13|7|5|6|10",
          "15|14|9|13|15",
          "13|9|5|6|10",
          "16|13|9|6|13",
          "17|15|10|14|10"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "|||x|x",
          "x|x|18||",
          "x|x|x|x|x",
          "x|x|||"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "6|5|4|4|4",
          "4|3|3|3|4",
          "6|5|4|5|6",
          "5|4|4|4|",
          "5|4|5|4|5",
          "6|5|3|4|4"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "4|3|3|3|3",
          "3|3|3|3|4",
          "3|2|2|3|3",
          "3|3|2|3|3",
          "4|3|3|3|4",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Wakatsuki Yumi",
        slotsSold: [
          "x|x|x|x|x",
          "3|3|3|3|3",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|",
          "x|x|x|x|"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "x|x|x|8|",
          "x|x|x|5|",
          "|12|x|x|x",
          "16|6|x|x|x",
          "x|x|x|7|17",
          "x|x|x|10|17"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "x|x|x||",
          "x|x|x|4|7",
          "|15|x|x|x",
          "16|6|x|x|x",
          "x|x|x|6|12",
          "x|x|x|15|16"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "x|x|x||",
          "x|x|x|7|",
          "||x|x|x",
          "17|6|x|x|x",
          "x|x|x|9|17",
          "x|x|x||"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x||",
          "x|x|x|8|",
          "||x|x|x",
          "18|9|x|x|x",
          "x|x|x|10|17",
          "x|x|x|15|17"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|3",
          "4|3|3|3|3",
          "3|2|2|2|3",
          "3|3|3|3|3",
          "3|3|3|3|3"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "13|12|7|9|10",
          "|7|4|5|13",
          "|11|7|9|15",
          "10|7|4|4|7",
          "9|6|4|4|5",
          "16|11|7|9|10"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "4|3|3|3|3",
          "4|3|3|3|3",
          "5|4|3|4|4",
          "4|3|3|3|3",
          "5|4|4|3|4",
          "4|4|3|4|3"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "8|6|5|5|5",
          "10|5|5|5|8",
          "10|9|6|6|7",
          "9|5|5|4|6",
          "11|9|5|6|7",
          "11|10|7|5|7"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "6|6|5|5|5",
          "6|5|4|5|6",
          "9|6|5|5|6",
          "6|4|3|4|5",
          "8|5|4|5|6",
          "6|6|4|5|4"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "3|3|2|2|3",
          "2|2|2|2|2",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "x|x|2|2|3",
          "3|3|2|2|3"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "6|5|4|5|5",
          "6|4|4|5|5",
          "5|4|3|4|4",
          "5|4|4|4|5",
          "7|5|5|5|6",
          "8|5|5|4|5"
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
          "3|3|2|3|3",
          "3|3|2|2|3",
          "3|3|3|3|3",
          "3|2|3|2|3",
          "3|3|3|3|3",
          "3|2|2|2|2"
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
          "10|6|4|4|x",
          "7|5|4|4|x",
          "10|7|5|5|x",
          "7|5|4|4|x",
          "10|6|5|5|6",
          "11|7|5|4|x"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "9|7|4|x|x",
          "8|6|4|x|x",
          "x|x|4|5|7",
          "x|x|4|5|6",
          "6|4|4|x|x",
          "9|8|4|x|x"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||7|x|x",
          "|8|5|x|x",
          "x|x|9|10|14",
          "x|x|5|6|7",
          "16|11|5|x|x",
          "17|10|5|x|x"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||7|7|",
          "|7|4|4|x",
          "|9|6|6|x",
          "15|6|4|4|x",
          "16|8|5|5|x",
          "19|16|9|10|x"
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
          "||10|x|x",
          "|9|5|x|x",
          "x|x|10|13|15",
          "x|x|5|6|9",
          "18|15|7|x|x",
          "20|18|10|x|x"
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
      num: 1,
      type: "U.Album",
      title: "\u50D5\u3060\u3051\u306E\u541B",
      release: "2018-01-10"
    },
    lastDraw: 13,
    meetDates: [
      "2018-01-14",
      "2018-02-17",
      "2018-03-25"
    ],
    sbt: [],
    table: [
      {
        member: "Kawago Hina",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "|||x|x"
        ]
      },
      {
        member: "Kawamura Mahiro",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x|12|11"
        ]
      },
      {
        member: "Saitou Chiharu",
        slotsSold: [
          "|||x|x",
          "||||7",
          "|||x|x"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "||||",
          "|||x|x",
          "|||x|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "3|2|2|3|",
          "8|8|8|7|7",
          "x|x|x|x|2"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "||||x"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "|||x|x"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "x|x|x||"
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
        member: "Suzuki Ayane",
        slotsSold: [
          "|4|3||",
          "||||",
          "11|9|9|10|12"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "2|2|2|3|2",
          "4|5|5|6|4",
          "4|5|6|4|3"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "3|3|2|4|4",
          "5|6|7|7|5",
          "9|7|7|8|8"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "|3|3|3|",
          "|8|8|7|5",
          "13|10|9|10|11"
        ]
      }
    ]
  },
  {
    cd: {
      num: 20,
      type: "Single",
      title: "\u30B7\u30F3\u30AF\u30ED\u30CB\u30B7\u30C6\u30A3",
      release: "2018-04-25"
    },
    lastDraw: 14,
    meetDates: [
      "2018-04-30",
      "2018-05-03",
      "2018-06-09",
      "2018-06-17",
      "2018-06-23",
      "2018-07-16"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Ikoma Rina",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Higuchi Hina",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Hori Miona",
      "Shinuchi Mai",
      "Terada Ranze",
      "Oozono Momoko",
      "Kubo Shiori",
      "Yamashita Mizuki",
      "Yoda Yuuki"
    ],
    table: [
      {
        member: "Akimoto Manatsu",
        slotsSold: [
          "2|2|2|2|x",
          "x|x|x|x|x",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2"
        ]
      },
      {
        member: "Ikuta Erika",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "4|4|4|4|4",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Kawago Hina",
        slotsSold: [
          "x|5|x|x|x",
          "x|5|x|x|x",
          "x|x|x|4|x",
          "x|10|x|x|x",
          "x|x||4|x",
          "x|x|14|5|x"
        ]
      },
      {
        member: "Etou Misa",
        slotsSold: [
          "2|2|2|2|x",
          "x|x|x|x|x",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2",
          "x|2|2|2|2"
        ]
      },
      {
        member: "Saito Asuka",
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
        member: "Saitou Chiharu",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "||6|x|x",
          "|||x|x",
          "12|12|9|x|x",
          "12|12|11|x|14"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "4|3|3|3|4",
          "4|4|3|3|4",
          "4|3|2|2|4",
          "9|7|7|10|6",
          "4|3|3|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "|5|5|5|",
          "||||5",
          "6|4|5|5|5",
          "||11||",
          "6|5|4|4|4",
          "7|5|4|4|5"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "|6|x|x|x",
          "x|x|x||",
          "|9|x|x|x",
          "|11|x|x|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "5|4|3|4|4",
          "5|5|5|5|5",
          "4|3|3|3|3",
          "|10|7|10|9",
          "4|3|3|3|4",
          "5|3|3|3|4"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "4|3|3|4|4",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "|x|x|x|x",
          "|x|x|x|x",
          "x|x|8|x|x",
          "|x|x|x|x",
          "x|x|12|x|x",
          "x|x|12|x|x"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "10|5|4|x|x",
          "|||x|x",
          "12|6|4|x|x",
          "13|9|5|x|x"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x|4|6",
          "x|x|x||",
          "x|x|x|5|7",
          "x|x|x|5|7"
        ]
      },
      {
        member: "Sagara Iori",
        slotsSold: [
          "x|x|4|x|x",
          "x|x|3|x|x",
          "x|x|x|9|3",
          "x|x|5|10|x",
          "x||x|9|4",
          "x|14|x|10|4"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x|9|10",
          "x|x|x||",
          "x|x|x|8|11",
          "x|x|x|10|13"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "3|2|2|2|3",
          "3|2|2|2|2",
          "2|2|2|2|2",
          "4|4|3|4|4",
          "3|2|2|2|2",
          "3|2|2|2|2"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "4|3|3|3|4",
          "x|x|x|x|x",
          "3|2|2|2|3",
          "8|6|5|6|7",
          "4|3|2|3|4",
          "4|3|3|3|4"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "5|3|3|3|4",
          "4|3|3|2|3",
          "4|3|3|3|3",
          "5|5|5|5|5",
          "4|3|2|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "|5|4|5|5",
          "||5||5",
          "4|3|2|3|3",
          "|||11|11",
          "5|4|4|4|4",
          "4|4|4|4|4"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "5|4|4|4|4",
          "5|4|3|4|3",
          "4|2|2|3|4",
          "9|9|8|8|5",
          "5|3|3|3|4",
          "5|4|3|3|4"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "3|2|2|3|3",
          "3|2|2|2|3",
          "2|2|2|2|2",
          "4|4|4|4|4",
          "2|2|2|2|2",
          "2|2|2|2|3"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "5|5|4|5|5",
          "5|5|3|4|5",
          "3|3|2|2|3",
          "6|6|5|6|5",
          "4|3|3|3|3",
          "4|3|3|3|3"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "3|3|2|2|2",
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
          "4|3|3|4|4",
          "2|2|2|2|2",
          "2|2|2|2|2"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "|4|5|5|",
          "|5|5|5|5",
          "5|4|3|4|4",
          "|||11|11",
          "6|5|4|4|5",
          "6|4|4|5|5"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "|4|5|5|",
          "||4|5|",
          "6|4|4|4|4",
          "||11||",
          "6|5|4|4|5",
          "6|5|4|4|5"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "|10|6|8|10",
          "||||",
          "|10|7|8|11",
          "13|8|6|8|11"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "||||",
          "||5||",
          "6|5|4|4|6",
          "||||",
          "7|4|4|4|7",
          "8|4|4|5|5"
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
          "|9|5|5|9",
          "||||",
          "|9|6|7|11",
          "13|8|6|8|11"
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
      num: 21,
      type: "Single",
      title: "\u30B8\u30B3\u30C1\u30E5\u30FC\u3067\u884C\u3053\u3046!",
      release: "2018-08-08"
    },
    lastDraw: 21,
    meetDates: [
      "2018-08-12",
      "2018-09-29",
      "2018-10-13",
      "2018-10-21",
      "2018-10-27",
      "2018-12-15"
    ],
    sbt: [
      "Akimoto Manatsu",
      "Ikuta Erika",
      "Inoue Sayuri",
      "Etou Misa",
      "Saito Asuka",
      "Saitou Yuuri",
      "Sakurai Reika",
      "Shiraishi Mai",
      "Hoshino Minami",
      "Takayama Kazumi",
      "Nishino Nanase",
      "Matsumura Sayuri",
      "Wakatsuki Yumi",
      "Hori Miona",
      "Shinuchi Mai",
      "Suzuki Ayane",
      "Iwamoto Renka",
      "Umezawa Minami",
      "Oozono Momoko",
      "Yamashita Mizuki",
      "Yoda Yuuki"
    ],
    table: [
      {
        member: "Ikuta Erika",
        slotsSold: [
          "2|2|2|2|2",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "x|x|x|x|x",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Inoue Sayuri",
        slotsSold: [
          "3|2|2|2|3",
          "x|x|x|x|x",
          "2|2|2|2|3",
          "3|2|2|2|3",
          "2|2|2|2|3",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Kawago Hina",
        slotsSold: [
          "||||",
          "||||",
          "|||x|x",
          "|||x|x",
          "x|x|15|15|15",
          "18|15|7|x|x"
        ]
      },
      {
        member: "Saito Asuka",
        slotsSold: [
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Saitou Yuuri",
        slotsSold: [
          "3|3|3|3|3",
          "7|6|6|7|4",
          "3|3|3|3|4",
          "4|3|3|3|4",
          "3|3|3|3|3",
          "6|6|6|6|6"
        ]
      },
      {
        member: "Sakurai Reika",
        slotsSold: [
          "|2|2|2|",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Takayama Kazumi",
        slotsSold: [
          "2|2|2|x|x",
          "x|x|x|x|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "2|2|2|2|x",
          "x|x|x|x|x"
        ]
      },
      {
        member: "Nakada Kana",
        slotsSold: [
          "5|5|4|5|5",
          "x|x|x|x|x",
          "6|5|4|4|5",
          "8|5|5|5|7",
          "6|4|4|4|5",
          "7|6|6|5|6"
        ]
      },
      {
        member: "Noujou Ami",
        slotsSold: [
          "|||x|x",
          "|||x|x",
          "||||",
          "||||",
          "x|x|13|14|13",
          "15|13|9|x|x"
        ]
      },
      {
        member: "Higuchi Hina",
        slotsSold: [
          "4|3|3|3|3",
          "8|7|7|6|5",
          "4|3|3|3|3",
          "4|3|3|3|4",
          "4|3|3|3|3",
          "6|6|6|6|5"
        ]
      },
      {
        member: "Hoshino Minami",
        slotsSold: [
          "2|2|2|2|2",
          "4|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Wada Maaya",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||",
          "x|x|x||"
        ]
      },
      {
        member: "Itou Karin",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||15||",
          "|18|12|18|",
          "|17|10|12|14"
        ]
      },
      {
        member: "Itou Jyunna",
        slotsSold: [
          "|5|4|x|x",
          "|||x|x",
          "11|7|5|x|x",
          "11|7|5|x|x",
          "10|6|5|5|6",
          "10|9|9|8|8"
        ]
      },
      {
        member: "Sasaki Kotoko",
        slotsSold: [
          "x|x|x||",
          "x|x|x||",
          "x|x|x|6|8",
          "x|x|x|8|15",
          "x|x|x|6|10",
          "x|x|x|8|9"
        ]
      },
      {
        member: "Shinuchi Mai",
        slotsSold: [
          "3|2|2|2|2",
          "4|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|3",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Suzuki Ayane",
        slotsSold: [
          "3|3|2|3|3",
          "5|5|5|5|4",
          "3|3|2|2|3",
          "4|3|2|3|3",
          "3|3|2|3|3",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Terada Ranze",
        slotsSold: [
          "4|3|3|3|3",
          "x|x|x|x|x",
          "4|3|3|3|3",
          "4|3|3|3|3",
          "4|3|2|3|3",
          "6|5|5|5|5"
        ]
      },
      {
        member: "Hori Miyona",
        slotsSold: [
          "2|2|2|2|2",
          "3|3|2|2|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Yamazaki Rena",
        slotsSold: [
          "5|5|4|4|4",
          "5|7|7|6|4",
          "7|6|4|6|7",
          "7|5|5|6|5",
          "4|3|3|4|4",
          "7|6|6|6|6"
        ]
      },
      {
        member: "Watanabe Miria",
        slotsSold: [
          "4|4|4|3|3",
          "x|x|x|x|x",
          "4|3|3|4|4",
          "5|4|3|3|4",
          "3|3|3|3|3",
          "6|6|5|5|5"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "3|2|2|2|3",
          "6|5|5|4|4",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "3|2|2|2|3",
          "5|5|5|6|6"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|3|3|3",
          "8|7|6|6|4",
          "4|3|2|3|3",
          "4|3|3|3|4",
          "3|3|3|3|3",
          "6|6|6|6|6"
        ]
      },
      {
        member: "Umezawa Minami",
        slotsSold: [
          "x|x|x|x|x",
          "x|x|x|x|x",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Oozono Momoko",
        slotsSold: [
          "2|2|2|2|2",
          "3|3|3|3|3",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "2|2|2|2|2",
          "5|5|5|5|5"
        ]
      },
      {
        member: "Sakaguchi Tamami",
        slotsSold: [
          "5|4|4|4|4",
          "||||",
          "6|5|4|5|6",
          "6|5|4|4|6",
          "5|4|3|4|4",
          "7|7|6|6|7"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "4|3|3|4|3",
          "10|10|7|8|9",
          "5|3|3|3|4",
          "5|4|3|4|5",
          "4|3|3|3|3",
          "6|6|6|6|5"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "||14||",
          "|14|7|13|",
          "|14|9|11|16",
          "17|13|10|10|11"
        ]
      },
      {
        member: "Mukai Hazuki",
        slotsSold: [
          "|5|5|5|5",
          "||||",
          "7|5|4|4|7",
          "8|5|5|6|9",
          "7|5|4|5|6",
          "9|7|7|7|7"
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
          "5|5|5|5|5"
        ]
      },
      {
        member: "Yoshida Ayano Cristi",
        slotsSold: [
          "||||",
          "||||",
          "|12|6|8|",
          "|14|9|9|",
          "|12|7|8|10",
          "14|9|8|8|11"
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
          "5|5|5|5|5"
        ]
      }
    ]
  },
  {
    cd: {
      num: 22,
      type: "Single",
      title: "\u5E30\u308A\u9053\u306F\u9060\u56DE\u308A\u3057\u305F\u304F\u306A\u308B",
      release: "2018-11-14"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
          "x|x|x|x|x",
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
      title: "\u4ECA\u304C\u601D\u3044\u51FA\u306B\u306A\u308B\u307E\u3067",
      release: "2019-04-17"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "Sing Out!",
      release: "2019-05-29"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "\u591C\u660E\u3051\u307E\u3067\u5F37\u304C\u3089\u306A\u304F\u3066\u3082\u3044\u3044",
      release: "2019-09-04"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "\u3057\u3042\u308F\u305B\u306E\u4FDD\u8B77\u8272",
      release: "2020-03-25"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "\u50D5\u306F\u50D5\u3092\u597D\u304D\u306B\u306A\u308B",
      release: "2021-01-27"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "\u3054\u3081\u3093\u306DFingers crossed",
      release: "2021-06-09"
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
        member: "Itou Jyunna",
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
        member: "Itou Riria",
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
      title: "\u541B\u306B\u53F1\u3089\u308C\u305F",
      release: "2021-09-22"
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
        member: "Itou Riria",
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
      title: "Time flies",
      release: "2021-12-15"
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
        member: "Itou Riria",
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
      title: "Actually...",
      release: "2022-03-23"
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
        member: "Itou Riria",
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
      title: "\u597D\u304D\u3068\u3044\u3046\u306E\u306F\u30ED\u30C3\u30AF\u3060\u305C!",
      release: "2022-08-31"
    },
    lastDraw: 10,
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
          "7|6|4|3|2"
        ]
      },
      {
        member: "Itou Riria",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "||7||5",
          "||||",
          "||||"
        ]
      },
      {
        member: "Iwamoto Renka",
        slotsSold: [
          "3|3|3|3|3",
          "5|5|4|4|4",
          "6|5|4|5|4",
          "6|4|4|4|4",
          "5|4|4|4|4",
          "4|4|3|3|2"
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
          "4|3|3|4|",
          "||||",
          "||||",
          "||9||",
          "5|5|4|5|6",
          "||||8"
        ]
      },
      {
        member: "Sato Kaede",
        slotsSold: [
          "2|3|3|3|3",
          "||6||",
          "||||",
          "||||",
          "||||",
          "||10|10|5"
        ]
      },
      {
        member: "Nakamura Reno",
        slotsSold: [
          "||||",
          "||||",
          "|7|5||",
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
          "4|4|4|4|4",
          "3|4|4|4|4",
          "3|3|3|4|4",
          "3|3|3|3|3",
          "3|3|3|3|2"
        ]
      },
      {
        member: "Kanagawa Saya",
        slotsSold: [
          "2|2|2|2|2",
          "4|4|4|4|3",
          "4|4|4|4|4",
          "4|4|4|4|3",
          "3|4|3|4|3",
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
          "||4||",
          "||||",
          "||||",
          "||8||",
          "||||",
          "||10||"
        ]
      },
      {
        member: "Sato Rika",
        slotsSold: [
          "3|4|3|4|4",
          "x|x|x|x|x",
          "x|x|x|x|x",
          "5|5|5|6|6",
          "7|8|7|8|8",
          "7|8|7|7|5"
        ]
      },
      {
        member: "Shibata Yuna",
        slotsSold: [
          "3|2|2|2|3",
          "5|4|4|4|4",
          "5|4|4|4|4",
          "4|4|3|4|3",
          "4|4|3|3|4",
          "3|3|2|2|2"
        ]
      },
      {
        member: "Seimiya Rei",
        slotsSold: [
          "3|3|3|4|4",
          "||6||",
          "||||",
          "||||",
          "||||",
          "9|9|5|6|4"
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
          "3|4|3|4|",
          "6|6|5||",
          "7|7|6||",
          "8|7|6|7|8",
          "7|7|4|5|7",
          "5|5|4|4|4"
        ]
      },
      {
        member: "Hayashi Runa",
        slotsSold: [
          "||4||4",
          "||||",
          "||||7",
          "8|7|7|7|6",
          "|10|10|10|10",
          "||10|10|9"
        ]
      },
      {
        member: "Matsuo Miyu",
        slotsSold: [
          "||||",
          "||||",
          "||||",
          "|||7|",
          "||||",
          "10|9|3|6|5"
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
          "4|4|4|4|3",
          "4|4|4|4|3",
          "4|4|3|3|3",
          "3|3|3|3|2"
        ]
      },
      {
        member: "Ioki Mao",
        slotsSold: [
          "x|2|2|2|3",
          "x|3|3|3|4",
          "x|3|3|4|4",
          "x|3|3|3|4",
          "x|2|3|3|3",
          "x|2|2|2|3"
        ]
      },
      {
        member: "Ikeda Teresa",
        slotsSold: [
          "x|2|2|2|2",
          "x|3|2|3|4",
          "x|3|3|3|4",
          "x|3|3|3|4",
          "x|3|3|3|4",
          "x|2|3|3|3"
        ]
      },
      {
        member: "Ichinose Miku",
        slotsSold: [
          "x|2|2|2|3",
          "x|3|3|3|3",
          "x|2|3|3|4",
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
          "x|4|5|5|",
          "x|6|6|6|7",
          "x|4|5|6|6",
          "x|4|4|6|6",
          "x|3|4|4|4"
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
          "x|2|2|2|4",
          "x|3|3|4|4",
          "x|2|2|3|4",
          "x|2|2|3|4",
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
          "x|3|3|4|4",
          "x|2|3|4|4",
          "x|3|3|3|4",
          "x|3|2|3|3"
        ]
      },
      {
        member: "Nakanishi Aruno",
        slotsSold: [
          "x|2|2|3|3",
          "x|4|4|6|6",
          "x|6|6|7|7",
          "x|6|6|7|7",
          "x|5|6|7|7",
          "x|4|4|6|4"
        ]
      }
    ]
  }
];
const SelectOneCD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedCDData } = $$props;
  let { exclude = [{ value: -1 }] } = $$props;
  let cdlist = data.map((x) => cdData(x.cd)).reverse();
  let temp = differenceWith(cdlist, exclude, isEqual);
  let indices = temp.map((x) => findIndex(cdlist, (y) => x.value === y.value));
  let selectables = zip(temp, indices);
  let selected = selectables[0][1];
  selectedCDData = data[data.length - 1 - selected];
  if ($$props.selectedCDData === void 0 && $$bindings.selectedCDData && selectedCDData !== void 0)
    $$bindings.selectedCDData(selectedCDData);
  if ($$props.exclude === void 0 && $$bindings.exclude && exclude !== void 0)
    $$bindings.exclude(exclude);
  selectedCDData = data[data.length - 1 - selected];
  return `<select id="${"cdSelect"}" size="${"1"}" name="${"cd"}">${each(selectables, (cdidx) => {
    return `<option${add_attribute("value", cdidx[1], 0)}>${escape(cdidx[0].display)}</option>`;
  })}</select>`;
});
export {
  SelectOneCD as S,
  data as d
};