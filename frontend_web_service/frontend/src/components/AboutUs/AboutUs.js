import MemberInformation from './MemberInformation';


function AboutUs(){

  const membersData = [
    {
      name: "Ramiro Quevedo",
      image: "ProfileImgRama",
      roles: [
        "System Arquitect",
        "FullStack Developer",
        "Devops Engineer"
      ]
    },
    {
      name: "Federico Aballay",
      image: "ProfileImgFede",
      roles: [
        "Project Manager",
        "Backend Developer"
      ]
    },
    {
      name: "Maximiliano Gilberto",
      image: "ProfileImgMaxi",
      roles: [
        "FullStack Developer",
        "Lead React Native Developer"
      ]
    },
    {
      name: "Juan Jose Passo",
      image: "ProfileImgJuan",
      roles: [
        "UI Designer"
      ]
    },
    {
      name: "Marcos Mollerach",
      image: "ProfileImgMarcos",
      roles: [
        "Frontend Developer"
      ]
    },
    {
      name: "Manuel Arzuaga",
      image: "ProfileImgManu",
      roles: [
        "Frontend Developer",
        "QA Tester"
      ]
    }
  ];

  let halfway = Math.floor(membersData.length / 2);
  let firstHalf = membersData.slice(0, halfway);
  let secondHalf = membersData.slice(halfway, membersData.length);

  return(
    <div id='about-us-view' className='gradient-background'>
      <div className='grid-x'>
        <div className='cell large-6 small-12'>
          {firstHalf.map((memberData, index) => (
            <MemberInformation
              key={index}
              name={memberData.name}
              image={memberData.image}
              roles={memberData.roles}
            />
          ))}
        </div>
        <div className='cell large-6 small-12'>
          {secondHalf.map((memberData, index) => (
            <MemberInformation
              key={index}
              name={memberData.name}
              image={memberData.image}
              roles={memberData.roles}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;