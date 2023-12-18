import React from 'react'
import tableData from '../utils/TableData'
import { StatusOfflineIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";

const TableItem = () => {
    return (
        <Card className='mt-4'>
            <Title>Company Employees Table</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Text>{item.Role}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.departement}</Text>
                            </TableCell>
                            <TableCell>
                                {item.status === "active" ?
                                    <Badge color="emerald" icon={StatusOnlineIcon}>
                                        {item.status}
                                    </Badge>
                                    :
                                    <Badge color="red" icon={StatusOfflineIcon}>
                                        {item.status}
                                    </Badge>
                                }

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default TableItem