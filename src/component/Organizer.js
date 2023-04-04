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
import yash from "../assests/images/yash.jpg";
import avish from "../assests/images/avish.png";
import "../css/speaker.css";
const Organizer = () => {
  const speaker = [
    {
      name: "Ananya Punia",
      image:
        "https://media.licdn.com/dms/image/C4D03AQFhnjD3MEC09w/profile-displayphoto-shrink_200_200/0/1658680010394?e=1686182400&v=beta&t=kWwZ3I6DCJGZRZ2s4ukhLtZzF261y71QpCR2AeaopJY",
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
      image:
        "https://media.licdn.com/dms/image/D5603AQFjFtWp81m95g/profile-displayphoto-shrink_200_200/0/1668377699760?e=1686182400&v=beta&t=-49XDi9XhAIxIwaMFxosAAmqZ-gl26QnXrZYEJb6LEc",
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
      image:
        "https://media.licdn.com/dms/image/D4D03AQHLcIyH0uIdJA/profile-displayphoto-shrink_200_200/0/1675201967431?e=1686182400&v=beta&t=4-0OK1EHhtJODP3f3xVMqWx7T4w5C2AuS4BDWeUAMOQ",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/akhil-raj-srivastava",
        instagram: "https://instagram.com/sri.akhilraj",
        twitter: "https://twitter.com/Sri_AkhilRaj",
      },
    },
    {
      name: "Kushagra Srivastava",
      image:
        "https://media.licdn.com/dms/image/C4D03AQGmNr7DaEpGRQ/profile-displayphoto-shrink_200_200/0/1658563362271?e=1686182400&v=beta&t=d3V9LDyJJY7ZryOiMwSs6Yx-tRcmH1gyfDnfiv7EJVs",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/kushagrathisside/",
        instagram: "https://www.instagram.com/kushagrathisside/",
        twitter: "https://twitter.com/kushagrathissid",
      },
    },
    {
      name: "Shiva Agrahari",
      image:
        "https://media.licdn.com/dms/image/C5603AQHog5Kn9vo66A/profile-displayphoto-shrink_200_200/0/1621100775775?e=1686182400&v=beta&t=_d4K5Db4tmHHnV_0p4hgKS36ZvRSdA9ONhDbtI_s7yU",
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
      image:
        "https://media.licdn.com/dms/image/C4E03AQHm88LKALen_w/profile-displayphoto-shrink_200_200/0/1632906935936?e=1686182400&v=beta&t=N2RYZr57bQxtcmsM90AHKvsWxOYUc9hhyyTqjsn1jDs",
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
      image:
        "https://media.licdn.com/dms/image/D4D03AQEw5tMkIhj8iw/profile-displayphoto-shrink_200_200/0/1680612131494?e=1686182400&v=beta&t=7roLu_KaoPdjraUoR3JEJQ-cOAsCdbhZKzVcyNIaY0o",
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
      image:
        "https://media.licdn.com/dms/image/D4D03AQEeUonXs71RFw/profile-displayphoto-shrink_200_200/0/1672676416971?e=1686182400&v=beta&t=zfDltD7A37hKKqNQEz3I3DyohfEu0RRtBH4xuVoEAKI",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/shivendu-mishra-94ba36200/",
        instagram: "https://instagram.com/shiv.endu",
        twitter: "https://twitter.com/bitwisor",
      },
    },
    {
      name: "Prashant Rai",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHm52j2XIceTQ/profile-displayphoto-shrink_200_200/0/1680610952009?e=1686182400&v=beta&t=fR2ABH7pwhhnnaO9hSp00w0BgoFOcl2xm_mslCiTBy4",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/prashant-rai-5a726822a",
        instagram:
          "https://instagram.com/p.r.a.s.h.a.n.t_rai?igshid=ZDdkNTZiNTM=",
        twitter:
          "https://twitter.com/Prashan62776953?t=fqA1qb6uruaI044TlHo2Hg&s=09",
      },
    },
    {
      name: "Ujjwal Soni",
      image:
        "https://media.licdn.com/dms/image/D4D03AQE2lNTTgg9Agg/profile-displayphoto-shrink_200_200/0/1680614531213?e=1686182400&v=beta&t=7yLxUjtNwEmSD3tTILfZePpmGAy1GJfQuU_dWSm-1so",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/ujjwal-soni/",
        instagram: "https://www.instagram.com/ujjwal_muziconn/",
        twitter: "https://twitter.com/Ujjwal__Soni",
      },
    },
    {
      name: "Yash Varshney",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHmbXT9LLSsxw/profile-displayphoto-shrink_200_200/0/1663778221196?e=1686182400&v=beta&t=Rf-mPRiPjEGLex6SGwcGOLrpLakVldYGInLXay1vR-s",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/yash-varshney-7b81ab1b1/",
        instagram: "https://www.instagram.com/varshney.yash7055/",
        twitter: "https://twitter.com/Yashvar7055",
      },
    },
    {
      name: "Sambhrant Tiwari",
      image:
        "https://media.licdn.com/dms/image/C4E03AQHH9heNyAMObg/profile-displayphoto-shrink_200_200/0/1656341435505?e=1686182400&v=beta&t=CxJHIIAvgaCG6IvT1AqVXk2C0Fah8iM2x5AOhrOzLJM",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/sambhrant-tiwari-3998b5218/",
        instagram: "https://www.instagram.com/cyclotron04/",
        twitter: "https://twitter.com/SamT22248196",
      },
    },
    {
      name: "Harshit Rai",
      image:
        "https://media.licdn.com/dms/image/C4D03AQH9f37XIjK2VA/profile-displayphoto-shrink_200_200/0/1642681607731?e=1686182400&v=beta&t=LudXJULNm5ebWIybdCfJG4vZ83ket5AzydEzCFENMh0",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln: "https://www.linkedin.com/in/harshitr10/",
        instagram: "https://www.instagram.com/Harshitr_10/",
        twitter: "https://twitter.com/Raiharshit2002",
      },
    },
    {
      name: "Akshat Srivastava",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFyIp2LiLoQ7w/profile-displayphoto-shrink_200_200/0/1673961809013?e=1686182400&v=beta&t=oL9Nftl_Uaf5gjhdVjG9Lb2bmA17pSitAsDIdyVjuHg",
      Work: "Organizer",
      Description: "",
      socials: {
        linkedln:
          "https://www.linkedin.com/mwlite/in/akshat-srivastava-098826229",
        instagram: "https://www.instagram.com/akshat.sri11/",
        twitter: "https://mobile.twitter.com/akshatsri11",
      },
    },
  ];
  return (
    <div className="bg-newcolor" id="team">
      <div className="flex justify-center pt-16 pb-10  max-[415px]:ml-5 ">
        <center>
          <h1 className="text-white text-7xl main max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
            Organizing Team
          </h1>
        </center>
      </div>
      <div className="Speaker_big_box w-[100%] m-auto flex flex-wrap justify-center">
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
