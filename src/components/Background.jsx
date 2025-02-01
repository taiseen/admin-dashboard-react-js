const Background = () => {

    return (
        <div className='fixed inset-0 z-0'>
            <div className='absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80' />
            <div className='absolute inset-0 backdrop-blur-xs' />
        </div>
    )
}

export default Background