import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const DataTableComponent = () => {
  const data = [
    {
      id: 1,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Apple",
      status: "active",
    },
    {
      id: 2,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Microsoft",
      status: "inactive",
    },
    {
      id: 3,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Google",
      status: "active",
    },
    {
      id: 4,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Amazon",
      status: "active",
    },
    {
      id: 5,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Facebook",
      status: "inactive",
    },
    {
      id: 6,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Samsung",
      status: "active",
    },
    {
      id: 7,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Sony",
      status: "active",
    },
    {
      id: 8,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Intel",
      status: "inactive",
    },
    {
      id: 9,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Tesla",
      status: "active",
    },
    {
      id: 10,
      logo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Nike",
      status: "inactive",
    },
  ];

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Logo",
      selector: (row) => (
        <div className="flex justify-start space-x-2">
          <div className="avatar py-2">
            <div className="mask rounded-full h-12 w-12">
              <img src={row.logo} alt="Logo" />
            </div>
          </div>
        </div>
      ),
      sortable: true,
    },
    { name: "Brand Name", selector: (row) => row.name, sortable: true },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex justify-center space-x-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={row.status === "inactive"}
                readOnly
              />
            </label>
          </div>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2 justify-end">
          <Link to={""}>
            {/* Show Button */}
            <button className="action-icons-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_82706_14837"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#3575FC" />
                </mask>
                <g mask="url(#mask0_82706_14837)">
                  <path
                    d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z"
                    fill="#3575FC"
                  />
                </g>
              </svg>
            </button>
          </Link>
          {/* Edit Button */}
          <Link to={"/admin/brand/edit"}>
            <button className="action-icons-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.325 5.37L18.63 3.675C17.73 2.775 16.2675 2.775 15.3675 3.675L12.525 6.525L4.1325 14.91C3.3975 15.645 3 16.6125 3 17.6475V20.25C3 20.6625 3.3375 21 3.75 21H6.3525C7.3875 21 8.355 20.595 9.09 19.8675L17.4825 11.4825L20.325 8.6325C20.76 8.1975 21 7.62 21 7.005C21 6.39 20.76 5.8125 20.325 5.3775V5.37ZM8.025 18.8025C7.575 19.2525 6.9825 19.5 6.3525 19.5H4.5V17.6475C4.5 17.0175 4.7475 16.4175 5.1975 15.975L13.0575 8.1225L15.8925 10.9575L8.0325 18.8175L8.025 18.8025ZM19.2675 7.5675L16.9575 9.885L14.1225 7.05L16.4325 4.7325C16.7475 4.4175 17.2575 4.4175 17.5725 4.7325L19.2675 6.4275C19.4175 6.5775 19.5 6.78 19.5 6.9975C19.5 7.215 19.4175 7.41 19.2675 7.5675ZM19.5 19.5H12C11.5875 19.5 11.25 19.8375 11.25 20.25C11.25 20.6625 11.5875 21 12 21H19.5C19.9125 21 20.25 20.6625 20.25 20.25C20.25 19.8375 19.9125 19.5 19.5 19.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </Link>
          {/* Delete Button */}
          <Link to={""}>
            <button className="action-icons-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_82706_14843"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#FF7143" />
                </mask>
                <g mask="url(#mask0_82706_14843)">
                  <path
                    d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                    fill="#FF7143"
                  />
                </g>
              </svg>
            </button>
          </Link>
        </div>
      ),
      right: true,
      style: { textAlign: "right" },
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [rowsPerPaction, setRowsPerPaction] = useState(5);
  const [currentPaction, setCurrentPaction] = useState(1);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.status.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPaction - 1) * rowsPerPaction,
    currentPaction * rowsPerPaction
  );

  const handlePactionChange = (paction: number) => {
    setCurrentPaction(paction);
  };

  const handleRowsPerPactionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e?.target?.value;
    if (value) {
      setRowsPerPaction(Number(value));
      setCurrentPaction(1);
    }
  };

  return (
    <div className="py-2">
      <div className="bg-white rounded ">
        <div className="flex justify-between items-center mb-3 px-4">
          <div className="flex items-center">
            <label htmlFor="rowsPerPaction" className="mr-2">
              Show:
            </label>
            <select
              id="rowsPerPaction"
              className="select select-bordered w-full max-w-xs select-sm"
              value={rowsPerPaction}
              onChange={handleRowsPerPactionChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              className="input input-sm input-bordered w-full max-w-xs"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={paginatedData}
          pagination
          paginationServer
          paginationTotalRows={filteredData.length}
          onChangePaction={handlePactionChange}
          onChangeRowsPerPaction={handleRowsPerPactionChange}
          selectableRows
          highlightOnHover
          customStyles={{
            headCells: {
              style: {
                borderTop: "0.5px solid #ddd",
                color: "#252525",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "-0.18px",
              },
            },
            rows: {
              style: {
                borderRight: "0px solid #ddd",
                borderLeft: "0px solid #ddd",
                borderTop: "0px solid #ddd",
              },
            },
            cells: {
              style: {
                borderRight: "0px solid #ddd",
                borderLeft: "0px solid #ddd",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DataTableComponent;
