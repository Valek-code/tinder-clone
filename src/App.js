import './App.css';
import Header from './Header'
import ColnCards from './ColnCards'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Router>                
                <Switch>
                    <Route path="/chats/:person">
                        <Header backButton="/chats" />
                        <ChatScreen />
                    </Route>
                    <Route path="/chats">
                        <Header backButton="/" />
                        <Chats />
                    </Route>

                    <Route path="/">
                        <Header />
                        <ColnCards />
                        <SwipeButtons />
                    </Route>
                </Switch>
            </Router>            

        </div>

         
         
  );
}

export default App;
