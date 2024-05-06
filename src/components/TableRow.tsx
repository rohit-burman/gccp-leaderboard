function TableRow({
	participant,
	pruned,
}: {
	participant: Member;
	pruned: boolean;
}) {
	// console.log(participant)
	// console.log(pruned);

	return (
		<tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
			<td
				className={`Student_Name p-3 uppercase 
        ${
					pruned == true
						? "bg-gray-200 text-gray-600"
						: participant["All 3 Pathways Completed - Yes or No"] === "Yes"
						? "bg-orange-200 font-bold text-orange-500"
						: ""
				}`}
			>
				{participant["User Name"]}
				{participant["All 3 Pathways Completed - Yes or No"] === "Yes" &&
				pruned == false
					? "🏅"
					: ""}
			</td>

			<td className="Redemption_Status p-3 relative">
				<div
					className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${
						pruned == true
							? "bg-gray-200 text-gray-600"
							: participant["All 3 Pathways Completed - Yes or No"] === "Yes"
							? "bg-orange-200 font-bold text-orange-500"
							: "bg-green-200 text-green-600"
					}`}
				>
					{pruned == true
						? "Removed"
						: participant["All 3 Pathways Completed - Yes or No"] == "Yes"
						? "Completed"
						: "Selected"}
				</div>
			</td>

			<td
				className={`no_Skill_Badges_Completed mob:hidden p-3 text-center ${
					pruned == true && "text-gray-600"
				}`}
			>
				{pruned == true
					? "------"
					: participant["Profile URL Status"] === "All Good"
					? "All Good"
					: "Wrong Cloud Profile URL"}
			</td>

			{/* <td className="Institution mob:hidden relative p-3">
				<div
					className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${
						pruned == true
							? "bg-gray-200 text-gray-600"
							: participant["All 3 Pathways Completed - Yes or No"] == "Yes"
							? "bg-orange-200 font-bold text-orange-500"
							: "bg-green-200 text-green-600"
					}`}
				>
					AEC
				</div>
			</td> */}

			{/* <td className="Completions_both_Pathways_relative p-3 text-center">
				<div
					className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
						pruned == true
							? "text-gray-600"
							: participant["All 3 Pathways Completed - Yes or No"] == "Yes"
							? "bg-orange-200 font-bold text-orange-500"
							: participant["All 3 Pathways Completed - Yes or No"] == "Yes"
							? "bg-green-200 text-green-600"
							: "bg-yellow-200 text-yellow-600"
					}`}
				>
					{pruned == true
						? "------"
						: participant["All 3 Pathways Completed - Yes or No"] == "Yes"
						? "Yes"
						: "No !"}
				</div>
			</td> */}

			<td
				className={`no_Courses_Completed mob:hidden p-3 text-center ${
					pruned == true && "text-gray-600"
				}`}
			>
				{pruned == true
					? "------"
					: participant["Prompt Design in Vertex AI Completion"]}
			</td>

			<td
				className={`no_Skill_Badges_Completed mob:hidden p-3 text-center ${
					pruned == true && "text-gray-600"
				}`}
			>
				{pruned == true
					? "------"
					: participant[
							"Develop GenAI Apps with Gemini and Streamlit Completion"
					  ]}
			</td>

			<td
				className={`enAI_Game_Completed mob:hidden p-3 text-center ${
					pruned == true && "text-gray-600"
				}`}
			>
				{pruned == true
					? "------"
					: participant["Gen AI Arcade Game Completion"]}
			</td>
		</tr>
	);
}

export default TableRow;
