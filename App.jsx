import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Createpost from "./Components/Createpost";
import Postlist from "./Components/Postlist";
import { useState } from "react";
import PostListProvider from "./Store/post -list-store";

function App() {
  const [selecteditem, setselecteditem] = useState("Home");

  return (
    <PostListProvider>
    <div className="App-container">
      
      <Sidebar selecteditem = {selecteditem}
      setselecteditem= {setselecteditem}/>
      
      
      <div className="content">
      <Header />
        {selecteditem === "Home" ? ( <Postlist /> ) : ( <Createpost /> )}
        
        <Footer />
      </div>
    </div>

    
    </PostListProvider>
  );
}

export default App;
