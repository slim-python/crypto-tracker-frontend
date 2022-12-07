import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import dollorIcon from "../../assests/dollar-icon.svg";
import Image from "next/image";
import { CryptoList } from "./CryptoList";
import { getDigit } from "../utils/mathFormula";
import OptionIcon from "../../assests/3dots.svg";
const percentageSORT24H = (rowA, rowB) => {
  const a = rowA.price_change_percentage_24h_in_currency;
  const b = rowB.price_change_percentage_24h_in_currency;
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
};

const sortbyPrice = (rowA, rowB) => {
  const a = rowA.current_price;
  const b = rowB.current_price;
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }

  return 0;
};

const percentageSORT7D = (rowA, rowB) => {
  const a = rowA.price_change_percentage_7d_in_currency;
  const b = rowB.price_change_percentage_7d_in_currency;
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
};

const onRowClick = (state, rowInfo, column, instance) => {
  return {
    onClick: (e) => {
      console.log("A Td Element was clicked!");
      console.log("it produced this event:", e);
      console.log("It was in this column:", column);
      console.log("It was in this row:", rowInfo);
      console.log("It was in this table instance:", instance);
    },
  };
};

const columns = [
  {
    name: "#",
    selector: (row, idx) => <>{idx}</>,
    width: "40px",
    hide: "sm",
  },

  {
    name: "NAME",
    selector: (row) => (
      <>
        <div className="flex justify-start items-center space-x-2">
          <img src={row.image} alt="sad" width={20} height={20} />
          <div className="flex justify-center items-center space-x-1">
            <div className="font-semibold text-sm leading-[24px]">
              {row.id.charAt(0).toUpperCase() + row.id.slice(1)}
            </div>
            <div className="text-[#808A9D] text-sm font-normal leading-[24px]">
              {row.symbol.toUpperCase()}
            </div>
          </div>
        </div>
      </>
    ),
    width: "160px",
  },
  {
    name: "PRICE",
    selector: (row) => (
      <>
        <div className="flex">
          <Image src={dollorIcon} alt="image" border="0" /> &nbsp;
          <p className="font-medium text-sm leading-[22px]">
            {row.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          </p>
        </div>
      </>
    ),
    sortable: true,
    width: "110px",
    sortFunction: sortbyPrice,
  },
  {
    name: "24H",
    selector: (row) => (
      <>
        <div className="font-medium text-sm leading-[22px]">
          {row.price_change_percentage_24h_in_currency.toFixed(3)} %
        </div>
      </>
    ),
    hide: "sm",
    sortable: true,
    sortFunction: percentageSORT24H,
    width: "100px",
    conditionalCellStyles: [
      {
        when: (row) => row.price_change_percentage_24h_in_currency > 0,
        style: {
          color: "#16C784",
        },
      },
      {
        when: (row) => row.price_change_percentage_24h_in_currency < 0,
        style: {
          color: "#EA3943",
        },
      },
    ],
  },
  {
    name: "7D",
    selector: (row) => (
      <>
        <div className="font-medium text-sm leading-[22px]">
          {row.price_change_percentage_7d_in_currency.toFixed(3)} %
        </div>
      </>
    ),
    hide: "sm",
    sortable: true,
    sortFunction: percentageSORT7D,
    conditionalCellStyles: [
      {
        when: (row) => row.price_change_percentage_24h_in_currency > 0,
        style: {
          color: "#16C784",
        },
      },
      {
        when: (row) => row.price_change_percentage_24h_in_currency < 0,
        style: {
          color: "#EA3943",
        },
      },
    ],
    width: "100px",
  },
  {
    name: "MARKET CAP",
    selector: (row) => (
      <>
        <div className="flex">
          <Image src={dollorIcon} alt="image" border="0" /> &nbsp;
          <p className="font-medium text-sm leading-[22px]">
            {row.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          </p>
        </div>
      </>
    ),
    hide: "sm",
    width: "180px",
  },
  {
    name: "VOLUME (24H)",
    selector: (row) => (
      <>
        <div className="flex">
          <Image src={dollorIcon} alt="image" border="0" /> &nbsp;
          <p className="font-medium text-sm leading-[22px]">
            {row.total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          </p>
        </div>
      </>
    ),
    hide: "sm",
    width: "170px",
  },
  {
    name: "CIRCULATING SUPPLY",
    selector: (row) => (
      <>
        <div className="w-[160px] bg-[#EFF2F5] h-[4px] rounded-full">
          <div
            className="bg-[#a6a8ac] h-[4px]"
            style={{
              width: `${
                getDigit(row.circulating_supply, 1, true) * 10 +
                getDigit(row.circulating_supply, 2, true)
              }%`,
            }}
          ></div>
        </div>
      </>
    ),
    hide: "sm",
    width: "170px",
  },
  {
    name: "",
    selector: (row) => (
      <>
        <Image src={OptionIcon} alt="options" border="0" />
      </>
    ),
    hide: "sm",
  },
];

const TableComponent = () => {
  const [cryptotabledata, setCryptotabledata] = useState([]);
  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
    );
    const data = await response.json();
    setCryptotabledata(data);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <DataTable
        columns={columns}
        data={cryptotabledata}
        selectableRows
        selectableRowsHighlight
        pagination
        paginationPerPage={7}
        getTrProps={onRowClick}
      />
    </div>
  );
};

export default TableComponent;
