import React, { useState } from "react";
import './songs.css'

export default function Songs() {
	const [like, setLike] = useState(false)

	const handleLike = () => {
		setLike(!like)
		console.log(setLike)
	}
	return (
		<>
			<ul>
				<li>
					<h3>Midnights</h3>
					<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Midnights_-_Taylor_Swift.png/220px-Midnights_-_Taylor_Swift.png" className="albumCover" alt="Midnights Album Cover" />
					<p>Midnights is Taylor Swift's latest album.</p>
					<button type="submit">Like{handleLike}</button>
				</li>
				<li>
					<h3>1989 (Taylor's Version)</h3>
					<img src="https://www.udiscovermusic.com/wp-content/uploads/2023/08/1989-Taylors-Version-820x820.jpg" className="albumCover" alt="1989 (Taylor's Version) Album Cover" />
					<p>1989 (Taylor's Version) is a re-recorded edition of Taylor's original 1989 album, featuring all the original songs.</p>
					<button type="submit">Like</button>
				</li>
				<li>
					<h3>Folklore</h3>
					<img src="https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png" className="albumCover" alt="Folklore (Taylor's Version) Album Cover" />
					<p>Folklore (Taylor's Version) is the re-recorded version of Taylor's acclaimed album "Folklore," featuring new recordings.</p>
					<button type="submit">Like</button>
				</li>
				<li>
					<h3>Fearless (Taylor's Version)</h3>
					<img src="https://media.pitchfork.com/photos/606f5e145aedaea021481c20/master/w_1280%2Cc_limit/Taylor-Swift-Fearless.jpeg" className="albumCover" alt="Fearless (Taylor's Version) Album Cover" />
					<p>Fearless (Taylor's Version) is a re-recorded edition of Taylor's second studio album, featuring all the original tracks.</p>
					<button type="submit">Like</button>
				</li>
				<li>
					<h3>Red (Taylor's Version)</h3>
					<img src="https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png" className="albumCover" alt="Red (Taylor's Version) Album Cover" />
					<p>Red (Taylor's Version) is a re-recorded edition of Taylor's album "Red," with additional tracks and new recordings.</p>
					<button type="submit">Like</button>
				</li>
				<li>
					<h3>Speak Now (Taylor's Version)</h3>
					<img src="https://m.media-amazon.com/images/I/71QgmF3cnEL._UF894,1000_QL80_.jpg" className="albumCover" alt="Speak Now (Taylor's Version) Album Cover" />
					<p>Speak Now (Taylor's Version) is the re-recorded version of Taylor's third studio album, "Speak Now."</p>
					<button type="submit">Like</button>
				</li>
			</ul>
		</>
	)
}