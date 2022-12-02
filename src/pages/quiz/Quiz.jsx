import React, { useEffect, useState } from 'react';

import './Quiz.css';

const LAUGH = 'HaHa!';


const JustState = () => {
  const someState = {
    first: 1,
    second: 2,
  };

  return (
    <div>
      <h1>{JSON.stringify(someState.first)}</h1>
      <h1>{JSON.stringify(someState.second)}</h1>
    </div>
  );
}

const StateLess = ({ first=3, second=4 }) => {
  return (
    <div>
      <h1>{first || LAUGH}</h1>
      <h1>{second || LAUGH}</h1>
    </div>
  );
}

const StateFull = ({ item }) => {
  const [data, setData] = useState({
    first: 5,
    second: 6,
  });

  useEffect(() => {
    if (item) {
      setData(item);
    }
  }, [item]);

  return (
    <div>
      <h1>{data.first || LAUGH}</h1>
      <h1>{data.second || LAUGH}</h1>
    </div>
  );
}

const StateFullLess = () => {
  const [item] = useState({
    first: 5,
    second: 6,
  });

  return (
    <div>
      <StateLess data={{ first: 3, second: 4 }} />
      <StateFull />
    </div>
  );
}

const StrIntepolation = () => {
  const [data, setData] = useState('789'.split(''));
  const [data2, setData2] = useState(LAUGH);
  const [data3] = useState(true);
  const [data4] = useState(false);
  const [data5] = useState(true);
  const [data6] = useState(true);
  const [data7] = useState(true);

  const [first] = useState(1);
  const [second] = useState(2);

  useEffect(() => {
     setData2(10);
  }, []);

  return (
    <div>
      <h1>{data[0] || LAUGH}</h1>
      <h1>{data[1] || LAUGH}</h1>
      <h1>{data[2] || LAUGH}</h1>
      <h1>{data2}</h1>
      <h1>11</h1>
      <h1>12</h1>
      <h1>13</h1>
      <h1>{data3 && 14}</h1>
      <h1>{data4 || 15}</h1>
      <h1>{data5 ? data6 ? 16 : LAUGH : LAUGH }</h1>
      <h1>{data6 ? data7 ? 17 : LAUGH : LAUGH }</h1>
    </div>
  );
}

const Propardos = ({item}) => {
  return (
    <div>
      <h1>{item.first}</h1>
      <h1>{item.second}</h1>
      <h1>{item.third}</h1>
    </div>
  );
}
const RenderFragment = () => {
  return (
    <>
      <h1>24</h1>
      <h1>25</h1>
      <h1>26</h1>
    </>
  );
} 

const Propardos2 = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

const CondiRenderer1 = ({ state }) => {

  if (state) {
    return (
      <div>
        <h1>41</h1>
        <h1>42</h1>
        <h1>43</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>47</h1>
      <h1>48</h1>
      <h1>49</h1>
    </div>
  );
}

const CondiRenderer2 = ({ state }) => {
  if (state) {
    return (
      <div>
        <h1>44</h1>
        <h1>45</h1>
        <h1>46</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>50</h1>
      <h1>51</h1>
      <h1>52</h1>
    </div>
  );
}

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => <h1 key={item}>{item}</h1>) }
    </div>
  );
}


export const Quiz = () => {
  const [item] = useState({
    first: 18,
    second: 19,
    third: 20,
  });
  const [items1] = useState([56, 57, 58, 59, 60, 61, 62, 63, 64, 65]);
  const [items2] = useState([75, 74, 73, 72, 71, 70, 69, 68, 67, 66].reverse());
  const [items3] = useState([76, 82, 78, 84, 79, 80, 83, 77, 81, 85].sort());

  // I am just a function


  const renderFragment2 = (value) => {
    return (
      <>
        <h1>{31 + value}</h1>
        <h1>{32 + value}</h1>
        <h1>{33 + value}</h1>
      </>
    );
  }

  useEffect(() => {
    const cb100 = () => {
      console.log(101);
    };
    return () => {};
  }, []);

  return (
    <div className='quiz'>
      <h1>Welcome to the react fundamental test</h1>
      <h5>Let's go!</h5>
      <div>
        <JustState />        
        <StateFullLess />
        <StrIntepolation />
        <Propardos item={item} />
        <Propardos2>
          <h1>21</h1>
          <h1>22</h1>
          <h1>23</h1>
        </Propardos2>
        <RenderFragment/>
        {
          false || (
            <>
              <h1>27</h1>
              <h1>28</h1>
              <h1>29</h1>
            </>
          )
        }
        <h1>30</h1>
        {renderFragment2(0)}
        {renderFragment2(3)}
        {renderFragment2(6)}
        <h1>40</h1>
        { true ? <CondiRenderer1 state={true} /> : <CondiRenderer2 state={true} />}
        { true ? <CondiRenderer2 state={true} /> : <CondiRenderer1 state={true} />}
        { true ? <CondiRenderer1 state={false} /> : <CondiRenderer2 state={true} />}
        { true ? <CondiRenderer2 state={false} /> : <CondiRenderer1 state={false} />}
        <h1>53</h1>
        <h1>54</h1>
        <h1>55</h1>
        <List items={items1} />
        <List items={items2} />
        <List items={items3} />
        <h1>86</h1>
        <h1>{LAUGH}</h1>
        <h1>Congratulation!!</h1>
      </div>
    </div>
  );
}
