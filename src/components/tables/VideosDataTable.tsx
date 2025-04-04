"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { toast } from "sonner"
import { Trash2, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UploadButton from "@/components/buttons/UploadButton"

import { deleteVideo } from "@/actions"
import type { Video } from "@/types"


type VideosDataTableProps = {
  data: Video[]
}

export default function VideosDataTable ({ data }: VideosDataTableProps) {

  const router = useRouter ();

  const columns = [
    {
      accessorKey: "name",
      header: "Video Name",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: { original: { id: number; } } }) => {
        return (
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => handleChat(row.original.id)}>
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleDelete(row.original.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )
      },
    },
  ]

  const handleDelete = async (id: number) => {
    
    try {

      const res = await deleteVideo (id);

      toast.success ("Video deleted successfully");

      console.log ("res", res);
      
    } catch {

      toast.error("Something Went Wrong", {
        description: "Video deletion failed"
      });

    }

  }

  const handleChat = (id: number) => {
    router.push (`/dashboard/video/${id}`)
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {
                  row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center py-8">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-lg">No Videos Here</span>
                  <UploadButton />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}