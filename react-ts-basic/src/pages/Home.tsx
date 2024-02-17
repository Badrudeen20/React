import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Select,SelectOption } from '../components/Select';
const options = [
      { label: "First", value: 1 },
      { label: "Second", value: 2 },
      { label: "Third", value: 3 },
      { label: "Fourth", value: 4 },
      { label: "Fifth", value: 5 },
    ]
const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [value1, setValue1] = useState<SelectOption[]>([options[0]])
    const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  
    return (
        <div>
             <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
            {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </div>
    );
};

export default HomePage;