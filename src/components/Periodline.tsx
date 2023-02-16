import React from "react";
import {
  Line,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import * as Sentry from "@sentry/react";

function Periodline(props: any) {
  if (props.index == 1) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="고추탄저병" stroke="#009000" />
            <Line type="monotone" dataKey="고추흰가루병" stroke="#80FF00" />
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BBBBBB" />
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#CAA6FE" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#FFD400" />
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#50BCDF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 2) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="시설포도탄저병" stroke="#800080" />
            <Line type="monotone" dataKey="시설포도노균병" stroke="#BA55D3" />
            <Line type="monotone" dataKey="축과병" stroke="#8A2BE2" />
            <Line type="monotone" dataKey="일소피해" stroke="#FF6347" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 3) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="딸기잿빛곰팡이병" stroke="#FF0000" />
            <Line type="monotone" dataKey="딸기흰가루병" stroke="#FF0088" />
            <Line type="monotone" dataKey="냉해피해" stroke="#0033CC" />
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#CAA6FE" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#FFD400" />
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#50BCDF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 4) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="오이노균병" stroke="#409A40" />
            <Line type="monotone" dataKey="오이흰가루병" stroke="#00FF00" />
            <Line type="monotone" dataKey="냉해피해" stroke="#0033CC" />
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#CAA6FE" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#FFD400" />
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#50BCDF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 5) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="파프리카흰가루병" stroke="#FF5500" />
            <Line type="monotone" dataKey="파프리카잘록병" stroke="#FF9500" />
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BBBBBB" />
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#CAA6FE" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#FFD400" />
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#50BCDF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (props.index == 6) {
    return (
      <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
        <ResponsiveContainer>
          <LineChart data={props.perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="토마토잿빛곰팡이병"
              stroke="#FF6347"
            />
            <Line type="monotone" dataKey="토마토흰가루병" stroke="#FF9500" />
            <Line type="monotone" dataKey="열과" stroke="#8B0000" />
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BBBBBB" />
            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#CAA6FE" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#FFD400" />
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#50BCDF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return null;
  }
}

export default Sentry.withProfiler(Periodline);
