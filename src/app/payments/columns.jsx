"use client"
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

export const payments = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
]

export const columns = [
  {
    accessorKey: "Name",
    header: () => <div className="text-left">Name</div>,
  },
  {
    accessorKey: "Last activity",
    header: "Last activity",
  },
  {
    accessorKey: "Projects",
    header: "Projects",
  },
]