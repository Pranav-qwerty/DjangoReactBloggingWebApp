import './App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import QuoteSection from './components/QuoteSection';
import TouchSection from './components/TouchSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import Search from './components/Search';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <Navbar/>
            <Search/>
            <Footer/>
          </Route>
          <Route path="/create">
            <Navbar/>
            <CreateBlog/>
            <Footer/>
          </Route>
          <Route path="/contact">
            <Navbar/>
            <TouchSection/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/blog/:postId" component={BlogPost}/>
          <Route path="/about">
            <Navbar/>
            <Services isServicesPage={true}/>
            <TouchSection/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/service">
            <Navbar/>
            <Services isServicesPage={true}/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/blog">
            <Navbar/>
            <BlogSection/>
            <Footer/>
          </Route>
          <Route path="/">
            <Navbar/>
            <Banner/>
            <Services isServicesPage={false}/>
            <QuoteSection/>
            <TouchSection/>
            <Contact/>
            <Footer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
