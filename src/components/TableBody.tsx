import TableRow from "./TableRow";

const selectedStudents: Set<string> = new Set([
	"sumitsinghranacloud001@gmail.com",
	"sumitsinghranacloud001@gmail.com",
	"adeogdsc2828@gmail.com",
	"dsubham89214@gmail.com",
	"aarpitaharsh18@gmail.com",
	"aec.cse.soumyadeep@gmail.com",
	"amankraec@gmail.com",
	"rishikesh.sharma090@gmail.com",
	"soumimondal382@gmail.com",
	"meghakiran34@gmail.com",
	"rajnandinisingh002@gmail.com",
	"dpktechnicals@gmail.com",
	"singhaarna926@gmail.com",
	"ad7801609@gmail.com",
]);

function TableBody({ Participationdata }: { Participationdata: Member[] }) {
	// console.log(selectedStudents.length)
	return (
		<tbody className="text-xs">
			{Participationdata.length > 0 ? (
				Participationdata.map((participant) => {
					return (
						<TableRow
							key={participant["User Email"] || 1}
							participant={participant}
							pruned={selectedStudents.has(participant["User Email"])}
						/>
					);
				})
			) : (
				<div className="text-lg">No User Found</div>
			)}
		</tbody>
	);
}

export default TableBody;
