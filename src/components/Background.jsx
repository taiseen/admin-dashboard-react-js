const Background = () => {

    return (
        <div className='fixed inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80' />
            <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
    )
}

export default Background