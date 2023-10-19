import TableRow from "./TableRow";

const selectedStudents:Set<string> = new Set(['captain.starlord2025@gmail.com', 'samitbanerjeekc@gmail.com', 'bikash.agarwala.01@gmail.com', 'arnabchatterjee.ac.4@gmail.com', 'bhumisinha467@gmail.com', 'sen756336@gmail.com', 'rohitlevi1234@gmail.com', 'soumikchatterjeegd@gmail.com', 'mukherjeepratyusha23@gmail.com', 'prithwijitchoudhury.017@gmail.com', 'shawgaganraj@gmail.com', 'aryapratapsingh556@gmail.com', 'doyeldatta309@gmail.com', 'sujalbarnwal9605@gmail.com', 'sunskritythakur0@gmail.com', 'adarshsinghaec@gmail.com', 'anandkumarj603@gmail.com', 'i.am.sk.jiyad1@gmail.com', 'chowdhuryamartya916@gmail.com', 'agnivachatterjee029@gmail.com', 'rajskills9083@gmail.com', '2023.subhamaji@gmail.com', 'navneetsingh913591@gmail.com', 'rayakarmakar2004@gmail.com', 'warrioranusha@gmail.com', 'viveknoniaaec@gmail.com', 'oliviaa2chowdhury@gmail.com', 'aritroroy404@gmail.com', 'rishikeshsharma9883@gmail.com', 'hazradevdeep@gmail.com', 'muskank241004@gmail.com', 'rohitburman31p@gmail.com', 'subhambhattacharya.1003@gmail.com', 'soumyadipmitra21@gmail.com', 'debrajmondalaec2023@gmail.com', 'aj4836943@gmail.com', 'shreemoygorai384@gmail.com', 'tiwarikritika.2004@gmail.com', 'sharmaom2k4@gmail.com', 'trishabanerjee702@gmail.com', 'sumanapanda2003@gmail.com', 'sayandeepp497@gmail.com', 'anushaghosh795@gmail.com', 'noorainraza2023@gmail.com', 'itsanketbanerjee@gmail.com', 'bikash.agarwala.cloud@gmail.com', 'pratima211970@gmail.com', 'ayushjaiswalace@gmail.com', 'shalvisrivastava239@gmail.com', 'ankanbiswas12356@gmail.com', 'islam10830@gmail.com', 'jyotikarmakar756@gmail.com', 'susmitadutta.aec@gmail.com', 'pkuchlyan274@gmail.com', 'sambhavdeep4@gmail.com', 'akankshasrivastava1628@gmail.com', 'rupamgarai04aec@gmail.com', 'suryashish.k2050@gmail.com', 'anushkamisra312@gmail.com', 'tusharprasad529@gmail.com', 'akashyadavaec23@gmail.com', 'itsuhanaparvin@gmail.com', 'ayanchowdhury4111@gmail.com', 'mfirdosalam0786@gmail.com', 'adityasrivastava092003@gmail.com', 'subhadeepbanerjee62@gmail.com', 'sddas4621@gmail.com', 'Jitendrabhagat2005@gmail.com', 'jyotirmoyc268@gmail.com', 'sanchitamondal04dec@gmail.com', 'priyanshupatraCSE@gmail.com', 'choudharyaryan465@gmail.com', 'suchismitabag2404@gmail.com', 'mahfuzahmed200023@gmail.com', 'jhilikmukherjeeaec12@gmail.com', 'ttiwary850@gmail.com', 'kunduanirban070@gmail.com', 'Kumarsaket2801@gmail.com', 'rajanshaw9005@gmail.com', 'sakshambasisth01@gmail.com', 'omkumaraec@gmail.com', 'kriti.cloud2004@gmail.com', 'divyakumari704777@gmail.com', 'ayushkumar2962005@gmail.com', 'subhojitnath221@gmail.com', 'dipannitasaha858@gmail.com', 'amitabh.deogharia.aec@gmail.com', 'priyanshupaul999@gmail.com', 'rahulsrivastava990750@gmail.com', 'arkomukherjee112233@gmail.com', 'ayushibhowmick2004@gmail.com', 'info.shubham.as@gmail.com', 'sarbojitroy7070@gmail.com', 'subhamjackxons@gmail.com', 'sumitsinghranacloud005@gmail.com', 'sriramanand75@gmail.com', 'bhargabmaji9@gmail.com', 'nilamkumari2k4@gmail.com', 'srijakgoraiofficial20@gmail.com', 'shubhamgorai080@gmail.com', 'suryadeepsen847@gmail.com', 'aradhyapandey192@gmail.com', 'chhaviprabhat@gmail.com', 'pankaj.kry3007@gmail.com', 'thakurdebarjun@gmail.com', 'samratrick1234@gmail.com', 'babitayadav.ky3007@gmail.com', 'abhinabomondal92@gmail.com', 'kedarpaul53@gmail.com', 'aec.cse.abhra@gmail.com', 'ananyabarnwal98@gmail.com', 'debosmita356@gmail.com', 'nandiniverma1976@gmail.com', 'hrisikeshghosh96@gmail.com', 'kumarishawayushi@gmail.com', 'ayaniqbal2308@gmail.com', 'rudrajitroy1310@gmail.com', 'adityasharmaextraworks@gmail.com', 'shubhechhac@gmail.com', 'priyam.rng@gmail.com', 'ayansheet1234@gmail.com', 'dmunmun352@gmail.com','raushankr3005@gmail.com', 'anshurajak196@gmail.com', 'lakshr2004@gmail.com', 'rajak312003@gmail.com', 'arpanghosh9907@gmail.com', 'bikramjeetdas04@gmail.com', 'banamali604@gmail.com', 'rajchatterji20@gmail.com', 'rohitkr2006mahato@gmail.com', 'shnwz.alam.md@gmail.com', 'anushka.05.belhari@gmail.com', 'kumarishreya28022005@gmail.com', 'aiuzan14@duck.com', 'adk301104@gmail.com'])

function TableBody({ Participationdata, setParticipationdata }) {
  // console.log(selectedStudents.length)
  return (
    <tbody className="text-xs ">
      {Participationdata.length > 0 ? (
        Participationdata.map((participant) => {
          return (
            <TableRow
              key={participant["Student Email"] || 1}
              participant={participant}
              pruned = {!selectedStudents.has(participant["Student Email"])}
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
