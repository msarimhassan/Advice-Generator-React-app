import React from 'react';
import axios from 'axios';
import './styles/advice.css';
import Capture from './Capture.PNG';
import '..//node_modules/bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            advice: '',
        };
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://api.adviceslip.com/advice');
            const { slip } = data;
            const { advice } = slip;
            this.setState({ advice });
        } catch (error) {}
    }

    adviceGenerator = async () => {
        try {
            const { data } = await axios.get('https://api.adviceslip.com/advice');
            const { slip } = data;
            const { advice } = slip;
            this.setState({ advice });
        } catch (error) {}
    };

    render() {
        return (
            <div className='big'>
                <div class="header">
                    <h1>Advice Generator</h1>
                </div>

                <div className='container text-center box2'>
                    <h5 className='text-center'>{this.state.advice}</h5>
                </div>

                <div className='img-align'>
                   
                        <img src={Capture} alt='baba g' className='pic' />
                </div>
                <div className="button">
                        <button className="button-style" onClick={this.adviceGenerator}>
                            {' '}
                            Click me to get advice
                        </button>
                 </div> 
            </div>
        );
    }
}

export default App;
