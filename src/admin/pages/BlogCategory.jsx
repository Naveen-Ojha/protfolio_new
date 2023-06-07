import React from 'react'
import { filter } from 'lodash';
import { useEffect, useState } from 'react';
// @mui
import {
    Card,
    Table,
    Stack,
    Paper,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
} from '@mui/material';
// components
import Label from '../component/label';
import Iconify from '../component/iconify';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import { apiEndPoint } from "../../enviroment";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    { id: 'category', label: 'Category', alignRight: false },
    { id: 'createdAt', label: 'Created Date', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: 'Action', label: 'Action', alignRight: false },
    { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.category.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}
export default function BlogCategory() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [USERLIST, setUSERLIST] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [response, setResponse] = useState("");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const navigate = useNavigate()

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/category`,
        };

        axios.request(config)
            .then((response) => {
                setUSERLIST(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = USERLIST?.map((n) => n.category);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, category) => {
        const selectedIndex = selected.indexOf(category);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, category);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST?.length) : 0;

    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredUsers.length && !!filterName;

    return (
        <>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog Category
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                        <Link className='text-white' to="/admin/add-blog-category"> New User</Link>
                    </Button>
                </Stack>

                <Card>
                    <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />


                    <TableContainer sx={{ minWidth: 800 }}>
                        <Table>
                            <UserListHead
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={USERLIST?.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />
                            <TableBody>
                                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    const { _id, category, status, createdAt } = row;
                                    const selectedUser = selected.indexOf(category) !== -1;

                                    return (
                                        <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, category)} />
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                <Typography variant="subtitle2" noWrap>
                                                    {category}
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Label>{moment(createdAt).format("YYYY-MM-DD")}</Label>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Label align="left">{status ? <span className='cursor-pointer'>Activate</span> : <span className='cursor-pointer'>DeActivate</span>}</Label>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Label align="left">
                                                    <Link to={_id}>View</Link>
                                                </Label>
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>

                            {isNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                            <Paper
                                                sx={{
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <Typography variant="h6" paragraph>
                                                    Not found
                                                </Typography>

                                                <Typography variant="body2">
                                                    No results found for &nbsp;
                                                    <strong>&quot;{filterName}&quot;</strong>.
                                                    <br /> Try checking for typos or using complete words.
                                                </Typography>
                                            </Paper>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>


                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={USERLIST?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </>
    )
}
