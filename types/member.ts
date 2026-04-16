export type MemberCompany = {
  name: string;
  initials: string;
  representative: string;
  type: "company" | "startup" | "ngo" | "consortium";
  classification: "japan" | "mongolia";
  members?: number;
  memberType?: "partner" | "observer";
  link?: string;
};