import React from 'react'
import codeImage from '../assets/code.jpg'
import PageSection from './PageSection'

const DevApi = () => {
    return <PageSection name='Developer API' title='Developer API'
        subtitle={`Stopped art horror is hope purple rapping forget terrors. Floor morrow his the each, i napping entrance prophet or sat.`}

    >
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
            <div className='flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg'>
                <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>Tempest outpour longer before stopped lost out. Sad lining the saintly and and that this. This i in scarcely be.</p>
                <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>Tempest outpour longer before stopped lost out. Sad lining the saintly and and that this. This i in scarcely be.</p>
                <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>Tempest outpour longer before stopped lost out. Sad lining the saintly and and that this. This i in scarcely be.</p>
                <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>Tempest outpour longer before stopped lost out. Sad lining the saintly and and that this. This i in scarcely be.</p>

            </div>
            <div className='w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0'>
                <img src={codeImage}
                    alt='code'
                    className='rounded-lg shadow-thBlue' />

            </div>
        </div>

    </PageSection>
}

export default DevApi