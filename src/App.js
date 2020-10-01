import React from 'react';
import axios from 'axios';
import './advice.css';
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
            await axios
                .get('https://api.adviceslip.com/advice')
                .then(data => {
                    console.log(data.data.slip.advice);
                    this.setState({ advice: data.data.slip.advice });
                })
                .catch(err => console.log(err.data));
        } catch (error) {}
    }

    adviceGenerator = async () => {
        try {
            await axios
                .get('https://api.adviceslip.com/advice')
                .then(data => {
                    console.log(data.data.slip.advice);
                    this.setState({ advice: data.data.slip.advice });
                })
                .catch(err => console.log(err.data));
        } catch (error) {}
    };

    render() {
        return (
            <div className='big'>
                <div className='container-fluid box1 text-center'>
                    <h1>Advice Generator</h1>
                </div>

                <div className='container text-center box2'>
                    <h4 className='text-center'>{this.state.advice}</h4>
                </div>

                <img src={Capture} alt='baba g' className='pic' />
                <div className='move'>
                    <button className='btn btn-danger ' onClick={this.adviceGenerator}>
                        {' '}
                        Click me to get advice
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
