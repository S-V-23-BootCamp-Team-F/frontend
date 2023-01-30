import React from "react";
import { Line, Legend, ResponsiveContainer, CartesianGrid, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function Periodline(props:any) {
if (props.index == 1) {
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="고추탄저병" stroke="#3E6A1D" opacity={1.0}/>
            <Line type="monotone" dataKey="고추흰가루병" stroke="#3E6A1D" opacity={0.4} />
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BC8F8F" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 2){
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="시설포도탄저병" stroke="#924A70" opacity={1.0}/>
            <Line type="monotone" dataKey="시설포도노균병" stroke="#924A70" opacity={0.7}/>
            <Line type="monotone" dataKey="축과병" stroke="#924A70" opacity={0.4}/>
            <Line type="monotone" dataKey="일소피해" stroke="#FF6347" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 3){
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="딸기잿빛곰팡이병" stroke="#ED1B24" opacity={1.0}/>
            <Line type="monotone" dataKey="딸기흰가루병" stroke="#ED1B24" opacity={0.4}/>
            <Line type="monotone" dataKey="냉해피해" stroke="#00BFFF" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 4){
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="오이노균병" stroke="#92C002" opacity={1.0}/>
            <Line type="monotone" dataKey="오이흰가루병" stroke="#92C002" opacity={0.4}/>
            <Line type="monotone" dataKey="냉해피해" stroke="#00BFFF" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 5){
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="파프리카흰가루병" stroke="#CE534A" opacity={1.0}/>
            <Line type="monotone" dataKey="파프리카잘록병" stroke="#CE534A" opacity={0.4}/>
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BC8F8F" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 6){
    return (
        <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="토마토잿빛곰팡이병" stroke="#F6795B" opacity={1.0}/>
            <Line type="monotone" dataKey="토마토흰가루병" stroke="#F6795B" opacity={0.4}/>
            <Line type="monotone" dataKey="열과" stroke="#8B0000" opacity={1.0}/>
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BC8F8F" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      null
    );
  }
}

export default Periodline;