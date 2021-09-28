//npm install react-router-dom
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css';


function App() {
    return (
        <div className="App">
            <Navi/>
            <Container className="main">
                <Dashboard />
            </Container>



        </div>
    )
}