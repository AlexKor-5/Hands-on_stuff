import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

export const PaginationBar = ({ postsPerPage, totalPosts, paginate }) => {
    const [page, setPage] = React.useState(1)
    const handleChange = (event, value) => {
        setPage(value)
        paginate(value)
    }
    return (
        <Stack spacing={2}>
            <Pagination
                style={{ backgroundColor: 'white', marginTop: '1em' }}
                count={Math.ceil(totalPosts / postsPerPage)}
                page={page}
                onChange={handleChange}
            />
        </Stack>
    )
}
PaginationBar.propTypes = {
    postsPerPage: PropTypes.number.isRequired,
    totalPosts: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
}
