import type { PropsWithChildren } from "react";
import { Badge, Card } from "@ui-platform/components";

export interface StatCardProps {
  readonly label: string;
  readonly value: string;
  readonly delta?: string;
  readonly tone?: "success" | "warning" | "danger" | "info";
}

export function StatCard({ label, value, delta, tone = "success" }: StatCardProps) {
  return (
    <Card>
      <div className="ui-stat">
        <p className="ui-stat__label">{label}</p>
        <p className="ui-stat__value">{value}</p>
        {delta ? (
          <p className="ui-stat__delta">
            <Badge tone={tone}>{delta}</Badge>
          </p>
        ) : null}
      </div>
    </Card>
  );
}

export interface EmptyStateProps extends PropsWithChildren {
  readonly title: string;
  readonly description?: string;
}

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <Card>
      <div className="ui-stat">
        <p className="ui-stat__value">{title}</p>
        {description ? <p className="ui-stat__label">{description}</p> : null}
        {children}
      </div>
    </Card>
  );
}
