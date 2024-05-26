import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className='w-100 text-center py-3' style={{ backgroundColor: '#323b4e', color: '#FFFFFF' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p px-ms-4>
                            <Link to="#home" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Home</Link>|
                            <Link to="#sports" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Sports</Link>|
                            <Link to="#about" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>About</Link>|
                            <Link to="#advertising" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Advertising</Link>|
                            <Link to="#support" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Support</Link>|
                            <Link to="#privacy" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</Link>
                        </p>
                        <p>© Pitch Hero Ltd 2008-2022</p>
                        <p className='text-md-lg' >Pitch Hero Ltd registered in England | WF3 1DR | Company number - 06361033</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer