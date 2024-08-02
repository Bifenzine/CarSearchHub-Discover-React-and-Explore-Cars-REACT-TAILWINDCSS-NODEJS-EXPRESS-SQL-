
import './App.css';
import Test from './Components/Test';

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorie from './Components/Categorie';
import { SearchTermContext } from './searchTermContext/SearchTermContext';
import { useState } from 'react';
import VoitureDetail from './Components/VoitureDetail';
import { CarsContext } from './Components/carsContext/CarsContext';
import SignIn from './Components/SignIn';
import { UserContext } from './Components/UserContext/UserContext';
import ProfileUser from './Components/ProfileUser';
import UserPage from './Components/Pages/UserPAge/UserPage';
// import SignUp from './Components/SignUp';



function App() {

  const [searchValue, setSearchValue] = useState("")
  const [cars, setCars] = useState([])
  const [user, setUser] = useState([])



  return (
    <div className="App px-12">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <CarsContext.Provider value={{ cars, setCars }}>
            <SearchTermContext.Provider value={{ searchValue, setSearchValue }} >

              <Navbar />
              <main>
                <Routes>
                  <Route exact path='/' element={<Test />}></Route>
                  <Route exact path='/categorie/:id' element={<Categorie />}></Route>
                  <Route exact path='/Detail/:id' element={<VoitureDetail />}></Route>
                  <Route exact path='/categorie/:id/Detail/:id' element={<VoitureDetail />}></Route>
                  <Route exact path='/SignIn' element={<SignIn />}></Route>
                  <Route exact path='/Profile/:id' element={<UserPage />}></Route>
                  <Route exact path='/Profile/:id/Detail/:id' element={<VoitureDetail />}></Route>



                </Routes>
              </main>
            </SearchTermContext.Provider>
          </CarsContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
