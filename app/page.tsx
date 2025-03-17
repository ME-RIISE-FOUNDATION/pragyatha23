"use client";

import Image from "next/image";
import pragyatha_logo from "@/public/pragyatha.png";
import Navbar from "@/components/navbar";
import { TypingAnimationText } from "@/components/animate-text";
import { events } from "@/lib/events";
import Timer from "@/components/timer/timer";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div
				className={`flex flex-col md:flex-row md:justify-around items-center justify-center h-[75vh]`}
			>
				<header>
					<TypingAnimationText
						className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-[#BE277E] to-[--secondary-text]"
						text={"ME-RIISE "}
					>
						<span className="text-black dark:text-white">presents</span>
					</TypingAnimationText>
					<div className="text-5xl font-semibold md:text-6xl lg:text-9xl ">
						<TypingAnimationText text={"Pragyatha"}>
							<span className="text-transparent font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]">
								2k23
							</span>
							<div className="md:text-3xl md:text-right pt-4 font-thin text-center text-xl">
								proclaim your potential
							</div>
						</TypingAnimationText>
					</div>
				</header>
				<Image
					src={pragyatha_logo}
					alt="Pragyatha logo"
					className="md:w-60 md:h-60 md:mt-0 w-24 h-24 mt-8"
				/>
			</div>
			<Timer />
			<div className="flex my-16 md:mx-16 mx-8">
				<TypingAnimationText
					text={"About"}
					className="text-4xl md:text-5xl text-[#BE277E] transition-all hover:underline hover:text-white hover:cursor-pointer"
				>
					<p className="text-xl text-justify my-4">
						Pragyatha 2k23, a state-level entrepreneurial fest where technology
						and entrepreneurship blend. This platform is designed for engineers,
						innovators, and start-ups to realize their potential and ambition.
					</p>
				</TypingAnimationText>
			</div>
			<div className="flex my-16 md:mx-16 mx-8">

				<div>
					{/* {events.map((event, index) => (
							<div
								className="flex my-8 md:mx-16 mx-8"
								key={index}
							>
								<TypingAnimationText
									text={event.title}
									className="text-transparent text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
								>
									<p className="text-xl text-justify my-4 text-neutral-500">
										{event.date}, {event.time} Onwards
									</p>
								</TypingAnimationText>
							</div>
						))} */}


					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>Entrorphosis</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="entror (1).jpg" alt="" className="rounded-lg" />
							<img src="entror (2).jpg" alt="" className="rounded-lg" />
						</div>
					</div>
					<br />
					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>



					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>Shark Tank</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							<img src="sk (1).jpg" alt="" className="rounded-lg" />
							<img src="sk (2).jpg" alt="" className="rounded-lg" />
							<img src="sk (3).jpg" alt="" className="rounded-lg" />

						</div>
					</div>

					<br />
					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>

					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>Trade Show</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="tradeshow (1).jpg" alt="" className="rounded-lg" />
							<img src="tradeshow (2).jpg" alt="" className="rounded-lg" />
						</div>
					</div>

					<br />
					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>


					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>Adspize</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="ad1 (1).jpg" alt="" className="rounded-lg" />
							<img src="ad1 (2).jpg" alt="" className="rounded-lg" />
						</div>
					</div>

					<br />
					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>



					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>UI/UX Hackathon</p>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
							<img src="uiux (1).jpg" alt="" className="rounded-lg" />
							<img src="uiux (2).jpg" alt="" className="rounded-lg" />
							<img src="uiux (4).jpg" alt="" className="rounded-lg" />
							<img src="uiux (5).jpg" alt="" className="rounded-lg" />

						</div>
					</div>

					<br />
					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>



					<br />

					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>PCB Workshop</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="pcb1 (1).jpg" alt="" className="rounded-lg" />
							<img src="pcb1 (2).jpg" alt="" className="rounded-lg" />
							{/* <img src="pcb3.jpeg" alt="" className="rounded-lg" /> */}


						</div>
					</div>

					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>

					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>The BigBull Workshop</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="big (1).jpg" alt="" className="rounded-lg" />
							<img src="big (2).jpg" alt="" className="rounded-lg" />
							{/* <img src="big (3).jpg" alt="" className="rounded-lg" /> */}


						</div>
					</div>

					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>



					<div className="text-center">
						<p className="text-center text-transparent m-8 text-4xl md:text-5xl font-thin bg-clip-text bg-gradient-to-br from-[#BE277E] to-[#324AA0]"
						>ReactJS Workshop</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							<img src="rjs (1).jpg" alt="" className="rounded-lg" />
							<img src="rjs (2).jpg" alt="" className="rounded-lg" />
							{/* <img src="pcb3.jpeg" alt="" className="rounded-lg" /> */}


						</div>
					</div>

					<br />
					<br />

					<p className="h-1 bg-gradient-to-br from-[#BE277E] to-[#324AA0]"></p>















				</div>







			</div>
			<div className="flex flex-col my-16 md:mx-16 mx-8">
				<Link
					href={
						"https://cloud.appwrite.io/v1/storage/buckets/657355464bf7a225160c/files/657743f1d1e081f15ddc/view?project=6573553032bdf2af1fa2&mode=admin"
					}
					target="_blank"
					className="text-2xl text-[#BE277E] hover:text-neutral-400 transition-all delay-100 mb-4"
					download={"rulebook.pdf"}
					id="rulebook"
				>
					Download the Official Pragyatha Rulebook
				</Link>
				<Link
					href={
						"https://cloud.appwrite.io/v1/storage/buckets/657355464bf7a225160c/files/657beaff59d7e56a4e12/view?project=6573553032bdf2af1fa2&mode=admin"
					}
					target="_blank"
					className="text-2xl text-[#BE277E] hover:text-neutral-400 transition-all delay-100"
					download={"schedule.pdf"}
					id="schedule"
				>
					Download the Official Pragyatha Schedule
				</Link>
			</div>
		</div>
	);
}
