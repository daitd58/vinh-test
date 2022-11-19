import React from 'react'
import '../Component/Style.css'
import Tabcontent from './tabcontent/Tabcontent';

export default class Header extends React.Component {
    render() {
        const contents = [
            {
                title: "Section1",
                content: (
                    <p>
                        1
                    </p>
                ),
            },
            {
                title: "Section2",
                content: (
                    <p>
                        2
                    </p>
                ),
            },
            {
                title: "Section3",
                content: (
                    <p>
                        3
                    </p>
                ),
            },
        ];
        return (
            <div>
                <div className='Header' >
                    <div className='List'>
                        <a href='Overview' className='a'>
                            <p>Overview</p>
                        </a></div>
                    <div className='List'>
                        <a href='Annoucement' className='a'>
                            <p>Annoucement</p>
                        </a>
                    </div>
                    <div className='List'>
                        <a href='Course-contentv' className='a'>
                            <p>Course content</p>
                        </a>
                    </div>
                    <div className='List'>
                        <a href='Bookmark' className='a'>
                            <p>Bookmark</p>
                        </a>
                    </div>
                    <div className='List'>
                        <a href='QA' className='a'>
                            <p>Q&A</p>
                        </a>
                    </div>
                    <div className='List'>
                        <a href='Grade' className='a'>
                            <p>Grade</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
