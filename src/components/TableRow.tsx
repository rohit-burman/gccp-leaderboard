
function TableRow({ participant, pruned } : {participant: Member, pruned: boolean}) {
  // console.log(participant)
  // console.log(pruned);

  return (
    <tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
      <td
        className={`Student_Name p-3 uppercase ${
          pruned == true && "text-gray-600"
        } ${
          participant["Total Completions of both Pathways"] == "Yes" &&
          "font-bold text-orange-500"
        }`}
      >
        {participant["Student Name"]}
        {participant["Total Completions of both Pathways"] == "Yes" ? "🏅" : ""}
      </td>

      <td className="Redemption_Status p-3 relative">
        <div
          className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${
            pruned == true
              ? "bg-gray-200 text-gray-600"
              : participant["Total Completions of both Pathways"] == "Yes"
              ? "bg-orange-200 font-bold text-orange-500"
              : "bg-green-200 text-green-600"
          }`}
        >
          {pruned == true
            ? "Removed"
            : participant["Total Completions of both Pathways"] == "Yes"
            ? "Completed"
            : "Selected"}
        </div>
      </td>

      <td className="Institution mob:hidden relative p-3">
        <div
          className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${
            pruned == true
              ? "bg-gray-200 text-gray-600"
              : participant["Total Completions of both Pathways"] == "Yes"
              ? "bg-orange-200 font-bold text-orange-500"
              : "bg-green-200 text-green-600"
          }`}
        >
          AEC
        </div>
      </td>

      <td className="Completions_both_Pathways_relative p-3 text-center">
        <div
          className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
            pruned == true
              ? "text-gray-600"
              : participant["Total Completions of both Pathways"] == "Yes"
              ? "bg-orange-200 font-bold text-orange-500"
              : participant["Total Completions of both Pathways"] == "Yes"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {pruned == true
            ? "------"
            : participant["Total Completions of both Pathways"] == "Yes"
            ? "Yes"
            : "No !"}
        </div>
      </td>

      <td
        className={`no_Courses_Completed mob:hidden p-3 text-center ${
          pruned == true && "text-gray-600"
        }`}
      >
        {pruned == true ? "------" : participant["# of Courses Completed"]}
      </td>

      <td
        className={`no_Skill_Badges_Completed mob:hidden p-3 text-center ${
          pruned == true && "text-gray-600"
        }`}
      >
        {pruned == true ? "------" : participant["# of Skill Badges Completed"]}
      </td>

      <td
        className={`enAI_Game_Completed mob:hidden p-3 text-center ${
          pruned == true && "text-gray-600"
        }`}
      >
        {pruned == true ? "------" : participant["# of GenAI Game Completed"]}
      </td>
    </tr>
  );
}

export default TableRow;
