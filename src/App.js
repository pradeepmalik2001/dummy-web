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
import Footer from './Pages/Footer';
import Header1 from './Pages/Header1';
import DataTable from './Pages/DataTable';
import SignIn from './SignIn/SignIn';

const cardData = [
  {
    title: 'Prof. Dr. med. Robert Gorter, MD, PhD, on his first official Tour to China as an Invited Scientist',
    description: 'Most people who are looking for alternative places to heal...',
    date: 'October 15, 2024',
    time: '7:30 pm',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://robert-gorter.info/prof-dr-med-robert-gorter-md-phd-on-his-first-official-tour-to-china-as-an-invited-scientist/',
  },
  {
    title: 'Healing Oasis Guest Stories – A Journey of Hope and Healing',
    description: 'Message from our Founder, Dave Vass...',
    date: 'July 17, 2024',
    time: '1:33 pm',
    image: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649', // Replace with actual image path
    buttonText: 'Read More',
    link: 'https://www.google.com',
  },
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
          <Route path="/contact" element={<Footer/>}></Route>
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
          {/* <Route path="/form" element={<BookingForm/>} /> */}
          <Route path="/booking" element={<DataTable/>}></Route>
        </Routes>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
