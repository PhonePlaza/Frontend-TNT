import React from 'react'

type Props = {
    data : string[];
    func : React.Dispatch<React.SetStateAction<string>>;
}

const About = ({data}: Props) => {
  return (<div>
    {data.map((item,idx) => (
        <h4 key={idx}>{item}</h4>
      ))}
      </div>
  )
}
export default About;