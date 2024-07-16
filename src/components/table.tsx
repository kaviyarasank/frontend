import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import ViewIcon from "@/assets/view.svg";
import Image from 'next/image';
import ModalPopUp from './modalPopUp';
import { Tooltip } from '@mui/material';



const Table = ({ products }: any) => {
    const [data, _setData] = useState([])

    const [open, setOpen] = useState(false);
    const [id, setId] = useState("")

    useEffect(()=>{
        _setData(products)
    },[products])

    const handleClickOpen = (info:any) => {
        setId(info?.original?.id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const columnHelper = createColumnHelper<any>()

    const columns = [
        columnHelper.accessor('id', {
            header:"Id",
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('title', {
            header: 'Title',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('description', {
            header: 'Description',
            footer: info => info.column.id,
            cell: ({ cell, row }) => {
                
                return row?.original?.description && row?.original?.description?.length > 10 ? row?.original?.description?.slice(0,10)+"..." :row?.original?.description
              },
        }),
        columnHelper.accessor('category', {
            header: 'Category',
            cell: info => info.renderValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('price', {
            header: 'Price',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('discountPercentage', {
            header: 'Discount %',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('rating', {
            header: 'Rating',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('stock', {
            header: 'Stock',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('tags', {
            header: 'Tags',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('brand', {
            header: 'Brand',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('Action', {
            cell: ({ cell, row }) => {
                return <button className='' onClick={()=>handleClickOpen(row)}><Tooltip title="View Reviews"><Image src={ViewIcon} alt='ViewIcon' /></Tooltip></button>
              },
            footer: info => info.column.id,
        }),
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })



    return (
        <div className='mt-3'>
            <table>
                <thead>
                    {table?.getHeaderGroups()?.length > 0 ? table?.getHeaderGroups()?.map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup?.headers?.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    )):[]}
                </thead>
                <tbody>
                    {table?.getRowModel()?.rows?.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-4" />

            <ModalPopUp
                open={open}
                handleClose={handleClose}
                id={id}
            />
        </div>
    )
}

export default Table;