import "./App.css";
import Posters from "./Posters";
import Header from "./Header";
import Footer from "./Footer";
import s from "./Images/s.jpg";
import NotFound from "./NotFound";
import FormInput from "./FormInput";
import Home from "./Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
//test
function App() {
  const data = [
    {
      id: 0,
      title: "this is first",
      text: "Hello and welcom to the discription",
      imag: s,
    },
    {
      id: 1,
      title: "this is second",
      text: "Hello and welcom to the discription",
      imag: s,
    },
    {
      id: 0,
      title: "this is first",
      text: "Hello and welcom to the discription",
      imag: s,
    },
    {
      id: 1,
      title: "this is second",
      text: "Hello and welcom to the discription",
      imag: s,
    },
    {
      id: 0,
      title: "this is first",
      text: "Hello and welcom to the discription",
      imag: s,
    },
    {
      id: 2,
      title: "this is third",
      text: "Hello and welcom to the discription",
      imag: s,
    },
  ];

  // const formPage =()=> {

  //   if(window.location.pathname === "/FormInput"){
  //     return   <FormInput/>
  //   }
  // }

  const HomePage = () => {
    if (window.location.pathname === "/") {
      return (
        <div style={{ margin: "30px" }}>
          <div className="row">
            {data.length ? (
              data.map((item) => {
                return (
                  <Posters
                    key={item.id}
                    img={item.imag}
                    title={item.title}
                    text={item.text}
                  />
                );
              })
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="form" element={<FormInput />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
