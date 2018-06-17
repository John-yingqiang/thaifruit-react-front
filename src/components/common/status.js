export const success = (data)=>(
    {
        code:200,
        status:'success',
        data: data
    }
)

export const fail = (code, message)=>(
    {
        code:code,
        message:message
    }
)
