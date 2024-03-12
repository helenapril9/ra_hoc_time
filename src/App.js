import './App.css';

import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function dateTimePretty(Component) {
    return class extends React.Component {
        render() {
            let { date } = this.props;
           
            const propsdate = {
                date: moment(date).startOf('hour').fromNow(),
            }
            
            return <Component {...this.props} {...propsdate} />
        }
    }
}

const WithDateTime = dateTimePretty(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.date}></iframe>
            <WithDateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <div key = {item.id}><Video url={item.url} date={item.date} /> </div>);
}

export default function App() {
    moment.locale('ru');
    const list = [

        {   id: 1,
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {   id: 2,
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            id: 3,
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            id: 4,
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            id: 5,
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            id: 6,
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },

        
    ];

    return (
        <VideoList list={list} />
    );
}