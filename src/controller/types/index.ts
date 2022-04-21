/**
 * Basic JSON response for Controllers
 */

export type BasicResponse = {
    message: string
}

/**
 *  Date JSON response for Controllers 
 */

export type DateResponse = {
    message: string,
    date: Date
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}

