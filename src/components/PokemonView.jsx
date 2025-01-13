import React from 'react'

const PokemonView = ({name, image, types}) => {
return (
    <div className='flex flex-col items-center mt-16'>
            <h1 className='font-sans font-bold text-lg md:text-xl lg:text-2xl mb-10'>{name}</h1>
            <img src={image} alt={name}/>
            <h2 className='mt-5 font-semibold font-sans'>Types: {types.join(', ')}</h2>
    </div>
)
}

export default PokemonView