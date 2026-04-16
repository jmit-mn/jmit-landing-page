import { MemberCompany } from "../types/member";

export const members: Record<string, MemberCompany> = {
  "gotanda-valley": {
    name: "Gotanda Valley",
    initials: "GV",
    type: "consortium",
    classification: "japan",
    members: 140,
    representative: "Mori Yoshitaka",
  },
  "gertech-inc": {
    name: "Gertech Inc",
    initials: "GI",
    type: "company",
    classification: "mongolia",
    representative: "B.Khatanbold · M.Ganmurun",
  },
  "dx-mongolia-llc": {
    name: "DX Mongolia LLC",
    initials: "DX",
    type: "company",
    classification: "mongolia",
    representative: "B.Tuguldur",
  },
  "tab-solution-co-ltd": {
    name: "Tab Solution Co.,Ltd",
    initials: "TS",
    type: "company",
    classification: "mongolia",
    representative: "E.Tuvshinbat",
  },
  "tab-systems-mongolia-llc": {
    name: "Tab Systems Mongolia LLC",
    initials: "TM",
    type: "company",
    classification: "mongolia",
    representative: "Kh.Sugarragchaa",
  },
  "onedayjob-llc": {
    name: "Onedayjob LLC",
    initials: "OJ",
    type: "company",
    classification: "mongolia",
    representative: "A.Darkhan",
    memberType: "observer"
  },
  "jugamo": {
    name: "JUGAMO",
    initials: "JG",
    type: "ngo",
    classification: "mongolia",
    representative: "Z.Sugar",
  },
} as const satisfies Record<string, MemberCompany>

export const memberCompanies = Object.values(members);