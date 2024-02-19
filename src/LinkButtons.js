import React from 'react';

export default function LinkButtons(){
    return(
        <div className='links-container'>
            <a href="mailto:timur.garifullin@richmond.edu" className='link link--helike'> 
                <i className='fa-solid fa-envelope'></i>Email</a>

            <a href="Resume_Timur_Garifullin.pdf" target="_blank" className='link link--helike'>
                <i className='fa-solid fa-file'></i>Resume</a>

            <a href="https://github.com/TimurGar" target="_blank" className='link link--helike'>
                <i className='fa-brands fa-github'></i>Github</a>
                
            <a href="https://www.linkedin.com/in/timur-garifullin/" target="_blank" className='link link--helike'>
                <i className='fa-brands fa-linkedin'></i>LinkedIn</a>
        </div>
    );
}