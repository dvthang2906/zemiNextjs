'use client'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import css from '@/styles/header.module.css';






const HeaderExample = () => {

    return (
        <Navbar expand="lg" className={css['bg-body-tertiary']}>
            <Container>
                <Navbar.Brand >
                    <Link href="/" className='navbar-brand'>
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                            style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                            }}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={"/Champion"} className='nav-link'
                            style={{
                                color: '#3498db',
                                marginLeft: '30px',
                            }}
                        >
                            <h2><i>Champion</i></h2>
                        </Link>
                        <Link href={"/Media"} className='nav-link'
                            style={{
                                color: '#3498db',
                                marginLeft: '30px',
                            }}
                        >
                            <h2><i>Media</i></h2>
                        </Link>
                        {/* <Link href={"/News"} className='nav-link'>
                            ニュース
                        </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default HeaderExample;