import { useTitle } from "../hooks/useTitle"

const About = () => {
     // title
     useTitle("About");
  return (
    <div className="section-padding mt-20 min-h-[calc(100vh-9rem)]">
      <div className="wrapper">
        about
      </div>
    </div>
  )
}

export default About