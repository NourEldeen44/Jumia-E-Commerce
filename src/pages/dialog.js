import React from 'react'

function Dialog({ show, confirm, cancel, title, description }) {
    if (!show) {
        return <>
        </>
    }

    return (

        <>
            <div style={{
                width: '550px',
                maxWidth: '100%',
                margin: '0 auto',
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                zIndex: '999',
                backgroundColor: '#eee',
                padding: '10px 20px 40px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className='dialog' >
                    <div className='dialog__content'>
                        <h2 className='dialog__title' style={{ paddingLeft: '10px' }}> {title} </h2>
                        <p style={{ paddingLeft: '10px' }}> {description} </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px' }}>
                        <button style={{ backgroundColor: 'white', color: '#f68b1e', border: 'white', padding: '7px', borderRadius: '3px', width: '200px', height: '48px' }} onClick={() => {
                            cancel();
                        }}> Cancel </button>
                        <button style={{ backgroundColor: '#f68b1e', color: 'white', border: 'white', padding: '7px', borderRadius: '3px', width: '200px', height: '48px' }} onClick={() => {
                            confirm();
                        }} > Yes, Sign Out! </button>
                    </div>


                </div>



            </div>



        </>


    )
}
export default Dialog;