import * as React from "react";
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as RechartsBarChart, Bar } from "recharts";

export interface ChartPoint { label: string; value: number; }
export function ChartContainer({ children, label }: { children: React.ReactNode; label: string }) { return <div className="ui-chart" role="img" aria-label={label}>{children}</div>; }
export function LineChart({ data, label = "Line chart" }: { data: readonly ChartPoint[]; label?: string }) { return <ChartContainer label={label}><ResponsiveContainer width="100%" height="100%"><RechartsLineChart data={data}><CartesianGrid stroke="var(--ui-chart-grid)" /><XAxis dataKey="label" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="var(--ui-chart-series-1)" strokeWidth={2} dot={false} /></RechartsLineChart></ResponsiveContainer></ChartContainer>; }
export function BarChart({ data, label = "Bar chart" }: { data: readonly ChartPoint[]; label?: string }) { return <ChartContainer label={label}><ResponsiveContainer width="100%" height="100%"><RechartsBarChart data={data}><CartesianGrid stroke="var(--ui-chart-grid)" /><XAxis dataKey="label" /><YAxis /><Tooltip /><Bar dataKey="value" fill="var(--ui-chart-series-2)" radius={[4,4,0,0]} /></RechartsBarChart></ResponsiveContainer></ChartContainer>; }
