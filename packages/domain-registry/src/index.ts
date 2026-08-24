export const domains = [
  "dashboard", "crm", "finance", "billing", "payment", "omni-chat", "oss", "nms", "gis", "inventory", "erp", "hrm", "cms", "log", "monitoring",
] as const;

export type DomainId = (typeof domains)[number];

export interface DomainRegistration {
  readonly id: DomainId;
  readonly enabled: boolean;
  readonly entry?: string;
}

export const registerDomains = (enabled: readonly DomainId[]): readonly DomainRegistration[] =>
  domains.map((id) => ({ id, enabled: enabled.includes(id) }));
