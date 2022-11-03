import React from 'react'

const Contact = () => {
    return <div className='contact'>
        <main>
            <h1>Contact US</h1>
            <form>
                <div>
                    <label>Name </label>
                    <input type="text" required placeholder='Raju Bhai'/>
                </div>
                <div>
                    <label>Email </label>
                    <input type="email" required placeholder='rajubhai@chitfund.com'/>
                </div>
                <div>
                    <label>Message </label>
                    <input type="text" required placeholder='Only Cash No Check...'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
}

export default Contact