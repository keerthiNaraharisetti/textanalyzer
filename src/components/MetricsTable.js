import React from "react";
import PropTypes from 'prop-types';

const MetricsTable = ({ cols, rows, style }) => {
    return <table className={`border border-gray-200 text-sm  my-6 text-left rtl:text-right text-gray-500 ${style ? style : "w-full"}`}>
        <thead className="text-xs bg-white text-gray-700 ">
            <tr className='border-b'>
                {cols.map((col, index) => {
                    return <th key={index} scope="col" className="px-6 border-r py-3">
                        {col}
                    </th>
                })}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => {
                return <tr key={index} className="text-gray-700 bg-slate-50 border-b">
                    {row.map((data, index) => {
                        return <td key={index} className="px-6 py-3 border-r">{data}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
}

MetricsTable.propTypes = {
    cols: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.number),
          PropTypes.arrayOf(PropTypes.string)
        ])
      ).isRequired,
    style: PropTypes.string
}
export default MetricsTable;