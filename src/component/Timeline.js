import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../css/timeline.css"
const Timeline = () => {
  const event = [
    {
        time:"9:00 am",
        motto:"Inaugration Of Hackathon",
        date:"8 April"
    },
    {
        time:"12:00 noon",
        motto:"Hacking Period Start",
        date:"8 April"
    },

    {
        time:"6:00 PM - 7:00 PM",
        motto:"Mentoring Period",
        date:"8 April"
    },

    {
        time:"11:00 PM",
        motto:"First Judging Evaluation",
        date:"8 April"
    },
    {
        time:"12:00 AM",
        motto:"Recreational Activities",
        date:"9 April"
    },
    {
        time:"6:00 AM",
        motto:"Hacking Period End",
        date:"9 April"
    },
    {
        time:"6:00 AM - 8:00 AM",
        motto:"Submission Period",
        date:"9 April"
    },
    {
        time:"9:00 AM",
        motto:"Judging",
        date:"9 April"
    }, 
    {
        time:"1:00 PM",
        motto:"Result Announcement",
        date:"9 April"
    },
  ]
  return (
    <div className='main'>
        <center><h1 className="text-white text-7xl main mt-20 max-[500px]:text-6xl max-[415px]:text-5xl max-[466px]:mr-5">
          TIMELINE
        </h1></center>
        <VerticalTimeline>
        {event.map((data)=>{
           return <VerticalTimelineElement
           className="vertical-timeline-element"
           contentStyle={{ background: '#1C1C1F', color: '#fff'}}
           contentArrowStyle={{ borderRight: '7px solid #1C1C1F'}}
           date={data.date}
           iconStyle={{background: "#1C1C1F"}}
           dateClassName="date"
           
         >
          <div className='flex justify-around align-center motto_box'>

           <h2 className="vertical-timeline-element-title">{data.time}</h2>
           <h2 className='timeline_motto'>
           {data.motto}  
           </h2>
          </div>
         </VerticalTimelineElement>
        })}    
        
        </VerticalTimeline>
    </div>
  )
}

export default Timeline