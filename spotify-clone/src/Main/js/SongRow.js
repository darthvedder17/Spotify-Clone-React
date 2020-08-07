import React from 'react'
import '../css/SongRow.css'
function SongRow({ track = 'test'}) {
	return (
		<div className = 'songRow'>
		<img className='songRow_album' src='' alt='' />
			<div className ='songRow_info'>
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(', ')}
					{track.album.name}
				</p>
			</div>
		</div> 
		
		
	);
}

export default SongRow