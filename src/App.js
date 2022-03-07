import logo from './logo.svg';
import './App.css';
import UserProfile from './FormValidation/UserProfie/UserProfile'
import DemoJSS from './JSS_StyledComponents/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponents/Themes/DemoTheme';


function App() {
  return (

    // ******************************* Demo về Theme
    <div>
      <DemoTheme />
    </div>
    
    // ******************************* Demo về JSS
    // <div>
    //   <DemoJSS />
    // </div>

    // ******************************** DemoProfile về Form Validation
    // <div> 
    //   <UserProfile />
    // </div>
  );
}

export default App;
