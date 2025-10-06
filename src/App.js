import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Pages/Header';
import Header2 from './Pages/Header2';
import Header3 from './Pages/Header3';
import Header4 from './Pages/Header4';
import Header5 from './Pages/Header5';
import Header6 from './Pages/Header6';
import DateTimePicker from './Pages/DateTimePicker';
import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import BookingForm from './Pages/BookingForm';
import BookingData from './Pages/BookingData';
import BlogCard from './Pages/BlogCard';
import Footer1 from './Pages/Footer1';
import Footer from './Pages/Footer';
import Header1 from './Pages/Header1';
import DataTable from './Pages/DataTable';
import SignIn from './SignIn/SignIn';
import Podcast1 from './Images/Podcast1.png';
import Podcast2 from './Images/Podcast2.png';
import Podcast3 from './Images/Podcast3.png';
import Blog1 from './Images/Blog1.png';

const cardData = [
  {
    title: 'Prof. Dr. med. Robert Gorter, MD, PhD, on his first official Tour to China as an Invited Scientist',
    description: 'Most people who are looking for alternative places to heal...',
    date: 'October 15, 2024',
    time: '7:30 pm',
    image: Blog1, // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://robert-gorter.info/prof-dr-med-robert-gorter-md-phd-on-his-first-official-tour-to-china-as-an-invited-scientist/',
  },
  // {
  //   title: 'Healing Oasis Guest Stories – A Journey of Hope and Healing',
  //   description: 'Message from our Founder, Dave Vass...',
  //   date: 'July 17, 2024',
  //   time: '1:33 pm',
  //   image: Podcast2, // Replace with actual image path
  //   buttonText: 'Read More',
  //   link: 'https://www.google.com',
  // },
];

const podcastData = [
  {
    title: 'Dendritic Cell Vaccinations in Solid Tumors in Combination with Hyperthermia',
    description: 'Most people who are looking for alternative places to heal...',
    date: 'November 11, 2022',
    time: '7:30 pm',
    image: Podcast1, // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://www.youtube.com/watch?v=BKQOhlZkDvo',
  },
  {
    title: 'Harman Wagenmakers in the Netherlands was diagnosed with advanced end stage Chloangiocarcinoma with extensive liver',
    description: 'Message from our doctor, Harman Wagenmakers..',
    date: 'July 17, 2024',
    time: '1:33 pm',
    image: Podcast2, // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://www.facebook.com/thegortermodel/videos/harmen-wagenmakers-in-the-netherlands-was-diagnosed-with-far-advanced-end-stage-/1234242777599426/?rdid=WB76bkuAWCsEAW4D',
  },
  {
    title: 'Fighting Cancer Through Nontoxic Healing – Guided by Prof. Dr. Robert Gorter',
    description: 'Prof. Gorter promotes nontoxic cancer healing during China visit.',
    date: 'July 17, 2024',
    time: '1:33 pm',
    image: Podcast3, // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://youtu.be/H28wMAMDi0s?si=AYUH3L5ft5LmpCUy',
  }
];

function App() {
  return (
    <Router>
    <div className="App">
        <Header1/>
        <Routes>
          <Route path='/' element={<>
            <Header/>
            <Header2/>
            <Header3/>
            <Header4/>
            <Header5/>
            <Header6/>
          </>}/>
          <Route path="/signIn" element={<SignIn/>}></Route>
          <Route path="/contact" element={<Footer1/>}></Route>
          <Route path='/form' element={<BookingForm />}/>
          {/* <Route path='/bookingData' element={<BookingData />}/> */}
          <Route
            path="/blog"
            element={
              <div className="card-container">
                {cardData.map((item, index) => (
                  <BlogCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    time={item.time}
                    image={item.image}
                    buttonText={item.buttonText}
                    link={item.link} 
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/podcasts"
            element={
              <div className="card-container">
                {podcastData.map((item, index) => (
                  <BlogCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    time={item.time}
                    image={item.image}
                    buttonText={item.buttonText}
                    link={item.link} 
                  />
                ))}
              </div>
            }
          />
          {/* <Route path="/form" element={<BookingForm/>} /> */}
          <Route path="/booking" element={<DataTable/>}></Route>
        </Routes>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
