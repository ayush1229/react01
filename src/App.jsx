import { Bookmark } from 'lucide-react'
import React from 'react'
import Card from './components/Card'

const jobOpenings = [
  {
    "company_logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Amazon_logo.svg", // Using the same, but sometimes these work for a while
    "time_ago": "4 days ago",
    "company_name": "Amazon",
    "post_name": "Senior UI/UX Designer",
    "tags": ["Full-time", "Senior-level", "Remote Available"],
    "salary": "$120/hr",
    "place": "Bangalore, India"
  },
  {
    "company_logo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png", // Direct link to a small Google asset
    "time_ago": "1 week ago",
    "company_name": "Google",
    "post_name": "Machine Learning Engineer",
    "tags": ["Full-time", "Mid-level", "On-site"],
    "salary": "$140/hr",
    "place": "Hyderabad, India"
  },
  {
    "company_logo": "https://static.wikia.nocookie.net/logopedia/images/4/41/Microsoft_2012_logo.svg/revision/latest?cb=20210204192648", // A more stable SVG from a public logo database
    "time_ago": "2 weeks ago",
    "company_name": "Microsoft",
    "post_name": "Cloud Infrastructure Specialist",
    "tags": ["Full-time", "Senior-level"],
    "salary": "$130/hr",
    "place": "Gurugram, India"
  },
  {
    "company_logo": "https://developer.spotify.com/assets/custom/images/favicon-32x32.png", // Using a small, reliable favicon/icon link
    "time_ago": "3 days ago",
    "company_name": "Spotify",
    "post_name": "Sound Engineer",
    "tags": ["Part-time", "Creative", "Remote"],
    "salary": "$90/hr",
    "place": "Mumbai, India"
  },
  {
    "company_logo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flipkart_logo.svg", // Re-using the Wikimedia link as a short-term fix
    "time_ago": "6 days ago",
    "company_name": "Flipkart",
    "post_name": "Frontend Developer",
    "tags": ["Full-time", "Junior-level", "Hybrid"],
    "salary": "$80/hr",
    "place": "Bangalore, India"
  },
  {
    "company_logo": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/tesla-logo-thumbnail.jpg", // Link to a thumbnail from the official Tesla site
    "time_ago": "2 days ago",
    "company_name": "Tesla",
    "post_name": "Embedded Systems Engineer",
    "tags": ["Full-time", "On-site", "Senior-level"],
    "salary": "$150/hr",
    "place": "Pune, India"
  },
  {
    "company_logo": "https://www.adobe.com/content/dam/cc/icons/adobe-logo-flat-24.svg", // Direct link to an Adobe asset SVG
    "time_ago": "5 days ago",
    "company_name": "Adobe",
    "post_name": "Graphic Designer",
    "tags": ["Contract", "Creative", "Remote"],
    "salary": "$75/hr",
    "place": "Chennai, India"
  },
  {
    "company_logo": "https://newsroom.intel.com/wp-content/uploads/sites/11/2020/09/intel-logo-2020-blue.png", // Link to a press kit asset from Intel Newsroom
    "time_ago": "1 week ago",
    "company_name": "Intel",
    "post_name": "Hardware Verification Engineer",
    "tags": ["Full-time", "Mid-level"],
    "salary": "$110/hr",
    "place": "Noida, India"
  },
  {
    "company_logo": "https://assets.nflxext.com/us/siteui/common/images/nficon2016.ico", // Using the Netflix favicon/icon
    "time_ago": "3 days ago",
    "company_name": "Netflix",
    "post_name": "Video Compression Specialist",
    "tags": ["Remote", "Part-time", "Senior-level"],
    "salary": "$160/hr",
    "place": "Remote - India"
  },
  {
    "company_logo": "https://brand.tcs.com/content/dam/tcs/logos/TCS-logo-blue.svg", // Official asset from TCS Brand portal
    "time_ago": "4 days ago",
    "company_name": "TCS",
    "post_name": "Data Analyst",
    "tags": ["Full-time", "Mid-level"],
    "salary": "$60/hr",
    "place": "Kolkata, India"
  }
]


const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, index) {
        return <div key={index}>
          <Card
            logo={elem.company_logo}
            name={elem.company_name}
            time={elem.time_ago}
            post={elem.post_name}
            tags={elem.tags}
            salary={elem.salary}
            place={elem.place}
          />
        </div>
      })}
    </div>
  )
}

export default App