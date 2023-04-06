import React from "react";
import instagram from "../assests/images/instagram.png";
import linkedin from "../assests/images/linkedin.png";
import twitter from "../assests/images/twitter.png";
import mail from "../assests/images/mail.png";
import Rohit from "../assests/images/Rohit.jpg";
import "../css/speaker.css";
const Sponsors = () => {
  const speaker = [
    {
      name: "Saumya Singh",
      image:
        "https://media.licdn.com/dms/image/D4D03AQH4bZDQNQJC9Q/profile-displayphoto-shrink_800_800/0/1671964649007?e=1685577600&v=beta&t=mSkDtZjpHiLVfERSi27O2h6AmVgp0cYXecOJpNom4ec",
      Work: "SDE @RedHat",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/saumya1singh/",
        instagram: "https://www.instagram.com/saumya1singh/",
        twitter: "https://twitter.com/saumya1singh",
      },
    },
    {
      name: "Aanshul Sadaria",
      image:
        "https://media.licdn.com/dms/image/C4D03AQHYTCI3PC-YnQ/profile-displayphoto-shrink_800_800/0/1650352735413?e=1685577600&v=beta&t=NNJlE6FMxGSTnFN23WLgv7EQw4USZZDCkb3WHbK3LQg",
      Work: "SWE III @Google ",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/aanshulsadaria/",
        instagram: "https://www.instagram.com/aanshul.sadaria/",
        twitter: "https://twitter.com/AanshulSadaria",
      },
    },

    {
      name: "Rohit Negi",
      image:
        "https://media.licdn.com/dms/image/C5603AQER4rVidEPXUg/profile-displayphoto-shrink_800_800/0/1647701218350?e=1685577600&v=beta&t=95GHLqHErA5mNJxMZ2syxXUQvWHLWUkUU7mcHx8mqrs",
      Work: "SDE @UBER ",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/rohit-negi9/",
        instagram: "https://www.instagram.com/rohit_negi9/",
        twitter: "",
      },
    },
    {
      name: "Anmol Reshi",
      image:
        "https://media.licdn.com/dms/image/D4D03AQF3orLE2-8uww/profile-displayphoto-shrink_800_800/0/1675065989325?e=1686182400&v=beta&t=rxzL1xM_DSV2MqtgtLsKvSeXn0ADKeXLUfQ6pPnMi1c",
      Work: "Founding Member @Sudans Tech",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/anmolreshi/",
        instagram: "https://www.instagram.com/anmol.reshi/",
        twitter: "https://twitter.com/Anmolreshi_21",
      },
    },
  ];
  return (
    <div className="bg-newcolor" id="judges">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <center>
          <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
            SPEAKER & JUDGES
          </h1>
        </center>
      </div>
      <div className="Speaker_big_box w-[80%] m-auto flex flex-wrap justify-center">
        {speaker.map((data) => {
          return (
            <div className="speaker_profile justify-center w-60 my-10">
              <center>
                <img
                  className="speaker_image rounded-full mb-2 border-4 flex border-white"
                  src={data.image}
                />
              </center>
              <div className="speaker_description font-bold text-xl text-white justify-around flex">
                {data.name}
              </div>
              <div className="speaker_description font-bold text-lg text-white justify-around flex">
                {data.Work}
              </div>
              {/* <div className="speaker_description font-bold text-lg text-white justify-around flex">jdfhs udsjfhs sjsdfhsjfh djhfsjfsdudwhernfuf fbudfbsj usdhdjsdioewindhfs sddisdhfs</div> */}
              <div className="speaker_socials flex justify-center">
                {data.socials.linkedln ? (
                  <a target="_blank" href={data.socials.linkedln}>
                    <img className="mx-2" src={linkedin} />
                  </a>
                ) : null}
                {data.socials.twitter ? (
                  <a target="_blank" href={data.socials.twitter}>
                    <img src={twitter} />
                  </a>
                ) : null}
                {data.socials.instagram ? (
                  <a target="_blank" href={data.socials.instagram}>
                    <img src={instagram} />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
