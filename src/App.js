import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './components/forms/FormSignup'
import HistoryQuiz from './components/pages/HistoryQuiz';
import MusicQuiz from './components/pages/MusicQuiz';
import SportsQuiz from './components/pages/SportsQuiz';
import ScienceQuiz from './components/pages/ScienceQuiz';
import Form from './components/forms/Form';
import Catagories from './components/pages/Catagories';
import './components/pages/Catagories.css'
import RegisteredForm from './components/forms/RegisteredForm';



function App() {
  return (

<>

<Router>
  <Switch/>
        <Route path='/' exact component={Form}/>
        <Route path='/history' component={HistoryQuiz}/>
        <Route path='/music' component={MusicQuiz}/>
        <Route path='/sport' component={SportsQuiz}/>
        <Route path='/science' component={ScienceQuiz}/>
        <Route path='/registered'component={RegisteredForm}/>
        <Route path='/catagories' component={Catagories}/>

  <Switch/>
</Router>
</>
  )
}

export default App;
