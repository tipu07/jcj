import React from "react";
import Cover from "../common/Cover";
import ClientReviews from "./section/ClientReviews";

function Reviews() {
	const reviews = {
		cover: {
			sec_bg: "/images/Organizing-a-Panel-Box.jpg",
			heading: "Reviews",
		},
		review: {
			heading: "Our clients",
			heading_ex: "opinions",
			block: [
				{
					id: 1,
					dp: "/images/01.jpg",
					name: "Jennifer Kem",
					para: "Had a short stay with my dad and younger sis. Very comfortable and cozy room. The host Jeka is nice and prepared snacks for us in advance. The location is good and we particularly like the view of the room. Strongly recommend:)",
					date: "February 2018",
				},
				{
					id: 2,
					dp: "/images/02.jpg",
					name: "Brent Phillips",
					para: "This place was wonderful. Very walkable to the subway and very close to the Bund. Host is easily reachable and the space was very clean. My only complaint is that during the day the construction nearby gets a bit loud.",
					date: "January 2018",
				},
				{
					id: 3,
					dp: "/images/03.jpg",
					name: "Sara Fernandas",
					para: "Jeka is totally great,the room is clean and delicate.There is a little kitchen, loudspeaker and a humidifier in (Website hidden by Virtual Iceland) easy to go to Duolun road and 1933 workshop.Watching night scene of Shanghai in room is super amazing.Drink some beer and enjoy the travel!",
					date: "December 2017",
				},
				{
					id: 4,
					dp: "/images/04.jpg",
					name: "Michel Jones",
					para: "This place was great. You’ll love it, very clean, and a great view. Host is very attentive and pro-active.",
					date: "October 2017",
				},
				{
					id: 5,
					dp: "/images/01.jpg",
					name: "Jennifer Kem",
					para: "Had a short stay with my dad and younger sis. Very comfortable and cozy room. The host Jeka is nice and prepared snacks for us in advance. The location is good and we particularly like the view of the room. Strongly recommend:)",
					date: "February 2018",
				},
				{
					id: 6,
					dp: "/images/02.jpg",
					name: "Brent Phillips",
					para: "This place was wonderful. Very walkable to the subway and very close to the Bund. Host is easily reachable and the space was very clean. My only complaint is that during the day the construction nearby gets a bit loud.",
					date: "January 2018",
				},
				{
					id: 7,
					dp: "/images/03.jpg",
					name: "Sara Fernandas",
					para: "Jeka is totally great,the room is clean and delicate.There is a little kitchen, loudspeaker and a humidifier in (Website hidden by Virtual Iceland) easy to go to Duolun road and 1933 workshop.Watching night scene of Shanghai in room is super amazing.Drink some beer and enjoy the travel!",
					date: "December 2017",
				},
				{
					id: 8,
					dp: "/images/04.jpg",
					name: "Michel Jones",
					para: "This place was great. You’ll love it, very clean, and a great view. Host is very attentive and pro-active.",
					date: "October 2017",
				},
			],
		},
	};
	return (
		<>
			<Cover data={reviews.cover} />
			<ClientReviews data={reviews.review} />
		</>
	);
}

export default Reviews;
