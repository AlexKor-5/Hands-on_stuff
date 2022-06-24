import React from 'react'
import { useFetch } from '../../hocs/useFetch'
import PropTypes from 'prop-types'

export const Fetch = ({ url, renderSuccess, renderLoading, renderError }) => {
    const { data, loading, error } = useFetch(url)

    console.log(error)

    if (loading)
        return typeof renderLoading === 'function'
            ? renderLoading(loading)
            : renderLoading
    if (error)
        return typeof renderError === 'function' ? renderError(error) : renderError
    if (data)
        return typeof renderSuccess === 'function' ? renderSuccess(data) : renderSuccess
}
Fetch.propTypes = {
    url: PropTypes.string.isRequired,
    renderSuccess: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.func.isRequired,
    ]),
    renderLoading: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.func.isRequired,
    ]),
    renderError: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.func.isRequired,
    ]),
}
