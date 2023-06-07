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
import SimpleSnackbar from '../../common/Snackbar'
import { Link, useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'number', label: 'Number', alignRight: false },
    { id: 'email', label: 'Email', alignRight: false },
    { id: 'isActive', label: 'Active', alignRight: false },
    { id: 'DOB', label: 'DOB', alignRight: false },
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
        return filter(array, (_user) => _user.astrologerName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function AstroPage() {
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
            url: `${apiEndPoint}admin/astro`,
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
            const newSelecteds = USERLIST?.map((n) => n.astrologerName);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, astrologerName) => {
        const selectedIndex = selected.indexOf(astrologerName);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, astrologerName);
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

    const activateProfile = (_id) => {
        let data = JSON.stringify({
            "isActive": 0
        });

        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}admin/astro/update?id=${_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setResponse(response.data);
                navigate(0)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deActivateProfile = (_id) => {
        let data = JSON.stringify({
            "isActive": 1
        });

        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}admin/astro/update?id=${_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setResponse(response.data);
                navigate(0)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <SimpleSnackbar res={response.message} />
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Astro
                    </Typography>
                    {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New User
                    </Button> */}
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
                                    const { _id, astrologerName, profileImage, isActive, email, DOB, contactNumber } = row;
                                    const selectedUser = selected.indexOf(astrologerName) !== -1;

                                    return (
                                        <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, astrologerName)} />
                                            </TableCell>

                                            <TableCell component="th" scope="row" padding="none">
                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                    <Avatar alt={astrologerName} src={profileImage} />
                                                    <Typography variant="subtitle2" noWrap>
                                                        {astrologerName}
                                                    </Typography>
                                                </Stack>
                                            </TableCell>

                                            <TableCell align="left">{contactNumber}</TableCell>

                                            <TableCell align="left">{email}</TableCell>

                                            <TableCell align="left">
                                                <Label align="left">{isActive ? <span onClick={() => activateProfile(_id)} className='cursor-pointer'>Activate</span> : <span className='cursor-pointer' onClick={() => deActivateProfile(_id)}>DeActivate</span>}</Label>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Label>{DOB}</Label>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Label align="left">
                                                    <Link to={`/admin/astro-details/${_id}`}>View</Link>
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
    );
}
