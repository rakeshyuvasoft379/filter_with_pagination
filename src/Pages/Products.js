import { useEffect, useState } from "react"
import { instance } from "../Services/Index"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import usePagination from "@mui/material/usePagination/usePagination";
import { TextField } from "@mui/material";
import "./Products.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const Products = () => {

    const [todoList, setTodoList] = useState([])

    //pagination states
    const item_per_page = 10;
    const [page, setPage] = useState(1)

    //search states
    const [title, setTitle] = useState(null);
    const [id, setId] = useState(0);
    const [userId, setUserId] = useState(0);

    const getTodoData = () => {
        instance.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => setTodoList(response.data))
    }

    useEffect(() => {
        getTodoData()
    }, [todoList])

    const handleChange = (e, newPage) => {
        setPage(newPage)
    }

    //search by Title
    const byTitle = (item, title) => {
        if (title) {
            return item.title.toLowerCase().includes(title.toLowerCase());
        }
        else return item;
    };

    //search by Id  
    const byId = (item, id) => {
        if (id) {
            return item.id == id;
        }
        else return item;
    }

    //search by UserId
    const byUserId = (item, userId) => {
        if (userId) {
            return item.userId == userId
        }
        else return item;
    }

    const filteredList = (userId, id, title) => {
        return todoList
            .filter(item => byTitle(item, title))
            .filter(item => byId(item, id))
            .filter(item => byUserId(item, userId))
    };


    return (
        <>
            <TextField label="userId" className="inputField" onChange={(e) => setUserId(e.target.value)} />
            <TextField label="id" className="inputField" onChange={(e) => setId(e.target.value)} />
            <TextField label="Title" className="inputField" onChange={(e) => setTitle(e.target.value)} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>userId</StyledTableCell>
                            <StyledTableCell align="right">ID</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredList(userId, id, title).slice((page - 1) * item_per_page, (page - 1) * item_per_page + item_per_page).map((item, index) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row">
                                    {item.userId}
                                </StyledTableCell>
                                <StyledTableCell align="right">{item.id}</StyledTableCell>
                                <StyledTableCell align="right">{item.title}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={item_per_page}
                page={page}
                onChange={handleChange} />
        </>
    )
}