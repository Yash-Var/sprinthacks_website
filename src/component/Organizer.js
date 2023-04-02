import React from "react";
import instagram from "../assests/images/instagram.png";
import linkedin from "../assests/images/linkedin.png";
import twitter from "../assests/images/twitter.png";
import mail from "../assests/images/mail.png";
import Rohit from "../assests/images/Rohit.jpg";
import avaneesh from "../assests/images/avaneesh.jpg";
import punia from "../assests/images/punia.jpeg";
import akhil from "../assests/images/akhil.jpeg";
import shiva from "../assests/images/shiva.jpg";
import shivendu from "../assests/images/shivendu.jpeg";
import sharma from "../assests/images/sharma.jpeg";
import yashveer from "../assests/images/yashveer.jpg";
import avish from "../assests/images/avish.png";
import "../css/speaker.css";
const Organizer = () => {
  const speaker = [
    {
      name: "Ananya Punia",
      image: punia,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/ananyapunia28/",
        instagram: "https://www.instagram.com/ananyapunia28/",
        twitter: "https://twitter.com/ananyapunia28",
      },
    },
    {
      name: "Avaneesh Singh",
      image: avaneesh,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/avaneesh-singh11/",
        instagram: "https://www.instagram.com/a_v_a_n_e_e_s_h_.11/",
        twitter: "https://twitter.com/avaneesh_1109",
      },
    },
    {
      name: "Akhil Raj Srivastava",
      image: akhil,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/akhil-raj-srivastava",
        instagram: "https://instagram.com/sri.akhilraj",
        twitter: "https://twitter.com/Sri_AkhilRaj",
      },
    },
    {
      name: "Shiva Agrahari",
      image: shiva,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/shiva-agrahari-ab0772207/",
        instagram: "https://instagram.com/s.h.i.v.a_04",
        twitter: "https://twitter.com/ShivaAg04",
      },
    },
    {
      name: "Ananya Sharma",
      image: sharma,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/ananya23101",
        instagram: "https://www.instagram.com/ananyaf_2001/",
        twitter: "https://twitter.com/ananya23101",
      },
    },
    {
      name: "Avish Saini",
      image: avish,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/avish-saini-48ab1020a/",
        instagram: "https://www.instagram.com/avi.sh20/",
        twitter: "https://twitter.com/SainiAvish20",
      },
    },
    {
      name: "Yashveer Singh",
      image: yashveer,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/yashveer-singh1062/",
        instagram: "https://www.instagram.com/yashveer_ysr/",
        twitter: "https://twitter.com/Yashvee70645411",
      },
    },
    {
      name: "Shivendu Mishra",
      image: shivendu,
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/shivendu-mishra-94ba36200/",
        instagram: "https://instagram.com/shiv.endu",
        twitter: "https://twitter.com/bitwisor",
      },
    },
  ];
  return (
    <div className="bg-newcolor" id="sponsor">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <center>
          <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
            Organizing Team
          </h1>
        </center>
      </div>
      <div className="Speaker_big_box w-[80%] m-auto flex flex-wrap justify-center">
        {speaker.map((data) => {
          return (
            <div className="speaker_profile justify-center w-60 my-10">
              <center>
                <img
                  className="speaker_image h-[15rem] w-[15rem] rounded-full mb-2 border-4 flex border-white"
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

export default Organizer;
