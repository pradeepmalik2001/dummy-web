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
import { LanguageProvider } from './context/LanguageContext';

const cardData = [
  {
    title: 'Prof. Dr. med. Robert Gorter, MD, PhD, on his first official Tour to China as an Invited Scientist',
    description: 'Most people who are looking for alternative places to heal...',
    date: 'October 15, 2024',
    time: '7:30 pm',
    image: Blog1,
    buttonText: 'Read More',
    link: 'https://robert-gorter.info/prof-dr-med-robert-gorter-md-phd-on-his-first-official-tour-to-china-as-an-invited-scientist/',
  },
  {
    title: 'Crop Circles 2024 - Mysterious Phenomena and Scientific Analysis',
    description: 'Explore the fascinating world of crop circles and their potential connections to healing energies and consciousness...',
    date: 'November 20, 2024',
    time: '2:15 pm',
    image: Podcast2,
    buttonText: 'Read More',
    link: '/Crop Circles 2024.pdf',
  },
  {
    title: 'Dr. Robert Gorter - Cannabis Research and Medical Applications',
    description: 'Comprehensive overview of Dr. Gorter\'s research and expertise in cannabis-based medical treatments...',
    date: 'November 25, 2024',
    time: '4:45 pm',
    image: Podcast3,
    buttonText: 'Read More',
    link: '/Robert CV short in regards to Cannabis November 2024 (1).pdf',
  },
  {
    title: 'Cannabis and Mistletoe - Immunoprotection and DNA Research',
    description: 'Advanced research on cannabis and mistletoe therapy for immunoprotection and DNA repair mechanisms...',
    date: 'December 1, 2024',
    time: '3:20 pm',
    image: Podcast1,
    buttonText: 'Read More',
    link: '/Cannabis and Mistletoe immunoprotection and DNA re_251028_082115.pdf',
  },
  {
    title: 'Orientech Laizhou Medical Presentation - Innovative Treatment Approaches',
    description: 'Comprehensive presentation on innovative medical treatment approaches and methodologies...',
    date: 'December 5, 2024',
    time: '5:10 pm',
    image: Blog1,
    buttonText: 'Read More',
    link: '/Orientech Laizhou Presentation(20201121)_251028_082143.pdf',
  },
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
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
