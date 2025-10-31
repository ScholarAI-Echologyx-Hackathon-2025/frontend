// @ts-nocheck
"use client"

import { memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Clock, Star } from "lucide-react"

const DASHBOARD_STATS = [
  {
    title: "Total Documents",
    value: "24",
    change: "+2 from last week",
    icon: FileText,
  },
  {
    title: "Reading Sessions",
    value: "12",
    change: "+3 from last week",
    icon: BookOpen,
  },
  {
    title: "Reading Time",
    value: "5.2h",
    change: "+1.1h from last week",
    icon: Clock,
  },
  {
    title: "Saved Highlights",
    value: "37",
    change: "+5 from last week",
    icon: Star,
  },
] as const

const RECENT_DOCUMENTS = [
  "Research Paper.pdf",
  "Meeting Notes.md",
  "Project Proposal.pdf",
  "Literature Review.md",
] as const

export const DashboardContent = memo(function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {RECENT_DOCUMENTS.map((doc) => (
                <div key={doc} className="flex items-center gap-2 rounded-md p-2 hover:bg-accent" title={doc}>
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Reading Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="h-[200px] flex items-center justify-center bg-muted rounded-md"
              role="img"
              aria-label="Reading activity chart placeholder"
            >
              Activity Chart Placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
})