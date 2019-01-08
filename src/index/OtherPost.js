import React, { Component } from 'react';
import './OtherPost.css'
class OtherPost extends Component {
    render(){
        return (
            <section className='container-fluid py-4'>
                <h3 className='text-center p-2'>Other Posts</h3>
                <article className='py-2' style={{borderBottom: '0.5px solid #D6DDDB'}}>
                    <h5 className='my-0'>Psoriasis</h5>
                    <p className='my-0 text-dark' style={{fontSize: '0.8rem'}}>
                        As decaffeinated, galão crema brewed ..
                    </p>
                </article>
                <article className='py-2'style={{borderBottom: '0.5px solid #D6DDDB'}}>
                    <h5 className='my-0'>Recurring Snores</h5>
                    <p className='my-0 text-dark' style={{fontSize: '0.8rem'}}>
                        As decaffeinated, galão crema brewed ..
                    </p>
                </article>
                <article className='py-2'style={{borderBottom: '0.5px solid #D6DDDB'}}>
                    <h5 className='my-0'>Eleven Syndrome</h5>
                    <p className='my-0 text-dark' style={{fontSize: '0.8rem'}}>
                        As decaffeinated, galão crema brewed ..
                    </p>
                </article>
                <article className='py-2'style={{borderBottom: '0.5px solid #D6DDDB'}}>
                    <h5 className='my-0'>CKD Analysis</h5>
                    <p className='my-0 text-dark' style={{fontSize: '0.8rem'}}>
                        As decaffeinated, galão crema brewed ..
                    </p>
                </article>
            </section >
        )
    }
}

export default OtherPost;