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

const cardData = [
  {
    title: 'Hope4Cancer Compared to The Healing Oasis',
    description: 'Most people who are looking for alternative places to heal...',
    date: 'October 15, 2024',
    time: '7:30 pm',
    image: 'path/to/image1.jpg', // Replace with actual image path
    buttonText: 'Read More',
  },
  {
    title: 'Healing Oasis Guest Stories – A Journey of Hope and Healing',
    description: 'Message from our Founder, Dave Vass...',
    date: 'July 17, 2024',
    time: '1:33 pm',
    image: 'path/to/image2.jpg', // Replace with actual image path
    buttonText: 'Read More',
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
          <Route path='/form' element={<BookingForm />}/>
          <Route path='/bookingData' element={<BookingData />}/>
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
                  />
                ))}
              </div>
            }
          />
          <Route path="/form" element={<BookingForm/>} />
        </Routes>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
