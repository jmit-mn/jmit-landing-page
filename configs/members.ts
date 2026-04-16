import { type MemberCompany } from "../types/member";

export const members: Record<string, MemberCompany> = {
  "gotanda-valley": {
    name: "Gotanda Valley",
    initials: "GV",
    type: "consortium",
    classification: "japan",
    members: 140,
    representative: "Yoshitaka.Mori",
  },
  "gertech-inc": {
    name: "Gertech Inc",
    initials: "GI",
    type: "company",
    classification: "mongolia",
    representative: "Khatanbold.B · Ganmurun.M",
    link: "https://www.gertech.jp/"
  },
  "dx-mongolia-llc": {
    name: "DX Mongolia LLC",
    initials: "DX",
    type: "company",
    classification: "mongolia",
    representative: "Tuguldur.B",
    link: "https://dxmongolia.org/"
  },
  "tab-solution-co-ltd": {
    name: "Tab Solution Co.,Ltd",
    initials: "TS",
    type: "company",
    classification: "mongolia",
    representative: "Tuvshinbat.E",
    link: "https://tabsolution.jp"
  },
  "tab-systems-mongolia-llc": {
    name: "Tab Systems Mongolia LLC",
    initials: "TM",
    type: "company",
    classification: "mongolia",
    representative: "Sura.Kh",
    link: "https://tabsystems.tech/"
  },
  "onedayjob-llc": {
    name: "Onedayjob LLC",
    initials: "OJ",
    type: "company",
    classification: "mongolia",
    representative: "Darkhan.A",
    memberType: "observer",
    link: "https://cu.onehr.mn"
  },
  "jugamo": {
    name: "JUGAMO",
    initials: "JG",
    type: "ngo",
    classification: "mongolia",
    representative: "Sugar.Z",
    link: "https://jugamo.mn"
  },
} as const satisfies Record<string, MemberCompany>

export const memberCompanies = Object.values(members);