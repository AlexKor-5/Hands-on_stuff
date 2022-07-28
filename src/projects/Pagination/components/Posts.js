import React from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const Posts = ({ posts = [], loading }) => {
    if (loading) return <h3>Loading...</h3>
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <List>
                    {posts.map((elem) => {
                        return (
                            <ListItem
                                key={elem.id}
                                style={{ border: '2px solid grey', marginBottom: '.5em' }}
                            >
                                <ListItemText primary={elem.id + '  ' + elem.title} />
                            </ListItem>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    )
}
Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
